#!/usr/bin/env node
/* ============================================================================
 * opt_ml_uncle.js — 用「真实游戏 AI」自对弈 + 进化策略(ES) 优化「学习叔叔」权重
 *
 * 用 Node vm 把 script.js 加载进沙箱并追加一段 bootstrap：
 *   - 把所有 UI/演出/日志函数就地改成 no-op（不碰 DOM 细节）
 *   - 把 runActionStep/welcomeGuestsSequentially/startObjectDraft/triggerGameOver
 *     就地改成无头版本（人类座位自动 pass、人类主理人自动填房、终局算分入 __STANDINGS）
 *   - 暴露 __G 读写 const/let 状态（AI_PROFILES、aiUncles、配置等）
 * 然后驱动真实 aiStrategicAction 自对弈，ES 进化 AI_PROFILES.ml，烘焙回 script.js。
 * 用法：node ml/opt_ml_uncle.js [generations] [gamesPerEval]   (加 selftest 自检)
 * ==========================================================================*/
'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const ROOT = path.dirname(__dirname);
const SCRIPT = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');

const BOOTSTRAP = `
;(function(){
  // 暴露 const/let 状态
  window.__G = {
    get AI_PROFILES(){ return AI_PROFILES; },
    get aiUncles(){ return aiUncles; },
    get player(){ return player; },
    get rooms(){ return rooms; },
    get currentPhase(){ return currentPhase; },
    setConfig: function(pc, diffs, exp, len){ playerCount = pc; aiDiffs = diffs; expansionOptions = exp; gameLength = len; },
  };
  // UI / 演出 / 日志 全部 no-op
  renderUI=function(){}; playEffect=function(){}; flyCard=function(){}; showBanner=function(){};
  refreshIcons=function(){}; spawnParticles=function(){}; logMessage=function(){}; aiThink=function(){};
  uncleSay=function(){}; uncleReact=function(){}; updateHeaderStatus=function(){}; playSound=function(){};
  glowEl=function(){}; sirenFlash=function(){}; shakeScreen=function(){}; confettiRain=function(){};
  showCardTip=function(){}; hideCardTip=function(){}; attachCardTip=function(){}; renderObjectCards=function(){};
  // 人类座位自动 pass；AI 座位走真实决策
  runActionStep=function(){
    if(actionNumber>2){ setTimeout(runPhaseMorning,0); return; }
    currentPhase='action'+actionNumber;
    var actor=currentActor();
    if(actor==='player'){ setTimeout(function(){ resetPendingAction(); advanceTurn(); },0); }
    else { var u=aiUncles[actor]; setTimeout(function(){ aiStrategicAction(u); },0); }
  };
  // 人类当主理人时自动填客房（不影响策略，仅推进流程）
  welcomeGuestsSequentially=function(){
    var guard=0;
    while(guard++<40){ var empty=rooms.filter(function(r){return isOpenRoom(r)&&!r.occupant;}); if(!empty.length)break; var c=drawTravelerCard(); if(!c)break; empty[0].occupant=c; triggerRoomServiceImmediate(empty[0]); }
    setTimeout(finishWelcomePhase,0);
  };
  startObjectDraft=function(){ setTimeout(function(){ runPhaseWelcome(); },0); };
  // Reuse the real scorer: room/trailer flushing, penalties, capped cash and annex bonuses.
  var realGameOver = triggerGameOver;
  triggerGameOver=function(){
    if (window.__STANDINGS) return;
    realGameOver();
    window.__STANDINGS=[{seat:'player',total:player.cash+player.checks*10,tiebreak:annexBuriedCount(player)}]
      .concat(aiUncles.map(function(u){return {seat:u.idx,total:u.cash+u.checks*10,tiebreak:annexBuriedCount(u),ann:(u.annexes||[]).length-1};}));
  };
})();
`;

