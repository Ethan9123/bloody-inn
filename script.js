// ==========================================
// 核心卡牌数据池定义 (共70张旅客，每派系14张 + 8张农民)
// ==========================================
const BASE_TRAVELERS = [
    // --- 红色：手工业者 (Artisans) - 建造特长 (共14张) ---
    { name: "农民 (Cultivator)", role: "artisan", color: "artisan-red", rank: 0, loot: 8, annexName: "菜园 (Vegetable Garden)", annexDesc: "建造时，你面前每有一个红色别馆(包含本别馆)便获得 1F。", aptitude: "build" },
    { name: "农民 (Cultivator)", role: "artisan", color: "artisan-red", rank: 0, loot: 8, annexName: "菜园 (Vegetable Garden)", annexDesc: "建造时，你面前每有一个红色别馆(包含本别馆)便获得 1F。", aptitude: "build" },
    { name: "农民 (Cultivator)", role: "artisan", color: "artisan-red", rank: 0, loot: 8, annexName: "菜园 (Vegetable Garden)", annexDesc: "建造时，你面前每有一个红色别馆(包含本别馆)便获得 1F。", aptitude: "build" },
    { name: "农民 (Cultivator)", role: "artisan", color: "artisan-red", rank: 0, loot: 8, annexName: "菜园 (Vegetable Garden)", annexDesc: "建造时，你面前每有一个红色别馆(包含本别馆)便获得 1F。", aptitude: "build" },
    
    { name: "修车工 (Mechanic)", role: "artisan", color: "artisan-red", rank: 1, loot: 12, annexName: "车间 (Workshop)", annexDesc: "被动：此后执行“建造别馆”行动时，少支付一张帮工牌。", aptitude: "build" },
    { name: "修车工 (Mechanic)", role: "artisan", color: "artisan-red", rank: 1, loot: 12, annexName: "车间 (Workshop)", annexDesc: "被动：此后执行“建造别馆”行动时，少支付一张帮工牌。", aptitude: "build" },
    { name: "修车工 (Mechanic)", role: "artisan", color: "artisan-red", rank: 1, loot: 12, annexName: "车间 (Workshop)", annexDesc: "被动：此后执行“建造别馆”行动时，少支付一张帮工牌。", aptitude: "build" },
    { name: "修车工 (Mechanic)", role: "artisan", color: "artisan-red", rank: 1, loot: 12, annexName: "车间 (Workshop)", annexDesc: "被动：此后执行“建造别馆”行动时，少支付一张帮工牌。", aptitude: "build" },
    
    { name: "酿酒师 (Distiller)", role: "artisan", color: "artisan-red", rank: 2, loot: 18, annexName: "酒厂 (Distillery)", annexDesc: "被动：每轮清晨阶段支付帮工工资时，免除其中一名帮工的 1F 工资。", aptitude: "build" },
    { name: "酿酒师 (Distiller)", role: "artisan", color: "artisan-red", rank: 2, loot: 18, annexName: "酒厂 (Distillery)", annexDesc: "被动：每轮清晨阶段支付帮工工资时，免除其中一名帮工的 1F 工资。", aptitude: "build" },
    { name: "酿酒师 (Distiller)", role: "artisan", color: "artisan-red", rank: 2, loot: 18, annexName: "酒厂 (Distillery)", annexDesc: "被动：每轮清晨阶段支付帮工工资时，免除其中一名帮工的 1F 工资。", aptitude: "build" },
    
    { name: "花匠 (Gardener)", role: "artisan", color: "artisan-red", rank: 3, loot: 26, annexName: "花园 (Gardens)", annexDesc: "被动：每轮清晨阶段的“房客离店”步骤中，你额外获得 2F 租金。", aptitude: "build" },
    { name: "绿化师 (Landscaper)", role: "artisan", color: "artisan-red", rank: 3, loot: 26, annexName: "公园 (Park)", annexDesc: "建造时立刻获得 4F。游戏结束时，离店堆中每有一张红色卡牌，你获得 4F。", aptitude: "build" },
    { name: "屠夫 (Butcher)", role: "artisan", color: "artisan-red", rank: 3, loot: 26, annexName: "肉铺 (Butchers Shop)", annexDesc: "被动：你在一回合“刺杀”行动中可以刺杀任意数量的旅客(须支付所有刺杀费用)。", aptitude: "build" },

    // --- 蓝色：商贾商贩 (Merchants) - 拉拢特长 (共14张) ---
    { name: "报童 (Newsboy)", role: "merchant", color: "merchant-blue", rank: 0, loot: 8, annexName: "报摊 (Kiosk)", annexDesc: "建造时，你面前每有一个蓝色别馆(包含本别馆)便获得 1F。", aptitude: "bribe" },
    { name: "报童 (Newsboy)", role: "merchant", color: "merchant-blue", rank: 0, loot: 8, annexName: "报摊 (Kiosk)", annexDesc: "建造时，你面前每有一个蓝色别馆(包含本别馆)便获得 1F。", aptitude: "bribe" },
    { name: "报童 (Newsboy)", role: "merchant", color: "merchant-blue", rank: 0, loot: 8, annexName: "报摊 (Kiosk)", annexDesc: "建造时，你面前每有一个蓝色别馆(包含本别馆)便获得 1F。", aptitude: "bribe" },
    { name: "报童 (Newsboy)", role: "merchant", color: "merchant-blue", rank: 0, loot: 8, annexName: "报摊 (Kiosk)", annexDesc: "建造时，你面前每有一个蓝色别馆(包含本别馆)便获得 1F。", aptitude: "bribe" },
    
    { name: "销售代表 (Representative)", role: "merchant", color: "merchant-blue", rank: 1, loot: 12, annexName: "会客厅 (Parlour)", annexDesc: "被动：此后执行“拉拢帮凶”行动时，少支付一张帮工牌。", aptitude: "bribe" },
    { name: "销售代表 (Representative)", role: "merchant", color: "merchant-blue", rank: 1, loot: 12, annexName: "会客厅 (Parlour)", annexDesc: "被动：此后执行“拉拢帮凶”行动时，少支付一张帮工牌。", aptitude: "bribe" },
    { name: "销售代表 (Representative)", role: "merchant", color: "merchant-blue", rank: 1, loot: 12, annexName: "会客厅 (Parlour)", annexDesc: "被动：此后执行“拉拢帮凶”行动时，少支付一张帮工牌。", aptitude: "bribe" },
    { name: "销售代表 (Representative)", role: "merchant", color: "merchant-blue", rank: 1, loot: 12, annexName: "会客厅 (Parlour)", annexDesc: "被动：此后执行“拉拢帮凶”行动时，少支付一张帮工牌。", aptitude: "bribe" },
    
    { name: "礼宾员 (Concierge)", role: "merchant", color: "merchant-blue", rank: 2, loot: 18, annexName: "客房服务 (Room Service)", annexDesc: "建造时：立刻选择任意客房布置服务。每次该客房有旅客入住时，你获得等同于该旅客等级的F。", aptitude: "bribe" },
    { name: "礼宾员 (Concierge)", role: "merchant", color: "merchant-blue", rank: 2, loot: 18, annexName: "客房服务 (Room Service)", annexDesc: "建造时：立刻选择任意客房布置服务。每次该客房有旅客入住时，你获得等同于该旅客等级的F。", aptitude: "bribe" },
    { name: "礼宾员 (Concierge)", role: "merchant", color: "merchant-blue", rank: 2, loot: 18, annexName: "客房服务 (Room Service)", annexDesc: "建造时：立刻选择任意客房布置服务。每次该客房有旅客入住时，你获得等同于该旅客等级的F。", aptitude: "bribe" },
    
    { name: "杂货商 (Grocer)", role: "merchant", color: "merchant-blue", rank: 3, loot: 26, annexName: "杂货铺 (Grocery)", annexDesc: "建造时获得 4F。游戏结束时，离店堆中每有一张蓝色卡牌，你获得 4F。", aptitude: "bribe" },
    { name: "店主 (Shopkeeper)", role: "merchant", color: "merchant-blue", rank: 3, loot: 26, annexName: "商铺 (Store)", annexDesc: "被动：你在一回合“拉拢”行动中可以拉拢任意数量的旅客（不适用于农民，须支付费用）。", aptitude: "bribe" },
    { name: "酿酒人 (Brewer)", role: "merchant", color: "merchant-blue", rank: 3, loot: 26, annexName: "啤酒厂 (Brewery)", annexDesc: "被动：你在一回合“拉拢”行动中可以同时收买最多 4 个酒馆农民（农民本身不需花卡）。", aptitude: "bribe" },

    // --- 紫色：神职人员 (Religious) - 埋尸特长 (共14张) ---
    { name: "新修士 (Novice)", role: "religious", color: "religious-purple", rank: 0, loot: 8, annexName: "祭坛 (Altar)", annexDesc: "建造时，你面前每有一个紫色别馆(包含本别馆)便获得 1F。", aptitude: "bury" },
    { name: "新修士 (Novice)", role: "religious", color: "religious-purple", rank: 0, loot: 8, annexName: "祭坛 (Altar)", annexDesc: "建造时，你面前每有一个紫色别馆(包含本别馆)便获得 1F。", aptitude: "bury" },
    { name: "新修士 (Novice)", role: "religious", color: "religious-purple", rank: 0, loot: 8, annexName: "祭坛 (Altar)", annexDesc: "建造时，你面前每有一个紫色别馆(包含本别馆)便获得 1F。", aptitude: "bury" },
    { name: "新修士 (Novice)", role: "religious", color: "religious-purple", rank: 0, loot: 8, annexName: "祭坛 (Altar)", annexDesc: "建造时，你面前每有一个紫色别馆(包含本别馆)便获得 1F。", aptitude: "bury" },
    
    { name: "修道士 (Monk)", role: "religious", color: "religious-purple", rank: 1, loot: 12, annexName: "厢房 (Room)", annexDesc: "建造时：立刻将版图上的一颗中立白色钥匙替换为你自己颜色的钥匙（你永久多一间客房）。", aptitude: "bury" },
    { name: "修道士 (Monk)", role: "religious", color: "religious-purple", rank: 1, loot: 12, annexName: "厢房 (Room)", annexDesc: "建造时：立刻将版图上的一颗中立白色钥匙替换为你自己颜色的钥匙（你永久多一间客房）。", aptitude: "bury" },
    { name: "修道士 (Monk)", role: "religious", color: "religious-purple", rank: 1, loot: 12, annexName: "厢房 (Room)", annexDesc: "建造时：立刻将版图上的一颗中立白色钥匙替换为你自己颜色的钥匙（你永久多一间客房）。", aptitude: "bury" },
    { name: "修道士 (Monk)", role: "religious", color: "religious-purple", rank: 1, loot: 12, annexName: "厢房 (Room)", annexDesc: "建造时：立刻将版图上的一颗中立白色钥匙替换为你自己颜色的钥匙（你永久多一间客房）。", aptitude: "bury" },
    
    { name: "修道院院长 (Abbott)", role: "religious", color: "religious-purple", rank: 2, loot: 18, annexName: "酒窖 (Cellar)", annexDesc: "被动：此后执行“埋葬尸体”行动时，少支付一张帮工牌。", aptitude: "bury" },
    { name: "修道院院长 (Abbott)", role: "religious", color: "religious-purple", rank: 2, loot: 18, annexName: "酒窖 (Cellar)", annexDesc: "被动：此后执行“埋葬尸体”行动时，少支付一张帮工牌。", aptitude: "bury" },
    { name: "修道院院长 (Abbott)", role: "religious", color: "religious-purple", rank: 2, loot: 18, annexName: "酒窖 (Cellar)", annexDesc: "被动：此后执行“埋葬尸体”行动时，少支付一张帮工牌。", aptitude: "bury" },
    
    { name: "神父 (Priest)", role: "religious", color: "religious-purple", rank: 3, loot: 26, annexName: "小教堂 (Chapel)", annexDesc: "被动：此后执行“埋尸”时，打出的非铲子特长帮工不需要丢入弃牌堆，可以直接返回手牌。", aptitude: "bury" },
    { name: "大主教 (Archbishop)", role: "religious", color: "religious-purple", rank: 3, loot: 26, annexName: "地下墓室 (Crypt)", annexDesc: "被动：你在一回合“埋尸”行动中可以埋葬任意数量的尸体（必须支付对应费用）。", aptitude: "bury" },
    { name: "主教 (Bishop)", role: "religious", color: "religious-purple", rank: 3, loot: 26, annexName: "主教区 (Bishopric)", annexDesc: "建造时获得 4F。游戏结束时，离店堆中每有一张紫色卡牌，你获得 4F。", aptitude: "bury" },

    // --- 绿色：贵族达官 (Nobles) - 无特长但油水最多 (共14张) ---
    { name: "男爵 (Baron)", role: "noble", color: "noble-green", rank: 0, loot: 8, annexName: "豪华吊灯 (Grand Chandelier)", annexDesc: "建造时：立刻获得 4F 现金奖励。", aptitude: "none" },
    { name: "男爵 (Baron)", role: "noble", color: "noble-green", rank: 0, loot: 8, annexName: "豪华吊灯 (Grand Chandelier)", annexDesc: "建造时：立刻获得 4F 现金奖励。", aptitude: "none" },
    { name: "男爵 (Baron)", role: "noble", color: "noble-green", rank: 0, loot: 8, annexName: "豪华吊灯 (Grand Chandelier)", annexDesc: "建造时：立刻获得 4F 现金奖励。", aptitude: "none" },
    { name: "男爵 (Baron)", role: "noble", color: "noble-green", rank: 0, loot: 8, annexName: "豪华吊灯 (Grand Chandelier)", annexDesc: "建造时：立刻获得 4F 现金奖励。", aptitude: "none" },
    
    { name: "子爵 (Viscount)", role: "noble", color: "noble-green", rank: 1, loot: 12, annexName: "特大号床 (King Size Bed)", annexDesc: "建造时：立刻获得 6F 现金奖励。", aptitude: "none" },
    { name: "子爵 (Viscount)", role: "noble", color: "noble-green", rank: 1, loot: 12, annexName: "特大号床 (King Size Bed)", annexDesc: "建造时：立刻获得 6F 现金奖励。", aptitude: "none" },
    { name: "子爵 (Viscount)", role: "noble", color: "noble-green", rank: 1, loot: 12, annexName: "特大号床 (King Size Bed)", annexDesc: "建造时：立刻获得 6F 现金奖励。", aptitude: "none" },
    { name: "子爵 (Viscount)", role: "noble", color: "noble-green", rank: 1, loot: 12, annexName: "特大号床 (King Size Bed)", annexDesc: "建造时：立刻获得 6F 现金奖励。", aptitude: "none" },
    
    { name: "伯爵 (Count)", role: "noble", color: "noble-green", rank: 2, loot: 18, annexName: "豪华餐厅 (Dining Room)", annexDesc: "建造时：立刻获得 9F 现金奖励。", aptitude: "none" },
    { name: "伯爵 (Count)", role: "noble", color: "noble-green", rank: 2, loot: 18, annexName: "豪华餐厅 (Dining Room)", annexDesc: "建造时：立刻获得 9F 现金奖励。", aptitude: "none" },
    { name: "伯爵 (Count)", role: "noble", color: "noble-green", rank: 2, loot: 18, annexName: "豪华餐厅 (Dining Room)", annexDesc: "建造时：立刻获得 9F 现金奖励。", aptitude: "none" },
    
    { name: "公爵 (Duke)", role: "noble", color: "noble-green", rank: 3, loot: 26, annexName: "马厩 (Stables)", annexDesc: "建造时获得 4F。游戏结束时，离店堆中每有一张绿色卡牌，你获得 4F。", aptitude: "none" },
    { name: "王子 (Prince)", role: "noble", color: "noble-green", rank: 3, loot: 26, annexName: "温室 (Greenhouse)", annexDesc: "被动：游戏结束结算时，你所拥有的每张支票为你提供额外 3F 收益。", aptitude: "none" },
    { name: "侯爵 (Marquis)", role: "noble", color: "noble-green", rank: 3, loot: 26, annexName: "凉亭 (Pavilion)", annexDesc: "建造时：立刻获得 18F 现金奖励。", aptitude: "none" },

    // --- 灰色：治安警察 (Police) - 刺杀特长 (共14张) ---
    { name: "协警 (Peacekeeper)", role: "police", color: "police-grey", rank: 0, loot: 8, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "协警 (Peacekeeper)", role: "police", color: "police-grey", rank: 0, loot: 8, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "协警 (Peacekeeper)", role: "police", color: "police-grey", rank: 0, loot: 8, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "协警 (Peacekeeper)", role: "police", color: "police-grey", rank: 0, loot: 8, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    
    { name: "警佐 (Brigadier Chief)", role: "police", color: "police-grey", rank: 1, loot: 12, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警佐 (Brigadier Chief)", role: "police", color: "police-grey", rank: 1, loot: 12, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警佐 (Brigadier Chief)", role: "police", color: "police-grey", rank: 1, loot: 12, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警佐 (Brigadier Chief)", role: "police", color: "police-grey", rank: 1, loot: 12, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    
    { name: "警长 (Police Chief)", role: "police", color: "police-grey", rank: 2, loot: 18, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警长 (Police Chief)", role: "police", color: "police-grey", rank: 2, loot: 18, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警长 (Police Chief)", role: "police", color: "police-grey", rank: 2, loot: 18, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },

    { name: "督察 (Inspector)", role: "police", color: "police-grey", rank: 3, loot: 26, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "督察 (Inspector)", role: "police", color: "police-grey", rank: 3, loot: 26, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "督察 (Inspector)", role: "police", color: "police-grey", rank: 3, loot: 26, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" }
];

// 基础旅客「身上油水」按等级统一（经中文PNP卡面逐张核对）：0级=8 / 1级=12 / 2级=18 / 3级=26。
// 注意：贵族卡面上的 +4/+6/+9/+18 是「建造别馆时立即获得的现金」，并非身上油水，二者相互独立。
const BASE_RANK_LOOT = { 0: 8, 1: 12, 2: 18, 3: 26 };
BASE_TRAVELERS.forEach(c => { if (BASE_RANK_LOOT[c.rank] !== undefined) c.loot = BASE_RANK_LOOT[c.rank]; });

// ==========================================
// 扩展模块数据：嘉年华员工、名流、事件、道具
// ==========================================
const CARNIE_TRAVELERS = [
    // 数字(等级/建埋等级/油水)经嘉年华扩展中文PNP卡面逐张核对
    { name: "喷火艺人 (Fire Eater)", role: "carnie", color: "carnie-orange", rank: 0, buildRank: 2, loot: 14, annexName: "拖车 (Trailer)", annexDesc: "嘉年华拖车：迎客时若拖车下没有尸体，也必须安排旅客入住。", aptitude: "kill", isTrailer: true },
    { name: "骗子 (Con Artist)", role: "carnie", color: "carnie-orange", rank: 0, buildRank: 2, loot: 14, annexName: "拖车 (Trailer)", annexDesc: "嘉年华拖车：可像别馆一样埋尸，清晨有旅客时收 1F。", aptitude: "bribe", isTrailer: true },
    { name: "杂耍艺人 (Juggler)", role: "carnie", color: "carnie-orange", rank: 0, buildRank: 2, loot: 14, annexName: "拖车 (Trailer)", annexDesc: "嘉年华拖车：迎客时也要入住旅客。", aptitude: "build", isTrailer: true },
    { name: "小丑 (Clown)", role: "carnie", color: "carnie-orange", rank: 0, buildRank: 2, loot: 14, annexName: "拖车 (Trailer)", annexDesc: "嘉年华拖车：迎客时若拖车下没有尸体，也必须安排旅客入住。", aptitude: "bury", isTrailer: true },
    { name: "马戏叫卖人 (Barker)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 3, loot: 20, annexName: "嘉年华摊位 (Carnival Booth)", annexDesc: "建成后：此后每当一名嘉年华旅客入住旅馆，你便获得 3F。", aptitude: "bribe" },
    { name: "驯熊师 (Bear Tamer)", role: "carnie", color: "carnie-orange", rank: 3, buildRank: 1, loot: 20, annexName: "熊笼 (Bear Cage)", annexDesc: "被动：此后执行刺杀行动时少支付一张帮工牌。", aptitude: "kill" },
    { name: "伴游 (Companion)", role: "carnie", color: "carnie-orange", rank: 3, buildRank: 1, loot: 20, annexName: "密室 (Nook)", annexDesc: "被动：执行拉拢行动时，打出的帮工全部返回手牌。", aptitude: "bribe" },
    { name: "飞刀手 (Knife Thrower)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 0, loot: 10, annexName: "刀靶 (Target Stand)", annexDesc: "建造时，你可以立刻对一名等级0旅客执行一次免费刺杀。", aptitude: "kill" },
    { name: "占卜师 (Fortune Teller)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 0, loot: 10, annexName: "占卜帐篷 (Fortune Tent)", annexDesc: "建造时查看旅客牌堆顶 3 张并重新排序。", aptitude: "bury" },
    { name: "大力士 (Strongman)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 0, loot: 10, annexName: "铁锤游戏 (Hammer Game)", annexDesc: "建造时获得 4F。", aptitude: "build" },
    { name: "空中飞人 (Acrobat)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 0, loot: 10, annexName: "高台 (High Wire)", annexDesc: "建造时获得 1F，并可把一名小酒馆农民加入手牌。", aptitude: "build" },
    { name: "侏儒 (Dwarf)", role: "carnie", color: "carnie-orange", rank: 2, buildRank: 1, loot: 16, annexName: "小舞台 (Tiny Stage)", annexDesc: "特殊埋葬：埋入别馆时不占用容量。", aptitude: "bury", specialBurial: "dwarf" },
    { name: "大胡子女士 (Bearded Lady)", role: "carnie", color: "carnie-orange", rank: 2, buildRank: 1, loot: 24, annexName: "梳妆间 (Dressing Room)", annexDesc: "特殊埋葬：埋葬她时油水须与对手（叔叔）平分——你只得一半(向上取整)，另一半归对手。", aptitude: "bribe", specialBurial: "bearded" },
    { name: "双胞胎 (Twins)", role: "carnie", color: "carnie-orange", rank: 2, buildRank: 1, loot: 24, annexName: "双人房 (Twin Room)", annexDesc: "特殊埋葬：必须埋在至少有 2 个空位的别馆下，埋葬后计为 2 具尸体（影响平局判定与告解室）。", aptitude: "bury", specialBurial: "twins" }
];

// 名流模块（正版）：6 种不同卡 × 副本数 = 14 张，替换 14 张贵族
// （结构经中文 PNP 印张逐格核对：酿酒师×4 / 蚕农×4 / 外科医生×3 / 药剂师×1 / 公证人×1 / 银行家×1；
//  此前为补足 14 张自制的 8 张名流不存在于正版，已全部移除）
function makeNotable(n) { return { ...n, role: "notable", color: "notable-gold", aptitude: "none" }; }
const NOTABLE_DEFS = {
    winemaker:     { name: "酿酒师 (Winemaker)", rank: 2, buildRank: 0, loot: 14, annexName: "酒桶 (Wine Cask)", annexDesc: "建造时，每有一间住着旅客的中立客房，获得 3F。" },
    sericulturist: { name: "蚕农 (Sericulturist)", rank: 0, buildRank: 1, loot: 10, annexName: "丝绸农场 (Silk Farm)", annexDesc: "建造时，你每有一间住着旅客的自家客房，获得 3F（官方裁定：不含拖车）。" },
    surgeon:       { name: "外科医生 (Surgeon)", rank: 1, buildRank: 2, loot: 16, annexName: "实验室 (Laboratory)", annexDesc: "清晨退房时，若对手有未埋尸体，你获得 3F。" },
    pharmacist:    { name: "药剂师 (Pharmacist)", rank: 1, buildRank: 3, loot: 20, annexName: "药房 (Pharmacy)", annexDesc: "清晨退房时，若另一名玩家手中帮工不少于 3 张，获得 2F。" },
    notary:        { name: "公证人 (Notary)", rank: 3, buildRank: 1, loot: 20, annexName: "书房 (Study)", annexDesc: "对手用现金兑支票时，你也可立即用 10F 兑 1 张支票（不占行动）。" },
    banker:        { name: "银行家 (Banker)", rank: 1, buildRank: 3, loot: 20, annexName: "保险库 (Safe)", annexDesc: "被动：对手获得超过40F上限的现金时，溢出部分归你。" },
};
const NOTABLE_TRAVELERS = [
    ...Array(4).fill().map(() => makeNotable(NOTABLE_DEFS.winemaker)),
    ...Array(4).fill().map(() => makeNotable(NOTABLE_DEFS.sericulturist)),
    ...Array(3).fill().map(() => makeNotable(NOTABLE_DEFS.surgeon)),
    makeNotable(NOTABLE_DEFS.pharmacist),
    makeNotable(NOTABLE_DEFS.notary),
    makeNotable(NOTABLE_DEFS.banker),
];

// ★ 自制扩展「镇上的新面孔」（非官方同人内容）★
// 8 张本数字版原创名流——曾被误当作正版名流，现作为明确标注的可选模块保留。
// 默认关闭；开启后直接加入牌堆（不替换任何官方卡）。卡面显示"同人"角标。
function makeFanNotable(n) { return { ...n, role: "notable", color: "notable-gold", aptitude: "none", fanMade: true, annexDesc: "【自制】" + n.annexDesc }; }
const FAN_NOTABLES = [
    { name: "律师 (Lawyer)", rank: 0, buildRank: 1, loot: 4, annexName: "档案室 (Archive)", annexDesc: "建造时获得 4F。" },
    { name: "医生 (Doctor)", rank: 1, buildRank: 1, loot: 6, annexName: "诊所 (Clinic)", annexDesc: "警察调查时，你可以少处理 1 具未埋尸体。" },
    { name: "收藏家 (Collector)", rank: 2, buildRank: 3, loot: 10, annexName: "画廊 (Gallery)", annexDesc: "游戏结束时，每有一种颜色别馆获得 2F。" },
    { name: "铁路大亨 (Magnate)", rank: 3, buildRank: 2, loot: 14, annexName: "马车站 (Coach House)", annexDesc: "建造时获得 6F。" },
    { name: "贵妇 (Heiress)", rank: 3, buildRank: 1, loot: 18, annexName: "珠宝室 (Jewelry Room)", annexDesc: "建造时获得 8F。" },
    { name: "参议员 (Senator)", rank: 3, buildRank: 3, loot: 15, annexName: "议事厅 (Council Room)", annexDesc: "游戏结束时，每张支票额外 2F。" },
    { name: "法官 (Judge)", rank: 2, buildRank: 2, loot: 9, annexName: "法庭 (Court)", annexDesc: "警察调查时，先获得 2F。" },
    { name: "投机商 (Speculator)", rank: 0, buildRank: 3, loot: 7, annexName: "交易所 (Exchange)", annexDesc: "建造时可立刻用 10F 买 1 张支票。" }
].map(makeFanNotable);

const CARNIE_EVENTS = [
    { id: "blackmail", name: "勒索 (Blackmail)", desc: "清晨无论是否有警察，都按警察调查处理未埋尸体。" },
    { id: "broken_safe", name: "破保险箱 (Broken Safe)", desc: "清晨每名玩家失去一半支票，向上取整。" },
    { id: "cirrhosis", name: "酒精中毒 (Cirrhosis)", desc: "清晨若小酒馆有农民，移出 1 名农民。" },
    { id: "extortion", name: "敲诈 (Extortion)", desc: "本轮工资每名帮工额外 +1F。" },
    { id: "fiasco", name: "惨败 (Fiasco)", desc: "清晨发工资前，玩家手牌全部离开。" },
    { id: "high_season", name: "旺季 (High Season)", desc: "本轮退房时每间收租客房额外 +1F。" },
    { id: "pickpockets", name: "扒手 (Pickpockets)", desc: "退房后，双方各损失 2F 现金。" },
    { id: "red_herring", name: "诬告信 (Red Herring)", desc: "清晨按警察调查处理未埋尸体。" }
];

const OBJECT_CARDS = [
    { id: "cake", name: "蛋糕", cost: 0, timing: "黄昏", desc: "放在一名住客上：其退房离店时你额外获得 2F × 其住宿等级。", effect: "extra_rent" },
    { id: "gold_teeth", name: "金牙", cost: 0, timing: "埋尸", desc: "下一次埋尸：额外掠夺 2F × 该尸体的埋葬等级。", effect: "bury_bonus" },
    { id: "letter", name: "举报信", cost: 0, timing: "黄昏", desc: "本轮清晨即使没有警察，也强制按调查处理所有未埋尸体。", effect: "force_police" },
    { id: "rug", name: "地毯", cost: 0, timing: "清晨", desc: "把 1 具未埋尸体扫到地毯下，本轮调查不会被发现。", effect: "hide_corpse" },
    { id: "coffee", name: "咖啡", cost: 1, timing: "黄昏", desc: "招待一名住客：立刻获得 1F × 其住宿等级；该住客本轮不能被下毒。", effect: "coffee" },
    { id: "hammer", name: "锤子", cost: 1, timing: "建造", desc: "下一次建造打出的帮工全部返回手牌。", effect: "return_build" },
    { id: "liquor", name: "烈酒", cost: 1, timing: "拉拢", desc: "下一次拉拢打出的帮工全部返回手牌。", effect: "return_bribe" },
    { id: "snow", name: "雪堆", cost: 1, timing: "清晨", desc: "盖住 1 具未埋尸体，本轮警察调查不处理它（仅一轮）。", effect: "hide_corpse" },
    { id: "bible", name: "圣经", cost: 2, timing: "埋尸", desc: "下一次埋尸打出的帮工全部返回手牌。", effect: "return_bury" },
    { id: "confessional", name: "告解室", cost: 2, timing: "清晨", desc: "若你埋的尸体比对手少，立刻获得 6F。", effect: "catchup" },
    { id: "tomb", name: "墓碑", cost: 2, timing: "清晨", desc: "调查时把 1 具未埋尸体移入墓碑，免去其罚款。", effect: "remove_corpse" },
    { id: "wolf_trap", name: "狼夹", cost: 2, timing: "刺杀", desc: "下一次刺杀打出的帮工全部返回手牌。", effect: "return_kill" },
    { id: "poison", name: "毒药", cost: 3, timing: "黄昏", desc: "毒杀旅馆中油水最高的一名旅客，尸体归你（无需帮工）。", effect: "poison" },
    { id: "quicklime", name: "生石灰", cost: 3, timing: "埋尸", desc: "下一次埋尸费用 -1 张帮工。", effect: "bury_discount" },
    { id: "well", name: "井", cost: 3, timing: "刺杀", desc: "下一次刺杀后，尸体直接移出游戏（无需埋葬）。", effect: "well" },
    { id: "wheelbarrow", name: "独轮车", cost: 3, timing: "建造", desc: "可直接把旅馆房间里旅客的别馆建出来，无需先拉拢。", effect: "build_from_room" }
];

// ==========================================
// 游戏状态机
// ==========================================
let gameLength = 'short'; // 'short'/'long'——牌堆大小按原版移除表随人数变化（见 startGame 的 REMOVE_TABLE）
let difficulty = 'silly'; // 'silly', 'scheming', 'murderous'
let expansionOptions = {
    carnies: false,
    carnieEvents: false,
    notables: false,
    fanNotables: false,   // ★自制扩展「镇上的新面孔」：8 张同人名流，直接加入牌堆（非官方）
    objects: false,
    sound: true
};

let roundNum = 1;
let seasonNum = 1;
let currentPhase = 'welcome';
// N 人局回合状态：turnOrder 是本局座位顺序（含 'player' 与 AI 叔叔下标），玩家位置随机
let playerCount = 2;            // 2~4 人 = 你 + 1~3 个 AI 叔叔
let aiDiffs = ['silly'];       // 每个 AI 叔叔各自的难度（长度 = playerCount-1，叔叔①默认与按钮一致）
let savedDiffs = ['silly', 'mastermind', 'mastermind']; // 各座位难度的持久记忆（人数升降不丢失玩家的选择）
let turnOrder = [];            // 例如 [0, 'player', 1]
let firstActorIdx = 0;         // 本轮主理人在 turnOrder 中的下标（每轮轮换）
let activeActorIdx = 0;        // 当前行动者在 turnOrder 中的下标
let actionNumber = 1;
// 当前/主理人行动者与判定
function currentActor() { return turnOrder[activeActorIdx]; }
function hostActor() { return turnOrder[firstActorIdx]; }
function isHumanTurn() { return currentActor() === 'player'; }
function isHumanHost() { return hostActor() === 'player'; }
function actorSeat(a) { return a === 'player' ? player : aiUncles[a]; }
function actorName(a) { return a === 'player' ? '玩家' : (aiUncles[a] && aiUncles[a].name) || ('叔叔' + (a + 1)); }

let travelerDeck = [];
let exitStack = [];
let removedStack = [];
let bistro = []; // 农民牌堆
let finalRoundPending = false;
let pendingWelcomeCard = null;
let eventDeck = [];
let eventDiscard = [];
let currentEvent = null;
let carnieEventRevealedThisRound = false;
let roundEffects = {};
let objectEffects = {};

// 玩家状态
let player = {
    cash: 5,
    checks: 1,
    hand: [],
    annexes: [], // 格式: { card: cardObj, buried: [corpseCardObjs] }
    corpses: [], // 未埋尸体堆
    objects: []
};

// AI 状态 (邪恶叔叔)——占位字面量，startGame 时由 makeUncle 重建（真规则：含手牌/别馆）
let ai = {
    idx: 0, name: '邪恶叔叔', difficulty: 'silly',
    cash: 5, checks: 1, keys: [3, 4],
    hand: [], annexes: [], corpses: [], buriedCount: 0,
    bribePile: [], killPile: []
};

// AI 叔叔数组：ai 始终指向第一个（向后兼容旧的单 AI 代码路径）
let aiUncles = [ai];
const UNCLE_NAMES = ['邪恶叔叔', '阴狠表哥', '贪婪姑父', '冷血舅舅'];
// 每个玩家（含 AI）的初始资产别馆：自带 1 个埋尸坑的大篷棚车（原版 Barn）
function makeBarnAnnex() {
    return {
        card: { name: "大篷车宿营地 (Barn)", role: "artisan", color: "artisan-red", rank: 1, loot: 0, annexName: "大篷棚车", annexDesc: "自带1个埋尸坑的初始资产别馆。", aptitude: "none" },
        buried: []
    };
}
// 真规则 AI：叔叔与人类同规则——有手牌（拉拢所得=帮工货币）、别馆（埋尸坑）、未埋尸体、付工资
function makeUncle(idx, diff) {
    return {
        idx, difficulty: diff, name: UNCLE_NAMES[idx] || ('叔叔' + (idx + 1)),
        cash: 5, checks: 1, keys: [],
        hand: [],                   // 手牌（拉拢来的帮工）——对人类只显示张数（牌背）
        annexes: [makeBarnAnnex()], // 别馆（含初始大篷车）
        corpses: [],                // 未埋尸体（杀人后不再立刻拿钱！）
        buriedCount: 0,             // 已埋尸体数（含埋进对手别馆的）
        objects: [],                // 姑妈道具（参与轮抽）
        grudge: null,               // T3: 记仇对象
        bribePile: [], killPile: [] // 兼容残留引用（已弃用，保持空）
    };
}
// 房间归属辅助：room.key ∈ { 'player'(人类), 0/1/2(AI叔叔下标), 'neutral', 'closed' }
function isHumanRoom(r) { return r.key === 'player'; }
function isAIRoom(r) { return typeof r.key === 'number'; }
function uncleOfRoom(r) { return isAIRoom(r) ? aiUncles[r.key] : null; }

// 按原版规则生成 8 间客房版图：
// 「确定哪些房间开放」——每位玩家(你 + 各 AI 叔叔)在一扇门上放自己颜色的钥匙(各 1 间)；
// 再放白色中立钥匙：2~3 人放 3 把、4 人放 4 把。有钥匙的门才算"开放"，其余门未开放(closed)。
// 故开放间数：2 人 5 间 / 3 人 6 间 / 4 人 8 间(全开)。客房服务非起始配置——由[礼宾员]别馆建造获得。
function buildBoard() {
    const neutralCount = (playerCount === 4) ? 4 : 3;
    let board = [];
    let id = 1;
    board.push({ id: id++, key: 'player' });                                   // 你的起始客房
    for (let u = 0; u < playerCount - 1; u++) board.push({ id: id++, key: u }); // 每个叔叔 1 间
    for (let n = 0; n < neutralCount; n++) board.push({ id: id++, key: 'neutral' }); // 中立客房
    while (id <= 8) board.push({ id: id++, key: 'closed' });                    // 未放钥匙的门：未开放
    return board.map(r => ({ id: r.id, key: r.key, serviceOwner: null, hasService: false, occupant: null }));
}

// 房间状态
let rooms = [];

// 注：旧版「固定 AI 行动卡组」已被策略引擎(aiStrategicAction)取代，整段连同 aiDeck/aiDiscard 一并移除。

// 当前进行中行动的状态缓存 (仅玩家)
let pendingAction = {
    type: null, // 'bribe', 'build', 'kill', 'bury', 'launder'
    target: null,
    targets: [], // 用于存储多目标
    targetCorpse: null,
    selectedHelpers: []
};

const HUMAN_PLAYER_COUNT = 2;

function shuffleCards(cards) {
    // 无偏 Fisher-Yates 洗牌（sort(()=>Math.random()-0.5) 分布有偏，会让座位/牌序系统性倾斜）
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

function isOpenRoom(room) {
    return room.key !== 'closed';
}

function roomHasService(room) {
    return !!room.serviceOwner || !!room.hasService;
}

function setRoomService(room, owner) {
    room.serviceOwner = owner;
    room.hasService = true;
}

function syncAIKeys() {
    aiUncles.forEach((u, i) => {
        u.keys = rooms.filter(r => r.key === i).map(r => r.id);
    });
}

// 叔叔「已埋尸体数」（含埋进玩家别馆的；双胞胎计 2）——用于平局判定与[告解室]比较
function uncleDisposedCount(u) {
    if (typeof u.buriedCount === 'number') return u.buriedCount;
    return (u.killPile || []).length;
}
// 玩家亲手埋的尸体数（含埋进叔叔别馆的；不含 AI 埋进玩家别馆的）
let playerExtraBuried = 0;
function playerBuriedCount() {
    return player.annexes.reduce((s, a) => s + a.buried.filter(b => !b.buriedByUncle).length, 0) + playerExtraBuried;
}

// ==========================================
// 拖车（嘉年华扩展）：原版规则中拖车视同客房——迎客必须填、可被刺杀/拉拢、警察计入、清晨 1F
// （客房服务与丝绸厂除外）
// ==========================================
// 可迎客的拖车：下面没有尸体且当前无人占用（含所有玩家的拖车——原版迎客必须填）
function eligibleTrailerSlots() {
    let out = [];
    player.annexes.forEach((slot, idx) => {
        if (slot.card.isTrailer && slot.buried.length === 0 && !slot.occupant) out.push({ slot, idx, owner: 'player' });
    });
    aiUncles.forEach(u => (u.annexes || []).forEach((slot, idx) => {
        if (slot.card.isTrailer && slot.buried.length === 0 && !slot.occupant) out.push({ slot, idx, owner: u.idx });
    }));
    return out;
}

// 所有被旅客占据的「旅馆位置」（开放客房 + 所有人的拖车），统一供刺杀/拉拢/警察/事件使用
function allOccupiedSpots() {
    let spots = [];
    rooms.forEach(r => {
        if (isOpenRoom(r) && r.occupant) {
            spots.push({
                kind: 'room', room: r, occupant: r.occupant,
                label: `${r.id} 号房`, anchorId: 'room-' + r.id,
                ownerKey: r.key,
                clear() { r.occupant = null; }
            });
        }
    });
    player.annexes.forEach((a, i) => {
        if (a.card.isTrailer && a.occupant) {
            spots.push({
                kind: 'trailer', annex: a, annexIndex: i, occupant: a.occupant,
                label: `拖车「${a.card.name.split(' (')[0]}」`, anchorId: 'player-annexes',
                ownerKey: 'player',
                clear() { a.occupant = null; }
            });
        }
    });
    aiUncles.forEach(u => (u.annexes || []).forEach((a, i) => {
        if (a.card.isTrailer && a.occupant) {
            spots.push({
                kind: 'trailer', annex: a, annexIndex: i, occupant: a.occupant,
                label: `${u.name}的拖车`, anchorId: 'uncle-box-' + u.idx,
                ownerKey: u.idx,
                clear() { a.occupant = null; }
            });
        }
    }));
    return spots;
}

function openRoomCount() {
    return rooms.filter(isOpenRoom).length;
}

function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function resetRoundEffects() {
    roundEffects = {
        forceInvestigation: false,
        extraRent: 0,
        wageSurcharge: 0,
        fiasco: false,
        pickpockets: false,
        protectedCorpses: 0,
        cakeTargets: []   // [蛋糕]招待的住客（{id,rank,name}）——其离店时支付 2F×等级；中途被杀/拉拢则作废
    };
}

function resetObjectEffects() {
    objectEffects = {
        returnHelpersFor: {},
        goldTeeth: 0,     // 待用的[金牙]数量——下次埋葬等级≥1尸体时消耗，+2F×埋葬等级/枚
        buryDiscount: 0,
        well: false,
        buildFromRoom: false
    };
}

// [金牙]消耗：埋葬时计算加成（2F × 尸体的埋葬等级 × 枚数）；等级 0 的尸体不消耗、留待下次
function consumeGoldTeeth(corpse) {
    let n = objectEffects.goldTeeth || 0;
    let rank = getCardRank(corpse, 'bury');
    if (!n || rank < 1) return 0;
    objectEffects.goldTeeth = 0;
    let bonus = 2 * rank * n;
    logMessage("道具", `[金牙] 从 ${corpse.name} 口中撬出金牙：额外 +${bonus}F（2F × 埋葬等级 ${rank}${n > 1 ? ` × ${n}枚` : ''}）。`, "player");
    return bonus;
}

function getCardRank(card, action = 'default') {
    if (!card) return 0;
    if ((action === 'build' || action === 'bury') && card.buildRank !== undefined) return card.buildRank;
    return card.rank || 0;
}

function getRankDisplay(card) {
    if (card.buildRank !== undefined && card.buildRank !== card.rank) {
        return `住${card.rank}/建埋${card.buildRank}`;
    }
    return '★'.repeat(card.rank) || '等级 0';
}

function getAnnexCapacity(card) {
    if (!card) return 0;
    if (card.name && card.name.includes("Barn")) return 1;
    if (card.isTrailer) return getCardRank(card, 'build');
    return getCardRank(card, 'build');
}

// 已占用的埋尸位：侏儒「侧放」不占容量（原版：埋了侏儒后该别馆仍可埋满额尸体）
function effectiveBuried(slot) {
    return slot.buried.filter(b => b.specialBurial !== 'dwarf').length;
}

// ==========================================
// 初始化与设置
// ==========================================
function setGameLength(length) {
    gameLength = length;
    document.getElementById('btn-short-game').classList.toggle('active', length === 'short');
    document.getElementById('btn-long-game').classList.toggle('active', length === 'long');
}

const DIFF_KEYS = ['silly', 'scheming', 'murderous', 'mastermind', 'ml'];
const DIFF_LABELS = { silly: '傻叔叔', scheming: '阴险叔叔', murderous: '嗜血叔叔', mastermind: '策略叔叔', ml: '学习叔叔' };

function setDifficulty(diff) {
    difficulty = diff;          // 叔叔① 的难度（向后兼容旧的单 AI 字段）
    aiDiffs[0] = diff;
    savedDiffs[0] = diff;
    document.getElementById('btn-diff-silly').classList.toggle('active', diff === 'silly');
    document.getElementById('btn-diff-scheming').classList.toggle('active', diff === 'scheming');
    document.getElementById('btn-diff-murderous').classList.toggle('active', diff === 'murderous');
    let mm = document.getElementById('btn-diff-mastermind');
    if (mm) mm.classList.toggle('active', diff === 'mastermind');
    let ml = document.getElementById('btn-diff-ml');
    if (ml) ml.classList.toggle('active', diff === 'ml');
}

// 设置玩家人数（2~4），并据此调整每个 AI 的难度选择器
function setPlayerCount(n) {
    playerCount = n;
    [2, 3, 4].forEach(k => {
        let b = document.getElementById('btn-pc-' + k);
        if (b) b.classList.toggle('active', k === n);
    });
    // aiDiffs 长度对齐为 playerCount-1：升人数时从持久记忆 savedDiffs 还原此前的选择（而非一律重置为 mastermind）
    while (aiDiffs.length < n - 1) { let idx = aiDiffs.length; aiDiffs.push(savedDiffs[idx] || 'mastermind'); }
    aiDiffs.length = n - 1;
    if (!aiDiffs[0]) aiDiffs[0] = difficulty;
    renderExtraAIDiffs();
}

// 叔叔②③的难度下拉（叔叔①仍用顶部按钮）
function renderExtraAIDiffs() {
    let box = document.getElementById('extra-ai-diffs');
    if (!box) return;
    if (playerCount <= 2) { box.innerHTML = ''; return; }
    let rows = '';
    for (let i = 1; i < playerCount - 1; i++) {
        let cur = aiDiffs[i] || 'mastermind';
        let opts = DIFF_KEYS.map(k => `<option value="${k}"${k === cur ? ' selected' : ''}>${DIFF_LABELS[k]}</option>`).join('');
        rows += `<div class="extra-ai-row"><label>叔叔${'①②③④'[i]}难度</label><select onchange="setExtraAIDiff(${i}, this.value)">${opts}</select></div>`;
    }
    box.innerHTML = rows;
}

function setExtraAIDiff(i, diff) {
    aiDiffs[i] = diff;
    savedDiffs[i] = diff; // 记住该座位的选择，人数升降后仍可还原
}

function setLang(l) {
    lang = l;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
    let gs = document.getElementById('game-screen');
    if (gs && !gs.classList.contains('hidden') && typeof renderUI === 'function') renderUI();
}

function toggleExpansion(option) {
    expansionOptions[option] = !expansionOptions[option];

    if (option === 'carnies' && !expansionOptions.carnies) {
        expansionOptions.carnieEvents = false;
    }
    if (option === 'carnieEvents' && expansionOptions.carnieEvents) {
        expansionOptions.carnies = true;
    }

    document.getElementById('btn-exp-carnies')?.classList.toggle('active', expansionOptions.carnies);
    document.getElementById('btn-exp-events')?.classList.toggle('active', expansionOptions.carnieEvents);
    document.getElementById('btn-exp-notables')?.classList.toggle('active', expansionOptions.notables);
    document.getElementById('btn-exp-fan')?.classList.toggle('active', expansionOptions.fanNotables);
    document.getElementById('btn-exp-objects')?.classList.toggle('active', expansionOptions.objects);
    document.getElementById('btn-sound')?.classList.toggle('active', expansionOptions.sound);
}

function startGame() {
    // 1. 初始化卡牌与洗牌
    let allTravelers = JSON.parse(JSON.stringify(BASE_TRAVELERS));
    if (expansionOptions.notables) {
        allTravelers = allTravelers.filter(c => c.role !== 'noble');
        allTravelers.push(...JSON.parse(JSON.stringify(NOTABLE_TRAVELERS)));
    }
    if (expansionOptions.carnies) {
        allTravelers.push(...JSON.parse(JSON.stringify(CARNIE_TRAVELERS)));
    }
    if (expansionOptions.fanNotables) {
        // ★自制扩展：8 张同人名流直接加入牌堆（不替换任何官方卡，明确标注非官方）
        allTravelers.push(...JSON.parse(JSON.stringify(FAN_NOTABLES)));
    }
    allTravelers.forEach((c, idx) => c.id = 'trav_' + idx + '_' + Math.random().toString(36).substr(2, 5));
    shuffleCards(allTravelers);
    
    // 原版农民设置：8 张农民中每位玩家发 2 张作起始手牌，没用到的退回盒子——小酒馆开局是空的，
    // 农民被打出当帮工后才会回到酒馆。（叔叔们的 2 张在下方建好 aiUncles 后发放）
    let peasantPool = [];
    for (let i = 0; i < 8; i++) {
        peasantPool.push({
            id: 'peasant_' + i,
            name: "农民 (Peasant)",
            role: "peasant",
            color: "peasant-yellow",
            rank: 0,
            loot: 4,
            annexName: "",
            annexDesc: "农民无法成为别馆。打出后直接返回小酒馆。",
            aptitude: "none"
        });
    }
    bistro = [];
    player.hand = [peasantPool.pop(), peasantPool.pop()];

    // 原版牌堆设置：按人数与局长从 70 张基础旅客中移除一定数量
    //   2人 移除35/25 → 牌堆35/45；3人 移除28/16 → 42/54；4人 移除22/6 → 48/64
    //  （开扩展时总牌数变多，按官方"移除相同数量"的规则等比放大牌堆）
    const REMOVE_TABLE = { 2: { short: 35, long: 25 }, 3: { short: 28, long: 16 }, 4: { short: 22, long: 6 } };
    let removeCount = (REMOVE_TABLE[playerCount] || REMOVE_TABLE[2])[gameLength === 'short' ? 'short' : 'long'];
    let deckSize = Math.max(1, allTravelers.length - removeCount);
    travelerDeck = allTravelers.slice(0, deckSize);
    removedStack = allTravelers.slice(deckSize);
    exitStack = [];
    finalRoundPending = false;
    pendingWelcomeCard = null;
    eventDeck = [];
    eventDiscard = [];
    currentEvent = null;
    carnieEventRevealedThisRound = false;
    resetRoundEffects();
    resetObjectEffects();
    if (expansionOptions.carnieEvents) {
        eventDeck = CARNIE_EVENTS.map(e => ({ ...e }));
        shuffleCards(eventDeck);
    }
    
    // 2. 建立 AI 叔叔（每个各自难度）与本局座位；每位叔叔同样发 2 张起始农民（原版：每位玩家 2 张）
    aiUncles = [];
    for (let i = 0; i < playerCount - 1; i++) aiUncles.push(makeUncle(i, aiDiffs[i] || 'mastermind'));
    aiUncles.forEach(u => { u.hand.push(peasantPool.pop(), peasantPool.pop()); });
    ai = aiUncles[0];
    // 没发出去的农民按原版退回盒子（不进酒馆）——peasantPool 剩余的直接丢弃

    // 3. 按人数初始化客房版图（room.key: 'player' / AI叔叔下标 / 'neutral' / 'closed'）
    rooms = buildBoard();
    syncAIKeys();

    player.cash = 5;
    player.checks = 1;
    player.annexes = [makeBarnAnnex()];
    player.corpses = [];
    player.objects = [];
    playerExtraBuried = 0;
    if (expansionOptions.objects) {
        player.cash = 10; // 姑妈道具：起始现金 10F，道具通过轮抽获得、付款后再扣
        aiUncles.forEach(u => u.cash = 10); // 原版：所有玩家起始 10F、各自轮抽付款
    }

    // 4. 随机座位顺序（玩家位置随机），主理人从座位 0 起每轮轮换
    turnOrder = ['player'];
    for (let i = 0; i < playerCount - 1; i++) turnOrder.push(i);
    shuffleCards(turnOrder);
    firstActorIdx = 0;
    activeActorIdx = 0;

    roundNum = 1;
    seasonNum = 1;
    currentPhase = 'welcome';
    actionNumber = 1;
    
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    document.getElementById('info-game-length').innerText = `${gameLength === 'short' ? '短局' : '长局'} (${travelerDeck.length}张牌)`;
    // N 人局：列出每个 AI 叔叔的难度（座位随机，故按叔叔编号列出；2 人局只有一个 AI，省去编号）
    let diffName = aiUncles.length === 1
        ? (DIFF_LABELS[aiUncles[0].difficulty] || aiUncles[0].difficulty)
        : aiUncles.map((u, i) => `${'①②③④'[i]}${DIFF_LABELS[u.difficulty] || u.difficulty}`).join('  ');
    document.getElementById('info-difficulty').innerText = diffName;
    let enabledModules = [];
    if (expansionOptions.carnies) enabledModules.push('嘉年华员工');
    if (expansionOptions.carnieEvents) enabledModules.push('事件牌');
    if (expansionOptions.notables) enabledModules.push('名流替换贵族');
    if (expansionOptions.fanNotables) enabledModules.push('★自制·镇上的新面孔(同人)');
    if (expansionOptions.objects) enabledModules.push('姑妈道具');
    logMessage("系统", `本局扩展：${enabledModules.length ? enabledModules.join('、') : '未加入扩展'}。`, "system");
    
    refreshIcons();
    
    logMessage("系统", "开始了一局新的《血腥旅馆》游戏。夜幕降临...", "system");
    renderUI();
    if (expansionOptions.objects) {
        startObjectDraft();   // 姑妈道具轮抽 → 付款 → finishObjectSetup() → 迎客
    } else {
        finishObjectSetup();
    }
}

function finishObjectSetup() {
    renderUI();
    showBanner('THE BLOODY INN', '罪恶之夜降临…', 'gamestart');
    setTimeout(runPhaseWelcome, 900);
}

// ==========================================
// 姑妈道具：轮抽（4选1→3选1→2选1，最后一张丢弃）+ 付款选择
// ==========================================
let draftState = null;
let paymentState = null;

// AI 对道具的估值（用于轮抽挑选）：常用且 AI 会玩的道具更值钱
const AI_OBJECT_VALUE = {
    coffee: 5, extra_rent: 5, bury_bonus: 4.2, hide_corpse: 4, remove_corpse: 4,
    catchup: 3.5, force_police: 3, poison: 2.5,
};
function aiObjectValue(o) {
    return (AI_OBJECT_VALUE[o.effect] || 2) - o.cost * 0.8;
}

function startObjectDraft() {
    let deck = shuffleCards(OBJECT_CARDS.map(o => ({ ...o })));
    deck.forEach((o, i) => o.instanceId = `obj_${i}_${Math.random().toString(36).substr(2, 5)}`);
    // 原版：每人发 4 张（其余回盒）；选 1 传左 ×3 轮，最后 1 张回盒
    // packets[0] = 你的牌包，packets[1+i] = 叔叔 i 的牌包；每轮选完后整体向左传
    let packets = [];
    for (let p = 0; p < playerCount; p++) packets.push(deck.splice(0, 4));
    draftState = { packets, step: 0, picked: [], aiPicked: aiUncles.map(() => []) };
    dealDraftPacket();
}
function dealDraftPacket() {
    renderDraftModal();
    document.getElementById('draft-modal').classList.remove('hidden');
}
function pickDraftCard(instanceId) {
    if (!draftState) return;
    let packet = draftState.packets[0];
    let idx = packet.findIndex(o => o.instanceId === instanceId);
    if (idx === -1) return;
    draftState.picked.push(packet.splice(idx, 1)[0]);
    playSound('object');

    // 各叔叔同时从自己的牌包里挑一张（按 AI 估值）
    aiUncles.forEach((u, i) => {
        let p = draftState.packets[1 + i];
        if (p && p.length > 0) {
            p.sort((a, b) => aiObjectValue(b) - aiObjectValue(a));
            draftState.aiPicked[i].push(p.shift());
        }
    });

    // 传左：每人把剩余牌包传给下一位（你传给叔叔①，最后一位传回你）
    draftState.packets.unshift(draftState.packets.pop());

    draftState.step++;
    if (draftState.step < 3) {
        dealDraftPacket();
    } else {
        document.getElementById('draft-modal').classList.add('hidden');
        // 叔叔们直接保留所选道具并付款（3 张至多 9F，从 10F 起始现金里扣）
        aiUncles.forEach((u, i) => {
            u.objects = draftState.aiPicked[i];
            let cost = u.objects.reduce((s, o) => s + o.cost, 0);
            u.cash = Math.max(0, 10 - cost);
            logMessage("AI", `${u.name}在轮抽中留下了 ${u.objects.length} 张道具（花费 ${cost}F）。`, "ai");
        });
        startObjectPayment();
    }
}
function renderDraftModal() {
    const hints = ['从 4 张里选 1 张（其余传给下家）', '从 3 张里选 1 张（这是上家传来的）', '从 2 张里选 1 张（剩下 1 张回盒）'];
    document.getElementById('draft-step-label').innerText = `轮抽 ${draftState.step + 1} / 3 · 已选 ${draftState.picked.length} 张`;
    document.getElementById('draft-hint').innerText = hints[draftState.step] + (playerCount > 1 ? ' · 叔叔们也在同步挑选' : '');
    document.getElementById('draft-cards').innerHTML = draftState.packets[0].map(o =>
        `<button class="draft-card" onclick="pickDraftCard('${o.instanceId}')">
            <span class="draft-cost">${o.cost}F</span>
            <span class="draft-name">${o.name}</span>
            <span class="draft-timing">${o.timing}</span>
            <span class="draft-desc">${o.desc}</span>
        </button>`).join('');
}
function startObjectPayment() {
    paymentState = { keep: draftState.picked.map(() => true) };
    renderPaymentModal();
    document.getElementById('payment-modal').classList.remove('hidden');
}
function toggleKeepObject(i) {
    if (!paymentState) return;
    paymentState.keep[i] = !paymentState.keep[i];
    renderPaymentModal();
}
function paymentTotal() {
    return draftState.picked.reduce((s, o, i) => s + (paymentState.keep[i] ? o.cost : 0), 0);
}
function renderPaymentModal() {
    let total = paymentTotal();
    document.getElementById('payment-cards').innerHTML = draftState.picked.map((o, i) =>
        `<div class="pay-card ${paymentState.keep[i] ? 'kept' : 'dropped'}" onclick="toggleKeepObject(${i})">
            <span class="pay-cost">${o.cost}F</span>
            <span class="pay-name">${o.name}</span>
            <span class="pay-desc">${o.desc}</span>
            <span class="pay-state">${paymentState.keep[i] ? '✔ 保留' : '✖ 丢弃'}</span>
        </div>`).join('');
    document.getElementById('payment-total').innerHTML =
        `保留花费 <strong>${total}F</strong> ，起始 10F → 开局现金 <strong>${Math.max(0, 10 - total)}F</strong>`;
    let btn = document.getElementById('payment-confirm');
    btn.disabled = total > 10;
    btn.innerText = total > 10 ? '花费超过 10F，请少留几张' : '确认并开局';
}
function confirmObjectPayment() {
    let total = paymentTotal();
    if (total > 10) return;
    player.objects = draftState.picked.filter((o, i) => paymentState.keep[i]);
    player.cash = 10 - total;
    logMessage("道具", `姑妈道具轮抽结束：保留 ${player.objects.length} 张道具，花费 ${total}F，开局现金 ${player.cash}F。`, "player");
    document.getElementById('payment-modal').classList.add('hidden');
    draftState = null; paymentState = null;
    finishObjectSetup();
}

// ==========================================
// 游戏循环核心逻辑
// ==========================================
function runPhaseWelcome() {
    currentPhase = 'welcome';
    pendingWelcomeCard = null;
    currentEvent = null;
    carnieEventRevealedThisRound = false;
    resetRoundEffects();
    resetPendingAction();
    updateHeaderStatus("黄昏迎客", "welcome");
    let hostName = actorName(hostActor());
    logMessage("系统", `--- 第 ${roundNum} 轮：黄昏阶段 (迎客入店)，本轮主理人：${hostName} ---`, "system");
    showBanner(`第 ${roundNum} 轮`, `主理人：${hostName} · ${seasonNum === 1 ? '第一' : '第二'}季度`, 'round');

    if (isHumanHost()) {
        logMessage("玩家", "您是本轮主理人。每抽到一位旅客后，请选择一间开放且空置的客房。", "player");
        welcomeGuestsSequentially();
    } else {
        logMessage("AI", `${hostName}是本轮主理人，由他安排迎客的房间顺序...`, "ai");
        setTimeout(aiWelcomeGuests, 1000);
    }
}

function welcomeGuestsSequentially() {
    // 原版：开放客房与「无尸拖车」都必须安排旅客入住
    let emptyRooms = rooms.filter(r => isOpenRoom(r) && !r.occupant);
    let emptyTrailers = eligibleTrailerSlots();
    if (emptyRooms.length === 0 && emptyTrailers.length === 0) {
        finishWelcomePhase();
        return;
    }

    // 只剩叔叔的拖车要填时：自动安排（强制入住，无选择意义）
    if (emptyRooms.length === 0 && emptyTrailers.every(t => t.owner !== 'player')) {
        let card = drawTravelerCard();
        if (!card) { finishWelcomePhase(); return; }
        let t = emptyTrailers[0];
        t.slot.occupant = card;
        let owner = aiUncles[t.owner];
        logMessage("玩家", `${card.name} 被安排住进${owner.name}的拖车（按规矩拖车必须入住）。`, "player");
        maybeRevealCarnieEvent(card);
        triggerBarkerBonus(card);
        renderUI();
        setTimeout(welcomeGuestsSequentially, 250);
        return;
    }

    pendingWelcomeCard = drawTravelerCard();
    if (!pendingWelcomeCard) {
        finishWelcomePhase();
        return;
    }

    // 原版规则：入店牌堆「正面朝上」摆放——主理人能直接看到牌堆顶这位旅客，将其安排进一间客房；
    // 取走后，下一位旅客随之显露。
    let nextCard = travelerDeck.length > 0 ? travelerDeck[travelerDeck.length - 1] : null;

    renderUI();
    const card = pendingWelcomeCard;
    const area = document.getElementById('interactive-actions');
    area.classList.remove('hidden');
    area.innerHTML = `
        <div class="welcome-faceup card-flip-in">
            <div class="wf-traveler ${card.color}">
                <div class="card-emblem">${getRoleEmblem(card.role)}</div>
                <span class="mini-label">入店牌堆顶 · 正面朝上</span>
                <strong>${card.name}</strong>
                <span>${getRankDisplay(card)} · 携带 ${card.loot}F</span>
            </div>
        </div>
        <div class="hint-line" id="welcome-hint">${isHumanHost()
            ? `请把 <strong>${card.name}</strong> 安排进一间开放且空置的客房${eligibleTrailerSlots().length > 0 ? '或拖车（拖车也必须入住！）' : ''}（点击客房${eligibleTrailerSlots().length > 0 ? '/拖车' : ''}）。`
            : '主理人正在安排入住…'}</div>
        ${nextCard
            ? `<div class="next-peek">取走后下一位：<strong>${nextCard.name}</strong>（${getRankDisplay(nextCard)}）</div>`
            : `<div class="next-peek">这是入店牌堆的最后一位旅客。</div>`}
    `;
    document.getElementById('action-box-title').innerText = "黄昏迎客";
    document.getElementById('action-box-desc').innerText = isHumanHost() ? `请安置 ${card.name}（点击客房）。` : '';
    enableMainActionButtons(false);
    playSound('checkin');
    refreshIcons();
}

function handleWelcomeRoomSelect(roomId) {
    if (currentPhase !== 'welcome' || !pendingWelcomeCard || !isHumanHost()) return;
    let room = rooms.find(r => r.id === roomId);
    if (!room || !isOpenRoom(room) || room.occupant) return;

    room.occupant = pendingWelcomeCard;
    logMessage("玩家", `${pendingWelcomeCard.name} (等级 ${pendingWelcomeCard.rank}) 入住了 ${room.id} 号房。`, "player");
    maybeRevealCarnieEvent(pendingWelcomeCard);
    triggerBarkerBonus(room.occupant);
    playEffect('checkin', `${room.id}号房`, document.getElementById('room-' + room.id));
    pendingWelcomeCard = null;
    triggerRoomServiceImmediate(room);
    renderUI();
    setTimeout(welcomeGuestsSequentially, 250);
}

// 迎客：把旅客安排进自己的拖车（原版：无尸拖车必须入住；客房服务对拖车无效）
function handleWelcomeTrailerSelect(annexIndex) {
    if (currentPhase !== 'welcome' || !pendingWelcomeCard || !isHumanHost()) return;
    let slot = player.annexes[annexIndex];
    if (!slot || !slot.card.isTrailer || slot.occupant || slot.buried.length > 0) return;

    slot.occupant = pendingWelcomeCard;
    logMessage("玩家", `${pendingWelcomeCard.name} 被安排住进了你的拖车「${slot.card.name.split(' (')[0]}」（清晨退房时 +1F）。`, "player");
    maybeRevealCarnieEvent(pendingWelcomeCard);
    triggerBarkerBonus(slot.occupant);
    playEffect('checkin', '拖车', document.getElementById('player-annexes'));
    pendingWelcomeCard = null;
    renderUI();
    setTimeout(welcomeGuestsSequentially, 250);
}

function aiWelcomeGuests() {
    let emptyRooms = rooms.filter(r => isOpenRoom(r) && !r.occupant);
    let emptyTrailers = eligibleTrailerSlots(); // 玩家的无尸拖车也必须入住（原版强制）
    if (emptyRooms.length === 0 && emptyTrailers.length === 0) {
        finishWelcomePhase();
        return;
    }

    // 规则（Evil Uncle 单人模式）：查看牌堆顶等同空位数的旅客，最低等级塞玩家房、最高塞自己房、其余进中立房
    let drawn = [];
    for (let i = 0; i < emptyRooms.length + emptyTrailers.length; i++) {
        let card = drawTravelerCard();
        if (card) drawn.push(card);
    }
    if (drawn.length === 0) {
        finishWelcomePhase();
        return;
    }

    drawn.sort((a, b) => getCardRank(a, 'bribe') - getCardRank(b, 'bribe'));
    // 主理人(某个 AI 叔叔)的视角：低等级塞给对手，高等级留给自己，其余进中立房
    let host = aiUncles[hostActor()];
    let ownRooms = emptyRooms.filter(r => r.key === host.idx);
    let oppRooms = emptyRooms.filter(r => r.key === 'player' || (typeof r.key === 'number' && r.key !== host.idx));
    let neutralRooms = emptyRooms.filter(r => r.key === 'neutral');

    // 单次分配，避免双计数器交叉导致的重复/漏发；拖车一律塞低等级（占用者可被抢，等级无关紧要）
    let assignments = [];
    let lo = 0, hi = drawn.length - 1;
    oppRooms.forEach(r => { if (lo <= hi) assignments.push({ room: r, card: drawn[lo++], kind: 'opp' }); });
    emptyTrailers.forEach(t => { if (lo <= hi) assignments.push({ trailer: t.slot, trailerOwner: t.owner, card: drawn[lo++], kind: 'trailer' }); });
    ownRooms.forEach(r => { if (lo <= hi) assignments.push({ room: r, card: drawn[hi--], kind: 'own' }); });
    neutralRooms.forEach(r => { if (lo <= hi) assignments.push({ room: r, card: drawn[lo++], kind: 'neutral' }); });

    // 逐个入住，带交错的翻牌/入住动画
    let idx = 0;
    (function placeNext() {
        if (idx >= assignments.length) {
            renderUI();
            setTimeout(finishWelcomePhase, 700);
            return;
        }
        let { room, trailer, trailerOwner, card, kind } = assignments[idx++];
        let rank = getCardRank(card, 'bribe');
        if (kind === 'trailer') {
            trailer.occupant = card;
            let whose = trailerOwner === 'player' ? '你的'
                : (aiUncles[trailerOwner] === host ? '自己的' : `${aiUncles[trailerOwner].name}的`);
            logMessage("AI", `${host.name}按规矩把 ${card.name}（等级 ${rank}）安排进了${whose}拖车。`, "ai");
            maybeRevealCarnieEvent(card);
            triggerBarkerBonus(card);
            renderUI();
            playEffect('checkin', '拖车', trailerOwner === 'player' ? document.getElementById('player-annexes') : document.getElementById('uncle-box-' + trailerOwner));
            setTimeout(placeNext, 480);
            return;
        }
        room.occupant = card;
        let ownerName = isHumanRoom(room) ? '您' : (uncleOfRoom(room) ? uncleOfRoom(room).name : '中立');
        // 拟人：主理人不播报意图——只报客观事实（想看穿他的算盘？自己观察）
        logMessage("AI", `${host.name}把 ${card.name}（等级 ${rank}）安排进了${ownerName === '您' ? '您' : ownerName}的 ${room.id} 号房。`, "ai");
        maybeRevealCarnieEvent(card);
        triggerBarkerBonus(card);
        triggerRoomServiceImmediate(room);
        renderUI();
        playEffect('checkin', `${room.id}号房`, document.getElementById('room-' + room.id));
        setTimeout(placeNext, 480);
    })();
}

function prepareSecondSeason() {
    if (seasonNum !== 1 || exitStack.length === 0) return false;
    logMessage("系统", "第一季度旅客牌堆已空。离店堆重新洗牌，第二季度开始！", "system");
    seasonNum = 2;
    travelerDeck = shuffleCards(exitStack.splice(0));
    showBanner('第二季度', '离店旅客重新洗入牌堆', 'season');
    return true;
}

function drawTravelerCard() {
    if (travelerDeck.length === 0) {
        if (!prepareSecondSeason()) {
            finalRoundPending = true;
            logMessage("系统", "第二季度旅客牌堆耗尽。本轮将作为最后一轮处理。", "warn");
            return null;
        }
    }
    return travelerDeck.pop();
}

function maybeRevealCarnieEvent(card) {
    if (!expansionOptions.carnieEvents || carnieEventRevealedThisRound || !card || card.role !== 'carnie') return;
    if (eventDeck.length === 0 && eventDiscard.length > 0) {
        eventDeck = shuffleCards(eventDiscard.splice(0));
    }
    if (eventDeck.length === 0) return;
    currentEvent = eventDeck.pop();
    carnieEventRevealedThisRound = true;
    logMessage("事件", `嘉年华事件翻开：【${currentEvent.name}】${currentEvent.desc}`, "warn");
    playEffect('carnie');
}

function anyCarnieInPlay() {
    return allOccupiedSpots().some(s => s.occupant.role === 'carnie');
}

function resolveCarnieEvent() {
    if (!currentEvent) return;
    // 原版："无论是否结算，弃置事件卡"——清晨没有嘉年华住客时事件不生效，但卡必须进弃牌堆
    if (!anyCarnieInPlay()) {
        logMessage("事件", `嘉年华事件【${currentEvent.name}】未结算（旅馆中已无嘉年华旅客），弃置。`, "system");
        eventDiscard.push(currentEvent);
        currentEvent = null;
        return;
    }
    logMessage("事件", `结算嘉年华事件：【${currentEvent.name}】`, "warn");
    // 大横幅：事件结算是全桌大事，不能只藏在日志里
    showBanner(`⚡ ${currentEvent.name}`, currentEvent.desc, 'carnie');

    if (currentEvent.id === 'blackmail' || currentEvent.id === 'red_herring') {
        roundEffects.forceInvestigation = true;
    } else if (currentEvent.id === 'broken_safe') {
        let playerLost = Math.ceil(player.checks / 2);
        player.checks = Math.max(0, player.checks - playerLost);
        aiUncles.forEach(u => { u.checks = Math.max(0, u.checks - Math.ceil(u.checks / 2)); });
        logMessage("事件", `破保险箱：所有人各失去约一半支票（你失去 ${playerLost} 张）。`, "warn");
    } else if (currentEvent.id === 'cirrhosis') {
        if (bistro.length > 0) {
            let removed = bistro.pop();
            removedStack.push(removed);
            logMessage("事件", "酒精中毒：小酒馆一名农民被移出本局。", "warn");
        }
    } else if (currentEvent.id === 'extortion') {
        roundEffects.wageSurcharge = 1;
    } else if (currentEvent.id === 'fiasco') {
        roundEffects.fiasco = true;
    } else if (currentEvent.id === 'high_season') {
        roundEffects.extraRent = 1;
    } else if (currentEvent.id === 'pickpockets') {
        roundEffects.pickpockets = true;
    }

    eventDiscard.push(currentEvent);
    currentEvent = null;
}

// 嘉年华摊位/叫卖人：每当一名嘉年华旅客入住，拥有摊位的玩家获得 3F
function triggerBarkerBonus(card) {
    if (!card || card.role !== 'carnie') return;
    let boothCount = player.annexes.filter(a => a.card.annexName.includes("嘉年华摊位")).length;
    if (boothCount > 0) {
        addPlayerCash(3 * boothCount);
        logMessage("玩家", `[嘉年华摊位] 一名嘉年华旅客入住，你获得 ${3 * boothCount}F。`, "player");
    }
}

function triggerRoomServiceImmediate(room) {
    if (room.occupant && roomHasService(room)) {
        let occupantRank = room.occupant.rank;
        let owner = (room.serviceOwner !== null && room.serviceOwner !== undefined) ? room.serviceOwner : room.key;
        if (owner === 'player') {
            addPlayerCash(occupantRank);
            logMessage("玩家", `您的客房服务在 ${room.id} 房生效，立刻获得 ${occupantRank}F！`, "player");
        } else if (typeof owner === 'number' && aiUncles[owner]) {
            let u = aiUncles[owner];
            addUncleCash(u, occupantRank);
            logMessage("AI", `${u.name}的客房服务在 ${room.id} 房生效，他获得了额外 ${occupantRank}F！`, "ai");
        }
    }
}

function finishWelcomePhase() {
    pendingWelcomeCard = null;
    let occupiedCount = allOccupiedSpots().length; // 客房 + 拖车（原版：拖车视同客房）
    renderUI();

    if (finalRoundPending && occupiedCount < playerCount) {
        logMessage("系统", `最终迎客时旅馆内旅客不足 ${playerCount} 位，按规则不再进行最后一轮行动。`, "warn");
        setTimeout(triggerGameOver, 700);
        return;
    }

    setTimeout(startNightPhase, 700);
}

function startNightPhase() {
    pendingWelcomeCard = null;
    resetPendingAction();
    actionNumber = 1;
    activeActorIdx = firstActorIdx;
    runActionStep();
}

function runActionStep() {
    renderUI();
    if (actionNumber > 2) {
        setTimeout(runPhaseMorning, 1000);
        return;
    }

    currentPhase = `action${actionNumber}`;
    updateHeaderStatus(`夜晚行动 (动作 ${actionNumber}/2)`, "action");

    let actor = currentActor();
    if (actor === 'player') {
        document.getElementById('player-action-box').classList.add('active');
        document.getElementById('action-box-title').innerText = `您的第 ${actionNumber} 次行动`;
        document.getElementById('action-box-desc').innerText = "请从下方选择一项违法行动：";
        enableMainActionButtons(true);
    } else {
        let u = aiUncles[actor];
        document.getElementById('player-action-box').classList.remove('active');
        document.getElementById('action-box-title').innerText = `${u.name}正在执行行动...`;
        document.getElementById('action-box-desc').innerText = `等待 ${u.name} 出手…`;
        enableMainActionButtons(false);
        // 拟人：思考时间随机浮动（终局更谨慎想更久），不再是机械的固定节拍
        let thinkMs = 750 + Math.random() * 1300 + (getRoundPhase() === 'late' ? 450 : 0);
        setTimeout(() => aiStrategicAction(u), thinkMs);
    }
}

function enableMainActionButtons(enable) {
    const btns = document.querySelectorAll('#main-actions button');
    btns.forEach(btn => btn.disabled = !enable);
}

function resetPendingAction() {
    pendingAction = { type: null, target: null, targets: [], targetCorpse: null, selectedHelpers: [] };
    const area = document.getElementById('interactive-actions');
    area.innerHTML = '';
    area.classList.add('hidden');
    document.querySelectorAll('.room-door').forEach(d => d.classList.remove('highlight'));
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected', 'highlight', 'payment-blocked'));
    document.querySelectorAll('.annex-slot-container').forEach(a => a.classList.remove('selected', 'highlight'));
}

function isAwaitingPayment() {
    return pendingAction.cost !== undefined;
}

function warnIfAwaitingPayment() {
    if (!isAwaitingPayment()) return false;
    logMessage("系统", "已进入支付帮工阶段，请先完成或取消当前行动。", "warn");
    return true;
}

function cancelPendingAction() {
    resetPendingAction();
    logMessage("玩家", "取消了当前行动。", "player");
    runActionStep();
}

// ==========================================
// 辅助多目标选择交互方法 (Butcher, Shopkeeper, Brewer, Archbishop)
// ==========================================
function toggleSelectedTarget(card) {
    let idx = pendingAction.targets.findIndex(t => t.id === card.id);
    if (idx !== -1) {
        pendingAction.targets.splice(idx, 1);
    } else {
        let hasBrewer = player.annexes.some(a => a.card.annexName.includes("啤酒厂"));
        if (pendingAction.type === 'bribe' && card.role === 'peasant' && hasBrewer && pendingAction.targets.length >= 4) {
            logMessage("系统", "啤酒厂技能最多一次性收买 4 名农民！", "warn");
            return;
        }
        pendingAction.targets.push(card);
    }
    
    // 更新高亮样式
    document.querySelectorAll('.card').forEach(el => el.classList.remove('selected'));
    pendingAction.targets.forEach(t => {
        let el = document.getElementById(`hand-${t.id}`) || document.getElementById(`corpse-${t.id}`);
        if (el) el.classList.add('selected');
        
        rooms.forEach(r => {
            if (r.occupant && r.occupant.id === t.id) {
                let roomEl = document.querySelector(`#room-${r.id} .card`);
                if (roomEl) roomEl.classList.add('selected');
            }
        });
        
        if (bistro.some(p => p.id === t.id)) {
            let peasantEl = document.getElementById(`peasant-${t.id}`);
            if (peasantEl) peasantEl.classList.add('selected');
        }
    });
    
    renderTargetConfirmArea();
}

function renderTargetConfirmArea() {
    const area = document.getElementById('interactive-actions');
    area.classList.remove('hidden');
    let targetNames = pendingAction.targets.map(t => t.name).join(", ") || "未选择";
    
    area.innerHTML = `
        <div style="font-size: 13px; margin-bottom: 10px;">
            <div>当前已选择目标: <strong style="color: #ef5350;">${targetNames}</strong></div>
        </div>
        <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary" onclick="cancelPendingAction()">取消行动</button>
            <button class="btn btn-primary" id="btn-confirm-targets" onclick="confirmTargets()" ${pendingAction.targets.length === 0 ? 'disabled' : ''}>确认选择目标</button>
        </div>
    `;
}

function confirmTargets() {
    if (isAwaitingPayment()) return;

    let totalCost = 0;
    let type = pendingAction.type;
    
    if (type === 'bribe') {
        let repCount = player.annexes.filter(a => a.card.annexName.includes("会客厅")).length;
        pendingAction.targets.forEach(t => {
            if (t.role !== 'peasant') {
                totalCost += Math.max(0, getCardRank(t, 'bribe') - repCount);
            }
        });
    }
    else if (type === 'kill') {
        let tamerCount = player.annexes.filter(a => a.card.annexName.includes("熊戏笼") || a.card.annexName.includes("熊笼")).length;
        pendingAction.targets.forEach(t => {
            totalCost += Math.max(0, getCardRank(t, 'kill') - tamerCount);
        });
    }
    else if (type === 'bury') {
        let abbotCount = player.annexes.filter(a => a.card.annexName.includes("酒窖")).length;
        pendingAction.targets.forEach(t => {
            totalCost += Math.max(0, getCardRank(t, 'bury') - abbotCount - (objectEffects.buryDiscount || 0));
        });
        
        // 检查别馆容量
        let totalCapacity = 0;
        player.annexes.forEach(annex => {
            let maxBurial = getAnnexCapacity(annex.card);
            totalCapacity += (maxBurial - effectiveBuried(annex));
        });
        
        if (totalCapacity < pendingAction.targets.length) {
            logMessage("系统", "别馆总剩余容量不足以容纳所选的全部尸体！", "warn");
            return;
        }
    }
    
    pendingAction.cost = totalCost;
    logMessage("系统", `目标锁定完毕。本次行动总费用为: ${totalCost} 张帮工牌。`, "system");
    
    if (totalCost === 0) {
        finishPlayerAction();
    } else {
        requestPaymentCards(totalCost);
    }
}

function finishPlayerAction() {
    if (isAwaitingPayment() && pendingAction.selectedHelpers.length < pendingAction.cost) {
        logMessage("系统", "尚未选择足够的帮工牌，不能执行行动。", "warn");
        return;
    }

    if (pendingAction.type === 'bury' && pendingAction.target && pendingAction.target.annexIndex !== undefined) {
        let targetSlot = pendingAction.target.uncleIdx !== undefined
            ? aiUncles[pendingAction.target.uncleIdx].annexes[pendingAction.target.annexIndex]
            : player.annexes[pendingAction.target.annexIndex];
        if (!targetSlot) {
            logMessage("系统", "目标别馆不存在，请取消后重新选择埋尸位置。", "warn");
            return;
        }
        let maxBurial = getAnnexCapacity(targetSlot.card);
        if (effectiveBuried(targetSlot) >= maxBurial) {
            logMessage("系统", "目标别馆容量已满，请取消后重新选择埋尸位置。", "warn");
            return;
        }
    }

    // 扣除打出的帮工
    let hasChapelForBury = pendingAction.type === 'bury' && player.annexes.some(a => a.card.annexName.includes("小教堂"));
    let hasCompanionNook = pendingAction.type === 'bribe' && player.annexes.some(a => a.card.annexName.includes("密室"));
    let returnAllHelpers = hasChapelForBury || hasCompanionNook || !!objectEffects.returnHelpersFor[pendingAction.type];
    pendingAction.selectedHelpers.forEach(helper => {
        let idx = player.hand.findIndex(h => h.id === helper.id);
        if (idx !== -1) {
            player.hand.splice(idx, 1);
        }
        let isAptitudeMatch = false;
        if (pendingAction.type === 'bribe' && helper.aptitude === 'bribe') isAptitudeMatch = true;
        if (pendingAction.type === 'build' && helper.aptitude === 'build') isAptitudeMatch = true;
        if (pendingAction.type === 'kill' && helper.aptitude === 'kill') isAptitudeMatch = true;
        if (pendingAction.type === 'bury' && helper.aptitude === 'bury') isAptitudeMatch = true;
        
        if (returnAllHelpers) {
            player.hand.push(helper);
        } else if (helper.role === 'peasant') {
            bistro.push(helper);
            logMessage("系统", "帮手农民返回了小酒馆。", "system");
        } else if (isAptitudeMatch) {
            player.hand.push(helper);
            logMessage("玩家", `帮手 ${helper.name} 符合本次特长，安全返回手牌！`, "player");
        } else {
            exitStack.push(helper);
        }
    });

    if (returnAllHelpers && pendingAction.selectedHelpers.length > 0) {
        logMessage("玩家", "由于别馆/道具效果，本次打出的帮工全部回到了手牌。", "player");
        objectEffects.returnHelpersFor[pendingAction.type] = false;
    }

    // 执行对应的实体变化 (支持多目标处理)
    let targets = pendingAction.targets || [pendingAction.target];
    // 目标可能在客房、拖车（原版视同客房）或小酒馆——统一清除占位
    const clearGuestSpot = (t) => {
        let room = rooms.find(r => r.occupant && r.occupant.id === t.id);
        if (room) { room.occupant = null; return { anchor: document.getElementById('room-' + room.id), ownerKey: room.key }; }
        let trailer = player.annexes.find(a => a.card.isTrailer && a.occupant && a.occupant.id === t.id);
        if (trailer) { trailer.occupant = null; return { anchor: document.getElementById('player-annexes'), ownerKey: 'player' }; }
        for (let u of aiUncles) {
            let tr = (u.annexes || []).find(a => a.card.isTrailer && a.occupant && a.occupant.id === t.id);
            if (tr) { tr.occupant = null; return { anchor: document.getElementById('uncle-box-' + u.idx), ownerKey: u.idx }; }
        }
        let bIdx = bistro.findIndex(p => p.id === t.id);
        if (bIdx !== -1) bistro.splice(bIdx, 1);
        return { anchor: document.getElementById('player-action-box'), ownerKey: null };
    };
    // 玩家动了某位叔叔地盘上的客人 -> 那位叔叔记仇 + 当场抱怨（拟人）
    const angerOwner = (ownerKey) => {
        if (typeof ownerKey !== 'number' || !aiUncles[ownerKey]) return;
        let u = aiUncles[ownerKey];
        u.grudge = { vs: 'player', heat: Math.min(6, ((u.grudge && u.grudge.heat) || 0) + 2) };
        uncleReact('playerRobMyRoom', u);
    };
    if (pendingAction.type === 'bribe') {
        targets.forEach(t => {
            let spot = clearGuestSpot(t);
            angerOwner(spot.ownerKey);
            player.hand.push(t);
            logMessage("玩家", `成功拉拢帮凶 ${t.name} 入手！`, "player");
            playEffect('bribe', t.name, spot.anchor);
            flyCard(spot.anchor, document.getElementById('player-hand'), '🤝 ' + t.name.split(' (')[0]);
        });
    }
    else if (pendingAction.type === 'build') {
        let singleTarget = targets[0] || pendingAction.target;
        let handIdx = player.hand.findIndex(h => h.id === singleTarget.id);
        if (handIdx !== -1) player.hand.splice(handIdx, 1);
        let sourceRoom = rooms.find(r => r.occupant && r.occupant.id === singleTarget.id);
        if (sourceRoom) sourceRoom.occupant = null;
        player.annexes.push({ card: singleTarget, buried: [] });
        logMessage("玩家", `成功建立了别馆 [${singleTarget.annexName}]！`, "player");
        playEffect('build', singleTarget.annexName, document.getElementById('player-annexes'));
        triggerAnnexImmediateEffect(singleTarget);
        objectEffects.buildFromRoom = false;
    } 
    else if (pendingAction.type === 'kill') {
        targets.forEach(t => {
            let spot = clearGuestSpot(t);
            angerOwner(spot.ownerKey);
            t.isDead = true;
            if (objectEffects.well) {
                removedStack.push(t);
                objectEffects.well = false;
                logMessage("玩家", `刺杀了 ${t.name}，并用 [井] 直接处理了尸体。`, "player");
            } else {
                player.corpses.push(t);
                logMessage("玩家", `刺杀了 ${t.name}！尸体已移入您的未埋尸体堆。`, "player");
            }
            playEffect('kill', t.name, spot.anchor);
        });
        uncleReact('playerKill');
    }
    else if (pendingAction.type === 'bury') {
        if (pendingAction.target && pendingAction.target.uncleIdx !== undefined) {
            // 埋进叔叔的别馆：原版规则——与别馆主人平分尸体口袋里的钱
            let owner = aiUncles[pendingAction.target.uncleIdx];
            let targetSlot = owner.annexes[pendingAction.target.annexIndex];
            let corpse = pendingAction.target.corpse;
            let cIdx = player.corpses.findIndex(c => c.id === corpse.id);
            if (cIdx !== -1) player.corpses.splice(cIdx, 1);
            targetSlot.buried.push({ ...corpse, buriedByPlayer: true });
            if (corpse.specialBurial === 'twins') targetSlot.buried.push({ name: '双胞胎之二', loot: 0, isTwinPlaceholder: true, color: corpse.color, buriedByPlayer: true });
            playerExtraBuried += (corpse.specialBurial === 'twins' ? 2 : 1);
            let loot = corpse.loot + consumeGoldTeeth(corpse);
            let mine = Math.ceil(loot / 2), theirs = loot - mine;
            addPlayerCash(mine);
            addUncleCash(owner, theirs);
            logMessage("玩家", `你把 ${corpse.name} 埋进了 ${owner.name} 的 [${targetSlot.card.annexName}]——平分赃款：你 ${mine}F，他 ${theirs}F。`, "player");
            uncleReact('playerBuryInMine', owner);
            playEffect('bury', `+${mine}F`, document.getElementById('uncle-box-' + owner.idx));
        } else if (pendingAction.target && pendingAction.target.annexIndex !== undefined) {
            let targetSlot = player.annexes[pendingAction.target.annexIndex];
            let corpse = pendingAction.target.corpse;
            let cIdx = player.corpses.findIndex(c => c.id === corpse.id);
            if (cIdx !== -1) player.corpses.splice(cIdx, 1);
            tuckCorpse(targetSlot, corpse);
            awardBuryLoot(corpse, targetSlot.card.annexName, false);
        } else {
            targets.forEach(corpse => {
                let needed = corpse.specialBurial === 'twins' ? 2 : 1;
                let targetSlot = null;
                for (let idx = 0; idx < player.annexes.length; idx++) {
                    let annex = player.annexes[idx];
                    if (annex.card.isTrailer && annex.occupant) continue; // 占用中的拖车不能埋
                    let maxBurial = getAnnexCapacity(annex.card);
                    if (effectiveBuried(annex) + needed <= maxBurial) {
                        targetSlot = annex;
                        break;
                    }
                }
                if (!targetSlot) {
                    logMessage("系统", `没有足够容量埋葬 ${corpse.name}。`, "warn");
                    return;
                }
                let cIdx = player.corpses.findIndex(c => c.id === corpse.id);
                if (cIdx !== -1) player.corpses.splice(cIdx, 1);
                tuckCorpse(targetSlot, corpse);
                awardBuryLoot(corpse, targetSlot.card.annexName, true);
            });
        }
    }

    if (pendingAction.type === 'bury') {
        objectEffects.buryDiscount = 0;
    }

    resetPendingAction();
    advanceTurn();
}

function advanceTurn() {
    let next = (activeActorIdx + 1) % playerCount;
    if (next === firstActorIdx) {
        // 本动作轮所有人都走完
        if (actionNumber === 1) {
            actionNumber = 2;
            activeActorIdx = firstActorIdx;
            runActionStep();
        } else {
            runPhaseMorning();
        }
    } else {
        activeActorIdx = next;
        runActionStep();
    }
}

// --- 别馆与现金奖励瞬发逻辑 ---
function triggerAnnexImmediateEffect(card) {
    if (card.annexName.includes("菜园")) {
        let redCount = player.annexes.filter(a => a.card.color === "artisan-red").length;
        addPlayerCash(redCount);
        logMessage("玩家", `菜园效果：立刻获得当前红色别馆数 ${redCount}F！`, "player");
    } 
    else if (card.annexName.includes("报摊")) {
        let blueCount = player.annexes.filter(a => a.card.color === "merchant-blue").length;
        addPlayerCash(blueCount);
        logMessage("玩家", `报摊效果：立刻获得当前蓝色别馆数 ${blueCount}F！`, "player");
    }
    else if (card.annexName.includes("祭坛")) {
        let purpleCount = player.annexes.filter(a => a.card.color === "religious-purple").length;
        addPlayerCash(purpleCount);
        logMessage("玩家", `祭坛效果：立刻获得当前紫色别馆数 ${purpleCount}F！`, "player");
    }
    else if (card.annexName.includes("厢房")) {
        let neutralRoom = rooms.find(r => r.key === 'neutral');
        if (neutralRoom) {
            neutralRoom.key = 'player';
            syncAIKeys();
            logMessage("玩家", `厢房效果：你换掉了 ${neutralRoom.id} 号房的钥匙，它现在归你所有了！`, "player");
        } else {
            logMessage("系统", "没有可替换的中立钥匙，厢房效果未触发。", "system");
        }
    }
    else if (card.annexName.includes("客房服务")) {
        let emptyRoom = rooms.find(r => isOpenRoom(r) && r.key === 'player' && !roomHasService(r));
        if (emptyRoom) {
            setRoomService(emptyRoom, 'player');
            logMessage("玩家", `客房服务已布置在您的 ${emptyRoom.id} 号房间。`, "player");
        } else {
            let anyRoom = rooms.find(r => isOpenRoom(r) && !roomHasService(r));
            if (anyRoom) {
                setRoomService(anyRoom, 'player');
                logMessage("玩家", `客房服务已布置在 ${anyRoom.id} 号房间。`, "player");
            } else {
                logMessage("系统", "所有开放客房都已有客房服务，效果未触发。", "system");
            }
        }
    }
    else if (card.annexName.includes("豪华吊灯") || card.annexName.includes("豪华餐厅") || card.annexName.includes("特大号床") || card.annexName.includes("凉亭") || card.annexName.includes("公园") || card.annexName.includes("马厩") || card.annexName.includes("杂货铺") || card.annexName.includes("主教区")) {
        let bonus = 0;
        if (card.annexName.includes("豪华吊灯")) bonus = 4;
        if (card.annexName.includes("特大号床")) bonus = 6;
        if (card.annexName.includes("豪华餐厅")) bonus = 9;
        if (card.annexName.includes("凉亭")) bonus = 18;
        if (card.annexName.includes("公园")) bonus = 4;
        if (card.annexName.includes("马厩")) bonus = 4;
        if (card.annexName.includes("杂货铺")) bonus = 4;
        if (card.annexName.includes("主教区")) bonus = 4;
        addPlayerCash(bonus);
        logMessage("玩家", `建造别馆现金大礼包：立刻获得了 ${bonus}F 赃款！`, "player");
    }

    if (card.annexName.includes("嘉年华摊位")) {
        logMessage("玩家", "嘉年华摊位开张：此后每当有嘉年华旅客入住旅馆，你将获得 3F。", "player");
    } else if (card.annexName.includes("占卜帐篷")) {
        let peek = travelerDeck.slice(-3).map(c => c.name).reverse().join("、") || "牌堆不足";
        logMessage("玩家", `占卜帐篷查看牌堆顶：${peek}。`, "player");
    } else if (card.annexName.includes("铁锤游戏")) {
        addPlayerCash(4);
        logMessage("玩家", "铁锤游戏立刻获得 4F。", "player");
    } else if (card.annexName.includes("高台")) {
        addPlayerCash(1);
        if (bistro.length > 0) player.hand.push(bistro.pop());
        logMessage("玩家", "高台获得 1F，并从小酒馆招来 1 名农民。", "player");
    } else if (card.annexName.includes("丝绸农场")) {
        let count = rooms.filter(r => r.key === 'player' && r.occupant).length;
        addPlayerCash(count * 3);
        logMessage("玩家", `丝绸农场根据自家住客获得 ${count * 3}F。`, "player");
    } else if (card.annexName.includes("酒桶")) {
        let count = rooms.filter(r => r.key === 'neutral' && r.occupant).length;
        addPlayerCash(count * 3);
        logMessage("玩家", `酒桶根据中立住客获得 ${count * 3}F。`, "player");
    } else if (card.annexName.includes("马车站")) {
        addPlayerCash(6);
        logMessage("玩家", "【自制】马车站建成，立刻获得 6F。", "player");
    } else if (card.annexName.includes("珠宝室")) {
        addPlayerCash(8);
        logMessage("玩家", "【自制】珠宝室建成，立刻获得 8F。", "player");
    } else if (card.annexName.includes("档案室")) {
        addPlayerCash(4);
        logMessage("玩家", "【自制】档案室建成，立刻获得 4F。", "player");
    } else if (card.annexName.includes("交易所") && player.cash >= 10) {
        player.cash -= 10;
        player.checks += 1;
        logMessage("玩家", "【自制】交易所建成，立刻用 10F 买入 1 张支票。", "player");
        studyFollowExchange('player'); // 兑票动作：触发[书房]跟随
    } else if (card.annexName.includes("刀靶")) {
        // 飞刀手[刀靶]：建造时可对一名等级0旅客执行一次免费刺杀（不花帮工；尸体照常进未埋堆）
        let spots = allOccupiedSpots().filter(s => getCardRank(s.occupant, 'kill') === 0 && s.occupant.role !== 'police');
        if (spots.length > 0) {
            let best = spots.reduce((m, s) => (s.occupant.loot || 0) > (m.occupant.loot || 0) ? s : m, spots[0]);
            let victim = best.occupant;
            best.clear();
            victim.isDead = true;
            player.corpses.push(victim);
            logMessage("玩家", `[刀靶] 飞刀出手——免费刺杀了${best.label}的等级0旅客 ${victim.name}（尸体待埋葬）。`, "warn");
            playEffect('kill', victim.name, document.getElementById(best.anchorId));
        } else {
            logMessage("系统", "[刀靶] 旅馆里没有等级0的旅客，免费刺杀未触发。", "system");
        }
    }
}

// --- 夜晚动作：拉拢 (Bribe) ---
function initiateBribe() {
    resetPendingAction();
    pendingAction.type = 'bribe';
    logMessage("系统", "您选择了【拉拢帮凶】行动。请点击客房中的旅客或大堂酒馆的农民进行收买。", "system");
    renderUI();
    
    rooms.forEach(r => {
        if (r.occupant) {
            document.getElementById(`room-${r.id}`).classList.add('highlight');
        }
    });
    showCancelButton();
}

function handleBribeSelect(card) {
    if (pendingAction.type !== 'bribe' || warnIfAwaitingPayment()) return;

    let hasShopkeeper = player.annexes.some(a => a.card.annexName.includes("商铺"));
    let hasBrewer = player.annexes.some(a => a.card.annexName.includes("啤酒厂"));

    if (card.role === 'peasant') {
        // 原版规则：一次「拉拢」从小酒馆带走 2 名农民（无需支付帮工牌）；拥有[啤酒厂]时最多 4 名
        let maxTake = hasBrewer ? 4 : 2;
        let take = bistro.slice(0, maxTake);
        if (take.length === 0) {
            logMessage("系统", "小酒馆里没有农民可以收买。", "warn");
            cancelPendingAction();
            return;
        }
        pendingAction.targets = take;
        logMessage("玩家", `从小酒馆一次性收买了 ${take.length} 名农民（无需支付帮工牌）。`, "player");
        finishPlayerAction();
    } else if (hasShopkeeper) {
        toggleSelectedTarget(card);
    } else {
        pendingAction.targets = [card];
        let repCount = player.annexes.filter(a => a.card.annexName.includes("会客厅")).length;
        let actualCost = Math.max(0, getCardRank(card, 'bribe') - repCount);
        logMessage("玩家", `已选中拉拢目标：${card.name} (等级 ${getCardRank(card, 'bribe')})。需要支付 ${actualCost} 张帮工牌。`, "player");

        if (actualCost === 0) {
            finishPlayerAction();
        } else {
            requestPaymentCards(actualCost);
        }
    }
}

// --- 夜晚动作：建造 (Build) ---
function initiateBuild() {
    resetPendingAction();
    pendingAction.type = 'build';
    logMessage("系统", "您选择了【建造别馆】行动。请点击您手牌中的旅客卡牌（农民和警察无法被建造）。", "system");
    renderUI();
    
    player.hand.forEach(c => {
        if (c.role !== 'peasant' && c.role !== 'police') {
            document.getElementById(`hand-${c.id}`).classList.add('highlight');
        }
    });
    if (objectEffects.buildFromRoom) {
        rooms.forEach(r => {
            if (r.occupant && r.occupant.role !== 'peasant' && r.occupant.role !== 'police') {
                document.getElementById(`room-${r.id}`).classList.add('highlight');
            }
        });
    }
    showCancelButton();
}

function handleBuildSelect(card) {
    if (pendingAction.type !== 'build' || warnIfAwaitingPayment()) return;
    if (card.role === 'peasant' || card.role === 'police') {
        logMessage("系统", "农民和警察无法被改建为别馆！", "warn");
        return;
    }
    pendingAction.targets = [card];
    
    let mechCount = player.annexes.filter(a => a.card.annexName.includes("车间")).length;
    let actualCost = Math.max(0, getCardRank(card, 'build') - mechCount);
    logMessage("玩家", `已选中建造目标：${card.name}。需要支付 ${actualCost} 张帮工牌。`, "player");
    
    if (actualCost === 0) {
        finishPlayerAction();
    } else {
        requestPaymentCards(actualCost);
    }
}

// --- 夜晚动作：刺杀 (Kill) ---
function initiateKill() {
    resetPendingAction();
    pendingAction.type = 'kill';
    logMessage("系统", "您选择了【刺杀房客】行动。请点击客房中的旅客进行谋杀。", "system");
    renderUI();
    
    rooms.forEach(r => {
        if (r.occupant) {
            document.getElementById(`room-${r.id}`).classList.add('highlight');
        }
    });
    showCancelButton();
}

function handleKillSelect(card) {
    if (pendingAction.type !== 'kill' || warnIfAwaitingPayment()) return;
    
    let hasButcher = player.annexes.some(a => a.card.annexName.includes("肉铺"));
    if (hasButcher && card.role !== 'peasant') {
        toggleSelectedTarget(card);
    } else {
        pendingAction.targets = [card];
        let tamerCount = player.annexes.filter(a => a.card.annexName.includes("熊戏笼") || a.card.annexName.includes("熊笼")).length;
        let actualCost = Math.max(0, getCardRank(card, 'kill') - tamerCount);
        logMessage("玩家", `已选中暗杀目标：${card.name} (等级 ${getCardRank(card, 'kill')})。需要支付 ${actualCost} 张帮工牌。`, "player");
        
        if (actualCost === 0) {
            finishPlayerAction();
        } else {
            requestPaymentCards(actualCost);
        }
    }
}

// --- 夜晚动作：埋葬 (Bury) ---
function initiateBury() {
    resetPendingAction();
    pendingAction.type = 'bury';
    
    if (player.corpses.length === 0) {
        logMessage("系统", "您面前没有任何死尸需要埋葬！", "warn");
        return;
    }
    
    let hasArchbishop = player.annexes.some(a => a.card.annexName.includes("地下墓室"));
    if (hasArchbishop) {
        logMessage("系统", "大主教别馆：您可以点击选择多具尸体一起埋葬。", "system");
    } else {
        logMessage("系统", "请先从您的未埋尸体堆中点击一具尸体。", "system");
    }
    
    renderUI();
    player.corpses.forEach(c => {
        document.getElementById(`corpse-${c.id}`).classList.add('highlight');
    });
    showCancelButton();
}

function handleCorpseSelect(corpseCard) {
    if (pendingAction.type !== 'bury' || warnIfAwaitingPayment()) return;
    
    let hasArchbishop = player.annexes.some(a => a.card.annexName.includes("地下墓室"));
    if (hasArchbishop) {
        toggleSelectedTarget(corpseCard);
    } else {
        pendingAction.targetCorpse = corpseCard;
        // 寻找有容量空位的别馆（占用中的拖车不能埋——原版只允许"无人占用的拖车"）
        let availableSlots = [];
        let isBearded = corpseCard.specialBurial === 'bearded';
        if (!isBearded) {
            player.annexes.forEach((annex, index) => {
                if (annex.card.isTrailer && annex.occupant) return;
                let maxBurial = getAnnexCapacity(annex.card);
                if (effectiveBuried(annex) < maxBurial) availableSlots.push(index);
            });
        }
        // 对手的别馆也可以埋（平分赃款）；大胡子女士只能埋别人家
        let need = corpseCard.specialBurial === 'twins' ? 2 : 1;
        let uncleSlotAvailable = aiUncles.some(u => (u.annexes || []).some(a =>
            !(a.card.isTrailer && a.occupant) && effectiveBuried(a) + need <= getAnnexCapacity(a.card)));

        if (availableSlots.length === 0 && !uncleSlotAvailable) {
            logMessage("系统", isBearded ? "大胡子女士必须埋进对手的别馆，但对手没有空位——无法埋葬！" : "所有别馆全满，没有空间埋这具尸体！", "warn");
            cancelPendingAction();
            return;
        }

        logMessage("系统", isBearded
            ? "大胡子女士必须埋进【对手】的别馆（平分赃款）。请点击对手牌桌上的别馆。"
            : "已选定一具尸体。点击你的别馆，或对手牌桌上的别馆（与对方平分赃款）。", "system");
        renderUI(); // 让对手牌桌的可埋别馆亮起
        document.querySelectorAll('.annex-slot-container').forEach((el, idx) => {
            if (availableSlots.includes(idx)) el.classList.add('highlight');
        });
    }
}

function handleAnnexSlotSelect(index) {
    if (pendingAction.type !== 'bury' || !pendingAction.targetCorpse || warnIfAwaitingPayment()) return;

    let targetSlot = player.annexes[index];
    if (!targetSlot) return;
    if (pendingAction.targetCorpse && pendingAction.targetCorpse.specialBurial === 'bearded') {
        logMessage("系统", "大胡子女士必须埋进【对手】的别馆（点击对手牌桌）。", "warn");
        return;
    }
    if (targetSlot.card.isTrailer && targetSlot.occupant) {
        logMessage("系统", "拖车里还住着旅客，不能往下埋尸（原版：仅限无人占用的拖车）。", "warn");
        return;
    }
    let corpse = pendingAction.targetCorpse;
    let maxBurial = getAnnexCapacity(targetSlot.card);
    let needed = corpse.specialBurial === 'twins' ? 2 : 1; // 双胞胎占 2 个埋尸位、计 2 具尸体
    if (effectiveBuried(targetSlot) + needed > maxBurial) {
        logMessage("系统", needed === 2 ? "双胞胎必须埋在至少有 2 个空位的别馆下。" : "这个别馆已经没有空余埋尸容量。", "warn");
        return;
    }

    pendingAction.targets = [corpse];
    pendingAction.target = {
        corpse: corpse,
        annexIndex: index
    };
    
    let abbotCount = player.annexes.filter(a => a.card.annexName.includes("酒窖")).length;
    let actualCost = Math.max(0, getCardRank(corpse, 'bury') - abbotCount - (objectEffects.buryDiscount || 0));
    logMessage("玩家", `准备将尸体埋入 [${player.annexes[index].card.annexName}] 下。需要支付 ${actualCost} 张帮工牌。`, "player");
    
    if (actualCost === 0) {
        finishPlayerAction();
    } else {
        requestPaymentCards(actualCost);
    }
}

// --- 支付环节交互 ---
function requestPaymentCards(cost) {
    let blockedIds = new Set();
    if (pendingAction.type === 'build') {
        pendingAction.targets.forEach(t => blockedIds.add(t.id));
    }
    let availableHelpers = player.hand.filter(c => !blockedIds.has(c.id));

    if (availableHelpers.length < cost) {
        logMessage("系统", "您手牌中的帮工数量不足，无法支付本次行动费用！", "warn");
        cancelPendingAction();
        return;
    }
    
    pendingAction.cost = cost;
    pendingAction.selectedHelpers = [];
    
    document.querySelectorAll('#player-hand .card').forEach(el => {
        let cardId = el.id.replace('hand-', '');
        let card = player.hand.find(c => c.id === cardId);
        if (!card) return;

        el.onclick = null;
        if (blockedIds.has(card.id)) {
            el.classList.add('payment-blocked');
            return;
        }
        el.classList.add('highlight');
        el.onclick = () => selectHelperCard(card);
    });
    
    renderInteractivePaymentArea();
}

function renderInteractivePaymentArea() {
    const area = document.getElementById('interactive-actions');
    area.classList.remove('hidden');
    let helperNames = pendingAction.selectedHelpers.map(h => h.name).join(", ") || "未选择";
    
    area.innerHTML = `
        <div style="font-size: 13px; margin-bottom: 10px;">
            <div>已选择帮手: <strong style="color: #ef5350;">${helperNames}</strong></div>
            <div>还需要选择: <strong>${pendingAction.cost - pendingAction.selectedHelpers.length}</strong> 张牌</div>
        </div>
        <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary" onclick="cancelPendingAction()">取消行动</button>
            <button class="btn btn-primary" id="btn-confirm-action" onclick="finishPlayerAction()" disabled>确认执行</button>
        </div>
    `;
    
    if (pendingAction.selectedHelpers.length === pendingAction.cost) {
        document.getElementById('btn-confirm-action').disabled = false;
    }
}

function selectHelperCard(card) {
    if (!pendingAction.type || pendingAction.cost === undefined) return;
    if (pendingAction.type === 'build' && pendingAction.targets.some(t => t.id === card.id)) {
        logMessage("系统", "正在建造的目标卡不能同时作为支付费用的帮工。", "warn");
        return;
    }
    
    let isSelected = pendingAction.selectedHelpers.some(h => h.id === card.id);
    
    if (isSelected) {
        pendingAction.selectedHelpers = pendingAction.selectedHelpers.filter(h => h.id !== card.id);
        document.getElementById(`hand-${card.id}`).classList.remove('selected');
    } else {
        if (pendingAction.selectedHelpers.length < pendingAction.cost) {
            pendingAction.selectedHelpers.push(card);
            document.getElementById(`hand-${card.id}`).classList.add('selected');
        }
    }
    
    renderInteractivePaymentArea();
}

function showCancelButton() {
    const area = document.getElementById('interactive-actions');
    area.classList.remove('hidden');
    area.innerHTML = `
        <button class="btn btn-secondary" onclick="cancelPendingAction()">取消行动</button>
    `;
}

// --- 夜晚操作：洗钱 (Pass/Launder) ---
function initiateLaunder() {
    resetPendingAction();
    pendingAction.type = 'launder';
    
    document.getElementById('launder-cash-display').innerText = player.cash;
    document.getElementById('launder-checks-display').innerText = player.checks;
    document.getElementById('launder-modal').classList.remove('hidden');
}

function adjustLaunder(type) {
    if (type === 'buy-check') {
        if (player.cash >= 10) {
            player.cash -= 10;
            player.checks += 1;
            logMessage("玩家", "你兑换了 10F 现金换取了 1 张 10F 支票。", "player");
            studyFollowExchange('player'); // 名流[书房]：其他拥有者可跟随兑票
        } else {
            logMessage("系统", "现金不足 10F，无法购买支票！", "warn");
        }
    } 
    else if (type === 'sell-check') {
        if (player.checks >= 1) {
            if (player.cash + 10 <= 40) {
                player.checks -= 1;
                player.cash += 10;
                logMessage("玩家", "你将 1 张 10F 支票兑现为 10F 现金。", "player");
            } else {
                logMessage("系统", "现金轨道不能超过 40F，无法继续兑现！", "warn");
            }
        } else {
            logMessage("系统", "支票不足，无法兑现！", "warn");
        }
    }
    document.getElementById('launder-cash-display').innerText = player.cash;
    document.getElementById('launder-checks-display').innerText = player.checks;
}

function confirmLaunder() {
    document.getElementById('launder-modal').classList.add('hidden');
    logMessage("玩家", "洗钱结束，本回合 Pass 并结束行动。", "player");
    playEffect('launder', '', document.querySelector('.player-wealth-box'));
    resetPendingAction();
    advanceTurn();
}

// ==========================================
// 邪恶叔叔 AI 行动核心逻辑
// ==========================================
// ==========================================
// 策略叔叔（真人级）：审时度势地选择行动，而非翻固定行动卡
// ==========================================
function aiThink(self, text) {
    if (typeof self === 'string') { text = self; } // 向后兼容单参调用
    const el = document.getElementById('ai-drawn-card');
    if (el) el.innerText = '策略决策';
    logMessage("AI", text, "ai");
}

// 全局观念：早/中/晚阶段——早期重扩张与稳定收入，后期重抢劫与落袋
function getRoundPhase() {
    if (seasonNum >= 2) return 'late';
    return roundNum <= 2 ? 'early' : 'mid';
}
// 每档难度的策略性格（同一套引擎、不同权重，使 4 档各有性格又都有大局观）
// synergy：对「基于自己已建建筑调整后续行动」的领悟程度（1=完全协同思维，0=完全不懂）
const AI_PROFILES = {
    silly:      { kill: 1.0,  bribe: 0.2, room: 0.7, service: 0.7, deny: 0.2, launderAt: 36, synergy: 0.25 },
    scheming:   { kill: 0.9,  bribe: 1.2, room: 0.9, service: 0.9, deny: 0.7, launderAt: 34, synergy: 0.7 },
    murderous:  { kill: 1.3,  bribe: 0.5, room: 0.7, service: 0.7, deny: 0.9, launderAt: 34, synergy: 0.7 },
    mastermind: { kill: 1.15, bribe: 1.0, room: 1.0, service: 1.0, deny: 1.0, launderAt: 32, synergy: 1.0 },
    // 学习叔叔：由 ml/optimize_ai.js 自我对弈 + 进化策略(ES) 学到的权重（含各自的阶段调节）。
    // 取自适应度可信的候选(约 68% 对基线胜率)；高于此的候选被判为过拟合模拟器而舍弃。
    ml: {
        kill: 1.40, bribe: 0.95, room: 0.60, service: 0.85, deny: 1.50, launderAt: 28, synergy: 1.0,
        phase: {
            early: { kill: 0.40, room: 1.60, service: 1.40 },
            mid:   { kill: 1.25, room: 0.70, service: 1.30 },
            late:  { kill: 1.80, room: 0.30, service: 0.05 },
        },
    },
};
const PHASE_MOD = {
    early: { kill: 0.75, room: 1.8,  service: 1.7 },
    mid:   { kill: 1.0,  room: 1.0,  service: 1.0 },
    late:  { kill: 1.35, room: 0.25, service: 0.4 },
};

// 长线思维①：估算本局还剩多少轮——引擎型建筑的价值随剩余轮数折现
// （每轮消耗的旅客 ≈ 开放客房数；第一季度结束后离店堆会洗回成第二季度牌堆）
function estimateRemainingRounds() {
    let perRound = Math.max(1, openRoomCount());
    let r = Math.ceil(travelerDeck.length / perRound);
    if (seasonNum === 1) {
        // 第二季度牌堆 ≈ 当前离店堆 + 本季度还会流入离店堆的牌（按 7 折估算：部分被杀/拉拢/埋掉）
        let season2 = (exitStack.length + travelerDeck.length * 0.7);
        r += Math.ceil(season2 / perRound);
    }
    return Math.max(1, Math.min(14, r));
}

// 长线思维②：建筑协同——盘点自己已建的建筑，得到对各行动的倾向乘数
// 「我建了熊笼→杀人便宜→多杀」「我建了会客厅→拉拢便宜→多攒人」「有空坑→该去填」「没坑→先建坑」
function uncleSynergy(self, prof) {
    let w = (prof && prof.synergy !== undefined) ? prof.synergy : 1;
    const has = names => uncleDiscount(self, Array.isArray(names) ? names : [names]);
    let freeSlots = uncleFreeBuryCapacity(self);
    let syn = {
        kill: 1 + w * (0.25 * has("熊笼") + 0.12 * has("酒窖") + (freeSlots > 0 ? 0.18 : 0) + 0.2 * has("肉铺")),
        bribe: 1 + w * (0.25 * has("会客厅") + 0.18 * has("密室") + 0.1 * has("商铺")),
        build: 1 + w * (0.3 * has("车间")),
        bury: 1 + w * (0.15 * has("酒窖") + 0.18 * has("小教堂") + 0.1 * has("地下墓室")),
        notes: [],
    };
    // 没坑还压着尸体：杀人冲动降温，建坑冲动升温（在 plans 里另有 needSlots 加分，这里再压一道）
    if (self.corpses.length >= freeSlots && freeSlots === 0 && self.corpses.length > 0) {
        syn.kill *= (1 - 0.45 * w);
        syn.notes.push('坑不够，先别杀了');
    }
    if (w > 0.5) {
        if (has("熊笼")) syn.notes.push('熊笼在手，杀人省帮工');
        if (has("会客厅")) syn.notes.push('会客厅让拉拢更便宜');
        if (has("车间")) syn.notes.push('车间让扩建更划算');
    }
    return syn;
}

// ==========================================
// 真规则 AI：叔叔与人类同规则（帮工成本/手牌/别馆/埋尸/工资）
// ==========================================
// 叔叔的别馆折扣（与人类同款别馆效果）
function uncleDiscount(self, names) {
    return self.annexes.filter(a => names.some(n => a.card.annexName.includes(n))).length;
}
function uncleNetCost(self, type, card) {
    let raw = getCardRank(card, type);
    let d = 0;
    if (type === 'bribe') d = uncleDiscount(self, ["会客厅"]);
    if (type === 'kill') d = uncleDiscount(self, ["熊笼", "熊戏笼"]);
    if (type === 'build') d = uncleDiscount(self, ["车间"]);
    if (type === 'bury') d = uncleDiscount(self, ["酒窖"]);
    return Math.max(0, raw - d);
}
function uncleCanPay(self, cost, excludeId) {
    return self.hand.filter(c => c.id !== excludeId).length >= cost;
}
// 计划用：支付 cost 张帮工的「真实损耗」估值（特长匹配回手≈0、农民回酒馆≈0.3、其余≈1.2）
function uncleHelperLoss(self, type, cost, excludeId) {
    let pool = self.hand.filter(c => c.id !== excludeId);
    let loss = 0, used = 0;
    pool.filter(c => c.aptitude === type).forEach(() => { if (used < cost) { used++; } });
    pool.filter(c => c.role === 'peasant' && c.aptitude !== type).forEach(() => { if (used < cost) { used++; loss += 0.3; } });
    let rest = pool.filter(c => c.aptitude !== type && c.role !== 'peasant').sort((a, b) => getCardRank(a, 'bribe') - getCardRank(b, 'bribe'));
    rest.forEach(() => { if (used < cost) { used++; loss += 1.2; } });
    return used >= cost ? loss : Infinity;
}
// 执行支付：与人类同规则（特长匹配回手 / 农民回酒馆 / 其余进离店堆）
// 长线：弃牌顺序按「建造价值升序」——最值钱的引擎建材（花园/会客厅/熊笼…）留到最后才舍得花
function uncleSpendHelpers(self, type, cost, excludeId) {
    if (cost <= 0) return { paid: [], returned: 0 };
    let pool = self.hand.filter(c => c.id !== excludeId);
    let chosen = [];
    const pick = c => { if (chosen.length < cost) chosen.push(c); };
    pool.filter(c => c.aptitude === type).forEach(pick);                                   // 特长匹配（回手，零损耗）
    pool.filter(c => c.role === 'peasant' && !chosen.includes(c)).forEach(pick);           // 农民（回酒馆）
    pool.filter(c => !chosen.includes(c) && c.aptitude !== type)
        .sort((a, b) => annexBuildValue(self, a) - annexBuildValue(self, b)).forEach(pick); // 杂牌按建造价值低者先弃
    if (chosen.length < cost) return null;
    let returned = 0;
    chosen.forEach(helper => {
        let i = self.hand.findIndex(h => h.id === helper.id);
        if (i !== -1) self.hand.splice(i, 1);
        if (helper.aptitude === type) { self.hand.push(helper); returned++; }
        else if (helper.role === 'peasant') bistro.push(helper);
        else exitStack.push(helper);
    });
    return { paid: chosen, returned };
}
// 叔叔别馆的空余埋尸位（占用中的拖车不算）
function uncleFreeBuryCapacity(self) {
    return self.annexes.reduce((s, a) => {
        if (a.card.isTrailer && a.occupant) return s;
        return s + Math.max(0, getAnnexCapacity(a.card) - effectiveBuried(a));
    }, 0);
}
// 叔叔建别馆的简单瞬发效果（颜色计数类 + 厢房）
function uncleAnnexImmediateEffect(self, card) {
    const colorCount = color => self.annexes.filter(a => a.card.color === color).length;
    if (card.annexName.includes("菜园")) addUncleCash(self, colorCount("artisan-red"));
    else if (card.annexName.includes("报摊")) addUncleCash(self, colorCount("merchant-blue"));
    else if (card.annexName.includes("祭坛")) addUncleCash(self, colorCount("religious-purple"));
    else if (card.annexName.includes("厢房")) {
        let neutralRoom = rooms.find(r => r.key === 'neutral');
        if (neutralRoom) { neutralRoom.key = self.idx; syncAIKeys(); }
    }
    else if (card.annexName.includes("豪华吊灯")) addUncleCash(self, 4);
    else if (card.annexName.includes("特大号床")) addUncleCash(self, 6);
    else if (card.annexName.includes("豪华餐厅")) addUncleCash(self, 9);
    else if (card.annexName.includes("凉亭")) addUncleCash(self, 18);
    else if (card.annexName.includes("公园") || card.annexName.includes("马厩") || card.annexName.includes("杂货铺") || card.annexName.includes("主教区") || card.annexName.includes("铁锤游戏") || card.annexName.includes("档案室")) addUncleCash(self, 4);
    else if (card.annexName.includes("马车站")) addUncleCash(self, 6);
    else if (card.annexName.includes("珠宝室")) addUncleCash(self, 8);
    else if (card.annexName.includes("交易所") && self.cash >= 10) {
        self.cash -= 10; self.checks += 1;
        studyFollowExchange(self); // 兑票动作：触发[书房]跟随
    }
    else if (card.annexName.includes("客房服务")) {
        let room = rooms.find(r => isOpenRoom(r) && r.key === self.idx && !roomHasService(r))
            || rooms.find(r => isOpenRoom(r) && !roomHasService(r));
        if (room) { setRoomService(room, self.idx); syncAIKeys(); }
    }
    else if (card.annexName.includes("高台")) {
        addUncleCash(self, 1);
        if (bistro.length > 0) self.hand.push(bistro.pop());
    }
    else if (card.annexName.includes("丝绸农场")) {
        addUncleCash(self, rooms.filter(r => r.key === self.idx && r.occupant).length * 3);
    }
    else if (card.annexName.includes("酒桶")) {
        addUncleCash(self, rooms.filter(r => r.key === 'neutral' && r.occupant).length * 3);
    }
    else if (card.annexName.includes("刀靶")) {
        // 飞刀手[刀靶]：建造时免费刺杀一名等级0旅客（尸体进叔叔的未埋堆）
        let spots = allOccupiedSpots().filter(s => getCardRank(s.occupant, 'kill') === 0 && s.occupant.role !== 'police');
        if (spots.length > 0) {
            let best = spots.reduce((m, s) => (s.occupant.loot || 0) > (m.occupant.loot || 0) ? s : m, spots[0]);
            let victim = best.occupant;
            best.clear();
            victim.isDead = true;
            self.corpses.push(victim);
            logMessage("AI", `${self.name}的[刀靶]飞刀出手——免费刺杀了${best.label}的 ${victim.name}（尸体待埋）。`, "ai");
            playEffect('kill', victim.name, document.getElementById(best.anchorId));
        }
    }
}
// 长线思维③：建造估值 = 即时现金 + 每轮收益×剩余轮数(折现) + 折扣×预期使用次数 + 终局加成
// → 前期(剩余轮数多)引擎建筑自然胜出，终局只有即时现金还值钱——AI 自己会"知道什么牌前期建"
function annexBuildValue(self, card) {
    let an = card.annexName || '';
    let prof = AI_PROFILES[self.difficulty] || AI_PROFILES.mastermind;
    let R = estimateRemainingRounds();        // 剩余轮数（引擎价值的折现系数）
    let v = getAnnexCapacity(card) * (2.2 + Math.min(2, self.corpses.length)); // 埋尸容量：压着尸体时更值钱

    // ── 每轮收益类（引擎）：价值 = 每轮收益 × 剩余轮数 × 0.85（执行折扣） ──
    if (an.includes("花园")) v += 2 * R * 0.85;
    if (an.includes("客房服务")) v += 1.3 * R * 0.85;          // 平均住客等级 ≈1.3
    if (an.includes("酒厂")) v += Math.min(1, self.hand.length / 3) * R * 0.8; // 手牌越多省得越多
    if (card.isTrailer) v += 1 * R * 0.7;                       // 拖车 1F/晨 + 上面已算容量
    if (an.includes("嘉年华摊位") && expansionOptions.carnies) v += 1.2 * R * 0.6;

    // ── 折扣类：价值 = 省 1 张帮工(≈1.2F) × 预期还会用几次（随性格与剩余轮数） ──
    let useRate = R * 0.5; // 每 2 轮用一次同类行动的保守估计
    if (an.includes("熊笼")) v += 1.2 * useRate * prof.kill;
    if (an.includes("会客厅")) v += 1.2 * useRate * prof.bribe;
    if (an.includes("车间")) v += 1.2 * Math.min(useRate, self.hand.filter(c => c.role !== 'peasant').length);
    if (an.includes("酒窖")) v += 1.2 * useRate * prof.kill * 0.8;  // 埋葬频率跟着杀人倾向走
    if (an.includes("密室") || an.includes("小教堂")) v += 1.0 * useRate * 0.6;
    if (an.includes("肉铺") || an.includes("地下墓室") || an.includes("商铺") || an.includes("啤酒厂")) v += 2;

    // ── 终局支票加成：越早建、之后攒的每张支票越值钱 ──
    if (an.includes("温室")) v += (self.checks + R / 3) * 3 * 0.7;

    // ── 颜色协同：即时计数类 + 终局离店堆计数类（离店堆还会随轮数增长） ──
    const myColor = c => self.annexes.filter(a => a.card.color === c).length;
    if (an.includes("菜园")) v += myColor("artisan-red") + 1;
    if (an.includes("报摊")) v += myColor("merchant-blue") + 1;
    if (an.includes("祭坛")) v += myColor("religious-purple") + 1;
    const exitColor = c => exitStack.filter(x => x.color === c).length;
    if (an.includes("公园")) v += (exitColor("artisan-red") + R * 0.8) * 4 * 0.25;
    if (an.includes("杂货铺")) v += (exitColor("merchant-blue") + R * 0.8) * 4 * 0.25;
    if (an.includes("主教区")) v += (exitColor("religious-purple") + R * 0.8) * 4 * 0.25;
    if (an.includes("马厩")) v += (exitColor("noble-green") + R * 0.8) * 4 * 0.25;

    // ── 即时现金：确定收益，原值计入 ──
    let instant = 0;
    if (an.includes("凉亭")) instant = 18;
    else if (an.includes("豪华餐厅")) instant = 9;
    else if (an.includes("珠宝室")) instant = 8;
    else if (an.includes("特大号床") || an.includes("马车站")) instant = 6;
    else if (an.includes("豪华吊灯") || an.includes("铁锤游戏") || an.includes("档案室")) instant = 4;
    if (an.includes("议事厅")) v += (self.checks + R / 3) * 2 * 0.7;
    if (an.includes("画廊")) v += new Set(self.annexes.map(x => x.card.color)).size * 2 * 0.7;
    v += instant * 0.9;
    if (an.includes("厢房") && rooms.some(r => r.key === 'neutral')) v += 1.5 * R * 0.5; // 多一间房=每轮多租金/猎物
    if (an.includes("丝绸农场")) v += rooms.filter(r => r.key === self.idx && r.occupant).length * 3 * 0.9;
    if (an.includes("酒桶")) v += rooms.filter(r => r.key === 'neutral' && r.occupant).length * 3 * 0.9;
    if (an.includes("刀靶") && allOccupiedSpots().some(s => getCardRank(s.occupant, 'kill') === 0 && s.occupant.role !== 'police')) v += 3;
    return v;
}

// ==========================================
// 拟人层：四叔声线 / 反应台词 / 决策噪声 / 记仇
// ==========================================
// 每档难度一种"人格嗓音"——行动后偶尔来一句（不是每次，真人也不会一直说话）
const UNCLE_VOICE = {
    silly:      { kill: '嘿嘿，口袋里的钱归我啦！', bribe: '来当我的朋友嘛~', bury: '埋好埋好，没人看见。', launder: '存起来存起来！', pass: '今天手气不太好……', build: '盖个小房子！' },
    scheming:   { kill: '抱歉了，这只是生意。', bribe: '聪明人都站我这边。', bury: '干净利落，不留把柄。', launder: '账要做得漂亮。', pass: '我在等一个更好的时机。', build: '产业才是长久之计。' },
    murderous:  { kill: '刀子比嘴快。', bribe: '活人比死人贵，将就。', bury: '土够深，话就少。', launder: '血钱也是钱。', pass: '今晚的刀有点钝。', build: '多个埋人的地方总是好的。' },
    mastermind: { kill: '风险可控，动手。', bribe: '人脉即资产。', bury: '证据归零。', launder: '落袋为安才是赢。', pass: '按兵不动也是一步棋。', build: '这笔投资两轮回本。' },
    ml:         { kill: '这是当前期望值最高的一步。', bribe: '这张牌的边际价值很高。', bury: '该压平风险曲线了。', launder: '提前锁定收益。', pass: '当前局面没有正期望行动。', build: '长线收益，建。' },
};
function uncleSay(self, key) {
    if (Math.random() < 0.5) return; // 真人不会每步都说话
    let line = (UNCLE_VOICE[self.difficulty] || {})[key];
    if (line) logMessage("AI", `${self.name}悄声道："${line}"`, "ai");
}

// 对玩家行动的桌边反应（45% 概率开口，由在场叔叔随机一位/当事叔叔发言）
const UNCLE_REACTIONS = {
    playerKill:      { silly: '哇！你下手也太快了吧！', scheming: '啧，这单生意本来该是我的。', murderous: '好刀法……我喜欢。', mastermind: '有意思，你在抢节奏。', ml: '已记录：对手偏好高风险打法。' },
    playerRobMyRoom: { silly: '喂！那是我房里的客人！', scheming: '动我房里的人？你会后悔的。', murderous: '从我嘴里抢肉……我记住了。', mastermind: '抢我的房客？我会在账上讨回来。', ml: '更新策略：对你的目标加权报复。' },
    playerFined:     { silly: '哈哈哈，警察来抓你啦！', scheming: '看吧，手脚不干净就是这个下场。', murderous: '罚款？我从来不留活口也不留把柄。', mastermind: '风险管理不及格啊。', ml: '对手现金流受损，胜率上调。' },
    playerBuryInMine:{ silly: '诶？你怎么埋到我家来了！', scheming: '用我的地还分我钱，算你懂事。', murderous: '在我的地盘埋你的人……行，钱照分。', mastermind: '互利交易，接受。', ml: '收益共享，可接受。' },
    playerBigLoot:   { silly: '好多钱！我也想要！', scheming: '赚这么狠，小心夜路。', murderous: '下一个肥的就是你。', mastermind: '领先者会被针对的，自求多福。', ml: '检测到威胁，提升拆台权重。' },
};
function uncleReact(event, specificUncle) {
    if (!aiUncles.length || Math.random() < 0.45) return;
    let u = specificUncle || aiUncles[Math.floor(Math.random() * aiUncles.length)];
    let line = (UNCLE_REACTIONS[event] || {})[u.difficulty];
    if (line) logMessage("AI", `${u.name}："${line}"`, "ai");
}

// 决策噪声：按难度温度从高分计划里软抽样——高手近乎最优，傻叔叔更随性、永不可被完全预测
const DIFF_TEMP = { silly: 3.2, scheming: 1.4, murderous: 1.6, mastermind: 0.8, ml: 0.55 };
function pickPlanSoftmax(plans, diff) {
    let temp = DIFF_TEMP[diff] || 1.0;
    let top = plans.slice(0, 4);
    if (top.length <= 1 || top[0].score >= 50) return plans[0]; // 防爆仓洗钱等保命招保持确定
    let mx = top[0].score;
    let ws = top.map(p => Math.exp((p.score - mx) / temp));
    let sum = ws.reduce((a, b) => a + b, 0);
    let r = Math.random() * sum;
    for (let i = 0; i < top.length; i++) { r -= ws[i]; if (r <= 0) return top[i]; }
    return top[0];
}

function aiStrategicAction(self) {
    self = self || ai;
    let prof = AI_PROFILES[self.difficulty] || AI_PROFILES.mastermind;
    let pm = (prof.phase && prof.phase[getRoundPhase()]) || PHASE_MOD[getRoundPhase()];
    let occupied = allOccupiedSpots(); // 客房 + 拖车住客（原版：拖车视同客房，可被刺杀/拉拢）
    let neutralRoom = rooms.find(r => r.key === 'neutral');
    let myOpenRooms = rooms.filter(r => isOpenRoom(r) && r.key === self.idx);
    let unservicedMine = myOpenRooms.find(r => !roomHasService(r));
    const isOpp = s => s.ownerKey === 'player' || (typeof s.ownerKey === 'number' && s.ownerKey !== self.idx);
    const lateGame = getRoundPhase() === 'late';
    const policeLurking = occupied.some(s => s.occupant.role === 'police');
    // 道具：[咖啡]招待大堂里等级最高的住客（1F×等级，不占行动；该住客随后不能被下毒）
    let coffeeCands = occupied.map(s => s.occupant).filter(c => getCardRank(c, 'bribe') >= 1 && !c.hasCoffee);
    if (coffeeCands.length > 0 && (self.objects || []).some(o => o.effect === 'coffee')) {
        let best = coffeeCands.reduce((m, c) => getCardRank(c, 'bribe') > getCardRank(m, 'bribe') ? c : m, coffeeCands[0]);
        if (uncleConsumeObject(self, 'coffee')) {
            best.hasCoffee = true;
            addUncleCash(self, getCardRank(best, 'bribe'));
            logMessage("AI", `${self.name}用[咖啡]招待了 ${best.name}，立得 ${getCardRank(best, 'bribe')}F。`, "ai");
        }
    }
    const handSize = self.hand.length;
    const wagePressure = Math.max(0, handSize - 4) * 1.5; // 手牌太多→明早工资负担
    const freeBury = uncleFreeBuryCapacity(self);
    const syn = uncleSynergy(self, prof); // 长线协同：基于自己已建建筑调整各行动倾向

    // 长线思维④：备料意图——手里攥着高价值建材但帮工不够建时，接下来的目标就是"凑料"
    // （这是跨步规划：先雇农民/拉便宜的人当燃料，下一轮再把引擎建起来）
    let buildables0 = self.hand.filter(c => c.role !== 'peasant' && c.role !== 'police');
    let bestBuild = buildables0.length ? buildables0.reduce((m, c) => annexBuildValue(self, c) > annexBuildValue(self, m) ? c : m, buildables0[0]) : null;
    let bestBuildVal = bestBuild ? annexBuildValue(self, bestBuild) : 0;
    let fuelShort = bestBuild ? Math.max(0, uncleNetCost(self, 'build', bestBuild) - (handSize - 1)) : 0;
    let fuelIntent = (fuelShort > 0 && !lateGame) ? Math.min(9, bestBuildVal * 0.35) * (prof.synergy !== undefined ? prof.synergy : 1) : 0;

    // 为每个可选行动按「性格 × 阶段 × 建筑协同」估收益分，再挑最高的执行（全部经过可负担性闸门）
    let plans = [];

    if (occupied.length > 0) {
        // A) 刺杀：尸体进未埋堆（钱要埋了才拿得到！）——估值要扣帮工损耗与警察风险
        let killTarget = occupied.slice().sort((a, b) => b.occupant.loot - a.occupant.loot)[0];
        let kCost = uncleNetCost(self, 'kill', killTarget.occupant);
        if (uncleCanPay(self, kCost)) {
            let loss = uncleHelperLoss(self, 'kill', kCost);
            let overflowRisk = (self.corpses.length + 1 > freeBury) ? 7 : 0; // 没坑还杀，要被警察罚
            let policeRisk = policeLurking ? 5 : 0;
            let kScore = killTarget.occupant.loot * 0.8 * prof.kill * pm.kill
                - loss * 1.8 - overflowRisk - policeRisk
                + (isOpp(killTarget) ? 6 : 0) * prof.deny;
            if (kScore > 0) kScore *= syn.kill; // 协同：熊笼/空坑/酒窖让杀人更有吸引力
            plans.push({ type: 'kill', spot: killTarget, cost: kCost, score: kScore });
        }

        // B) 拉拢：目标进手牌成为帮工燃料/建材——偏好「能建好别馆」的目标（长线：拉拢是建造的入口）
        let bribeCands = occupied.filter(s => s.occupant.role !== 'peasant' && s.occupant.role !== 'police');
        if (bribeCands.length > 0) {
            // 选目标改为按「未来建造价值 + 等级」综合排序，而非单看等级——AI 会盯上能建引擎的旅客
            let bribeTarget = bribeCands.slice().sort((a, b) =>
                (annexBuildValue(self, b.occupant) * 0.35 + getCardRank(b.occupant, 'bribe') * 1.2)
              - (annexBuildValue(self, a.occupant) * 0.35 + getCardRank(a.occupant, 'bribe') * 1.2))[0];
            let bCost = uncleNetCost(self, 'bribe', bribeTarget.occupant);
            if (uncleCanPay(self, bCost)) {
                let loss = uncleHelperLoss(self, 'bribe', bCost);
                let handValue = 2 + getCardRank(bribeTarget.occupant, 'bribe') * 1.2
                    + annexBuildValue(self, bribeTarget.occupant) * 0.35; // 未来可建别馆的潜力（长线入口）
                // 长线意图：产业还少时，拉人就是在备料——前中期给明确加成
                let engineIntent = (!lateGame && self.annexes.length < 4) ? 3.5 : 0;
                // 备料意图：便宜的拉拢（净费≤1）既添燃料又添建材
                let fuelBonus = (bCost <= 1) ? fuelIntent : 0;
                let bScore = handValue * prof.bribe - loss * 1.5 - wagePressure * 0.6 + engineIntent + fuelBonus
                    + (isOpp(bribeTarget) ? 4 : 0) * prof.deny
                    - (lateGame ? 3 : 0); // 终局囤人没用
                if (bScore > 0) bScore *= syn.bribe; // 协同：会客厅/密室让拉拢更划算
                plans.push({ type: 'bribe', spot: bribeTarget, cost: bCost, score: bScore });
            }
        }
    }

    // B2) 雇农民：免费从酒馆抓 2 名（建造/刺杀的燃料——手牌越空越急；攥着建材缺料时是头号优先）
    if (bistro.length > 0 && handSize < 5 && !lateGame) {
        plans.push({ type: 'peasants', score: 6.5 - handSize * 1.0 - wagePressure * 0.5 + fuelIntent });
    }

    // C) 埋尸：把尸体的油水真正落袋；警察临近时是救命动作
    if (self.corpses.length > 0) {
        let corpse = self.corpses.slice().sort((a, b) => b.loot - a.loot)[0];
        let bCost = uncleNetCost(self, 'bury', corpse);
        let need = corpse.specialBurial === 'twins' ? 2 : 1;
        // 大胡子女士（原版）：必须埋进「另一名玩家」的别馆并平分——禁用自家槽位
        let ownSlot = corpse.specialBurial === 'bearded' ? null
            : self.annexes.find(a => !(a.card.isTrailer && a.occupant)
                && effectiveBuried(a) + need <= getAnnexCapacity(a.card));
        // 没有自家坑时：可埋进「任何其他玩家」的别馆并平分（原版规则）——人类与其他叔叔的别馆都算
        let rivalOwner = null, rivalSlot = null;
        if (!ownSlot) {
            let rivals = [{ owner: 'player', annexes: player.annexes }]
                .concat(aiUncles.filter(x => x !== self).map(x => ({ owner: x, annexes: x.annexes || [] })));
            for (let rv of rivals) {
                let s = rv.annexes.find(a => !(a.card.isTrailer && a.occupant)
                    && effectiveBuried(a) + need <= getAnnexCapacity(a.card));
                if (s) { rivalOwner = rv.owner; rivalSlot = s; break; }
            }
        }
        if ((ownSlot || rivalSlot) && uncleCanPay(self, bCost)) {
            let loss = uncleHelperLoss(self, 'bury', bCost);
            let gain = ownSlot ? corpse.loot : Math.ceil(corpse.loot / 2); // 埋对手别馆要平分
            let urgency = (policeLurking ? 14 : 0) + self.corpses.length * 2.5 + (lateGame ? 5 : 0);
            let yScore = gain * 0.6 + urgency - loss * 1.5;
            if (yScore > 0) yScore *= syn.bury; // 协同：酒窖/小教堂让埋葬更顺手
            plans.push({ type: 'bury', corpse, slot: ownSlot || rivalSlot, slotIsOwn: !!ownSlot, rivalOwner, cost: bCost, score: yScore });
        }
    }

    // D) 建别馆：把手牌变成埋尸坑与收入引擎
    let buildCands = self.hand.filter(c => c.role !== 'peasant' && c.role !== 'police');
    if (buildCands.length > 0) {
        let cand = buildCands.slice().sort((a, b) => annexBuildValue(self, b) - annexBuildValue(self, a))[0];
        let bCost = uncleNetCost(self, 'build', cand);
        if (uncleCanPay(self, bCost, cand.id)) {
            let loss = uncleHelperLoss(self, 'build', bCost, cand.id);
            let needSlots = self.corpses.length > freeBury ? 5 + self.corpses.length * 2 : 0; // 急需埋尸坑（压尸越多越急）
            // 建造执行决心：凑齐了建材和帮工的窗口稍纵即逝（工资/花帮工都会关掉它）——
            // 真人会"今晚拉到人、今晚就建起来"，所以可负担的非终局建造给一笔果断加成
            let commitBonus = !lateGame ? 3 + Math.min(3, annexBuildValue(self, cand) * 0.08) : 0;
            // 建别馆估值已含「剩余轮数折现」——前期引擎自然高分；这里再叠车间协同
            // prof.room 只取一半权重：那是"占房"性格，不该全额决定"盖产业"的意愿
            let buildProf = prof.room * 0.5 + 0.5;
            let dScore = (annexBuildValue(self, cand) * 0.7 - loss * 1.5 + needSlots) * buildProf * (pm.room * 0.25 + 0.75) * 0.85
                + commitBonus - (lateGame ? 4 : 0);
            if (dScore > 0) dScore *= syn.build; // 协同：车间让继续扩建更划算
            plans.push({ type: 'build', card: cand, cost: bCost, score: dScore });
        }
    }

    // E) 占房（早期权重高、后期几乎不扩张；边际递减——房子越多，再占一间越不值）
    if (neutralRoom && self.keys.length < 4) {
        plans.push({ type: 'room', score: Math.max(2, 6 - (self.keys.length - 1) * 1.2) * prof.room * pm.room });
    }
    // F) 布置客房服务（早期建立稳定收入引擎）
    if (unservicedMine) plans.push({ type: 'room_service', score: 5 * prof.service * pm.service });
    // G) 兜底：跳过（真规则：没有"白拿支票"这种行动——洗钱只是现金换支票）
    plans.push({ type: 'pass', score: 1 });
    // H) 现金接近上限就洗钱落袋（阈值随性格不同；现金不足 10F 洗不了）
    //    长线协同：建了[温室]（或自制[议事厅]）后每张支票终局更值钱 → 更早、更勤地洗钱
    let checkBonusAnnexes = uncleDiscount(self, ["温室", "议事厅"]);
    let effLaunderAt = Math.max(12, prof.launderAt - 5 * checkBonusAnnexes);
    if (self.cash >= 36) plans.push({ type: 'launder', score: 100 });
    else if (self.cash >= effLaunderAt) plans.push({ type: 'launder', score: 9 + checkBonusAnnexes * 3 });

    // 记仇：玩家动过这位叔叔的房客/地盘后，他对玩家目标的"拆台"评分加权
    if (self.grudge && self.grudge.heat > 0) {
        plans.forEach(p => {
            if ((p.type === 'kill' || p.type === 'bribe') && p.spot && p.spot.ownerKey === 'player') {
                p.score += self.grudge.heat * 1.6;
            }
        });
    }

    plans.sort((a, b) => b.score - a.score);
    self._lastPlans = plans.map(p => ({ type: p.type, score: +p.score.toFixed(1) })); // 调参探针
    let plan = pickPlanSoftmax(plans, self.difficulty); // 带噪声的拟人决策
    self._lastPick = plan.type;
    const anchor = id => document.getElementById(id);
    const payLine = pay => pay && pay.paid.length
        ? `打出 ${pay.paid.length} 名帮工${pay.returned ? `（${pay.returned} 名特长匹配回手）` : ''}，`
        : '';

    if (plan.type === 'kill') {
        let pay = uncleSpendHelpers(self, 'kill', plan.cost);
        let victim = plan.spot.occupant;
        let fromEl = anchor(plan.spot.anchorId);
        plan.spot.clear();
        victim.isDead = true;
        self.corpses.push(victim); // 真规则：尸体面朝下放在面前，埋了才有钱，警察来了要罚！
        let denial = isOpp(plan.spot) ? '，顺手断了对手的财路！' : '。';
        let killSyn = (uncleDiscount(self, ["熊笼"]) > 0 && Math.random() < 0.5) ? '（熊笼帮忙省了帮工，这单几乎没本钱）' : '';
        aiThink(self, `${self.name}${payLine(pay)}在${plan.spot.label}干掉了 ${victim.name}${denial}尸体（${victim.loot}F 油水）还没埋。${killSyn}`);
        playEffect('kill', victim.name, fromEl);
        flyCard(fromEl, anchor('uncle-box-' + self.idx), '💀 ' + victim.name.split(' (')[0]);
        uncleSay(self, 'kill');
    } else if (plan.type === 'bribe') {
        let pay = uncleSpendHelpers(self, 'bribe', plan.cost);
        let t = plan.spot.occupant;
        let fromEl = anchor(plan.spot.anchorId);
        plan.spot.clear();
        self.hand.push(t); // 真规则：拉拢的客人进手牌，成为帮工/建材，明早要付工资
        let denial = isOpp(plan.spot) ? '，免得落到对手手里。' : '，收为己用。';
        aiThink(self, `${self.name}${payLine(pay)}收买了${plan.spot.label}的 ${t.name} 入伙${denial}`);
        playEffect('bribe', t.name, fromEl);
        flyCard(fromEl, anchor('uncle-box-' + self.idx), '🤝 ' + t.name.split(' (')[0]);
        uncleSay(self, 'bribe');
    } else if (plan.type === 'peasants') {
        let take = Math.min(2, bistro.length);
        for (let i = 0; i < take; i++) self.hand.push(bistro.pop());
        aiThink(self, `${self.name}从小酒馆免费雇来 ${take} 名农民打下手。`);
        playEffect('bribe', '农民×' + take, anchor('uncle-box-' + self.idx) || document.querySelector('.ai-status-box'));
    } else if (plan.type === 'bury') {
        let pay = uncleSpendHelpers(self, 'bury', plan.cost);
        let ci = self.corpses.findIndex(c => c.id === plan.corpse.id);
        if (ci !== -1) self.corpses.splice(ci, 1);
        self.buriedCount = (self.buriedCount || 0) + (plan.corpse.specialBurial === 'twins' ? 2 : 1);
        let buryRank = getCardRank(plan.corpse, 'bury');
        let loot = plan.corpse.loot + (buryRank >= 1 && uncleConsumeObject(self, 'bury_bonus') ? 2 * buryRank : 0); // 道具[金牙]：2F×埋葬等级
        if (plan.slotIsOwn) {
            tuckCorpse(plan.slot, plan.corpse);
            addUncleCash(self, loot);
            aiThink(self, `${self.name}${payLine(pay)}把 ${plan.corpse.name} 埋进了自家 [${plan.slot.card.annexName}]，搜出 ${loot}F。`);
        } else {
            // 埋到其他玩家别馆下：与别馆所有者平分赃款（原版规则）
            let mine = Math.ceil(loot / 2), yours = loot - mine;
            plan.slot.buried.push({ ...plan.corpse, buriedByUncle: self.idx });
            if (plan.corpse.specialBurial === 'twins') plan.slot.buried.push({ name: '双胞胎之二', loot: 0, isTwinPlaceholder: true, color: plan.corpse.color, buriedByUncle: self.idx });
            addUncleCash(self, mine);
            if (plan.rivalOwner === 'player') {
                addPlayerCash(yours);
                logMessage("AI", `${self.name}把 ${plan.corpse.name} 埋进了你的 [${plan.slot.card.annexName}] 下——按规矩与你平分：他 ${mine}F，你 ${yours}F。`, "ai");
            } else if (plan.rivalOwner) {
                addUncleCash(plan.rivalOwner, yours);
                logMessage("AI", `${self.name}把 ${plan.corpse.name} 埋进了${plan.rivalOwner.name}的 [${plan.slot.card.annexName}] 下——两人平分：${mine}F / ${yours}F。`, "ai");
            }
        }
        playEffect('bury', `+${loot}F`, anchor('uncle-box-' + self.idx) || document.querySelector('.ai-status-box'));
        uncleSay(self, 'bury');
    } else if (plan.type === 'build') {
        let pay = uncleSpendHelpers(self, 'build', plan.cost, plan.card.id);
        let hi = self.hand.findIndex(h => h.id === plan.card.id);
        if (hi !== -1) self.hand.splice(hi, 1);
        self.annexes.push({ card: plan.card, buried: [] });
        uncleAnnexImmediateEffect(self, plan.card);
        // 长线台词：前期建引擎建筑时说出规划意图（让人感觉它"知道前期建什么"）
        let an = plan.card.annexName || '';
        let isEngine = ["花园", "客房服务", "酒厂", "熊笼", "会客厅", "车间", "酒窖", "温室"].some(k => an.includes(k));
        let buildSyn = '';
        if (isEngine && getRoundPhase() !== 'late' && Math.random() < 0.6) {
            if (an.includes("熊笼")) buildSyn = '（往后每一刀都省一名帮工——接下来就该多动刀了）';
            else if (an.includes("会客厅")) buildSyn = '（拉拢从此便宜一档，先把人手攒起来）';
            else if (an.includes("车间")) buildSyn = '（扩建更便宜了，产业要一座接一座）';
            else if (an.includes("酒窖")) buildSyn = '（埋人省帮工——尸体再多也不怕了）';
            else if (an.includes("花园") || an.includes("客房服务")) buildSyn = '（每一轮都进账，越早建越赚）';
            else if (an.includes("酒厂")) buildSyn = '（工资省下来，养得起更多人手）';
            else if (an.includes("温室")) buildSyn = '（之后每张支票都更值钱，得勤洗钱了）';
        }
        aiThink(self, `${self.name}${payLine(pay)}把手里的 ${plan.card.name} 改建成了 [${plan.card.annexName}]。${buildSyn}`);
        uncleSay(self, 'build');
        playEffect('build', plan.card.annexName, anchor('uncle-box-' + self.idx) || document.querySelector('.ai-status-box'));
    } else if (plan.type === 'room') {
        neutralRoom.key = self.idx; syncAIKeys();
        aiThink(self, `旅馆暂时没什么肥羊，${self.name}强占了 ${neutralRoom.id} 号中立客房，扩张地盘等下一拨客人。`);
    } else if (plan.type === 'room_service') {
        setRoomService(unservicedMine, self.idx); syncAIKeys();
        aiThink(self, `${self.name}给 ${unservicedMine.id} 号房布置了客房服务，坐收稳定油水。`);
    } else if (plan.type === 'launder') {
        self.cash = Math.max(0, self.cash - 10);
        self.checks += 1;
        aiThink(self, `现金攒得差不多了，${self.name}把 10F 洗成支票存好，落袋为安。`);
        playEffect('launder', '', anchor('uncle-box-' + self.idx) || document.querySelector('.ai-wealth-box'));
        studyFollowExchange(self); // 名流[书房]：其他拥有者可跟随兑票
    } else {
        aiThink(self, `${self.name}扫了一眼大堂，决定这次按兵不动。`);
    }

    renderUI();
    setTimeout(advanceTurn, 1100);
}

// 叔叔使用姑妈道具（找到即消耗；AI 只主动使用一部分常用道具）
function uncleConsumeObject(self, effect) {
    let i = (self.objects || []).findIndex(o => o.effect === effect);
    if (i === -1) return null;
    let o = self.objects.splice(i, 1)[0];
    logMessage("AI", `${self.name}打出了道具 [${o.name}]。`, "ai");
    playEffect('object', o.name, document.getElementById('uncle-box-' + self.idx) || document.querySelector('.ai-status-box'));
    return o;
}

// 名流[书房/公证人]（正版效果）：其他玩家用现金兑支票时，书房拥有者可立即也用 10F 兑 1 张支票（不占行动）
function studyFollowExchange(exchanger) {
    // 玩家拥有书房、且这次兑票的人不是玩家
    if (exchanger !== 'player' && player.annexes.some(a => a.card.annexName.includes("书房")) && player.cash >= 10) {
        player.cash -= 10;
        player.checks += 1;
        logMessage("玩家", `[书房] ${exchanger.name}兑了支票——你跟着免费兑换：10F 现金 → 1 张支票。`, "player");
        playEffect('launder', '', document.querySelector('.player-wealth-box'));
    }
    // 某个叔叔拥有书房、且兑票的人不是他
    aiUncles.forEach(u => {
        if (u === exchanger) return;
        if ((u.annexes || []).some(a => a.card.annexName.includes("书房")) && u.cash >= 10) {
            u.cash -= 10;
            u.checks += 1;
            logMessage("AI", `${u.name}的[书房]生效：跟着把 10F 现金兑成了支票。`, "ai");
        }
    });
}

// ==========================================
// 阶段三：清晨结算步骤
// ==========================================
function runPhaseMorning() {
    currentPhase = 'morning';
    updateHeaderStatus("清晨结算", "morning");
    logMessage("系统", `--- 第 ${roundNum} 轮：清晨阶段 (清理大堂) ---`, "system");
    setTimeout(morningStepEvent, 800);
}

function morningStepEvent() {
    resolveCarnieEvent();
    renderUI();
    setTimeout(morningStepPolice, 800);
}

function morningStepPolice() {
    // 原版：拖车视同客房——警察住进拖车同样触发调查
    let policeInRooms = allOccupiedSpots().some(s => s.occupant.role === 'police') || roundEffects.forceInvestigation;
    
    if (policeInRooms) {
        logMessage("警察", "🚓 警察在大堂展开调查！发现未掩埋的尸体...", "police");
        playEffect('police');

        // 【自制】[法庭]：调查时先获得 2F；[诊所]：每座让你少处理 1 具未埋尸体
        let judgeCount = player.annexes.filter(a => a.card.annexName.includes("法庭")).length;
        if (judgeCount > 0) {
            addPlayerCash(2 * judgeCount);
            logMessage("玩家", `【自制】[法庭] 警察调查时你先获得 ${2 * judgeCount}F。`, "player");
        }
        let doctorCount = player.annexes.filter(a => a.card.annexName.includes("诊所")).length;

        if (player.corpses.length > 0) {
            let protectedCount = Math.min((roundEffects.protectedCorpses || 0) + doctorCount, player.corpses.length);
            let exposedCount = player.corpses.length - protectedCount;
            let penalty = exposedCount * 10;
            logMessage("警察", `您被搜出 ${exposedCount} 具尸体！需要支付 ${penalty}F 遣散费给掘墓人。`, "warn");
            
            let playerTotalVal = player.cash + (player.checks * 10);
            if (playerTotalVal >= penalty) {
                deductPlayerTotal(penalty);
                logMessage("玩家", `你支付了 ${penalty}F 封口费。${exposedCount} 具暴露尸体被强行移出本局。`, "player");
                uncleReact('playerFined');
            } else {
                player.cash = 0;
                player.checks = 0;
                logMessage("玩家", "你付不起封口费，所有的赃款被没收！暴露尸体被直接拖走。", "warn");
            }
            let protectedCorpses = protectedCount > 0 ? player.corpses.slice(0, protectedCount) : [];
            player.corpses.slice(protectedCount).forEach(c => removedStack.push(c));
            player.corpses = protectedCorpses;
            if (protectedCount > 0) {
                logMessage("玩家", `${protectedCount} 具尸体受道具保护，留在未埋尸体堆中。`, "player");
            }
        } else {
            logMessage("玩家", "您名下没有未埋的尸体，治安官查无实据。", "player");
        }
        
        aiUncles.forEach(u => {
            // 【自制】[法庭]：叔叔拥有时调查同样先获得 2F（与玩家对称）
            let uJudge = (u.annexes || []).filter(a => a.card.annexName.includes("法庭")).length;
            if (uJudge > 0) {
                addUncleCash(u, 2 * uJudge);
                logMessage("AI", `【自制】${u.name}的[法庭]在调查时先收 ${2 * uJudge}F。`, "ai");
            }
            if (u.corpses.length === 0) return;
            // 道具自保：[水井/诊所类]先处理掉一具；[雪堆]再让一具免于本轮罚款
            if (uncleConsumeObject(u, 'remove_corpse')) {
                removedStack.push(u.corpses.shift());
            }
            let protectedN = 0;
            if (u.corpses.length > 0 && uncleConsumeObject(u, 'hide_corpse')) protectedN = 1;
            // 【自制】[诊所]：叔叔的诊所同样每座保护 1 具（与玩家对称）
            protectedN = Math.min(protectedN + (u.annexes || []).filter(a => a.card.annexName.includes("诊所")).length, u.corpses.length);
            let exposed = u.corpses.length - protectedN;
            if (exposed <= 0) {
                if (u.corpses.length > 0) logMessage("AI", `${u.name}的尸体被道具藏住了，治安官一无所获。`, "ai");
                return;
            }
            let penalty = exposed * 10;
            let uTotalVal = u.cash + (u.checks * 10);
            if (uTotalVal >= penalty) {
                deductUncleTotal(u, penalty);
            } else {
                u.cash = 0;
                u.checks = 0;
            }
            u.corpses.splice(protectedN).forEach(c => removedStack.push(c)); // 受保护的留在面前
            logMessage("AI", `${u.name}被搜出 ${exposed} 具尸体，掏了 ${penalty}F 封口费给掘墓人。`, "ai");
        });
    } else {
        logMessage("系统", "本轮没有警察查夜，相安无事。", "system");
    }
    
    renderUI();
    setTimeout(morningStepRent, 1000);
}

function morningStepRent() {
    logMessage("系统", "房客退房结算房租...", "system");
    let gardenCount = player.annexes.filter(a => a.card.annexName.includes("花园")).length;
    if (gardenCount > 0) {
        addPlayerCash(gardenCount * 2);
        logMessage("玩家", `别馆 [花园] 在退房阶段带来额外 ${gardenCount * 2}F。`, "player");
        playEffect('rent', `+${gardenCount * 2}F`, document.querySelector('.player-wealth-box'));
    }

    // 叔叔的[蛋糕]道具：退房阶段自己房间有等级≥1住客时打出（2F × 最高住宿等级）
    aiUncles.forEach(u => {
        let myGuests = rooms.filter(r => isAIRoom(r) && r.key === u.idx && r.occupant && getCardRank(r.occupant, 'bribe') >= 1);
        if (myGuests.length > 0) {
            let best = myGuests.reduce((m, r) => getCardRank(r.occupant, 'bribe') > getCardRank(m.occupant, 'bribe') ? r : m, myGuests[0]);
            if (uncleConsumeObject(u, 'extra_rent')) {
                let gain = 2 * getCardRank(best.occupant, 'bribe');
                addUncleCash(u, gain);
                logMessage("AI", `${u.name}的[蛋糕]招待了 ${best.occupant.name}，离店时多收 ${gain}F。`, "ai");
            }
        }
    });

    // 玩家[蛋糕]兑现：被招待的住客「离店」时支付 2F×等级（中途被杀/被拉拢的不会走到这里=作废）
    function payCakeIfTreated(card) {
        let ci = (roundEffects.cakeTargets || []).findIndex(t => t.id === card.id);
        if (ci !== -1) {
            let t = roundEffects.cakeTargets.splice(ci, 1)[0];
            addPlayerCash(2 * t.rank);
            logMessage("道具", `[蛋糕] ${t.name} 离店——你获得 ${2 * t.rank}F。`, "player");
            playEffect('rent', `+${2 * t.rank}F`, document.querySelector('.player-wealth-box'));
        }
        delete card.hasCoffee; // [咖啡]随住客离店一并弃置
    }

    rooms.forEach(room => {
        if (room.occupant) {
            let rent = 1 + (roundEffects.extraRent || 0);
            if (room.key === 'player') {
                addPlayerCash(rent);
                logMessage("玩家", `由于房客退租，您的 ${room.id} 号房间为您提供 ${rent}F 租金。`, "player");
                playEffect('rent', `+${rent}F`, document.getElementById('room-' + room.id));
            } else if (isAIRoom(room)) {
                let u = uncleOfRoom(room);
                addUncleCash(u, rent);
                logMessage("AI", `${u.name}名下 ${room.id} 号客房退租，他获得 ${rent}F。`, "ai");
            }

            payCakeIfTreated(room.occupant);
            exitStack.push(room.occupant);
            room.occupant = null;
        }
    });

    // 拖车退房（原版：每辆有旅客的拖车给所有者 1F；视同客房享受旺季加成）
    player.annexes.forEach(a => {
        if (a.card.isTrailer && a.occupant) {
            let rent = 1 + (roundEffects.extraRent || 0);
            addPlayerCash(rent);
            logMessage("玩家", `你的拖车「${a.card.name.split(' (')[0]}」住客退房，获得 ${rent}F。`, "player");
            playEffect('rent', `+${rent}F`, document.getElementById('player-annexes'));
            payCakeIfTreated(a.occupant);
            exitStack.push(a.occupant);
            a.occupant = null;
        }
    });
    aiUncles.forEach(u => (u.annexes || []).forEach(a => {
        if (a.card.isTrailer && a.occupant) {
            let rent = 1 + (roundEffects.extraRent || 0);
            addUncleCash(u, rent);
            logMessage("AI", `${u.name}的拖车住客退房，他获得 ${rent}F。`, "ai");
            payCakeIfTreated(a.occupant);
            exitStack.push(a.occupant);
            a.occupant = null;
        }
    }));

    // 叔叔的[花园]别馆：退房阶段每座 +2F（与人类同款效果）
    aiUncles.forEach(u => {
        let g = (u.annexes || []).filter(a => a.card.annexName.includes("花园")).length;
        if (g > 0) {
            addUncleCash(u, 2 * g);
            logMessage("AI", `${u.name}的 [花园] 在退房阶段带来 ${2 * g}F。`, "ai");
        }
    });

    // 名流[实验室/外科医生]：退房时若对手仍有未埋尸体，每座实验室获得 3F
    let labCount = player.annexes.filter(a => a.card.annexName.includes("实验室")).length;
    if (labCount > 0 && aiUncles.some(u => u.corpses.length > 0)) {
        addPlayerCash(3 * labCount);
        logMessage("玩家", `[实验室] 退房时对手仍有未埋尸体，你获得 ${3 * labCount}F。`, "player");
        playEffect('rent', `+${3 * labCount}F`, document.querySelector('.player-wealth-box'));
    }

    if (roundEffects.pickpockets) {
        player.cash = Math.max(0, player.cash - 2);
        aiUncles.forEach(u => u.cash = Math.max(0, u.cash - 2));
        logMessage("事件", "扒手横行：所有人各损失 2F 现金。", "warn");
        playEffect('object');
    }
    
    renderUI();
    setTimeout(morningStepWages, 1000);
}

function morningStepWages() {
    logMessage("系统", "开始支付帮工工资...", "system");

    if (roundEffects.fiasco && player.hand.length > 0) {
        let dismissed = player.hand.splice(0);
        dismissed.forEach(c => {
            if (c.role === 'peasant') bistro.push(c);
            else exitStack.push(c);
        });
        showBanner('💥 惨败事件！', `你的 ${dismissed.length} 名帮工全部四散离去（事件效果，所有玩家同样遭殃）`, 'wage');
        logMessage("事件", `惨败事件：你的 ${dismissed.length} 名帮工四散离去（农民回酒馆、其余进离店堆），本轮无需再支付这些工资。`, "warn");
        playEffect('wage', '帮工四散', document.querySelector('.player-wealth-box'));
    }
    // 惨败事件对所有玩家生效（原版："the players"）——叔叔们的帮工也四散
    if (roundEffects.fiasco) {
        aiUncles.forEach(u => {
            if ((u.hand || []).length > 0) {
                let n = u.hand.length;
                u.hand.splice(0).forEach(c => { if (c.role === 'peasant') bistro.push(c); else exitStack.push(c); });
                logMessage("事件", `惨败事件：${u.name}的 ${n} 名帮工也四散离去。`, "warn");
            }
        });
    }

    // 叔叔的[告解室]道具：埋尸落后于"埋尸最多者"时，从那个领先者身上拿 6F（领先者可能是你！）
    aiUncles.forEach(u => {
        if (!(u.objects || []).some(o => o.effect === 'catchup')) return;
        let rivals = [{ label: '你', buried: playerBuriedCount(), seat: 'player' }]
            .concat(aiUncles.filter(x => x !== u).map(x => ({ label: x.name, buried: uncleDisposedCount(x), seat: x })));
        let leader = rivals.sort((a, b) => b.buried - a.buried)[0];
        if (leader && uncleDisposedCount(u) < leader.buried) {
            uncleConsumeObject(u, 'catchup');
            let taken;
            if (leader.seat === 'player') { taken = Math.min(6, player.cash); player.cash -= taken; }
            else { taken = Math.min(6, leader.seat.cash); leader.seat.cash -= taken; }
            addUncleCash(u, taken);
            logMessage("AI", `${u.name}的[告解室]生效：从${leader.label}身上拿走 ${taken}F！`, "ai");
        }
    });

    // 名流[药房/药剂师]（原版）：退房时若「另一名玩家」手中帮工 ≥3 张，每座药房获得 2F
    let pharmCount = player.annexes.filter(a => a.card.annexName.includes("药房")).length;
    if (pharmCount > 0 && aiUncles.some(u => (u.hand || []).length >= 3)) {
        addPlayerCash(2 * pharmCount);
        logMessage("玩家", `[药房] 有对手囤了一手帮工（≥3 张），你获得 ${2 * pharmCount}F。`, "player");
    }

    let HandSize = player.hand.length;
    if (HandSize > 0) {
        let distillerCount = player.annexes.filter(a => a.card.annexName.includes("酒厂")).length;
        let actualWages = Math.max(0, HandSize - distillerCount) + (HandSize * (roundEffects.wageSurcharge || 0));
        
        logMessage("玩家", `手牌共有帮手 ${HandSize} 人。享受酒厂免税额度 -${distillerCount}人。共需付 ${actualWages}F。`, "player");
        
        if (player.cash >= actualWages) {
            player.cash -= actualWages;
            logMessage("玩家", `你成功支付了 ${actualWages}F 帮工薪酬。`, "player");
            playEffect('wage', `-${actualWages}F`, document.querySelector('.player-wealth-box'));
        } else {
            let paid = player.cash;
            let unpaidCount = actualWages - paid;
            player.cash = 0;
            let sortedHand = [...player.hand].sort((a, b) => {
                if (a.role === 'peasant' && b.role !== 'peasant') return -1;
                if (b.role === 'peasant' && a.role !== 'peasant') return 1;
                return a.rank - b.rank;
            });
            let dismissed = sortedHand.slice(0, unpaidCount);
            dismissed.forEach(c => {
                player.hand = player.hand.filter(h => h.id !== c.id);
                if (c.role === 'peasant') bistro.push(c);
                else exitStack.push(c);
            });
            showBanner('💸 发不起工资！', `现金只有 ${paid}F——${dismissed.length} 名没拿到工资的帮工离开了你（工资只能用现金付，支票不行）`, 'wage');
            logMessage("玩家", `现金不足，只支付了 ${paid}F。${dismissed.length} 名未拿到工资的帮工离开（${dismissed.map(c => c.name.split(' ')[0]).join('、')}）。`, "warn");
        }
    } else {
        logMessage("玩家", "您手头没有帮手，无需支付清晨工资。", "player");
    }

    // 真规则：叔叔们也要付工资（1F/张，酒厂减免；付不起的帮工按农民优先、低等级优先被解雇）
    aiUncles.forEach(u => {
        let hs = (u.hand || []).length;
        if (hs === 0) return;
        let distiller = (u.annexes || []).filter(a => a.card.annexName.includes("酒厂")).length;
        let wages = Math.max(0, hs - distiller) + (hs * (roundEffects.wageSurcharge || 0));
        if (wages <= 0) return;
        if (u.cash >= wages) {
            u.cash -= wages;
            logMessage("AI", `${u.name}付了 ${wages}F 工资养着手下 ${hs} 名帮工。`, "ai");
        } else {
            let paid = u.cash;
            let unpaid = wages - paid;
            u.cash = 0;
            let sorted = [...u.hand].sort((a, b) => {
                if (a.role === 'peasant' && b.role !== 'peasant') return -1;
                if (b.role === 'peasant' && a.role !== 'peasant') return 1;
                return annexBuildValue(u, a) - annexBuildValue(u, b); // 付不起时先放走没建造价值的，保住引擎建材
            });
            let dismissed = sorted.slice(0, unpaid);
            dismissed.forEach(c => {
                u.hand = u.hand.filter(h => h.id !== c.id);
                if (c.role === 'peasant') bistro.push(c);
                else exitStack.push(c);
            });
            logMessage("AI", `${u.name}发不出工资（只付了 ${paid}F），${dismissed.length} 名帮工愤而离去。`, "ai");
        }
    });

    renderUI();
    setTimeout(checkGameEndOrNextRound, 1000);
}

function checkGameEndOrNextRound() {
    if (finalRoundPending || (seasonNum === 2 && travelerDeck.length === 0)) {
        triggerGameOver();
        return;
    }

    if (seasonNum === 1 && travelerDeck.length === 0) {
        prepareSecondSeason();
    }
    
    roundNum++;
    firstActorIdx = (firstActorIdx + 1) % playerCount; // 主理人轮换到下一座位
    aiUncles.forEach(u => { if (u.grudge && u.grudge.heat > 0) u.grudge.heat -= 1; }); // 仇恨随时间淡去
    logMessage("系统", `--- 第 ${roundNum} 轮即将开始，主理人换人！ ---`, "system");
    runPhaseWelcome();
}

function triggerGameOver() {
    currentPhase = 'gameover';
    updateHeaderStatus("游戏结束", "gameover");
    logMessage("系统", "====== 旅客牌堆清空！游戏结束！开始清算资产！ ======", "warn");

    rooms.forEach(room => {
        if (room.occupant) {
            exitStack.push(room.occupant);
            room.occupant = null;
        }
    });
    
    if (player.corpses.length > 0) {
        let penalty = player.corpses.length * 10;
        let total = player.cash + player.checks * 10;
        if (total >= penalty) {
            deductPlayerTotal(penalty);
        } else {
            player.cash = 0;
            player.checks = 0;
        }
        player.corpses.forEach(c => removedStack.push(c));
        player.corpses = [];
    }
    
    aiUncles.forEach(u => {
        if (u.corpses && u.corpses.length > 0) {
            let penalty = u.corpses.length * 10;
            if (u.cash + u.checks * 10 >= penalty) deductUncleTotal(u, penalty);
            else { u.cash = 0; u.checks = 0; }
            u.corpses.forEach(c => removedStack.push(c)); u.corpses = [];
        }
    });
    
    // 1. 玩家资产计算
    let playerTotal = player.cash + player.checks * 10;
    
    let greenhouseCount = player.annexes.filter(a => a.card.annexName.includes("温室")).length;
    if (greenhouseCount > 0) {
        let bonus = player.checks * 3 * greenhouseCount;
        playerTotal += bonus;
        logMessage("玩家", `别馆 [温室] 在局终为你每张支票加成 3F，共获得额外 ${bonus}F 赃款！`, "player");
    }

    // 【自制】[议事厅]：局终每张支票额外 2F；[画廊]：每种颜色别馆 2F
    let senatorCount = player.annexes.filter(a => a.card.annexName.includes("议事厅")).length;
    if (senatorCount > 0) {
        let bonus = player.checks * 2 * senatorCount;
        playerTotal += bonus;
        logMessage("玩家", `【自制】[议事厅] 局终每张支票额外加成 2F，共 ${bonus}F！`, "player");
    }
    let galleryCount = player.annexes.filter(a => a.card.annexName.includes("画廊")).length;
    if (galleryCount > 0) {
        let distinctColors = new Set(player.annexes.map(a => a.card.color)).size;
        let bonus = distinctColors * 2 * galleryCount;
        playerTotal += bonus;
        logMessage("玩家", `【自制】[画廊] 局终：你拥有 ${distinctColors} 种颜色的别馆，获得额外 ${bonus}F！`, "player");
    }

    let colorCounts = { 'artisan-red': 0, 'merchant-blue': 0, 'religious-purple': 0, 'noble-green': 0 };
    exitStack.forEach(c => {
        if (colorCounts[c.color] !== undefined) colorCounts[c.color]++;
    });
    
    player.annexes.forEach(a => {
        let annexName = a.card.annexName;
        if (annexName.includes("公园")) {
            let bonus = colorCounts['artisan-red'] * 4;
            playerTotal += bonus;
            logMessage("玩家", `别馆 [公园] 结算：离店堆有 ${colorCounts['artisan-red']} 张红色卡牌，获得额外 ${bonus}F 赃款！`, "player");
        }
        if (annexName.includes("杂货铺")) {
            let bonus = colorCounts['merchant-blue'] * 4;
            playerTotal += bonus;
            logMessage("玩家", `别馆 [杂货铺] 结算：离店堆有 ${colorCounts['merchant-blue']} 张蓝色卡牌，获得额外 ${bonus}F 赃款！`, "player");
        }
        if (annexName.includes("主教区")) {
            let bonus = colorCounts['religious-purple'] * 4;
            playerTotal += bonus;
            logMessage("玩家", `别馆 [主教区] 结算：离店堆有 ${colorCounts['religious-purple']} 张紫色卡牌，获得额外 ${bonus}F 赃款！`, "player");
        }
        if (annexName.includes("马厩")) {
            let bonus = colorCounts['noble-green'] * 4;
            playerTotal += bonus;
            logMessage("玩家", `别馆 [马厩] 结算：离店堆有 ${colorCounts['noble-green']} 张绿色卡牌，获得额外 ${bonus}F 赃款！`, "player");
        }
    });
    
    // 2. 各 AI 叔叔资产——真规则：纯规则书计分（现金 + 支票 + 终局别馆加成），难度差异只体现在打法上
    function uncleTotal(u) {
        let t = u.cash + u.checks * 10;
        (u.annexes || []).forEach(a => {
            let an = a.card.annexName || '';
            if (an.includes("温室")) t += u.checks * 3;
            if (an.includes("议事厅")) t += u.checks * 2;
            if (an.includes("画廊")) t += new Set(u.annexes.map(x => x.card.color)).size * 2;
            if (an.includes("公园")) t += colorCounts['artisan-red'] * 4;
            if (an.includes("杂货铺")) t += colorCounts['merchant-blue'] * 4;
            if (an.includes("主教区")) t += colorCounts['religious-purple'] * 4;
            if (an.includes("马厩")) t += colorCounts['noble-green'] * 4;
        });
        return t;
    }
    // 平局判定（原版：埋尸最多者胜）——真规则下双方都用真实埋尸数
    let playerBuried = playerBuriedCount();
    let standings = [{ name: '您', total: playerTotal, isHuman: true, tiebreak: playerBuried }];
    aiUncles.forEach(u => standings.push({ name: u.name, total: uncleTotal(u), isHuman: false, tiebreak: uncleDisposedCount(u) }));
    standings.sort((a, b) => (b.total - a.total) || (b.tiebreak - a.tiebreak));
    let winner = standings[0];
    let playerWon = winner.isHuman;

    // 动态 N 列计分板
    let header = `<div class="score-row header"><span>排名 / 玩家</span><span>总资产</span></div>`;
    let rowsHtml = standings.map((s, i) =>
        `<div class="score-row ${s.isHuman ? 'you' : ''} ${i === 0 ? 'total' : ''}">
            <span>${i + 1}. ${s.name}${s.isHuman ? '（你）' : ''}${i === 0 ? ' 👑' : ''}</span>
            <span>${s.total} F</span>
        </div>`).join('');
    let board = document.querySelector('#gameover-modal .score-board');
    if (board) board.innerHTML = header + rowsHtml;

    let verdict;
    if (playerWon) {
        verdict = "恭喜！您财富登顶，成为当地最令人侧目的黑店之王！👑";
    } else {
        verdict = `很遗憾，${winner.name} 以 ${winner.total}F 的资产盖过了所有人，您未能登顶。💀`;
    }

    document.getElementById('game-verdict').innerText = verdict;
    document.getElementById('gameover-modal').classList.remove('hidden');

    if (playerWon === true) { playSound('win'); confettiRain(); }
    else if (playerWon === false) { playSound('lose'); }
    else { playSound('object'); }
}

// ==========================================
// 辅助计算与钱包管理
// ==========================================
function addPlayerCash(amount) {
    player.cash = Math.min(40, player.cash + amount);
}

function addUncleCash(u, amount) {
    // 名流[保险库/银行家]：任一对手现金溢出 40F 上限的部分归你
    let hasBanker = player.annexes.some(a => a.card.annexName.includes("保险库"));
    let room = 40 - u.cash;
    let gained = Math.max(0, Math.min(amount, room));
    u.cash += gained;
    let overflow = amount - gained;
    if (hasBanker && overflow > 0) {
        addPlayerCash(overflow);
        logMessage("玩家", `[保险库] 截获了${u.name}溢出 40F 上限的 ${overflow}F！`, "player");
    }
}
function addAICash(amount) { addUncleCash(ai, amount); }

// 把尸体塞入别馆下；双胞胎额外塞一张占位，使其占 2 个埋尸位、计为 2 具尸体
function tuckCorpse(slot, corpse) {
    slot.buried.push(corpse);
    if (corpse.specialBurial === 'twins') {
        slot.buried.push({ name: '双胞胎之二', loot: 0, isTwinPlaceholder: true, color: corpse.color });
    }
}

// 埋尸掠夺结算（含金牙加成与大胡子女士的平分特殊埋葬）
function awardBuryLoot(corpse, annexName, autoBishop) {
    let loot = corpse.loot + consumeGoldTeeth(corpse);
    let prefix = autoBishop ? '（大主教技能）' : '';
    if (corpse.specialBurial === 'bearded') {
        let mine = Math.ceil(loot / 2);
        let theirs = loot - mine;
        addPlayerCash(mine);
        // 原版：须将另一半分给「你指定的另一名玩家」——最优策略是分给最弱的对手（现金最少的叔叔）
        let receiver = aiUncles.slice().sort((a, b) => a.cash - b.cash)[0] || ai;
        addUncleCash(receiver, theirs); // 走统一入账：若你有[保险库]，对方溢出 40F 的部分仍被你截获
        logMessage("玩家", `${prefix}大胡子女士被埋入 ${annexName}，与对手平分油水：你得 ${mine}F，${receiver.name} 得 ${theirs}F。`, "player");
    } else {
        addPlayerCash(loot);
        logMessage("玩家", `${prefix}将 ${corpse.name} 的尸体埋入 ${annexName} 下，掠夺 ${loot}F！`, "player");
        if (loot >= 15) uncleReact('playerBigLoot'); // 大额进账，桌边有人眼红
    }
    playEffect('bury', `+${loot}F`, document.getElementById('player-annexes'));
}

function deductPlayerTotal(amount) {
    while (amount >= 10 && player.checks > 0) {
        player.checks -= 1;
        amount -= 10;
    }
    if (amount > player.cash && player.checks > 0) {
        player.checks -= 1;
        player.cash += 10;
    }
    player.cash = Math.max(0, player.cash - amount);
}

function deductUncleTotal(u, amount) {
    while (amount >= 10 && u.checks > 0) { u.checks -= 1; amount -= 10; }
    if (amount > u.cash && u.checks > 0) { u.checks -= 1; u.cash += 10; }
    u.cash = Math.max(0, u.cash - amount);
}
function deductAITotal(amount) { deductUncleTotal(ai, amount); }

// ==========================================
// 界面更新渲染 (UI Renderer)
// ==========================================
function updateHeaderStatus(phaseText, statusType) {
    const indicator = document.getElementById('current-phase');
    indicator.innerText = phaseText;
    
    indicator.className = 'phase-label';
    if (statusType === 'welcome') indicator.classList.add('welcome-style');
    if (statusType === 'action') indicator.classList.add('action-style');
    if (statusType === 'morning') indicator.classList.add('morning-style');
    
    document.getElementById('current-round').innerText = `第 ${roundNum} 轮`;
    document.getElementById('current-season').innerText = (seasonNum === 1) ? '第一季度' : '第二季度';
    const hostBadge = document.getElementById('info-host');
    if (hostBadge) hostBadge.innerText = `主理人: ${actorName(hostActor())}`;
}

function shortDiffName(d) {
    return ({ silly: '傻', scheming: '阴险', murderous: '嗜血', mastermind: '策略', ml: 'ML' })[d] || d;
}
function renderRailMarkers() {
    const rail = document.querySelector('.rail-line');
    if (!rail) return;
    rail.querySelectorAll('.marker.extra-uncle').forEach(e => e.remove());
    for (let i = 1; i < aiUncles.length; i++) {
        const u = aiUncles[i];
        const m = document.createElement('div');
        m.className = 'marker ai-color extra-uncle';
        m.title = u.name;
        m.innerText = 'U' + (i + 1);
        m.style.left = `${(u.cash / 40) * 90}%`;
        rail.appendChild(m);
    }
}
// 座位顺序条：从主理人开始的行动次序，当前行动者高亮——像在真桌边看牌位
function renderSeatOrder() {
    let bar = document.getElementById('seat-order');
    if (!bar) return;
    if (!turnOrder.length) { bar.innerHTML = ''; return; }
    let inAction = currentPhase === 'action1' || currentPhase === 'action2';
    let chips = [];
    for (let i = 0; i < turnOrder.length; i++) {
        let idx = (firstActorIdx + i) % turnOrder.length;
        let a = turnOrder[idx];
        let label = a === 'player' ? '你' : aiUncles[a].name;
        let cls = 'seat-chip' + (a === 'player' ? ' human' : '')
            + (idx === firstActorIdx ? ' host' : '')
            + (inAction && idx === activeActorIdx ? ' active' : '');
        chips.push(`<span class="${cls}">${idx === firstActorIdx ? '🏠' : ''}${label}</span>`);
    }
    bar.innerHTML = `<span style="color:#78909c">本轮座次:</span> ` + chips.join('<span class="seat-arrow">→</span>')
        + (inAction ? ` <span style="color:#78909c;margin-left:8px">动作 ${actionNumber}/2</span>` : '');
}

// 桌面感：一张牌从 fromEl 飞到 toEl（纯演出，prefers-reduced-motion 时自动跳过）
function flyCard(fromEl, toEl, label) {
    try {
        if (!fromEl || !toEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let f = fromEl.getBoundingClientRect(), t = toEl.getBoundingClientRect();
        if (!f.width || !t.width) return;
        let el = document.createElement('div');
        el.className = 'fly-card';
        el.innerText = label || '';
        el.style.left = (f.left + f.width / 2 - 32) + 'px';
        el.style.top = (f.top + f.height / 2 - 44) + 'px';
        document.body.appendChild(el);
        requestAnimationFrame(() => {
            el.style.transform = `translate(${t.left + t.width / 2 - (f.left + f.width / 2)}px, ${t.top + t.height / 2 - (f.top + f.height / 2)}px) scale(0.6)`;
            el.style.opacity = '0.1';
        });
        setTimeout(() => el.remove(), 750);
    } catch (e) { /* 演出失败不影响逻辑 */ }
}

// 对手牌桌区：像坐在桌边一样看到每个叔叔的手牌(背面)、别馆田园、未埋尸体
// 埋尸阶段还可以点击叔叔的别馆——把尸体埋进对方家、按原版规则平分赃款
function renderExtraUncles() {
    let box = document.getElementById('extra-uncles');
    if (!box) return;
    if (aiUncles.length === 0) { box.innerHTML = ''; box.classList.add('hidden'); return; }
    box.classList.remove('hidden');
    let buryMode = pendingAction.type === 'bury' && pendingAction.targetCorpse;
    let corpse = pendingAction.targetCorpse;
    let need = corpse && corpse.specialBurial === 'twins' ? 2 : 1;

    box.innerHTML = `<h4><i data-lucide="users"></i> 对手牌桌</h4>` + aiUncles.map(u => {
        let handBacks = (u.hand || []).slice(0, 9).map(() => `<span class="mini-back">🂠</span>`).join('')
            + ((u.hand || []).length > 9 ? `<span class="mini-more">+${u.hand.length - 9}</span>` : '');
        let annexChips = (u.annexes || []).map((a, ai2) => {
            let cap = getAnnexCapacity(a.card);
            let canBuryHere = buryMode && !(a.card.isTrailer && a.occupant)
                && effectiveBuried(a) + need <= cap;
            let chipCls = 'uncle-annex-chip' + (canBuryHere ? ' clickable highlight' : '');
            let occ = a.card.isTrailer && a.occupant ? ` 🛏${cardName(a.occupant).slice(0, 4)}` : '';
            let click = canBuryHere ? ` onclick="handleUncleAnnexSlotSelect(${u.idx}, ${ai2})"` : '';
            return `<span class="${chipCls}"${click} title="${a.card.annexDesc || ''}">${a.card.annexName.split(' (')[0]} ⚰${effectiveBuried(a)}/${cap}${occ}</span>`;
        }).join('');
        let corpseBacks = u.corpses.map(() => `<span class="mini-corpse">🩸</span>`).join('');
        // 回合聚光灯：轮到这位叔叔时牌桌发光 + 思考表情
        let inAction = currentPhase === 'action1' || currentPhase === 'action2';
        let isActing = inAction && turnOrder[activeActorIdx] === u.idx;
        return `
        <div class="uncle-card${isActing ? ' active-turn thinking' : ''}" id="uncle-box-${u.idx}">
            <div class="uncle-head"><span class="uncle-name">${u.name}</span><span class="uncle-diff">${shortDiffName(u.difficulty)}</span></div>
            <div class="uncle-stats">
                <span>💰 ${u.cash}F</span><span>🎫 ${formatChecks(u.checks)}</span><span>⚰️ 已埋 ${uncleDisposedCount(u)}</span>
            </div>
            <div class="uncle-zone"><label>手牌</label><div class="zone-cards">${handBacks || '<span class="zone-empty">无</span>'}</div></div>
            <div class="uncle-zone"><label>别馆</label><div class="zone-cards">${annexChips || '<span class="zone-empty">无</span>'}</div></div>
            <div class="uncle-zone"><label>未埋</label><div class="zone-cards">${corpseBacks || '<span class="zone-empty">无</span>'}</div></div>
        </div>`;
    }).join('');
}

// 玩家把尸体埋进叔叔的别馆（原版：可埋别人家、平分尸体口袋里的钱）
function handleUncleAnnexSlotSelect(uncleIdx, annexIndex) {
    if (pendingAction.type !== 'bury' || !pendingAction.targetCorpse || warnIfAwaitingPayment()) return;
    let u = aiUncles[uncleIdx];
    let slot = u && u.annexes[annexIndex];
    if (!slot) return;
    let corpse = pendingAction.targetCorpse;
    let need = corpse.specialBurial === 'twins' ? 2 : 1;
    if ((slot.card.isTrailer && slot.occupant) || effectiveBuried(slot) + need > getAnnexCapacity(slot.card)) {
        logMessage("系统", "对方这座别馆埋不下。", "warn");
        return;
    }
    pendingAction.targets = [corpse];
    pendingAction.target = { corpse, uncleIdx, annexIndex };
    let abbotCount = player.annexes.filter(a => a.card.annexName.includes("酒窖")).length;
    let actualCost = Math.max(0, getCardRank(corpse, 'bury') - abbotCount - (objectEffects.buryDiscount || 0));
    logMessage("玩家", `准备把尸体埋进 ${u.name} 的 [${slot.card.annexName}]（赃款与他平分）。需要支付 ${actualCost} 张帮工牌。`, "player");
    if (actualCost === 0) finishPlayerAction();
    else requestPaymentCards(actualCost);
}

// 50F 支票（扩展）：随时可用 5 张 10F 支票兑换 1 张 50F、不占行动——数字版自动捆票显示
function formatChecks(n) {
    let fifty = Math.floor(n / 5), ten = n % 5;
    if (fifty === 0) return `10F支票 x${ten}`;
    return `支票 ${n * 10}F (50F×${fifty}${ten ? ` + 10F×${ten}` : ''})`;
}

function renderUI() {
    document.getElementById('player-cash').innerText = player.cash;
    document.getElementById('player-checks').innerText = formatChecks(player.checks);
    document.getElementById('ai-cash').innerText = ai.cash;
    document.getElementById('ai-checks').innerText = formatChecks(ai.checks);
    let aiLabel = document.querySelector('.ai-wealth-box .wealth-label');
    if (aiLabel) aiLabel.innerText = `${ai.name}（${shortDiffName(ai.difficulty)}）:`;

    document.getElementById('player-marker').style.left = `${(player.cash / 40) * 90}%`;
    document.getElementById('ai-marker').style.left = `${(ai.cash / 40) * 90}%`;
    renderRailMarkers();
    renderExtraUncles();
    renderSeatOrder();

    const roomsGrid = document.getElementById('inn-rooms-grid');
    roomsGrid.innerHTML = '';
    
    rooms.forEach(room => {
        let doorDiv = document.createElement('div');
        doorDiv.id = `room-${room.id}`;
        let openClass = isOpenRoom(room) ? 'open' : 'closed-room';
        doorDiv.className = `room-door ${openClass} ${room.occupant ? 'occupied' : ''}`;
        
        if (currentPhase === 'welcome' && pendingWelcomeCard && isHumanHost() && isOpenRoom(room) && !room.occupant) {
            doorDiv.classList.add('clickable', 'highlight');
            doorDiv.onclick = () => handleWelcomeRoomSelect(room.id);
        } else if (pendingAction.type === 'bribe' && room.occupant) {
            doorDiv.classList.add('clickable');
            doorDiv.onclick = () => handleBribeSelect(room.occupant);
        } else if (pendingAction.type === 'build' && objectEffects.buildFromRoom && room.occupant && room.occupant.role !== 'peasant' && room.occupant.role !== 'police') {
            doorDiv.classList.add('clickable');
            doorDiv.onclick = () => handleBuildSelect(room.occupant);
        } else if (pendingAction.type === 'kill' && room.occupant) {
            doorDiv.classList.add('clickable');
            doorDiv.onclick = () => handleKillSelect(room.occupant);
        }
        
        let keyClass = isHumanRoom(room) ? 'key-player' : (isAIRoom(room) ? 'key-ai' : `key-${room.key}`);
        let keyLetter = isHumanRoom(room) ? 'P' : (isAIRoom(room) ? 'U' + (room.key + 1) : (room.key === 'neutral' ? 'N' : 'X'));

        let markerHtml = `<div class="room-key-icon ${keyClass}">${keyLetter}</div>`;
        if (roomHasService(room)) {
            let serviceClass = room.serviceOwner === 'player' ? 'service-player' : (typeof room.serviceOwner === 'number' ? 'service-ai' : '');
            markerHtml += `<div class="room-service-icon service-icon ${serviceClass}">S</div>`;
        }
        
        if (!isOpenRoom(room)) {
            doorDiv.innerHTML = `
                <div class="room-badge">${room.id} 号客房</div>
                <div class="room-markers">${markerHtml}</div>
                <div class="empty-room-inner">
                    <i data-lucide="lock"></i>
                    <span>未开放</span>
                </div>
            `;
        } else if (room.occupant) {
            let card = room.occupant;
            doorDiv.innerHTML = `
                <div class="room-badge">${room.id} 号客房</div>
                <div class="room-markers">${markerHtml}</div>
                <div class="card ${card.color}">
                    <div class="card-header">
                        <span class="card-rank">${getRankDisplay(card)}</span>
                        <div class="card-icon-aptitude">${getAptitudeIcon(card.aptitude)}</div>
                    </div>
                    <div class="card-body">
                        <span class="card-name">${cardName(card)}</span>
                        <span class="card-role-label">${card.role}</span>
                        <div class="card-loot">${card.loot}F</div>
                    </div>
                    <div class="card-footer">
                        <span class="annex-title">${annexLabel(card)}</span>
                        <span class="annex-ability">${card.annexDesc}</span>
                    </div>
                </div>
            `;
            // 将 onclick 挂载在内部的 card 元素上，防止布局遮挡
            let cardEl = doorDiv.querySelector('.card');
            cardEl.insertAdjacentHTML('afterbegin', cardArtHTML(card));
            attachCardTip(cardEl, card, 'room');
            if (doorDiv.onclick) {
                cardEl.onclick = doorDiv.onclick;
                doorDiv.onclick = null;
                cardEl.classList.add('clickable');
            }
        } else {
            doorDiv.innerHTML = `
                <div class="room-badge">${room.id} 号客房</div>
                <div class="room-markers">${markerHtml}</div>
                <div class="empty-room-inner">
                    <i data-lucide="door-closed"></i>
                    <span>空闲中</span>
                </div>
            `;
        }
        roomsGrid.appendChild(doorDiv);
    });
    
    let rate = rooms.filter(r => isOpenRoom(r) && r.occupant).length;
    document.getElementById('occupancy-rate').innerText = `${rate}/${openRoomCount()}`;
    
    const handDiv = document.getElementById('player-hand');
    handDiv.innerHTML = '';
    player.hand.forEach(card => {
        let cardDiv = document.createElement('div');
        cardDiv.id = `hand-${card.id}`;
        cardDiv.className = `card ${card.color}`;
        
        if (pendingAction.type === 'build' && card.role !== 'peasant' && card.role !== 'police') {
            cardDiv.classList.add('clickable');
            cardDiv.onclick = () => handleBuildSelect(card);
        } else if (pendingAction.cost !== undefined) {
            cardDiv.classList.add('clickable');
            cardDiv.onclick = () => selectHelperCard(card);
        }
        
        cardDiv.innerHTML = `
            <div class="card-header">
                <span class="card-rank">${getRankDisplay(card)}</span>
                <div class="card-icon-aptitude">${getAptitudeIcon(card.aptitude)}</div>
            </div>
            <div class="card-body">
                <span class="card-name">${cardName(card)}</span>
                <span class="card-role-label">${card.role}</span>
                <div class="card-loot">${card.loot}F</div>
            </div>
            <div class="card-footer">
                <span class="annex-title">${annexLabel(card)}</span>
                <span class="annex-ability">${card.annexDesc}</span>
            </div>
        `;
        cardDiv.insertAdjacentHTML('afterbegin', cardArtHTML(card));
        attachCardTip(cardDiv, card, 'hand');
        handDiv.appendChild(cardDiv);
    });
    // 工资预报：手牌就是明早的账单——现金不够时提前亮红灯，别等帮工散伙才发现
    let distC = player.annexes.filter(a => a.card.annexName.includes("酒厂")).length;
    let wageDue = Math.max(0, player.hand.length - distC) + (player.hand.length * (roundEffects.wageSurcharge || 0));
    let handCountEl = document.getElementById('hand-count');
    if (player.hand.length === 0) {
        handCountEl.innerText = '0 张';
        handCountEl.style.color = '';
    } else if (player.cash < wageDue) {
        handCountEl.innerText = `${player.hand.length} 张 · 明早工资 ${wageDue}F ⚠️现金不足，发不出工资的帮工会离开！`;
        handCountEl.style.color = '#ef5350';
    } else {
        handCountEl.innerText = `${player.hand.length} 张 · 明早工资 ${wageDue}F`;
        handCountEl.style.color = '';
    }
    
    const annexesDiv = document.getElementById('player-annexes');
    annexesDiv.innerHTML = '';
    player.annexes.forEach((slot, index) => {
        let slotContainer = document.createElement('div');
        slotContainer.className = 'annex-slot-container';

        let isTrailerSlot = !!slot.card.isTrailer;
        // 埋尸：仅当坑位真的放得下才可点击（满坑不再误导玩家；占用中的拖车不能埋；大胡子不能埋自家别馆）
        if (pendingAction.type === 'bury' && pendingAction.targetCorpse) {
            let needSlots = pendingAction.targetCorpse.specialBurial === 'twins' ? 2 : 1;
            let hasRoom = effectiveBuried(slot) + needSlots <= getAnnexCapacity(slot.card);
            let beardedBlock = pendingAction.targetCorpse.specialBurial === 'bearded';
            if (!(isTrailerSlot && slot.occupant) && hasRoom && !beardedBlock) {
                slotContainer.classList.add('clickable', 'highlight');
                slotContainer.onclick = () => handleAnnexSlotSelect(index);
            }
        }
        // 迎客：无尸空拖车是必填的入住目标
        else if (currentPhase === 'welcome' && pendingWelcomeCard && isHumanHost()
            && isTrailerSlot && !slot.occupant && slot.buried.length === 0) {
            slotContainer.classList.add('clickable', 'highlight');
            slotContainer.onclick = () => handleWelcomeTrailerSelect(index);
        }
        // 刺杀/拉拢：拖车住客视同客房旅客，可被选为目标
        else if ((pendingAction.type === 'kill' || pendingAction.type === 'bribe') && isTrailerSlot && slot.occupant) {
            slotContainer.classList.add('clickable', 'highlight');
            let occ = slot.occupant;
            slotContainer.onclick = () => (pendingAction.type === 'kill' ? handleKillSelect(occ) : handleBribeSelect(occ));
        }

        let card = slot.card;
        let buriedHtml = '';
        if (slot.buried.length > 0) {
            buriedHtml += '<div class="buried-corpse-stack">';
            slot.buried.forEach(b => {
                buriedHtml += `<div class="mini-corpse-badge"><span>💀 ${b.name}</span><strong>+${b.loot}F</strong></div>`;
            });
            buriedHtml += '</div>';
        }
        // 拖车住客（视同客房旅客）
        let occupantHtml = '';
        if (isTrailerSlot && slot.occupant) {
            let o = slot.occupant;
            occupantHtml = `<div class="trailer-occupant" title="拖车住客（清晨退房 +1F；可被刺杀/拉拢）">🛏 ${cardName(o)} · ${o.loot}F</div>`;
        }

        slotContainer.innerHTML = `
            <div class="card ${card.color}">
                <div class="card-header">
                    <span class="card-rank">${getRankDisplay(card)}</span>
                </div>
                <div class="card-body">
                    <span class="card-name">${annexLabel(card)}</span>
                    <span class="card-role-label">${isTrailerSlot ? '拖车' : '别馆'}</span>
                    <span style="font-size: 8px; color: #daa520; margin-top: 4px;">容量: ${effectiveBuried(slot)}/${getAnnexCapacity(card)}</span>
                </div>
                <div class="card-footer">
                    <span class="annex-ability">${card.annexDesc}</span>
                </div>
            </div>
            ${occupantHtml}
            ${buriedHtml}
        `;
        let aCard = slotContainer.querySelector('.card');
        if (aCard) { aCard.insertAdjacentHTML('afterbegin', cardArtHTML(card)); attachCardTip(aCard, card, 'annex'); }
        annexesDiv.appendChild(slotContainer);
    });
    document.getElementById('player-annex-count').innerText = player.annexes.length;
    
    const corpsesDiv = document.getElementById('player-corpses');
    corpsesDiv.innerHTML = '';
    player.corpses.forEach(card => {
        let cardDiv = document.createElement('div');
        cardDiv.id = `corpse-${card.id}`;
        cardDiv.className = `card ${card.color} dead`;
        
        if (pendingAction.type === 'bury' && !pendingAction.targetCorpse) {
            cardDiv.classList.add('clickable');
            cardDiv.onclick = () => handleCorpseSelect(card);
        }
        
        cardDiv.innerHTML = `
            <div class="card-header">
                <span class="card-rank">${getRankDisplay(card)}</span>
            </div>
            <div class="card-body">
                <span class="card-name">${cardName(card)}</span>
                <span class="card-role-label">尸体</span>
                <div class="card-loot">${card.loot}F</div>
            </div>
        `;
        cardDiv.insertAdjacentHTML('afterbegin', cardArtHTML(card));
        attachCardTip(cardDiv, card, 'corpse');
        corpsesDiv.appendChild(cardDiv);
    });
    document.getElementById('player-corpse-count').innerText = player.corpses.length;
    
    // 渲染酒馆中的农民指示
    let bistroSection = document.querySelector('.deck-status-box .deck-stat:nth-child(3)');
    if (bistroSection) {
        // 在指示物下渲染出可以点击拉拢的农民卡牌（如果是Bribe阶段）
        let peasantContainer = document.getElementById('peasant-bribe-list');
        if (!peasantContainer) {
            peasantContainer = document.createElement('div');
            peasantContainer.id = 'peasant-bribe-list';
            peasantContainer.style.display = 'flex';
            peasantContainer.style.gap = '4px';
            peasantContainer.style.marginTop = '6px';
            peasantContainer.style.flexWrap = 'wrap';
            bistroSection.appendChild(peasantContainer);
        }
        peasantContainer.innerHTML = '';
        
        if ((pendingAction.type === 'bribe' || pendingAction.type === 'kill') && bistro.length > 0) {
            // 取出一张农民样例卡渲染，允许点击（原版规则：农民既可被拉拢，也可被刺杀）
            let peasantSample = bistro[0];
            let peasantBtn = document.createElement('button');
            peasantBtn.id = `peasant-${peasantSample.id}`;
            peasantBtn.className = 'btn btn-secondary';
            peasantBtn.style.padding = '4px 8px';
            peasantBtn.style.fontSize = '11px';
            peasantBtn.innerText = pendingAction.type === 'bribe' ? `收买农民 (一次 2 名)` : `刺杀农民`;

            if (pendingAction.targets.some(t => t.role === 'peasant')) {
                peasantBtn.classList.add('active');
                peasantBtn.style.borderColor = '#c62828';
                peasantBtn.style.color = '#fff';
            }

            peasantBtn.onclick = () => (pendingAction.type === 'bribe' ? handleBribeSelect(peasantSample) : handleKillSelect(peasantSample));
            peasantContainer.appendChild(peasantBtn);
        }
    }
    
    // 真规则 AI 状态：手牌（只给你看张数——牌背）/ 别馆与埋尸 / 客房 / 未埋尸体
    document.getElementById('ai-stat-bribe').innerText = `${(ai.hand || []).length} 张`;
    let aiSlots = (ai.annexes || []).reduce((s, a) => s + getAnnexCapacity(a.card), 0);
    let aiBuried = (ai.annexes || []).reduce((s, a) => s + a.buried.length, 0);
    document.getElementById('ai-stat-kill').innerText = `${(ai.annexes || []).length} 座 (埋${aiBuried}/${aiSlots})`;
    syncAIKeys();
    document.getElementById('ai-stat-rooms').innerText = `${ai.keys.length} 间`;
    document.getElementById('ai-stat-corpses').innerText = `${ai.corpses.length} 具`;
    let aiTitle = document.getElementById('ai-status-title');
    if (aiTitle) aiTitle.innerText = `${ai.name} 状态` + (playerCount > 2 ? '（叔叔①）' : '');
    let aiStrat = document.getElementById('ai-strategy-label');
    if (aiStrat) aiStrat.innerText = DIFF_LABELS[ai.difficulty] || ai.difficulty;
    
    document.getElementById('traveler-deck-count').innerText = travelerDeck.length;
    const deckBack = document.getElementById('traveler-deck-back');
    if (deckBack) {
        if (travelerDeck.length > 0) {
            // 入店牌堆正面朝上：牌堆顶旅客的身份可见
            let top = travelerDeck[travelerDeck.length - 1];
            deckBack.innerHTML = `牌堆顶(正面): <strong>${top.name.split(' (')[0]}</strong>`;
        } else {
            deckBack.innerText = '牌堆已空';
        }
    }
    document.getElementById('exit-stack-count').innerText = exitStack.length;
    document.getElementById('bistro-count').innerText = bistro.length;
    const eventName = document.getElementById('event-card-name');
    if (eventName) eventName.innerText = currentEvent ? currentEvent.name : (expansionOptions.carnieEvents ? '等待嘉年华' : '未加入');
    renderObjectCards();
    
    refreshIcons();
}

// 原创派系徽记（纯 SVG，自绘，无任何第三方版权素材）
const ROLE_EMBLEMS = {
    // 手工业者：锤子
    artisan: '<svg viewBox="0 0 64 64"><rect x="29" y="22" width="6" height="34" rx="2"/><path d="M16 12h24l6 8-6 8H16l5-8z"/></svg>',
    // 商贾：钱币（环形）
    merchant: '<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M32 10a22 22 0 1 0 0 44 22 22 0 0 0 0-44zm0 9a13 13 0 1 1 0 26 13 13 0 0 1 0-26z"/><rect x="29" y="22" width="6" height="20"/><rect x="25" y="26" width="14" height="5" rx="2"/></svg>',
    // 神职：十字架
    religious: '<svg viewBox="0 0 64 64"><rect x="28" y="8" width="8" height="48" rx="2"/><rect x="16" y="22" width="32" height="8" rx="2"/></svg>',
    // 贵族：王冠
    noble: '<svg viewBox="0 0 64 64"><path d="M10 50 5 18l16 13L32 12l11 19 16-13-5 32z"/><rect x="10" y="50" width="44" height="7" rx="2"/></svg>',
    // 警察：五角星
    police: '<svg viewBox="0 0 64 64"><polygon points="32,6 39,24 58,24 43,36 48,56 32,44 16,56 21,36 6,24 25,24"/></svg>',
    // 农民：麦穗
    peasant: '<svg viewBox="0 0 64 64"><rect x="30" y="28" width="4" height="28" rx="2"/><ellipse cx="32" cy="18" rx="6" ry="12"/><ellipse cx="21" cy="25" rx="5" ry="10" transform="rotate(-28 21 25)"/><ellipse cx="43" cy="25" rx="5" ry="10" transform="rotate(28 43 25)"/></svg>',
    // 嘉年华：马戏帐篷
    carnie: '<svg viewBox="0 0 64 64"><rect x="30" y="5" width="3" height="9"/><path d="M33 6l10 4-10 4z"/><path d="M32 12 11 55h42z"/><path d="M32 12 24 55M32 12l8 43" stroke="rgba(0,0,0,.28)" stroke-width="2"/></svg>',
    // 名流：高礼帽
    notable: '<svg viewBox="0 0 64 64"><rect x="22" y="9" width="20" height="31" rx="2"/><rect x="22" y="33" width="20" height="5" fill="rgba(0,0,0,.32)"/><rect x="11" y="40" width="42" height="7" rx="3"/></svg>'
};
function getRoleEmblem(role) {
    return ROLE_EMBLEMS[role] || '';
}

// 卡面图：若本地存在 cards/<英文名>.png 则用作卡面，否则回退到原创徽记。
// （cards/ 目录已 gitignore，玩家可放入自有 PNP 素材本地游玩，不随公开仓库发布）
function cardImgKey(card) {
    let b = splitBilingual(card.name || '');
    let base = (b.en || b.zh || 'card').replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    return base || 'card';
}
function cardArtHTML(card) {
    return `<img class="card-art" src="cards/${cardImgKey(card)}.png" alt="" loading="lazy" onerror="this.remove()">` +
           `<div class="card-emblem">${getRoleEmblem(card.role)}</div>` +
           (card.fanMade ? `<div class="fan-badge" title="非官方同人卡（本数字版自制扩展）">同人</div>` : '');
}

// ==========================================
// 双语 + 卡牌悬浮提示（费用/效果明细）
// ==========================================
let lang = 'zh'; // 'zh' | 'en'

// 卡名形如 "农民 (Cultivator)"：按语言取中文或英文部分
function splitBilingual(s) {
    if (!s) return { zh: '', en: '' };
    let m = s.match(/^(.*?)\s*\(([^()]*)\)\s*$/);
    if (!m) return { zh: s, en: s };
    return { zh: m[1].trim(), en: m[2].trim() };
}
function cardName(card) {
    if (!card) return '';
    let b = splitBilingual(card.name);
    return lang === 'en' ? (b.en || b.zh) : b.zh;
}
function annexLabel(card) {
    let b = splitBilingual(card.annexName || '');
    return lang === 'en' ? (b.en || b.zh) : (b.zh || b.en);
}

// 当前各类减免（基于玩家已建别馆与道具）
function discCount(name) { return player.annexes.filter(a => a.card.annexName.includes(name)).length; }
function bribeCostInfo(card) { let raw = getCardRank(card, 'bribe'), d = discCount("会客厅"); return { raw, disc: d, net: Math.max(0, raw - d) }; }
function killCostInfo(card) { let raw = getCardRank(card, 'kill'), d = discCount("熊笼") + discCount("熊戏笼"); return { raw, disc: d, net: Math.max(0, raw - d) }; }
function buildCostInfo(card) { let raw = getCardRank(card, 'build'), d = discCount("车间"); return { raw, disc: d, net: Math.max(0, raw - d) }; }
function buryCostInfo(card) { let raw = getCardRank(card, 'bury'), d = discCount("酒窖") + (objectEffects.buryDiscount || 0); return { raw, disc: d, net: Math.max(0, raw - d) }; }

function T(zh, en) { return lang === 'en' ? en : zh; }

function costRow(label, info) {
    let discTxt = info.disc > 0 ? `<span class="tip-disc">${T('原 ' + info.raw + '，减免 ' + info.disc, 'was ' + info.raw + ', −' + info.disc)}</span>` : '';
    return `<div class="tip-cost"><span>${label}</span><b>${info.net} ${T('张帮工牌', info.net === 1 ? 'card' : 'cards')}</b>${discTxt}</div>`;
}

function buildCardTip(card, ctx) {
    if (!card) return '';
    let rows = [`<div class="tip-name">${cardName(card)}</div>`];
    let rankTxt = (card.buildRank !== undefined && card.buildRank !== card.rank)
        ? T(`住等级 ${card.rank} / 建埋等级 ${card.buildRank}`, `inn rank ${card.rank} / annex rank ${card.buildRank}`)
        : T(`等级 ${card.rank}`, `rank ${card.rank}`);
    rows.push(`<div class="tip-sub">${rankTxt} · ${T('身上油水', 'loot')} ${card.loot}F</div>`);

    if (ctx === 'room') {
        rows.push(costRow(T('拉拢（收为帮凶）', 'Bribe (recruit)'), bribeCostInfo(card)));
        if (card.role !== 'peasant') rows.push(costRow(T('刺杀（变尸体）', 'Kill (→ corpse)'), killCostInfo(card)));
        if (card.annexName) rows.push(`<div class="tip-eff"><b>${T('若日后建成别馆：', 'If later built as annex:')}</b> ${T(splitBilingual(card.annexName).zh, splitBilingual(card.annexName).en)}<br>${card.annexDesc || '—'}</div>`);
    } else if (ctx === 'hand') {
        if (card.role !== 'peasant' && card.role !== 'police' && card.annexName) {
            rows.push(costRow(T('建造此别馆', 'Build this annex'), buildCostInfo(card)));
            rows.push(`<div class="tip-eff"><b>${T('建成后效果：', 'Annex effect:')}</b> ${card.annexDesc || '—'}</div>`);
        } else {
            rows.push(`<div class="tip-note">${T('农民/警察不能建成别馆', 'Peasants & police cannot become annexes')}</div>`);
        }
        rows.push(`<div class="tip-note">${T('作为帮凶，每个清晨需付 1F 工资', 'As an accomplice, costs 1F wage each morning')}</div>`);
    } else if (ctx === 'corpse') {
        let info = buryCostInfo(card);
        rows.push(costRow(T('埋葬此尸体', 'Bury this corpse'), info));
        rows.push(`<div class="tip-eff">${T('埋葬可掠夺', 'Burying claims')} <b>${card.loot}F</b>${card.specialBurial === 'bearded' ? T('（大胡子：与对手平分）', ' (bearded: split with rival)') : ''}</div>`);
        if (info.disc > 0) rows.push(`<div class="tip-note">${T('当前埋葬减免', 'Current bury discount')}: −${info.disc}</div>`);
    } else if (ctx === 'annex') {
        rows.push(`<div class="tip-eff"><b>${T('此别馆当前为你提供：', 'This annex currently gives you:')}</b><br>${card.annexDesc || '—'}</div>`);
        rows.push(`<div class="tip-note">${T('埋尸容量', 'Burial capacity')}: ${getAnnexCapacity(card)}</div>`);
    }
    return rows.join('');
}

function ensureCardTip() {
    let tip = document.getElementById('card-tip');
    if (!tip) {
        tip = document.createElement('div');
        tip.id = 'card-tip';
        tip.className = 'card-tip hidden';
        document.body.appendChild(tip);
    }
    return tip;
}
let _tipEl = null;
function showCardTip(card, ctx, anchorEl) {
    if (!card) return;
    const tip = ensureCardTip();
    tip.innerHTML = buildCardTip(card, ctx);
    tip.classList.remove('hidden');
    const r = anchorEl.getBoundingClientRect();
    let x = r.right + 10, y = r.top;
    if (x + 250 > window.innerWidth) x = r.left - 260;
    if (x < 4) x = 4;
    y = Math.max(8, Math.min(y, window.innerHeight - tip.offsetHeight - 8));
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
}
function hideCardTip() {
    const tip = document.getElementById('card-tip');
    if (tip) tip.classList.add('hidden');
}
function attachCardTip(el, card, ctx) {
    if (!el || !card) return;
    el.addEventListener('mouseenter', () => showCardTip(card, ctx, el));
    el.addEventListener('mouseleave', hideCardTip);
}

function getAptitudeIcon(aptitude) {
    if (aptitude === 'bribe') return '<i style="width: 14px; height: 14px;" data-lucide="handshake" title="拉拢特长"></i>';
    if (aptitude === 'build') return '<i style="width: 14px; height: 14px;" data-lucide="hammer" title="建造特长"></i>';
    if (aptitude === 'kill') return '<i style="width: 14px; height: 14px;" data-lucide="swords" title="刺杀特长"></i>';
    if (aptitude === 'bury') return '<i style="width: 14px; height: 14px;" data-lucide="shovel" title="埋尸特长"></i>';
    return '';
}

function renderObjectCards() {
    const section = document.getElementById('player-objects-section');
    const container = document.getElementById('player-objects');
    const counter = document.getElementById('object-count');
    if (!section || !container || !counter) return;

    section.classList.toggle('hidden', !expansionOptions.objects);
    counter.innerText = player.objects.length;
    container.innerHTML = '';

    player.objects.forEach(obj => {
        let objDiv = document.createElement('button');
        objDiv.className = 'object-card';
        objDiv.onclick = () => playObject(obj.instanceId);
        objDiv.innerHTML = `
            <span class="object-name">${obj.name}</span>
            <span class="object-cost">${obj.cost}F</span>
            <span class="object-timing">${obj.timing}</span>
            <span class="object-desc">${obj.desc}</span>
        `;
        container.appendChild(objDiv);
    });
}

function playObject(instanceId) {
    let idx = player.objects.findIndex(o => o.instanceId === instanceId);
    if (idx === -1) return;
    let obj = player.objects.splice(idx, 1)[0];
    logMessage("道具", `使用了 [${obj.name}]：${obj.desc}`, "player");
    playEffect('object', obj.name, document.getElementById('player-objects-section'));

    if (obj.effect === 'extra_rent') {
        // 原版[蛋糕]：放在一名住客上，其离店时获得 2F × 住宿等级；若中途被杀/被拉拢则作废
        let cands = allOccupiedSpots().map(s => s.occupant).filter(c => getCardRank(c, 'bribe') >= 1);
        if (cands.length === 0) {
            player.objects.splice(idx, 0, obj); // 没有可放置的住客：道具退回
            logMessage("道具", "[蛋糕] 旅馆里没有等级≥1的住客可以招待，蛋糕先收回。", "player");
            renderUI();
            return;
        }
        let best = cands.reduce((m, c) => getCardRank(c, 'bribe') > getCardRank(m, 'bribe') ? c : m, cands[0]);
        roundEffects.cakeTargets.push({ id: best.id, rank: getCardRank(best, 'bribe'), name: best.name });
        logMessage("道具", `[蛋糕] 招待了 ${best.name}（等级 ${getCardRank(best, 'bribe')}）——他退房离店时你将获得 ${2 * getCardRank(best, 'bribe')}F。`, "player");
    } else if (obj.effect === 'bury_bonus') {
        objectEffects.goldTeeth = (objectEffects.goldTeeth || 0) + 1;
        logMessage("道具", "[金牙] 已备好钳子——下一次埋葬等级≥1的尸体时，额外掠夺 2F × 其埋葬等级。", "player");
    } else if (obj.effect === 'force_police') {
        roundEffects.forceInvestigation = true;
    } else if (obj.effect === 'hide_corpse') {
        roundEffects.protectedCorpses += 1;
    } else if (obj.effect === 'coffee') {
        // 原版[咖啡]：放在一名住客上，立得 1F × 住宿等级；该住客不能再被下毒
        let cands = allOccupiedSpots().map(s => s.occupant).filter(c => getCardRank(c, 'bribe') >= 1 && !c.hasCoffee);
        if (cands.length === 0) {
            player.objects.splice(idx, 0, obj);
            logMessage("道具", "[咖啡] 旅馆里没有等级≥1的住客可以招待，咖啡先收回。", "player");
            renderUI();
            return;
        }
        let best = cands.reduce((m, c) => getCardRank(c, 'bribe') > getCardRank(m, 'bribe') ? c : m, cands[0]);
        best.hasCoffee = true;
        addPlayerCash(getCardRank(best, 'bribe'));
        logMessage("道具", `[咖啡] 招待了 ${best.name}：立刻获得 ${getCardRank(best, 'bribe')}F；他本轮不能被下毒。`, "player");
    } else if (obj.effect === 'return_build') {
        objectEffects.returnHelpersFor.build = true;
    } else if (obj.effect === 'return_bribe') {
        objectEffects.returnHelpersFor.bribe = true;
    } else if (obj.effect === 'return_kill') {
        objectEffects.returnHelpersFor.kill = true;
    } else if (obj.effect === 'return_bury') {
        objectEffects.returnHelpersFor.bury = true;
    } else if (obj.effect === 'catchup') {
        // 原版：从「处理尸体最多的玩家」身上拿 6F；若对方现金不足 6F，则拿走他的全部现金（零和转移，非银行发钱）
        let playerBuried = playerBuriedCount();
        let leader = aiUncles.slice().sort((a, b) => uncleDisposedCount(b) - uncleDisposedCount(a))[0];
        let leaderBuried = leader ? uncleDisposedCount(leader) : 0;
        if (leader && playerBuried < leaderBuried) {
            let taken = Math.min(6, leader.cash);
            leader.cash -= taken;
            addPlayerCash(taken);
            logMessage("道具", `[告解室] 你处理的尸体比 ${leader.name} 少，从他身上拿走 ${taken}F。`, "player");
        } else {
            logMessage("道具", "[告解室] 你处理的尸体不比任何对手少，本次没有收益。", "player");
        }
    } else if (obj.effect === 'remove_corpse') {
        let corpse = player.corpses.shift();
        if (corpse) removedStack.push(corpse);
    } else if (obj.effect === 'poison') {
        // 原版：喝过[咖啡]的住客不能被下毒
        let targets = rooms.filter(r => isOpenRoom(r) && r.occupant && !r.occupant.hasCoffee);
        targets.sort((a, b) => (b.occupant.loot || 0) - (a.occupant.loot || 0));
        if (targets[0]) {
            let victim = targets[0].occupant;
            targets[0].occupant = null;
            victim.isDead = true;
            player.corpses.push(victim);
            logMessage("道具", `[毒药] 毒杀了油水最高的 ${victim.name}（${victim.loot}F），尸体归你。`, "warn");
        } else {
            logMessage("道具", "[毒药] 旅馆里没有可下毒的旅客。", "player");
        }
    } else if (obj.effect === 'bury_discount') {
        objectEffects.buryDiscount += 1;
    } else if (obj.effect === 'well') {
        objectEffects.well = true;
    } else if (obj.effect === 'build_from_room') {
        objectEffects.buildFromRoom = true;
        logMessage("道具", "下一次建造时，你可以直接选择旅馆房间中的旅客。", "player");
    }

    renderUI();
}

// ==========================================
// 弹窗与日志控制
// ==========================================
function toggleHelpModal() {
    const modal = document.getElementById('help-modal');
    modal.classList.toggle('hidden');
    refreshIcons();
}

// ==========================================
// 新手教程（原创讲解，分步引导）
// ==========================================
const TUTORIAL_PAGES = [
    {
        title: "🎯 你的目标",
        body: `<p>你是 1831 年法国乡村一家<strong>黑店</strong>的老板。在游戏的<strong>两个季度</strong>里，把投宿的旅客拉拢、谋杀、埋掉，攒下尽可能多的<strong>法郎(F)</strong>。</p>
               <p>结算时，<strong>谁的总财富多谁就赢</strong> —— 桌上还有 1~3 位 AI 叔叔，他们和你<strong>用完全相同的规则</strong>玩：拉拢帮工、付工资、建别馆、埋尸体、躲警察。</p>
               <p class="tut-tip">💡 这是一款关于精打细算的"犯罪经营"游戏，每一步都要权衡风险与收益。</p>`
    },
    {
        title: "🌗 一轮分三个阶段",
        body: `<ul class="tut-list">
                 <li><strong>① 黄昏·迎客</strong>：本轮"主理人"把入店牌堆顶的旅客逐个安排进<strong>每一间开放客房</strong>（牌堆正面朝上）。开放客房 = 有钥匙的门：每人 1 间起始房 + 中立房（2~3 人 3 间、<strong>4 人全 8 间开放</strong>）。</li>
                 <li><strong>② 夜晚·行动</strong>：你和叔叔<strong>各做 2 次行动</strong>（轮流）。这是博弈的核心。</li>
                 <li><strong>③ 清晨·结算</strong>：警察调查 → 房客退房收租 → 给帮凶发工资。</li>
               </ul>
               <p>每轮结束后，<strong>主理人轮换</strong>到另一方。</p>`
    },
    {
        title: "🎨 六大派系（旅客颜色）",
        body: `<ul class="tut-list">
                 <li><span class="tut-chip red">红</span> 手工业者 — 擅长<strong>建造别馆</strong></li>
                 <li><span class="tut-chip blue">蓝</span> 商贾 — 擅长<strong>拉拢帮凶</strong></li>
                 <li><span class="tut-chip purple">紫</span> 神职 — 擅长<strong>埋葬尸体</strong></li>
                 <li><span class="tut-chip green">绿</span> 贵族 — 没特长，但<strong>身上油水最多</strong></li>
                 <li><span class="tut-chip grey">灰</span> 警察 — 擅长<strong>刺杀</strong>，但清晨留在店里会<strong>引来查案</strong></li>
                 <li><span class="tut-chip yellow">黄</span> 农民 — 等级 0 的<strong>廉价劳力</strong></li>
               </ul>`
    },
    {
        title: "🎲 五种行动",
        body: `<p>夜晚每次行动，从下面选<strong>一项</strong>：</p>
               <ul class="tut-list">
                 <li><strong>拉拢</strong>：把客房里的旅客收进手牌，当你的"帮凶"。</li>
                 <li><strong>建造</strong>：把手牌里的旅客翻成"别馆"，享受它的能力。</li>
                 <li><strong>刺杀</strong>：把旅客就地变成尸体（放在你面前）。</li>
                 <li><strong>埋尸</strong>：把尸体塞进别馆下，<strong>拿走他身上的油水</strong>。</li>
                 <li><strong>洗钱/放弃</strong>：现金 ↔ 10F 支票互换。</li>
               </ul>
               <p class="tut-tip">💡 前四种行动的<strong>费用 = 目标的等级</strong>：要打出等量的帮凶牌；其中"特长"和本行动匹配的帮凶会<strong>回到手里</strong>，其余被弃掉。农民打出后回小酒馆。</p>`
    },
    {
        title: "💰 怎么赚钱",
        body: `<ul class="tut-list">
                 <li><strong>抢劫</strong>：刺杀旅客 → 埋尸拿走他的油水（等级越高越值钱，最高 26F）。</li>
                 <li><strong>别馆</strong>：建造贵族别馆立刻拿现金；工坊/酒厂/客房服务等提供持续被动。</li>
                 <li><strong>收租</strong>：清晨你名下客房有住客，每间收 1F。</li>
                 <li><strong>存钱</strong>：现金上限 <strong>40F</strong>，多余的就洗成 10F 支票存起来（支票不占上限）。</li>
               </ul>`
    },
    {
        title: "🚓 当心警察！",
        body: `<p>清晨的<strong>警察调查</strong>是本游戏最大的风险：</p>
               <p>只要旅馆里<strong>还有警察</strong>，而你名下有<strong>未埋的尸体</strong>，每具就要付掘墓人 <strong>10F</strong>！付不起会被没收全部赃款。</p>
               <p class="tut-tip">💡 所以：杀人后要尽快<strong>埋尸</strong>，别让尸体在有警察的夜里过夜；或先把警察处理掉。</p>`
    },
    {
        title: "🏆 怎么获胜",
        body: `<p>两个季度的旅客牌堆都耗尽后，游戏结束。比拼<strong>总财富</strong>：</p>
               <p style="text-align:center;font-size:15px;color:#ffca28;">现金 + 支票(每张10F) + 别馆终局加成</p>
               <p>比所有叔叔都有钱，你就是这片乡野最令人侧目的<strong>黑店之王</strong>！👑（平局时埋尸多者胜）</p>
               <p class="tut-tip">💡 叔叔们与你同规则同资源：盯着对手牌桌上的<strong>手牌数、未埋尸体和别馆</strong>，像在真桌上一样读他们的局势。你还可以把尸体<strong>埋进对手的别馆</strong>——按规矩与他平分赃款。</p>`
    }
];
let tutorialPage = 0;

function openTutorial() {
    tutorialPage = 0;
    renderTutorial();
    document.getElementById('tutorial-modal').classList.remove('hidden');
}
function closeTutorial() {
    document.getElementById('tutorial-modal').classList.add('hidden');
}
function tutorialNav(dir) {
    let next = tutorialPage + dir;
    if (next < 0) return;
    if (next >= TUTORIAL_PAGES.length) { closeTutorial(); return; }
    tutorialPage = next;
    renderTutorial();
}
function renderTutorial() {
    const p = TUTORIAL_PAGES[tutorialPage];
    document.getElementById('tutorial-title').innerHTML = p.title;
    document.getElementById('tutorial-body').innerHTML = p.body;
    document.getElementById('tutorial-step-label').innerText = `第 ${tutorialPage + 1} / ${TUTORIAL_PAGES.length} 步`;
    document.getElementById('tutorial-dots').innerHTML =
        TUTORIAL_PAGES.map((_, i) => `<span class="tut-dot ${i === tutorialPage ? 'on' : ''}" onclick="tutorialPage=${i};renderTutorial();"></span>`).join('');
    document.getElementById('tutorial-prev').disabled = tutorialPage === 0;
    document.getElementById('tutorial-next').innerHTML = tutorialPage === TUTORIAL_PAGES.length - 1
        ? '开始游戏 <i data-lucide="play"></i>'
        : '下一步 <i data-lucide="chevron-right"></i>';
    refreshIcons();
}

function logMessage(sender, text, type = 'system') {
    const logDiv = document.getElementById('game-log');
    let time = new Date().toLocaleTimeString('zh-CN', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let entry = document.createElement('div');
    entry.className = `log-entry log-${type}`;
    entry.innerHTML = `[${time}] <strong>${sender}:</strong> ${text}`;
    logDiv.appendChild(entry);
    logDiv.scrollTop = logDiv.scrollHeight;
}

function ensureEffectLayer() {
    let layer = document.getElementById('effect-layer');
    if (!layer) {
        layer = document.createElement('div');
        layer.id = 'effect-layer';
        document.body.appendChild(layer);
    }
    return layer;
}

// 居中过场横幅（开局 / 季度更替 / 新一轮），带音效
function showBanner(title, subtitle, soundType) {
    const layer = ensureEffectLayer();
    const banner = document.createElement('div');
    banner.className = 'fx-banner';
    banner.innerHTML = `<div class="fx-banner-title">${title}</div>${subtitle ? `<div class="fx-banner-sub">${subtitle}</div>` : ''}`;
    layer.appendChild(banner);
    if (soundType) playSound(soundType);
    setTimeout(() => banner.remove(), 1900);
}

// ==========================================
// 音效引擎：用 Web Audio 实时合成，零外部音频文件
// ==========================================
let audioCtx = null;
function getAudioCtx() {
    if (!audioCtx) {
        try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
        catch (e) { return null; }
    }
    if (audioCtx.state === 'suspended') { try { audioCtx.resume(); } catch (e) {} }
    return audioCtx;
}

// 单个音符
function _tone(ctx, t0, freq, dur, opts = {}) {
    const { type = 'triangle', gain = 0.07, slideTo = null, attack = 0.008 } = opts;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
}

// 一段噪声（用于刀刺、铲土、锤击等打击质感）
function _noise(ctx, t0, dur, opts = {}) {
    const { gain = 0.12, filter = 1200, type = 'lowpass' } = opts;
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const bp = ctx.createBiquadFilter();
    bp.type = type;
    bp.frequency.value = filter;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(bp).connect(g).connect(ctx.destination);
    src.start(t0);
    src.stop(t0 + dur + 0.02);
}

function playSound(type) {
    if (!expansionOptions.sound) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    const t = ctx.currentTime;
    try {
        switch (type) {
            case 'checkin': // 门铃叮咚
                _tone(ctx, t, 660, 0.12, { type: 'sine', gain: 0.09 });
                _tone(ctx, t + 0.10, 880, 0.20, { type: 'sine', gain: 0.09 });
                break;
            case 'flip': // 翻牌：短促的纸张刮擦
                _noise(ctx, t, 0.07, { gain: 0.06, filter: 2800, type: 'highpass' });
                _tone(ctx, t + 0.02, 520, 0.07, { type: 'triangle', gain: 0.04, slideTo: 760 });
                break;
            case 'bribe': // 金币叮当（上行）
                [880, 1040, 1320].forEach((f, i) => _tone(ctx, t + i * 0.06, f, 0.16, { type: 'triangle', gain: 0.055 }));
                break;
            case 'kill': // 刀刺 + 低频闷击
                _noise(ctx, t, 0.16, { gain: 0.18, filter: 900 });
                _tone(ctx, t, 170, 0.24, { type: 'sawtooth', gain: 0.11, slideTo: 45 });
                break;
            case 'build': // 锤击三连
                [0, 0.12, 0.24].forEach(d => {
                    _noise(ctx, t + d, 0.06, { gain: 0.14, filter: 520 });
                    _tone(ctx, t + d, 210, 0.08, { type: 'square', gain: 0.05, slideTo: 120 });
                });
                break;
            case 'bury': // 铲土三下（低频噪声）
                [0, 0.16, 0.32].forEach(d => _noise(ctx, t + d, 0.12, { gain: 0.13, filter: 340 }));
                break;
            case 'police': // 警笛来回
                _tone(ctx, t, 740, 0.3, { type: 'square', gain: 0.06, slideTo: 460 });
                _tone(ctx, t + 0.3, 460, 0.3, { type: 'square', gain: 0.06, slideTo: 740 });
                _tone(ctx, t + 0.6, 740, 0.3, { type: 'square', gain: 0.06, slideTo: 460 });
                break;
            case 'rent': // 收银机 cha-ching
                _noise(ctx, t, 0.04, { gain: 0.05, filter: 3200, type: 'highpass' });
                _tone(ctx, t, 990, 0.10, { type: 'triangle', gain: 0.08 });
                _tone(ctx, t + 0.08, 1320, 0.18, { type: 'triangle', gain: 0.08 });
                break;
            case 'wage': // 金币落下（下行）
                [660, 520, 392].forEach((f, i) => _tone(ctx, t + i * 0.07, f, 0.14, { type: 'triangle', gain: 0.055 }));
                break;
            case 'object': // 魔法闪光（上行琶音）
                [523, 659, 784, 1047].forEach((f, i) => _tone(ctx, t + i * 0.05, f, 0.16, { type: 'sine', gain: 0.05 }));
                break;
            case 'carnie': // 马戏团口风琴小调
                [523, 587, 659, 784, 659, 784, 880].forEach((f, i) => _tone(ctx, t + i * 0.09, f, 0.12, { type: 'square', gain: 0.045 }));
                break;
            case 'win':
                [523, 659, 784, 1047].forEach((f, i) => _tone(ctx, t + i * 0.12, f, 0.3, { type: 'triangle', gain: 0.07 }));
                break;
            case 'lose':
                [440, 392, 330, 262].forEach((f, i) => _tone(ctx, t + i * 0.14, f, 0.32, { type: 'sawtooth', gain: 0.06 }));
                break;
            case 'launder': // 数钱/洗钱：轻快的金属叮叮
                [988, 1175, 988, 784].forEach((f, i) => _tone(ctx, t + i * 0.05, f, 0.09, { type: 'triangle', gain: 0.05 }));
                break;
            case 'gamestart': // 开局：低沉不祥的钟
                _tone(ctx, t, 130, 0.9, { type: 'sine', gain: 0.09 });
                _tone(ctx, t + 0.02, 196, 0.9, { type: 'sine', gain: 0.06 });
                _noise(ctx, t, 0.5, { gain: 0.04, filter: 600 });
                break;
            case 'season': // 季度更替：低沉的锣
                _tone(ctx, t, 110, 1.1, { type: 'sine', gain: 0.1, slideTo: 90 });
                _tone(ctx, t, 165, 1.1, { type: 'triangle', gain: 0.05 });
                break;
            case 'round': // 新一轮：柔和的过场音
                _tone(ctx, t, 392, 0.18, { type: 'sine', gain: 0.05 });
                _tone(ctx, t + 0.10, 587, 0.22, { type: 'sine', gain: 0.05 });
                break;
            default:
                _tone(ctx, t, 440, 0.1, { gain: 0.06 });
        }
    } catch (err) { /* 音频异常时静默忽略，不永久关闭音效 */ }
}

// ==========================================
// 视觉特效引擎：飘字 + 粒子 + 锚定到具体房间/资产
// ==========================================
function effectAnchor(anchorEl) {
    if (anchorEl && typeof anchorEl.getBoundingClientRect === 'function') {
        const r = anchorEl.getBoundingClientRect();
        if (r.width || r.height) return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }
    return { x: window.innerWidth / 2, y: window.innerHeight * 0.42 };
}

function spawnParticles(x, y, opts = {}) {
    const layer = ensureEffectLayer();
    const { count = 12, glyphs = ['•'], colors = ['#fff'], spread = 80, rise = -70, size = 15, gravity = false, dur = 900 } = opts;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'fx-particle';
        p.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
        const dx = (Math.random() - 0.5) * spread * 2;
        const dy = gravity ? Math.abs(rise) * (0.5 + Math.random()) : rise * (0.5 + Math.random());
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.fontSize = (size * (0.7 + Math.random() * 0.7)).toFixed(0) + 'px';
        p.style.color = colors[Math.floor(Math.random() * colors.length)];
        p.style.setProperty('--dx', dx.toFixed(1) + 'px');
        p.style.setProperty('--dy', dy.toFixed(1) + 'px');
        p.style.setProperty('--rot', (Math.random() * 720 - 360).toFixed(0) + 'deg');
        p.style.animationDuration = (dur * (0.7 + Math.random() * 0.5)).toFixed(0) + 'ms';
        layer.appendChild(p);
        setTimeout(() => p.remove(), dur + 400);
    }
}

function shakeScreen() {
    document.body.classList.add('screen-shake');
    setTimeout(() => document.body.classList.remove('screen-shake'), 360);
}

function glowEl(anchorEl, cls) {
    if (!anchorEl || !anchorEl.classList) return;
    anchorEl.classList.add(cls);
    setTimeout(() => anchorEl.classList.remove(cls), 850);
}

function sirenFlash() {
    const layer = ensureEffectLayer();
    const f = document.createElement('div');
    f.className = 'fx-siren';
    layer.appendChild(f);
    setTimeout(() => f.remove(), 1500);
}

function confettiRain() {
    const layer = ensureEffectLayer();
    const colors = ['#ef5350', '#ffca28', '#66bb6a', '#42a5f5', '#ab47bc', '#ff7043', '#26c6da'];
    for (let i = 0; i < 30; i++) {
        const c = document.createElement('div');
        c.className = 'fx-confetti';
        c.style.left = (Math.random() * 100).toFixed(1) + 'vw';
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDelay = (Math.random() * 0.4).toFixed(2) + 's';
        c.style.animationDuration = (1.4 + Math.random() * 1.2).toFixed(2) + 's';
        layer.appendChild(c);
        setTimeout(() => c.remove(), 2900);
    }
}

const EFFECT_META = {
    checkin: { label: '入住', icon: '🔑' },
    bribe:   { label: '收买', icon: '🪙' },
    kill:    { label: '刺杀', icon: '🔪' },
    build:   { label: '建造', icon: '🔨' },
    bury:    { label: '埋尸', icon: '⛏️' },
    police:  { label: '警察突查', icon: '🚨' },
    rent:    { label: '收租', icon: '💰' },
    wage:    { label: '付工资', icon: '💸' },
    object:  { label: '道具', icon: '✨' },
    carnie:  { label: '嘉年华', icon: '🎪' },
    launder: { label: '洗钱', icon: '🏦' }
};

function playEffect(type, detail = '', anchorEl = null) {
    playSound(type);
    const layer = ensureEffectLayer();
    const { x, y } = effectAnchor(anchorEl);
    const meta = EFFECT_META[type] || { label: type, icon: '' };

    // 锚定飘字
    const burst = document.createElement('div');
    burst.className = `effect-burst effect-${type} anchored`;
    burst.style.left = x + 'px';
    burst.style.top = (y - 8) + 'px';
    burst.textContent = `${meta.icon} ${meta.label}${detail ? ' · ' + detail : ''}`;
    layer.appendChild(burst);
    setTimeout(() => burst.remove(), 1000);

    // 粒子 / 场景特效
    switch (type) {
        case 'checkin':
            spawnParticles(x, y, { count: 10, glyphs: ['✨', '🔑', '·'], colors: ['#ffe082', '#ffca28'], spread: 60, rise: -70, size: 16 });
            glowEl(anchorEl, 'glow-checkin');
            break;
        case 'bribe':
            spawnParticles(x, y, { count: 12, glyphs: ['🪙', '💵', '◦'], colors: ['#64b5f6', '#90caf9'], spread: 70, rise: -95, size: 16 });
            glowEl(anchorEl, 'glow-bribe');
            break;
        case 'kill':
            spawnParticles(x, y, { count: 20, glyphs: ['🩸', '●', '✶'], colors: ['#b71c1c', '#ef5350', '#7f0000'], spread: 95, rise: -45, size: 16, gravity: true });
            glowEl(anchorEl, 'glow-kill');
            shakeScreen();
            break;
        case 'build':
            spawnParticles(x, y, { count: 14, glyphs: ['🧱', '▪', '▫'], colors: ['#a5d6a7', '#8d6e63', '#bcaaa4'], spread: 80, rise: -55, size: 14, gravity: true });
            glowEl(anchorEl, 'glow-build');
            break;
        case 'bury':
            spawnParticles(x, y, { count: 16, glyphs: ['●', '◦', '▪'], colors: ['#6d4c41', '#8d6e63', '#4e342e'], spread: 70, rise: -32, size: 13, gravity: true });
            glowEl(anchorEl, 'glow-bury');
            break;
        case 'police':
            sirenFlash();
            shakeScreen();
            spawnParticles(x, y, { count: 10, glyphs: ['🚨', '❗'], colors: ['#ef5350', '#42a5f5'], spread: 90, rise: -60, size: 18 });
            break;
        case 'rent':
            spawnParticles(x, y, { count: 12, glyphs: ['💰', '🪙', '＄'], colors: ['#fff176', '#ffd54f'], spread: 55, rise: -95, size: 15 });
            glowEl(anchorEl, 'glow-rent');
            break;
        case 'wage':
            spawnParticles(x, y, { count: 12, glyphs: ['💸', '🪙', '↓'], colors: ['#bcaaa4', '#8d6e63'], spread: 55, rise: 80, size: 15, gravity: true });
            break;
        case 'object':
            spawnParticles(x, y, { count: 16, glyphs: ['✨', '★', '✦', '❉'], colors: ['#ffcc80', '#ce93d8', '#80deea', '#fff59d'], spread: 90, rise: -75, size: 16 });
            break;
        case 'carnie':
            confettiRain();
            spawnParticles(x, y, { count: 14, glyphs: ['🎪', '🎠', '🎟️'], colors: ['#ffb74d', '#ba68c8', '#4dd0e1'], spread: 100, rise: -80, size: 16 });
            break;
        case 'launder':
            spawnParticles(x, y, { count: 12, glyphs: ['🪙', '🏦', '＄'], colors: ['#ffd54f', '#b0bec5'], spread: 60, rise: -70, size: 15 });
            break;
    }
}

window.onload = function() {
    refreshIcons();
};
