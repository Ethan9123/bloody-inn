#!/usr/bin/env node
/*
 * optimize_ai.js — 用「自我对弈 + 进化策略(ES)」优化血腥旅馆 AI 的决策权重。
 *
 * 思路：游戏内 AI 的每步决策是一组「加权计划评分」(刺杀/拉拢/扩张/客房服务/洗钱…)。
 * 这里用一个忠于游戏经济的无头模拟器，让「候选权重」与「基线权重」自我对弈上千局，
 * 以胜率为适应度，用 (mu+lambda)-ES 进化出更强的权重，最后把最优权重烘焙回游戏。
 *
 * 这是一种货真价实的机器学习（进化/元启发式优化），且零外部依赖、可离线跑、
 * 产物只是更好的数字权重——保持游戏依旧是纯静态网页。
 *
 * 用法：node ml/optimize_ai.js [seed] [generations] [gamesPerEval]
 */
'use strict';

// ---------- 可复现随机数 (mulberry32) ----------
function makeRng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- 牌库：等级->油水(与游戏一致 8/12/18/26，农民4) ----------
const RANK_LOOT = { 0: 8, 1: 12, 2: 18, 3: 26 };
function buildDeck(rng, size) {
  // 等级分布近似真实牌库：0级最多，3级最少；夹杂少量农民(等级0、油水4)
  const ranks = [];
  for (let i = 0; i < 20; i++) ranks.push(0);
  for (let i = 0; i < 20; i++) ranks.push(1);
  for (let i = 0; i < 15; i++) ranks.push(2);
  for (let i = 0; i < 15; i++) ranks.push(3);
  // 洗牌并截到 size
  for (let i = ranks.length - 1; i > 0; i--) { const j = (rng() * (i + 1)) | 0; [ranks[i], ranks[j]] = [ranks[j], ranks[i]]; }
  const deck = [];
  for (let i = 0; i < size; i++) {
    const r = ranks[i % ranks.length];
    const peasant = (r === 0 && rng() < 0.25);
    deck.push({ rank: r, loot: peasant ? 4 : RANK_LOOT[r], peasant });
  }
  return deck;
}

// ---------- 座位与棋盘 ----------
function newSeat() { return { cash: 5, checks: 1, killPile: [], bribePile: 0, rooms: [], }; }
// 5 间开放房：座位0拥有 0,1；座位1拥有 2,3；房4中立。service[i]=owner|null
function newBoard() {
  return {
    owner: [0, 0, 1, 1, 'n'],
    service: [null, null, null, null, null],
    guest: [null, null, null, null, null],
  };
}

const PHASES = ['early', 'mid', 'late'];
function phaseOf(round, season) { return season >= 2 ? 'late' : (round <= 2 ? 'early' : 'mid'); }

// ---------- 决策策略（与游戏 aiStrategicAction 同构，参数即被优化的权重）----------
function decide(s, oppIdx, seatIdx, board, W, phase) {
  const pk = W['p_' + phase + '_kill'], pr = W['p_' + phase + '_room'], ps = W['p_' + phase + '_service'];
  const occ = [];
  for (let i = 0; i < board.guest.length; i++) if (board.guest[i]) occ.push(i);
  const plans = [];
  if (occ.length) {
    // 刺杀：油水最高；在对手房额外加权(断财路)
    let kBest = occ[0];
    for (const i of occ) if (board.guest[i].loot > board.guest[kBest].loot) kBest = i;
    const kDeny = (board.owner[kBest] === oppIdx) ? 6 : 0;
    plans.push({ t: 'kill', i: kBest, score: board.guest[kBest].loot * W.kill * pk + kDeny * W.deny });
    // 拉拢：等级最高、非农民；对手房加权
    let bBest = occ[0];
    const bv = i => board.guest[i].rank - (board.guest[i].peasant ? 3 : 0);
    for (const i of occ) if (bv(i) > bv(bBest)) bBest = i;
    const bDeny = (board.owner[bBest] === oppIdx) ? 4 : 0;
    plans.push({ t: 'bribe', i: bBest, score: board.guest[bBest].rank * 2 * W.bribe + bDeny * W.deny + (board.guest[bBest].peasant ? -4 : 0) });
  }
  // 扩张：抢中立房
  const nIdx = board.owner.indexOf('n');
  const myRooms = board.owner.reduce((a, o) => a + (o === seatIdx ? 1 : 0), 0);
  if (nIdx !== -1 && myRooms < 4) plans.push({ t: 'room', i: nIdx, score: 6 * W.room * pr });
  // 客房服务：自家未布置服务的房
  let svcRoom = -1;
  for (let i = 0; i < board.owner.length; i++) if (board.owner[i] === seatIdx && !board.service[i]) { svcRoom = i; break; }
  if (svcRoom !== -1) plans.push({ t: 'service', i: svcRoom, score: 5 * W.service * ps });
  plans.push({ t: 'check', score: 4.5 });
  if (s.cash >= 36) plans.push({ t: 'launder', score: 100 });
  else if (s.cash >= W.launderAt) plans.push({ t: 'launder', score: 9 });
  plans.sort((a, b) => b.score - a.score);
  return plans[0];
}