function makeNode() {
  return {
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    style: {}, dataset: {}, children: [], innerHTML: '', innerText: '', textContent: '',
    appendChild() {}, insertAdjacentHTML() {}, removeChild() {}, remove() {}, append() {}, prepend() {},
    querySelector() { return null; }, querySelectorAll() { return []; },
    addEventListener() {}, removeEventListener() {}, setAttribute() {}, getAttribute() { return null; },
    click() {}, focus() {}, cloneNode() { return makeNode(); },
    getBoundingClientRect() { return { left: 0, top: 0, width: 0, height: 0, right: 0, bottom: 0 }; },
  };
}
function seededRandom(seed) {
  let state = seed >>> 0;
  return () => { state += 0x6D2B79F5; let t = state;
    t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}

function loadGame(random = Math.random) {
  const q = [];
  const cache = {};
  const doc = {
    getElementById(id) { return cache[id] || (cache[id] = makeNode()); },
    querySelector() { return makeNode(); }, querySelectorAll() { return []; },
    createElement() { return makeNode(); }, createElementNS() { return makeNode(); },
    body: makeNode(), documentElement: makeNode(), head: makeNode(), addEventListener() {}, removeEventListener() {},
  };
  const S = {
    console: { log() {}, warn() {}, error() {}, info() {} },
    Math: Object.assign(Object.create(Math), { random }), Date, JSON, Array, Object, String, Number, Boolean, parseInt, parseFloat, isNaN, isFinite,
    Set, Map, Symbol, Promise, RegExp, Error,
    document: doc,
    setTimeout(fn) { q.push(fn); return 0; }, clearTimeout() {}, setInterval() { return 0; }, clearInterval() {},
    requestAnimationFrame(fn) { q.push(fn); return 0; }, cancelAnimationFrame() {},
    AudioContext: function () { return { createOscillator: () => ({ connect() {}, start() {}, stop() {}, frequency: { setValueAtTime() {} } }), createGain: () => ({ connect() {}, gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} } }), destination: {}, currentTime: 0, close() {} }; },
    localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
    lucide: { createIcons() {} }, navigator: { userAgent: 'node' }, location: { href: '', search: '', reload() {} },
    alert() {}, confirm() { return true; },
  };
  S.window = S; S.globalThis = S; S.webkitAudioContext = S.AudioContext;
  vm.createContext(S);
  vm.runInContext(SCRIPT + BOOTSTRAP, S, { filename: 'script.js' });
  return { S, q };
}

function runGame(diffs, playerCount, mlWeights, random = Math.random) {
  const { S, q } = loadGame(random);
  if (mlWeights) S.__G.AI_PROFILES.ml = JSON.parse(JSON.stringify(mlWeights));
  S.__G.setConfig(playerCount, diffs.slice(),
    { carnies: false, carnieEvents: false, notables: false, fanNotables: false, objects: false, sound: false }, 'short');
  S.startGame();
  let it = 0;
  while (q.length && !S.__STANDINGS && it++ < 600000) { const fn = q.shift(); fn(); }
  if (!S.__STANDINGS) throw new Error("Headless game did not finish");
  const mlSeat = diffs.indexOf('ml');
  const st = S.__STANDINGS;
  const mlRow = st.find(s => s.seat === mlSeat);
  return { standings: st, mlTotal: mlRow ? mlRow.total : 0, mlBuilds: mlRow ? (mlRow.ann || 0) : 0 };
}

function pickOpponents(opponents, playerCount, random = Math.random) {
  if (![2, 3, 4].includes(playerCount)) throw new Error('playerCount must be 2, 3 or 4');
  const pool = opponents.slice();
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  const diffs = ['ml'].concat(pool.slice(0, playerCount - 2));
  while (diffs.length < playerCount - 1) diffs.push('mastermind');
  for (let i = diffs.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [diffs[i], diffs[j]] = [diffs[j], diffs[i]]; }
  return diffs;
}

