'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const { loadGame, runGame, evaluate, pickOpponents, seededRandom } = require('./opt_ml_uncle');
function fixture() {
  const game = loadGame(seededRandom(1));
  vm.runInContext(`player={cash:10,checks:0,corpses:[],annexes:[]};
    aiUncles=[{idx:0,name:'test',cash:10,checks:0,corpses:[],annexes:[]}];
    rooms=[]; exitStack=[]; removedStack=[];`, game.S);
  return game;
}
function exec(S, code) { return vm.runInContext(code, S); }
test('all opponents are sampled, exactly one ML seat, all seat counts', () => {
  for (const pc of [2,3,4]) {
    const seen = new Set();
    for (let seed=0;seed<100;seed++) {
      const diffs=pickOpponents(['mastermind','murderous','scheming'],pc,seededRandom(seed));
      assert.equal(diffs.length, pc-1); assert.equal(diffs.filter(d=>d==='ml').length,1);
      diffs.filter(d=>d!=='ml').forEach(d=>seen.add(d));
    }
    assert.equal(seen.size,pc===2?0:3);
  }
});
test('human-host filler pays room-service immediately', () => {
  const {S}=fixture();
  exec(S, `rooms=[{id:1,key:0,serviceOwner:0,hasService:true,occupant:null}];
    var next={rank:3,color:'artisan-red'}; drawTravelerCard=function(){var c=next;next=null;return c;};
    welcomeGuestsSequentially();`);
  assert.equal(S.__G.aiUncles[0].cash,13);
});
test('room and trailer occupants count for final color bonuses', () => {
  const {S}=fixture();
  exec(S, `aiUncles[0].annexes=[{card:{annexName:'公园'},buried:[]}];
    player.annexes=[{card:{isTrailer:true,name:'trailer',annexName:''},buried:[],occupant:{color:'artisan-red'}}];
    rooms=[{id:1,key:0,occupant:{color:'artisan-red'}}]; triggerGameOver();`);
  assert.equal(S.__STANDINGS[1].total,18);
  assert.equal(S.__G.rooms[0].occupant,null); assert.equal(S.__G.player.annexes[0].occupant,null);
});
test('end bonuses obey 40F cash cap rather than inflating trainer score', () => {
  const {S}=fixture();
  exec(S, `aiUncles[0].cash=39;aiUncles[0].checks=2;
    aiUncles[0].annexes=[{card:{annexName:'公园'},buried:[]}];
    exitStack=[{color:'artisan-red'},{color:'artisan-red'}];triggerGameOver();`);
  assert.equal(S.__STANDINGS[1].total,60);
});
test('unburied penalties and annex-owned tiebreak are real engine values', () => {
  const {S}=fixture();
  exec(S, `aiUncles[0].cash=2;aiUncles[0].checks=2;aiUncles[0].corpses=[{},{}];
    aiUncles[0].annexes=[{card:{annexName:''},buried:[{},{}]}];triggerGameOver();`);
  assert.equal(S.__STANDINGS[1].total,2); assert.equal(S.__STANDINGS[1].tiebreak,2);
  assert.equal(exec(S,'removedStack.length'),2);
  S.triggerGameOver(); assert.equal(S.__STANDINGS[1].total,2);
});
test('reproducible full-game evaluation does not swallow errors', () => {
  const weights=loadGame().S.__G.AI_PROFILES.ml;
  const first=evaluate(weights,6,['mastermind','murderous','scheming'],4,77);
  const second=evaluate(weights,6,['mastermind','murderous','scheming'],4,77);
  assert.deepEqual(first,second);assert.equal(first.plays,6);assert.equal(first.errs,0);
  assert.throws(()=>runGame(['ml'],2,null,()=>{throw new Error('RNG failed');}), /RNG failed/);
});
test('three-player full-game evaluation', () => {
  const result=evaluate(null,6,['mastermind','murderous','scheming'],3,92);
  assert.equal(result.plays,6);assert.ok(result.share>=0&&result.share<=1);
});
test('evaluation rejects invalid sample size and player count', () => {
  assert.throws(()=>evaluate(null,0,[],4));assert.throws(()=>evaluate(null,1,[],5));
});
