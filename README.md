# 血腥旅馆 · The Bloody Inn （网页版 / Web Edition）

[English](#english) · [中文](#中文)

A fan-made **web adaptation** of the board game *The Bloody Inn* — run a murderous 1831 French inn and out-earn **1–3 AI "Evil Uncle" rivals** (2–4 players: you + 1/2/3 AI). Your seat is randomized and each AI's difficulty is chosen independently.
《血腥旅馆》桌游的**非官方粉丝网页版**：你经营一家 1831 年法国乡村黑店，与 **1~3 个「邪恶叔叔」AI**（2~4 人：你 + 1/2/3 个 AI）比拼谁更有钱。座位随机，每个 AI 的难度可单独选择。

> **Disclaimer / 版权声明**: Unofficial fan project based on the rules of *The Bloody Inn*. Original game by **Nicolas Robert**, published by **Pearl Games**, illustrations by **Weberson Santiago**. This repository contains **no official rulebooks or card art** — only original code and original placeholder emblem art.
> 本项目为基于《The Bloody Inn》规则的非官方粉丝改编。原作设计 Nicolas Robert，出版 Pearl Games，插画 Weberson Santiago。**本仓库不含任何官方规则书或卡牌美术**，只有原创代码与原创占位徽记。

**▶ Play online / 在线试玩：** https://ethan9123.github.io/bloody-inn/

---

## English

### Run locally
Pure static site, no build step:
```bash
# just open it
start index.html          # Windows
open index.html           # macOS
# or serve it (recommended)
python -m http.server 4173    # → http://localhost:4173
```

### How to play (short version)
You compete over **two seasons** to amass the most **francs (F)**. Each round has three phases:
1. **Evening – Welcome**: the host places arriving travelers into rooms (the entrance stack is face-up).
2. **Night – Actions**: in seat order, you and each AI uncle take **2 actions** — Bribe / Build an annex / Kill / Bury a corpse / Pass (launder). The host (first seat) rotates every round.
3. **Morning – End of round**: police investigation → rent → wages.

A built-in **interactive tutorial** (on the setup screen) walks new players through everything. **Hover any card** to see its exact **bribe / kill / build / bury cost** (including your current discounts), its loot, and what its annex does.

### Features
- Faithful base game + 3 expansion modules (Carnies, Notables, Aunt Ginette's Objects, Carnie Events), card counts & effects checked against the rulebook and the PNP.
- **2–4 players**: you + **1/2/3 AI uncles**, your seat **randomized**, and each AI's difficulty picked **independently**.
- **5 AI difficulties** (Silly / Scheming / Murderous / **Mastermind (human-like)** / **ML-tuned**) — each uses one phase-aware strategy engine that robs high-value guests for cash, denies your rooms, expands early, and banks winnings late, narrating its reasoning.
- **中文 / English** toggle (card names + tooltips).
- Rich **hover tooltips** with live cost/effect/discount breakdowns.
- Full animation & sound layer (synthesized via Web Audio — **no external audio files**), transition banners, reduced-motion support.
- New-player **tutorial**.
- **Optional local card art**: if a `cards/<EnglishName>.png` image is present, it's used as the card face; otherwise an original faction emblem shows. The `cards/` folder is **git-ignored**, so you can drop your own PNP scans there **for personal local play** — they are never committed or published.

### Tech
Static `index.html` + `style.css` + `script.js`. No backend, no build, no secrets. External deps: Lucide icons + Google Fonts via CDN.

---

## 中文

### 本地运行
纯静态站点，无需构建：
```bash
# 直接打开
start index.html          # Windows
open index.html           # macOS
# 或起一个本地服务器（推荐）
python -m http.server 4173    # → http://localhost:4173
```

### 怎么玩（速览）
在**两个季度**里攒下最多的**法郎(F)**。每轮三个阶段：
1. **黄昏·迎客**：主理人把入店牌堆顶（正面朝上）的旅客安排进客房。
2. **夜晚·行动**：按座位顺序，你和每个 AI 叔叔各做 **2 次行动** —— 拉拢 / 建造别馆 / 刺杀 / 埋尸 / 洗钱放弃。主理人（首座）每轮轮换。
3. **清晨·结算**：警察调查 → 收租 → 发工资。

设置界面内置**新手教程**，分步讲清规则。**把鼠标移到任意卡牌上**，即可看到它的**拉拢 / 刺杀 / 建造 / 埋葬具体费用**（含你当前的各种减免）、身上油水，以及别馆能为你带来什么。

### 功能
- 还原基础游戏 + 3 个扩展模块（嘉年华员工 / 名流 / 姑妈道具 / 嘉年华事件），卡牌数量与效果对照规则书及 PNP 卡面逐张核对。
- **2~4 人对局**：你 + **1/2/3 个 AI 叔叔**，你的**座位随机**，每个 AI 的难度可**单独选择**。
- **5 档 AI 难度**（傻 / 阴险 / 嗜血 / **策略（真人级）** / **学习（ML调优）**）—— 同一套「分阶段」策略引擎：抢劫肥羊换现金、专断你房间财路、早期扩张地盘、后期洗钱落袋，并全程"思考"旁白。
- **中文 / English** 一键切换（卡名 + 悬浮提示）。
- 信息丰富的**悬浮提示**：实时显示费用 / 效果 / 减免明细。
- 全套动画与音效（Web Audio 实时合成，**零外部音频文件**）、过场横幅、`prefers-reduced-motion` 无障碍支持。
- 新手**教程**。
- **可选的本地卡面图**：若本地存在 `cards/<英文名>.png`，会用作该卡卡面，否则显示原创派系徽记。`cards/` 目录已 **gitignore**，你可以把自有的 PNP 素材放进去**本地游玩**，它们不会被提交或公开发布。

### 技术
静态 `index.html` + `style.css` + `script.js`，无后端、无构建、无密钥。外部依赖仅 Lucide 图标与 Google 字体（CDN）。

---

### Credits / 致谢
Designer: Nicolas Robert · Publisher: Pearl Games · Illustrations: Weberson Santiago. Fan web adaptation — not affiliated with or endorsed by the rights holders.