function evaluate(mlWeights, games, opponents, playerCount, seed = 20261112) {
  if (!Number.isInteger(games) || games <= 0) throw new Error('games must be a positive integer');
  let wins = 0, sum = 0, builds = 0, shareSum = 0;
  for (let g = 0; g < games; g++) {
    // Reset per-game RNG so different profiles use the same seeds and opponent schedule.
    const random = seededRandom(seed + g);
    const diffs = pickOpponents(opponents, playerCount, random);
    const r = runGame(diffs, playerCount, mlWeights, random);
    sum += r.mlTotal; builds += r.mlBuilds;
    const ais = r.standings.filter(s => s.seat !== 'player');
    const totAll = ais.reduce((a, b) => a + Math.max(0, b.total), 0) || 1;
    shareSum += Math.max(0, r.mlTotal) / totAll;
    const best = ais.reduce((a, b) => (b.total > a.total || (b.total === a.total && b.tiebreak > a.tiebreak)) ? b : a);
    const tied = ais.filter(a => a.total === best.total && a.tiebreak === best.tiebreak);
    if (tied.some(a => a.seat === diffs.indexOf('ml'))) wins += 1 / tied.length;
  }
  return { share: shareSum / games, winrate: wins / games, avgTotal: sum / games, avgBuilds: builds / games, plays: games, errs: 0 };
}

module.exports = { loadGame, runGame, evaluate, pickOpponents, seededRandom };

