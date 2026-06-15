#!/usr/bin/env node
/* ============================================================================
 * archetype_sim.js — 血腥旅馆「流派强度 / 克制关系」无头模拟器
 *
 * 目的：把 5 个流派做成纯策略玩家，跑大样本锦标赛，量化：
 *   ① 各流派强度梯队（4 人混桌平均胜率/名次）
 *   ② 两两克制矩阵（2 人头对头胜率）
 *   ③ 每个扩展模块（名流 / 嘉年华 / 道具）开启后，①②如何变化
 *
 * 经济建模忠于本作 script.js 的实际数值：
 *   - 牌即货币：行动弃「目标等级」张手牌
 *   - 特长返手：红=建造/蓝=拉拢/紫=埋葬/警察=刺杀，用对口牌付费则免费返手
 *   - 油水：贵族 4/6/9/18F，农民 4F(免费拉)，其余旅客约 1F
 *   - 工资 1F/手牌(酒厂-1)、警察查夜 10F/未埋尸、洗钱(现金换支票,40F上限)
 *   - 关键别馆：折扣(车间/会客厅/酒窖/熊笼)、即时现金(贵族系)、收入(客房服务/花园)、
 *     终局(温室/公园系)、多目标(肉铺/商铺/啤酒厂/地下墓室)
 *
 * 诚实声明：这是「忠于结构的抽象模型」，非逐像素复刻 DOM 游戏；
 *           结论反映相对趋势与克制方向，不是绝对数值。
 * 用法：node ml/archetype_sim.js [gamesPerCell]
 * ==========================================================================*/
'use strict';