function applyAction(plan, s, seatIdx, board) {
  if (plan.t === 'kill') { const g = board.guest[plan.i]; board.guest[plan.i] = null; s.cash = Math.min(40, s.cash + g.loot); s.killPile.push(g.rank); }
  else if (plan.t === 'bribe') { board.guest[plan.i] = null; s.bribePile++; }
  else if (plan.t === 'room') { board.owner[plan.i] = seatIdx; }
  else if (plan.t === 'service') { board.service[plan.i] = seatIdx; }
  else if (plan.t === 'launder') { s.cash = Math.max(0, s.cash - 10); s.checks++; }
  else { s.checks++; }
}

// ---------- 迎客：主理人把抽到的客人塞入空房(低塞对手房/高留自己房)，服务房即时收益 ----------
function welcome(board, deck, seats, host, rng) {
  const empties = [];
  for (let i = 0; i < board.guest.length; i++) if (board.owner[i] !== 'closed' && !board.guest[i]) empties.push(i);
  const drawn = [];
  for (let k = 0; k < empties.length && deck.length; k++) drawn.push(deck.pop());
  drawn.sort((a, b) => a.rank - b.rank);
  const oppOf = host === 0 ? 1 : 0;
  const oppRooms = empties.filter(i => board.owner[i] === oppOf);
  const myRooms = empties.filter(i => board.owner[i] === host);
  const neutral = empties.filter(i => board.owner[i] === 'n');
  const order = [...oppRooms, ...neutral, ...myRooms]; // 低->高 依次：对手、中立、自己
  for (let k = 0; k < order.length && k < drawn.length; k++) {
    const roomI = order[k], g = drawn[k];
    board.guest[roomI] = g;
    const svcOwner = board.service[roomI];
    if (svcOwner === 0 || svcOwner === 1) seats[svcOwner].cash = Math.min(40, seats[svcOwner].cash + g.rank);
  }
}

function morning(board, seats, exit) {
  for (let i = 0; i < board.guest.length; i++) {
    if (board.guest[i]) {
      const o = board.owner[i];
      if (o === 0 || o === 1) seats[o].cash = Math.min(40, seats[o].cash + 1); // 收租
      exit.push(board.guest[i]); board.guest[i] = null;
    }
  }
}

// 一局自我对弈：seat0 用 W0，seat1 用 W1。返回 [score0, score1]
function playGame(W0, W1, rng, deckSize) {
  const seats = [newSeat(), newSeat()];
  const Ws = [W0, W1];
  const board = newBoard();
  let deck = buildDeck(rng, deckSize);
  let exit = [];
  let season = 1, round = 0, host = (rng() < 0.5 ? 0 : 1);
  let guard = 0;
  while (guard++ < 200) {
    round++;
    // 季节牌库耗尽处理
    if (deck.length === 0) { if (season === 1 && exit.length) { season = 2; deck = exit.splice(0); for (let i = deck.length - 1; i > 0; i--) { const j = (rng() * (i + 1)) | 0;[deck[i], deck[j]] = [deck[j], deck[i]]; } } else break; }
    welcome(board, deck, seats, host, rng);
    const phase = phaseOf(round, season);
    // 夜晚：每人 2 个行动，自主理人起轮流
    for (let act = 0; act < 2; act++) {
      for (let step = 0; step < 2; step++) {
        const seatIdx = step === 0 ? host : (host === 0 ? 1 : 0);
        const plan = decide(seats[seatIdx], seatIdx === 0 ? 1 : 0, seatIdx, board, Ws[seatIdx], phase);
        applyAction(plan, seats[seatIdx], seatIdx, board);
      }
    }
    morning(board, seats, exit);
    host = host === 0 ? 1 : 0;
    if (season === 2 && deck.length === 0) break;
  }
  return seats.map(s => s.cash + s.checks * 10); // 纯财富目标
}