// ---------- 主程序 ----------
if (require.main === module) {
const GEN = parseInt(process.argv[2] || '12', 10);
const GAMES = parseInt(process.argv[3] || '120', 10);
const BASE_ML = JSON.parse(JSON.stringify(loadGame().S.__G.AI_PROFILES.ml));
console.log('当前 ml 权重：', JSON.stringify(BASE_ML));

if (process.argv.includes('selftest')) {
  console.log('自检：跑 3 局 4 人(ml+mastermind+murderous) ……');
  for (let i = 0; i < 3; i++) {
    const r = runGame(['ml', 'mastermind', 'murderous'], 4, BASE_ML);
    console.log(r ? ('  局' + i + '：' + r.standings.map(s => s.seat + ':' + s.total).join(' ') + ' | ml身价' + r.mlTotal + ' 建馆' + r.mlBuilds) : ('  局' + i + ' 失败(null)'));
  }
  process.exit(0);
}

// 无偏对比模式：从 ml/candidates.json 读多个候选，4人/3人各跑大样本
if (process.argv.includes('confirm')) {
  const cands = JSON.parse(fs.readFileSync(path.join(__dirname, 'candidates.json'), 'utf8'));
  const N = GAMES;
  console.log('无偏对比（每配置 ' + N + ' 局）  4人每局抽2个对手（AI份额基线33%）；3人每局抽1个对手（AI份额基线50%）\n');
  for (const name of Object.keys(cands)) {
    const w = cands[name];
    const e4 = evaluate(w, N, ['mastermind', 'murderous', 'scheming'], 4);
    const e3 = evaluate(w, N, ['mastermind', 'murderous'], 3);
    console.log(name.padEnd(13) +
      '| 4人 份额' + (e4.share * 100).toFixed(1) + '% 夺魁' + (e4.winrate * 100).toFixed(1) + '% 身价' + e4.avgTotal.toFixed(1) + ' 建馆' + e4.avgBuilds.toFixed(2) +
      '  || 3人 份额' + (e3.share * 100).toFixed(1) + '% 夺魁' + (e3.winrate * 100).toFixed(1) + '% 身价' + e3.avgTotal.toFixed(1) + ' 建馆' + e3.avgBuilds.toFixed(2));
  }
  process.exit(0);
}

const opponents = ['mastermind', 'murderous', 'scheming'];
console.log('\n基线评估当前 ml（4人，每局从 mastermind/murderous/scheming 抽2个对手，' + GAMES + '局）……');
const base = evaluate(BASE_ML, GAMES, opponents, 4);
console.log('  基线 ml：财富份额 ' + (base.share * 100).toFixed(1) + '%  夺魁率 ' + (base.winrate * 100).toFixed(1) + '%  平均身价 ' + base.avgTotal.toFixed(1) + '  平均建馆 ' + base.avgBuilds.toFixed(2) + '  (有效' + base.plays + '/错误' + base.errs + ')');

const SCALAR = ['kill', 'bribe', 'room', 'service', 'deny', 'synergy'];
function mutate(w, sigma) {
  const n = JSON.parse(JSON.stringify(w));
  SCALAR.forEach(k => { if (n[k] !== undefined) n[k] = Math.max(0.05, +(n[k] + (Math.random() * 2 - 1) * sigma).toFixed(3)); });
  if (n.launderAt !== undefined) n.launderAt = Math.max(12, Math.min(40, Math.round(n.launderAt + (Math.random() * 2 - 1) * sigma * 8)));
  if (n.phase) for (const ph of ['early', 'mid', 'late']) for (const k of ['kill', 'room', 'service'])
    if (n.phase[ph] && n.phase[ph][k] !== undefined) n.phase[ph][k] = Math.max(0.05, +(n.phase[ph][k] + (Math.random() * 2 - 1) * sigma).toFixed(3));
  return n;
}

let best = { w: BASE_ML, fit: base.share, winrate: base.winrate, avgTotal: base.avgTotal, avgBuilds: base.avgBuilds };
const MU = 3, LAMBDA = 6;
let pop = [{ w: BASE_ML, fit: base.share, winrate: base.winrate, avgTotal: base.avgTotal }];
for (let i = 1; i < MU; i++) pop.push({ w: mutate(BASE_ML, 0.3), fit: 0, winrate: 0, avgTotal: 0 });
for (let gen = 0; gen < GEN; gen++) {
  const sigma = 0.28 * Math.pow(0.9, gen);
  const all = pop.slice();
  for (let i = 0; i < LAMBDA; i++) all.push({ w: mutate(pop[i % pop.length].w, sigma), fit: 0, winrate: 0, avgTotal: 0 });
  for (const c of all) { const e = evaluate(c.w, GAMES, opponents, 4, 20261112 + (gen + 1) * GAMES); c.fit = e.share; c.winrate = e.winrate; c.avgTotal = e.avgTotal; c.avgBuilds = e.avgBuilds; }
  all.sort((a, b) => b.fit - a.fit || b.winrate - a.winrate);
  pop = all.slice(0, MU);
  // 深拷贝快照，避免后续世代重评估时改写 best 引用
  if (pop[0].fit > best.fit) best = { w: JSON.parse(JSON.stringify(pop[0].w)), fit: pop[0].fit, winrate: pop[0].winrate, avgTotal: pop[0].avgTotal, avgBuilds: pop[0].avgBuilds };
  console.log('第' + (gen + 1) + '代 σ=' + sigma.toFixed(2) + '  最优份额 ' + (pop[0].fit * 100).toFixed(1) + '%  夺魁率 ' + (pop[0].winrate * 100).toFixed(1) + '%  身价 ' + pop[0].avgTotal.toFixed(1) + '  建馆 ' + (pop[0].avgBuilds || 0).toFixed(2));
}
// 防选择偏差：对最终候选在更大样本上做无偏确认评估
console.log('\n确认评估（' + (GAMES * 3) + '局无偏）……');
const confBest = evaluate(best.w, GAMES * 3, opponents, 4, 30261112);
const confBase = evaluate(BASE_ML, GAMES * 3, opponents, 4, 30261112);
console.log('  基线 ml：份额 ' + (confBase.share * 100).toFixed(1) + '%  夺魁率 ' + (confBase.winrate * 100).toFixed(1) + '%  身价 ' + confBase.avgTotal.toFixed(1) + '  建馆 ' + confBase.avgBuilds.toFixed(2));
console.log('  进化 ml：份额 ' + (confBest.share * 100).toFixed(1) + '%  夺魁率 ' + (confBest.winrate * 100).toFixed(1) + '%  身价 ' + confBest.avgTotal.toFixed(1) + '  建馆 ' + confBest.avgBuilds.toFixed(2));
console.log('\n=== 最优 ml 权重 ===');
console.log(JSON.stringify(best.w));
fs.writeFileSync(path.join(__dirname, 'best_ml_weights.json'), JSON.stringify({ base: BASE_ML, baseConf: confBase, best: best.w, bestConf: confBest }, null, 1));
console.log('已写入 ml/best_ml_weights.json');

}