// ---------- 可复现随机 ----------
let _seed = 123456789;
function srand(s) { _seed = (s >>> 0) || 1; }
function rnd() { _seed = (_seed * 1664525 + 1013904223) >>> 0; return _seed / 4294967296; }
function ri(n) { return Math.floor(rnd() * n); }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = ri(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// ---------- 别馆定义（仅建模与流派相关的字段）----------
// disc: {build|bribe|kill|bury} 折扣  · cash: 建造即时现金 · income: 每轮退房收入
// service: 客房服务 · endCheck: 终局每支票加成 · endColor: 终局离店堆同色×4
// multi: 一回合多目标(估值奖励) · returns: 行动返手(估值奖励) · slots: 自带埋尸坑 · roomPlus: +1间房
const A = {
  // 红 artisan（建造特长）
  vegGarden:  { color: 'red',    chainColor: 'red',  build: 0 },         // 菜园：建造时每红别馆+1F（链）
  workshop:   { color: 'red',    disc: 'build' },                         // 车间：建造-1
  distillery: { color: 'red',    wage: 1 },                               // 酒厂：工资-1
  gardens:    { color: 'red',    income: 2 },                             // 花园：每轮+2F
  park:       { color: 'red',    cash: 4, endColor: 'red' },              // 公园：建+4，终局红×4
  butchers:   { color: 'red',    multi: 'kill' },                         // 肉铺：一回合多杀
  // 蓝 merchant（拉拢特长）
  kiosk:      { color: 'blue',   chainColor: 'blue' },                    // 报摊：建造时每蓝别馆+1F
  parlour:    { color: 'blue',   disc: 'bribe' },                         // 会客厅：拉拢-1
  roomSvc:    { color: 'blue',   service: true },                         // 客房服务
  brewery:    { color: 'blue',   multi: 'bribeP' },                       // 啤酒厂：一次4农民
  store:      { color: 'blue',   multi: 'bribe' },                        // 商铺：一回合多拉
  grocery:    { color: 'blue',   cash: 4, endColor: 'blue' },             // 杂货铺：建+4，终局蓝×4
  // 紫 religious（埋葬特长）
  altar:      { color: 'purple', chainColor: 'purple' },                  // 祭坛：建造时每紫别馆+1F
  cellar:     { color: 'purple', disc: 'bury' },                          // 酒窖：埋葬-1
  chapel:     { color: 'purple', returns: 'bury' },                       // 小教堂：埋葬返手
  room:       { color: 'purple', roomPlus: true },                        // 厢房：+1间房
  crypt:      { color: 'purple', multi: 'bury' },                         // 地下墓室：一回合多埋
  bishopric:  { color: 'purple', cash: 4, endColor: 'purple' },           // 主教区：建+4，终局紫×4
  // 绿 noble（无特长，纯现金/油水）
  chandelier: { color: 'green',  cash: 4 },                               // 豪华吊灯+4
  kingBed:    { color: 'green',  cash: 6 },                               // 特大号床+6
  diningRoom: { color: 'green',  cash: 9 },                               // 豪华餐厅+9
  pavilion:   { color: 'green',  cash: 18 },                              // 凉亭+18
  greenhouse: { color: 'green',  endCheck: 3 },                           // 温室：终局每支票+3
  stables:    { color: 'green',  cash: 4, endColor: 'green' },            // 马厩：建+4，终局绿×4
  // 名流（替换贵族；引擎/互动被动，无大额即时现金）
  silkFarm:   { color: 'gold',   svcLike: true },                         // 丝绸农场：建造时自家住客×3F（近似收入）
  wineCask:   { color: 'gold',   svcLike: true },                         // 酒桶：中立住客×3F
  laboratory: { color: 'gold',   labLeech: 3 },                           // 实验室：对手有未埋尸+3F/轮
  safe:       { color: 'gold',   bank: true },                            // 保险库：截对手溢出
  study:      { color: 'gold',   study: true },                           // 书房：对手兑票你跟兑
  pharmacy:   { color: 'gold',   pharm: true },                           // 药房：对手手牌≥3 +2F
  // 嘉年华
  trailer:    { color: 'orange', slots: 1, trailer: true },               // 拖车：自带1坑+迎客
  bearCage:   { color: 'orange', disc: 'kill' },                          // 熊笼：刺杀-1
  nook:       { color: 'orange', returns: 'bribe' },                      // 密室：拉拢返手
  booth:      { color: 'orange', boothBonus: true },                      // 嘉年华摊位：嘉年华入住+3F
};

// ---------- 造牌库 ----------
// 每张牌：{f:派系, rank:住宿等级, brank:建/埋等级, loot:油水, annex:别馆key}
function nobleLoot(rank) { return [4, 6, 9, 18][rank]; }
function makeBaseDeck() {
  const d = [];
  const push = (f, rank, loot, annex, n, brank) => { for (let i = 0; i < n; i++) d.push({ f, rank, brank: brank === undefined ? rank : brank, loot, annex }); };
  // artisan 红：rank 4/4/3/3
  push('red', 0, 1, 'vegGarden', 4); push('red', 1, 1, 'workshop', 4);
  push('red', 2, 1, 'distillery', 3); push('red', 3, 4, 'park', 1); push('red', 3, 2, 'gardens', 1); push('red', 3, 1, 'butchers', 1);
  // merchant 蓝
  push('blue', 0, 1, 'kiosk', 4); push('blue', 1, 1, 'parlour', 4);
  push('blue', 2, 1, 'roomSvc', 3); push('blue', 3, 4, 'grocery', 1); push('blue', 3, 1, 'brewery', 1); push('blue', 3, 1, 'store', 1);
  // religious 紫
  push('purple', 0, 1, 'altar', 4); push('purple', 1, 1, 'cellar', 4);
  push('purple', 2, 1, 'chapel', 3); push('purple', 3, 4, 'bishopric', 1); push('purple', 3, 1, 'room', 1); push('purple', 3, 1, 'crypt', 1);
  // noble 绿：油水=别馆即时现金
  push('green', 0, 4, 'chandelier', 4); push('green', 1, 6, 'kingBed', 4);
  push('green', 2, 9, 'diningRoom', 3); push('green', 3, 18, 'pavilion', 1); push('green', 3, 4, 'stables', 1); push('green', 3, 1, 'greenhouse', 1);
  // police 灰（刺杀特长；无别馆；查夜威胁）
  push('police', 0, 1, null, 4); push('police', 1, 1, null, 4); push('police', 2, 1, null, 3); push('police', 3, 1, null, 3);
  // ★真实油水（经 PNP 逐张读图核实）：基础版口袋油水是纯等级函数，全派系通用——
  //   0级=8F 1级=12F 2级=18F 3级=26F。贵族的 4/6/9/18 是「别馆建造奖励」(annex.cash)，与油水无关。
  const LADDER = { 0: 8, 1: 12, 2: 18, 3: 26 };
  d.forEach(c => { c.loot = LADDER[c.rank]; });
  return d;
}
function makeNotables() { // 14 = 替换贵族
  const d = []; const push = (rank, loot, annex, n, brank) => { for (let i = 0; i < n; i++) d.push({ f: 'noble', rank, brank: brank === undefined ? rank : brank, loot, annex }); };
  push(2, 14, 'wineCask', 4, 0); push(1, 10, 'silkFarm', 4, 1); push(1, 16, 'laboratory', 3, 2);
  push(1, 20, 'pharmacy', 1, 3); push(3, 20, 'study', 1, 1); push(1, 20, 'safe', 1, 3);
  return d;
}
function makeCarnies() { // 14 嘉年华：拖车/折扣/特殊
  const d = []; const push = (rank, brank, loot, annex, n) => { for (let i = 0; i < n; i++) d.push({ f: 'carnie', rank, brank, loot, annex }); };
  push(0, 2, 14, 'trailer', 4);   // 4 张拖车
  push(2, 2, 14, 'bearCage', 1); push(1, 1, 10, 'nook', 1); push(0, 1, 14, 'booth', 1);
  push(2, 1, 16, 'bearCage', 1); push(1, 2, 10, 'nook', 1); push(2, 1, 24, 'trailer', 1); // 凑数：更多折扣/坑
  push(1, 1, 8, 'bearCage', 1); push(3, 2, 14, 'nook', 1); push(2, 1, 14, 'booth', 1); push(0, 2, 14, 'trailer', 1);
  return d.slice(0, 14);
}

// ---------- 流派权重 ----------
// 动作偏好乘数 + 目标/建造偏好。所有玩家共用同一行动引擎，仅权重不同。
const ARCH = {
  butcher: { name: '屠夫', kill: 1.4, bribe: 1.05, build: 1.15, bury: 1.6, claim: 0.5, hireP: 1.0, prefBuild: ['cellar', 'chapel', 'crypt', 'bearCage', 'trailer'], killNobleBias: 1.25, policeFuel: 1.2 },
  engine:  { name: '引擎', kill: 0.4, bribe: 0.9, build: 1.7, bury: 0.6, claim: 0.7, hireP: 0.8, prefBuild: ['workshop', 'vegGarden', 'kiosk', 'altar', 'distillery', 'park', 'grocery', 'bishopric'], killNobleBias: 0.4 },
  noble:   { name: '贵族', kill: 0.7, bribe: 1.1, build: 1.3, bury: 1.2, claim: 0.5, hireP: 0.3, prefBuild: ['pavilion', 'diningRoom', 'kingBed', 'greenhouse', 'chandelier', 'stables'], killNobleBias: 1.4, bribeNobleBias: 1.6 },
  swarm:   { name: '人海', kill: 0.8, bribe: 1.5, build: 0.8, bury: 0.7, claim: 0.5, hireP: 1.5, prefBuild: ['brewery', 'store', 'parlour', 'nook'], killNobleBias: 0.7, policeFuel: 1.0 },
  rent:    { name: '收租', kill: 0.45, bribe: 0.7, build: 1.0, bury: 0.5, claim: 1.2, hireP: 0.5, prefBuild: ['roomSvc', 'gardens', 'room', 'silkFarm', 'wineCask'], killNobleBias: 0.5, serviceBias: 1.5 },
};
const ARCH_KEYS = Object.keys(ARCH);

// ---------- 玩家状态 ----------
function newPlayer(arch, idx) {
  return {
    idx, arch, W: ARCH[arch],
    cash: 5, checks: 1,
    hand: [],                 // 帮工牌
    annexes: [],              // {key, buried:[], slotsUsed, cap}
    corpses: [],              // 未埋尸体
    rooms: 1,                 // 拥有客房数
    objects: [],              // 道具(简化：{effect})
    buriedCount: 0,
  };
}
function annexCap(a) { const def = A[a.key]; return (def.trailer ? 1 : 2); } // 简化：普通别馆2坑、拖车1坑
function freeSlots(p) { return p.annexes.reduce((s, a) => s + Math.max(0, annexCap(a) - a.buried.length), 0); }
function discount(p, type) { return p.annexes.filter(a => A[a.key].disc === type).length; }
function hasAnnexFlag(p, flag) { return p.annexes.some(a => A[a.key][flag]); }
function countAnnexColor(p, color) { return p.annexes.filter(a => A[a.key].color === color).length; }

// ---------- 支付帮工（特长返手）----------
function affinityFor(card, action) {
  // 红→build, 蓝→bribe, 紫→bury, police→kill ; 名流/嘉年华无固定返手(除别馆特效, 简化忽略)
  const map = { red: 'build', blue: 'bribe', purple: 'bury', police: 'kill' };
  return map[card.f] === action;
}
function payHelpers(p, action, cost, st, retAnnexFlag) {
  if (cost <= 0) return;
  const pool = p.hand.slice();
  // 选牌：优先非匹配的杂牌弃掉(留着匹配牌返手/留贵族当油水…简化:先弃非匹配低价值)
  pool.sort((a, b) => valueOfHelper(a) - valueOfHelper(b));
  const chosen = pool.slice(0, cost);
  for (const c of chosen) { const i = p.hand.indexOf(c); if (i >= 0) p.hand.splice(i, 1); }
  for (const c of chosen) {
    const back = affinityFor(c, action) || (retAnnexFlag && retsFor(retAnnexFlag) === action);
    if (back) p.hand.push(c);           // 特长返手 / 小教堂·密室返手
    else if (c.f === 'peasant') st.bistro.push(c);
    else st.exit.push(c);
  }
}
function retsFor(flag) { return flag === 'bury' ? 'bury' : flag === 'bribe' ? 'bribe' : null; }
function valueOfHelper(c) {
  // 帮工"留着不舍得弃"的价值：贵族(油水/建材)高、能建强别馆高
  if (c.f === 'green' || c.f === 'noble') return 5 + c.loot * 0.2;
  if (c.annex && ['cellar', 'workshop', 'parlour', 'bearCage', 'pavilion', 'diningRoom'].includes(c.annex)) return 4;
  if (c.f === 'peasant') return 0.3;
  return 1;
}

// ---------- 行动成本/可行 ----------
function actionCost(p, action, card) {
  let raw = (action === 'build' || action === 'bury') ? card.brank : card.rank;
  let d = 0;
  if (action === 'bribe') d = discount(p, 'bribe');
  if (action === 'kill') d = discount(p, 'kill');
  if (action === 'build') d = discount(p, 'build');
  if (action === 'bury') d = discount(p, 'bury');
  return Math.max(0, raw - d);
}
function canPay(p, cost, excludeCard) {
  const n = p.hand.length - (excludeCard ? 1 : 0);
  return n >= cost;
}

// ---------- 一名玩家的一次行动 ----------
function takeAction(p, st) {
  const W = p.W, ph = st.phase; // 'early'|'mid'|'late'
  const occupied = st.rooms.filter(r => r.occ);      // 旅馆住客(含中立/各家房)
  const plans = [];

  // A) 刺杀
  if (occupied.length) {
    const tgt = occupied.slice().sort((a, b) => killVal(b.occ, W) - killVal(a.occ, W))[0];
    const cost = actionCost(p, 'kill', tgt.occ);
    if (canPay(p, cost)) {
      // 没坑还杀＝下次查夜每具 10F 罚款；积压越多越危险（这是"屠夫死亡螺旋"的真实成本）
      const slotShort = Math.max(0, (p.corpses.length + 1) - freeSlots(p));
      const overflow = slotShort * 9;
      const police = occupied.some(r => r.occ.f === 'police') ? 5 : 0;
      let s = killVal(tgt.occ, W) * W.kill - cost * 1.6 - overflow - police;
      plans.push({ t: 'kill', tgt, cost, s });
    }
  }
  // B) 拉拢（含警察——拉来当"刺杀返手燃料"，真实游戏人类可拉拢警察）
  const bcand = occupied.slice();
  if (bcand.length) {
    const tgt = bcand.slice().sort((a, b) => bribeVal(b.occ, p, W) - bribeVal(a.occ, p, W))[0];
    const cost = actionCost(p, 'bribe', tgt.occ);
    if (canPay(p, cost)) {
      let s = bribeVal(tgt.occ, p, W) * W.bribe - cost * 1.3 - wagePress(p);
      plans.push({ t: 'bribe', tgt, cost, s });
    }
  }
  // B2) 雇农民（免费2个）
  if (st.bistro.length && p.hand.length < 6 && ph !== 'late') {
    plans.push({ t: 'hireP', s: (5 + buildFuelNeed(p) * 2) * W.hireP - wagePress(p) });
  }
  // C) 埋尸
  if (p.corpses.length) {
    const corpse = p.corpses.slice().sort((a, b) => b.loot - a.loot)[0];
    const cost = actionCost(p, 'bury', corpse);
    const slot = bestBurySlot(p);
    if (slot && canPay(p, cost)) {
      const urgency = (occupied.some(r => r.occ.f === 'police') ? 12 : 0) + p.corpses.length * 2;
      let s = corpse.loot * 0.7 * W.bury + urgency - cost * 1.3;
      plans.push({ t: 'bury', corpse, cost, s });
    }
  }
  // D) 建别馆
  const buildables = p.hand.filter(c => c.annex && c.f !== 'police' && c.f !== 'peasant');
  if (buildables.length) {
    const card = buildables.slice().sort((a, b) => annexValue(b, p, st) - annexValue(a, p, st))[0];
    const cost = actionCost(p, 'build', card);
    if (canPay(p, cost, card)) {
      const needSlots = p.corpses.length > freeSlots(p) ? 5 : 0;
      let s = (annexValue(card, p, st) + needSlots) * W.build * (ph === 'early' ? 1.15 : 1) - cost * 1.2;
      plans.push({ t: 'build', card, cost, s });
    }
  }
  // E) 占中立房
  if (st.neutralRooms > 0 && p.rooms < 4) plans.push({ t: 'claim', s: 5 * W.claim * (ph === 'early' ? 1.4 : 0.6) });
  // F) 客房服务（有未服务的自家房）
  if (p.rooms > p.svc && hasBuiltService(p)) plans.push({ t: 'svc', s: 4 * (W.serviceBias || 0.6) });
  // G) 道具：免费杀/免费埋（若有）
  if (p.objects.includes('freeKill') && occupied.length) plans.push({ t: 'objKill', tgt: occupied.slice().sort((a, b) => b.occ.loot - a.occ.loot)[0], s: 20 });
  if (p.objects.includes('freeBury') && p.corpses.length) plans.push({ t: 'objBury', s: 18 });
  // H) 洗钱（现金接近上限）
  if (p.cash >= 36) plans.push({ t: 'launder', s: 100 });
  else if (p.cash >= 30) plans.push({ t: 'launder', s: 8 });
  // 兜底
  plans.push({ t: 'pass', s: 1 });

  plans.sort((a, b) => b.s - a.s);
  // 软抽样一点噪声，避免完全确定
  const top = plans.slice(0, 3);
  let pick = top[0];
  if (top.length > 1 && top[0].s < 50 && rnd() < 0.25) pick = top[1];
  execute(p, pick, st);
}

function killVal(card, W) {
  let v = card.loot;
  if ((card.f === 'green' || card.f === 'noble') && W.killNobleBias) v *= W.killNobleBias;
  return v;
}
function bribeVal(card, p, W) {
  let v = 1.5 + card.rank * 0.5 + (card.annex ? annexValue(card, p, null) * 0.25 : 0);
  if ((card.f === 'green' || card.f === 'noble') && W.bribeNobleBias) v *= W.bribeNobleBias;
  if (card.f === 'police' && W.policeFuel) v += 2; // 警察=杀手燃料
  if (card.f === 'peasant') v -= 1;
  return Math.max(0.3, v);
}
function wagePress(p) { return Math.max(0, p.hand.length - 4) * 1.2; }
function buildFuelNeed(p) { return p.hand.filter(c => c.annex && c.f !== 'police').length > 0 ? 1 : 0; }
function hasBuiltService(p) { return p.annexes.some(a => A[a.key].service); }

function bestBurySlot(p) {
  let best = null;
  for (const a of p.annexes) { if (a.buried.length < annexCap(a)) { best = a; break; } }
  return best;
}
function annexValue(card, p, st) {
  const def = A[card.annex]; if (!def) return 0;
  const W = p.W; const pref = W.prefBuild.includes(card.annex) ? 3 : 0;
  const R = st ? st.roundsLeft : 5;
  let v = 2 + pref;                                   // 基础+流派偏好
  if (def.disc) v += 1.2 * (R * 0.5);                 // 折扣×剩余轮
  if (def.cash) v += def.cash * 0.9;                  // 即时现金
  if (def.income) v += def.income * R * 0.85;         // 每轮收入
  if (def.service || def.svcLike) v += 1.3 * R * 0.7; // 客房服务类
  if (def.endCheck) v += (p.checks + R / 3) * def.endCheck * 0.7;
  if (def.endColor) v += (R * 0.8) * 4 * 0.25;
  if (def.chainColor) v += countAnnexColor(p, def.chainColor) + 1;
  if (def.multi) v += 2;
  if (def.returns) v += 1.5 * R * 0.5;
  if (def.slots || def.trailer) v += 2 + Math.min(2, p.corpses.length);
  if (def.roomPlus) v += 1.5 * R * 0.5;
  if (def.bank) v += 3; if (def.labLeech) v += def.labLeech * R * 0.4;
  return v;
}

let TRACE = false, lastPlayers = null;
function execute(p, plan, st) {
  if (TRACE) { p._acts = p._acts || {}; p._acts[plan.t] = (p._acts[plan.t] || 0) + 1; }
  switch (plan.t) {
    case 'kill': {
      payHelpers(p, 'kill', plan.cost, st);
      const r = plan.tgt; const victim = r.occ; r.occ = null;
      p.corpses.push(victim);
      break;
    }
    case 'bribe': {
      payHelpers(p, 'bribe', plan.cost, st, hasAnnexFlag(p, 'returns') && p.annexes.some(a => A[a.key].returns === 'bribe') ? 'bribe' : null);
      const r = plan.tgt; p.hand.push(r.occ); r.occ = null;
      break;
    }
    case 'hireP': { const n = Math.min(2, st.bistro.length); for (let i = 0; i < n; i++) p.hand.push(st.bistro.pop()); break; }
    case 'bury': {
      const useChapel = p.annexes.some(a => A[a.key].returns === 'bury');
      payHelpers(p, 'bury', plan.cost, st, useChapel ? 'bury' : null);
      const ci = p.corpses.indexOf(plan.corpse); if (ci >= 0) p.corpses.splice(ci, 1);
      const slot = bestBurySlot(p); if (slot) slot.buried.push(plan.corpse);
      p.buriedCount++;
      addCash(p, plan.corpse.loot);
      break;
    }
    case 'build': {
      payHelpers(p, 'build', plan.cost, st);
      const ci = p.hand.indexOf(plan.card); if (ci >= 0) p.hand.splice(ci, 1);
      const a = { key: plan.card.annex, buried: [] }; p.annexes.push(a);
      const def = A[plan.card.annex];
      if (def.cash) addCash(p, def.cash);
      if (def.chainColor) addCash(p, countAnnexColor(p, def.chainColor)); // 含本馆
      if (def.roomPlus && st.neutralRooms > 0) { st.neutralRooms--; p.rooms++; }
      if (def.svcLike) addCash(p, p.rooms * 3 * 0.5);
      break;
    }
    case 'claim': { st.neutralRooms--; p.rooms++; break; }
    case 'svc': { p.svc = (p.svc || 0) + 1; break; }
    case 'objKill': { const i = p.objects.indexOf('freeKill'); p.objects.splice(i, 1); const r = plan.tgt; if (r.occ) { p.corpses.push(r.occ); r.occ = null; } break; }
    case 'objBury': { const i = p.objects.indexOf('freeBury'); p.objects.splice(i, 1); const c = p.corpses.shift(); if (c) { addCash(p, c.loot); p.buriedCount++; } break; }
    case 'launder': { if (p.cash >= 10) { p.cash -= 10; p.checks++; } break; }
    case 'pass': default: break;
  }
}
function addCash(p, amt, st, allPlayers) {
  const room = 40 - p.cash; const gain = Math.max(0, Math.min(amt, room)); p.cash += gain;
  // 银行家[保险库]：把溢出给拥有保险库的对手（简化：给第一个有保险库的别人）
  const overflow = amt - gain;
  if (overflow > 0 && allPlayers) {
    for (const o of allPlayers) if (o !== p && hasAnnexFlag(o, 'bank')) { o.cash = Math.min(40, o.cash + overflow); break; }
  }
}

// ---------- 一局 ----------
function playGame(archs, opts) {
  const N = archs.length;
  // 牌库
  let deck = makeBaseDeck();
  if (opts.notables) deck = deck.filter(c => c.f !== 'green').concat(makeNotables());
  if (opts.carnies) deck = deck.concat(makeCarnies());
  deck.forEach(c => { if (c.brank === undefined) c.brank = c.rank; });
  // 平衡实验：提高普通旅客（非贵族/非农民/非名流）油水，让"纯杀"变可行（近似原版桌游的口袋钱）
  if (opts.richLoot) deck.forEach(c => { if (['red', 'blue', 'purple', 'police'].includes(c.f)) c.loot = 1 + c.rank * 2; });
  // 复制成独立对象
  deck = deck.map(c => ({ ...c }));
  shuffle(deck);
  // 移除表（近似：按人数移除，保留主要张数）
  const removeBase = { 2: 35, 3: 28, 4: 22 }[N] || 28;
  deck = deck.slice(0, deck.length - Math.min(removeBase, deck.length - 8));

  const players = archs.map((a, i) => newPlayer(a, i));
  // 起始 2 农民/人
  players.forEach(p => { for (let k = 0; k < 2; k++) p.hand.push({ f: 'peasant', rank: 0, brank: 0, loot: 4, annex: null }); });
  if (opts.objects) players.forEach(p => { p.objects.push('freeKill', 'freeBury', 'extra'); }); // 简化：每人发3个一次性

  const openRooms = { 2: 5, 3: 6, 4: 8 }[N] || 6;
  const st = {
    rooms: Array.from({ length: openRooms }, () => ({ occ: null })),
    bistro: [], exit: [], deck, neutralRooms: (N === 4 ? 4 : 3),
    phase: 'early', roundsLeft: 9, season: 1,
  };

  let round = 0, host = 0;
  const maxRounds = 30;
  while (round < maxRounds) {
    round++;
    st.phase = st.season >= 2 ? 'late' : (round <= 2 ? 'early' : 'mid');
    st.roundsLeft = Math.max(1, Math.ceil(st.deck.length / openRooms) + (st.season === 1 ? 4 : 0));

    // 迎客：填满空房
    let emptied = st.rooms.filter(r => !r.occ).length;
    let drewAny = false;
    for (const r of st.rooms) {
      if (r.occ) continue;
      if (st.deck.length === 0) {
        if (st.season === 1 && st.exit.length) { st.deck = shuffle(st.exit.splice(0)); st.season = 2; }
        else break;
      }
      if (st.deck.length) { r.occ = st.deck.pop(); drewAny = true; }
    }
    if (!drewAny && st.rooms.every(r => !r.occ)) break; // 牌耗尽

    // 夜晚：每人2行动，从host轮转
    for (let act = 0; act < 2; act++) {
      for (let k = 0; k < N; k++) {
        const p = players[(host + k) % N];
        takeAction(p, st);
      }
    }

    // 清晨：警察查夜
    const policePresent = st.rooms.some(r => r.occ && r.occ.f === 'police');
    if (policePresent) {
      for (const p of players) {
        if (p.corpses.length) {
          const pen = p.corpses.length * 10;
          const tot = p.cash + p.checks * 10;
          if (tot >= pen) deduct(p, pen); else { p.cash = 0; p.checks = 0; }
          st.exit.push(...p.corpses); p.corpses = [];
        }
      }
    }
    // 退房收租 + 客房服务 + 花园 + 实验室漏雷
    for (const p of players) {
      if (hasAnnexFlag(p, 'income')) addCash(p, p.annexes.filter(a => A[a.key].income).reduce((s, a) => s + A[a.key].income, 0), st, players);
      const labs = p.annexes.filter(a => A[a.key].labLeech).length;
      if (labs && players.some(o => o !== p && o.corpses.length)) addCash(p, labs * 3, st, players);
    }
    // 自家房租：近似每人按 min(rooms, 住客分配) 收 1F —— 简化为 rooms*0.4F 期望
    for (const p of players) addCash(p, Math.round(p.rooms * 0.5), st, players);
    // 房客离开
    for (const r of st.rooms) { if (r.occ) { st.exit.push(r.occ); r.occ = null; } }
    // 客房服务收入（近似：每个 service 别馆 + svc 标记，期望住客等级~1.3）
    for (const p of players) { const sv = p.annexes.filter(a => A[a.key].service).length + (p.svc || 0); if (sv) addCash(p, Math.round(sv * 1.3), st, players); }

    // 工资
    for (const p of players) {
      const dist = p.annexes.filter(a => A[a.key].wage).length;
      let wage = Math.max(0, p.hand.length - dist);
      if (p.cash >= wage) p.cash -= wage;
      else { // 付不起：解雇低价值帮工
        let unpaid = wage - p.cash; p.cash = 0;
        p.hand.sort((a, b) => valueOfHelper(a) - valueOfHelper(b));
        const fired = p.hand.splice(0, unpaid);
        fired.forEach(c => { if (c.f === 'peasant') st.bistro.push(c); else st.exit.push(c); });
      }
    }

    host = (host + 1) % N;
    // 终局：第二季度牌耗尽
    if (st.season === 2 && st.deck.length === 0 && st.rooms.every(r => !r.occ)) break;
  }

  // 计分
  function total(p) {
    let t = p.cash + p.checks * 10;
    for (const a of p.annexes) {
      const def = A[a.key];
      if (def.endCheck) t += p.checks * def.endCheck;
      if (def.endColor) t += Math.round(2 * 4 * 0.5); // 近似离店堆同色加成
    }
    return t;
  }
  const scores = players.map((p, i) => ({ arch: p.arch, total: total(p), buried: p.buriedCount }));
  scores.sort((a, b) => b.total - a.total || b.buried - a.buried);
  if (TRACE) lastPlayers = players;
  return scores;
}
function deduct(p, amt) { while (amt >= 10 && p.checks > 0) { p.checks--; amt -= 10; } p.cash = Math.max(0, p.cash - amt); }

// ---------- 锦标赛 ----------
function strengthTest(opts, games) {
  // 4 人桌，随机分配 4 个不同流派(从5里选4)，统计每流派的名次分布
  const stat = {}; ARCH_KEYS.forEach(a => stat[a] = { games: 0, wins: 0, rankSum: 0 });
  for (let g = 0; g < games; g++) {
    const pool = shuffle(ARCH_KEYS.slice()).slice(0, 4);
    const sc = playGame(pool, opts);
    sc.forEach((s, rank) => { stat[s.arch].games++; stat[s.arch].rankSum += (rank + 1); if (rank === 0) stat[s.arch].wins++; });
  }
  return ARCH_KEYS.map(a => ({ arch: a, name: ARCH[a].name, winrate: stat[a].wins / stat[a].games, avgRank: stat[a].rankSum / stat[a].games }))
    .sort((x, y) => y.winrate - x.winrate);
}
function counterMatrix(opts, games) {
  // 2 人头对头：M[A][B] = A 对 B 的胜率
  const M = {};
  for (const a of ARCH_KEYS) { M[a] = {}; for (const b of ARCH_KEYS) { if (a === b) { M[a][b] = null; continue; }
    let aw = 0; for (let g = 0; g < games; g++) { const sc = playGame([a, b], opts); if (sc[0].arch === a) aw++; }
    M[a][b] = aw / games;
  } }
  return M;
}

// ---------- 输出 ----------
function pct(x) { return x == null ? ' — ' : (x * 100).toFixed(0).padStart(3) + '%'; }
function reportScenario(label, opts, gStrength, gCounter) {
  console.log('\n' + '='.repeat(64));
  console.log('场景：' + label);
  console.log('='.repeat(64));
  const S = strengthTest(opts, gStrength);
  console.log('① 强度梯队（4人混桌，' + gStrength + '局）  胜率 / 平均名次(越小越强)');
  S.forEach((r, i) => console.log(`   ${i + 1}. ${r.name}流  胜率 ${pct(r.winrate)}   平均名次 ${r.avgRank.toFixed(2)}`));
  const M = counterMatrix(opts, gCounter);
  console.log('\n② 克制矩阵（2人头对头，每格 ' + gCounter + '局；行 对 列 的胜率）');
  console.log('        ' + ARCH_KEYS.map(b => ARCH[b].name.padStart(5)).join(' '));
  for (const a of ARCH_KEYS) {
    console.log('   ' + ARCH[a].name.padStart(4) + '  ' + ARCH_KEYS.map(b => pct(M[a][b])).join(' '));
  }
  // 克制小结：每个流派最克谁/最被谁克
  console.log('   克制小结：');
  for (const a of ARCH_KEYS) {
    let best = null, worst = null;
    for (const b of ARCH_KEYS) { if (a === b) continue; const v = M[a][b]; if (best == null || v > M[a][best]) best = b; if (worst == null || v < M[a][worst]) worst = b; }
    console.log(`     ${ARCH[a].name}流  最克→${ARCH[best].name}(${pct(M[a][best])})   最怵→${ARCH[worst].name}(${pct(M[a][worst])})`);
  }
  return S;
}

// ---------- 追踪模式 ----------
if (process.argv.includes('trace')) {
  TRACE = true;
  srand(42);
  for (const opp of [['butcher', 'noble'], ['butcher', 'engine']]) {
    // 5 局抽样动作均值
    const sumActs = {}; let wins = [0, 0];
    for (let g = 0; g < 5; g++) {
      const sc = playGame(opp, {});
      wins[opp.indexOf(sc[0].arch)]++;
      for (const pr of lastPlayers) {
        sumActs[pr.arch] = sumActs[pr.arch] || {};
        for (const k in (pr._acts || {})) sumActs[pr.arch][k] = (sumActs[pr.arch][k] || 0) + pr._acts[k];
        pr._acts = {};
      }
    }
    console.log(`\n[${ARCH[opp[0]].name} vs ${ARCH[opp[1]].name}]  5局胜场 ${wins[0]}:${wins[1]}`);
    console.log(`  最后一局终局：`);
    for (const pr of lastPlayers) {
      console.log(`   ${ARCH[pr.arch].name}: 现金${pr.cash} 支票${pr.checks} 别馆[${pr.annexes.map(a => a.key)}] 埋${pr.buriedCount} 余尸${pr.corpses.length} 手牌${pr.hand.length} 分${pr.cash + pr.checks * 10}`);
    }
    console.log(`  5局动作累计：`);
    for (const a of opp) console.log(`   ${ARCH[a].name}: ${JSON.stringify(sumActs[a])}`);
  }
  process.exit(0);
}

// ---------- 主程序 ----------
const gPer = parseInt(process.argv[2] || '600', 10);
const gCounter = Math.max(200, Math.round(gPer * 0.5));
srand(20260611);
console.log('血腥旅馆 · 流派强度与克制 模拟器');
console.log(`样本：强度 ${gPer} 局/场景，克制 ${gCounter} 局/格子。（抽象模型，反映相对趋势）`);

const scenarios = [
  ['基础版（无扩展）', {}],
  ['+ 名流模块（替换贵族）', { notables: true }],
  ['+ 嘉年华员工', { carnies: true }],
  ['+ 姑妈道具', { objects: true }],
  ['全扩展（名流+嘉年华+道具）', { notables: true, carnies: true, objects: true }],
];
const summary = [];
for (const [label, opts] of scenarios) {
  const S = reportScenario(label, opts, gPer, gCounter);
  summary.push([label, S]);
}
console.log('\n' + '#'.repeat(64));
console.log('总览：各场景强度排序');
console.log('#'.repeat(64));
for (const [label, S] of summary) {
  console.log(`${label.padEnd(24)} ${S.map(r => ARCH[r.arch].name + pct(r.winrate)).join('  ')}`);
}
