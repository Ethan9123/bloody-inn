#!/usr/bin/env node
'use strict';
// Paired hold-out comparison of the frozen main and PR #8 profiles.
// Does not train, bake weights, or overwrite the saved report.
const fs = require('node:fs');
const path = require('node:path');
const { evaluate } = require('./opt_ml_uncle');
const saved = JSON.parse(fs.readFileSync(path.join(__dirname, 'pr8-validation.json'), 'utf8'));
const games = process.argv[2] === undefined ? saved.games : Number(process.argv[2]);
const seed = process.argv[3] === undefined ? saved.seed : Number(process.argv[3]);
if (!Number.isSafeInteger(games) || games < 1 || !Number.isSafeInteger(seed)) {
  throw new Error('Usage: node ml/validate_ml_profile.js [positive games] [integer seed]');
}
const results = { seed, games, method: saved.method, baseline: saved.baseline, candidate: saved.candidate, results: {} };
for (const playerCount of [3, 4]) {
  results.results[playerCount] = {};
  for (const name of ['baseline', 'candidate']) {
    results.results[playerCount][name] = evaluate(saved[name], games,
      ['mastermind', 'murderous', 'scheming'], playerCount, seed);
  }
}
console.log(JSON.stringify(results, null, 2));