// ---------- 权重模型 ----------
const BASE_W = {
  kill: 1.15, bribe: 1.0, room: 1.0, service: 1.0, deny: 1.0, launderAt: 32,
  p_early_kill: 0.75, p_early_room: 1.8, p_early_service: 1.7,
  p_mid_kill: 1.0, p_mid_room: 1.0, p_mid_service: 1.0,
  p_late_kill: 1.35, p_late_room: 0.25, p_late_service: 0.4,
};
const KEYS = Object.keys(BASE_W);
const BOUNDS = { launderAt: [20, 40] }; // 其余权重默认 [0, 3]
function clampW(W) {
  const out = {};
  for (const k of KEYS) {
    const [lo, hi] = BOUNDS[k] || [0, 3];
    out[k] = Math.max(lo, Math.min(hi, W[k]));
  }
  return out;
}
function mutate(W, sigma, rng) {
  const out = {};
  for (const k of KEYS) {
    const scale = (BOUNDS[k] ? (BOUNDS[k][1] - BOUNDS[k][0]) : 3);
    // 高斯近似
    const g = (rng() + rng() + rng() + rng() - 2) * 0.5;
    out[k] = W[k] + g * sigma * scale * 0.5;
  }
  return clampW(out);
}

// 适应度：候选 W 对基线 BASE_W 自我对弈的胜率(平局算0.5)
function fitness(W, rng, games, deckSize) {
  let wins = 0;
  for (let g = 0; g < games; g++) {
    // 交替先后手以消除主理人偏置
    if (g % 2 === 0) { const [a, b] = playGame(W, BASE_W, rng, deckSize); wins += a > b ? 1 : (a === b ? 0.5 : 0); }
    else { const [a, b] = playGame(BASE_W, W, rng, deckSize); wins += b > a ? 1 : (a === b ? 0.5 : 0); }
  }
  return wins / games;
}

// ---------- (mu+lambda)-ES ----------
function optimize(seed, generations, gamesPerEval) {
  const rng = makeRng(seed);
  const MU = 6, LAMBDA = 18, deckSize = 35;
  let parents = [{ W: { ...BASE_W }, f: fitness(BASE_W, rng, gamesPerEval, deckSize) }];
  for (let i = 1; i < MU; i++) { const W = mutate(BASE_W, 0.5, rng); parents.push({ W, f: fitness(W, rng, gamesPerEval, deckSize) }); }
  let sigma = 0.35;
  for (let gen = 0; gen < generations; gen++) {
    const kids = [];
    for (let i = 0; i < LAMBDA; i++) {
      const p = parents[(rng() * parents.length) | 0];
      const W = mutate(p.W, sigma, rng);
      kids.push({ W, f: fitness(W, rng, gamesPerEval, deckSize) });
    }
    const pool = parents.concat(kids).sort((a, b) => b.f - a.f);
    parents = pool.slice(0, MU);
    sigma *= 0.92; // 退火
    if (gen % 5 === 0 || gen === generations - 1) console.error(`  seed ${seed} gen ${gen}: best winrate ${(parents[0].f * 100).toFixed(1)}% sigma ${sigma.toFixed(3)}`);
  }
  return parents[0];
}

// ---------- main ----------
const seed = parseInt(process.argv[2] || '1', 10);
const generations = parseInt(process.argv[3] || '40', 10);
const gamesPerEval = parseInt(process.argv[4] || '400', 10);
console.error(`优化开始: seed=${seed} gen=${generations} games/eval=${gamesPerEval}`);
const best = optimize(seed, generations, gamesPerEval);
// 独立验证：用一条全新的随机流大样本复测，排除对训练 rng 的过拟合
const valRng = makeRng(seed * 7919 + 12345);
const valWin = fitness(best.W, valRng, 4000, 35);
console.error(`完成: 训练胜率 ${(best.f * 100).toFixed(1)}% | 独立验证胜率 ${(valWin * 100).toFixed(1)}% (4000局)`);
// 输出 JSON（供烘焙回游戏）
console.log(JSON.stringify({ seed, trainWinrate: best.f, valWinrate: valWin, weights: best.W }));
