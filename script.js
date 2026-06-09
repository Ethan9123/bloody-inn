// ==========================================
// 核心卡牌数据池定义 (共70张旅客，每派系14张 + 8张农民)
// ==========================================
const BASE_TRAVELERS = [
    // --- 红色：手工业者 (Artisans) - 建造特长 (共14张) ---
    { name: "农民 (Cultivator)", role: "artisan", color: "artisan-red", rank: 0, loot: 1, annexName: "菜园 (Vegetable Garden)", annexDesc: "建造时，你面前每有一个红色别馆(包含本别馆)便获得 1F。", aptitude: "build" },
    { name: "农民 (Cultivator)", role: "artisan", color: "artisan-red", rank: 0, loot: 1, annexName: "菜园 (Vegetable Garden)", annexDesc: "建造时，你面前每有一个红色别馆(包含本别馆)便获得 1F。", aptitude: "build" },
    { name: "农民 (Cultivator)", role: "artisan", color: "artisan-red", rank: 0, loot: 1, annexName: "菜园 (Vegetable Garden)", annexDesc: "建造时，你面前每有一个红色别馆(包含本别馆)便获得 1F。", aptitude: "build" },
    { name: "农民 (Cultivator)", role: "artisan", color: "artisan-red", rank: 0, loot: 1, annexName: "菜园 (Vegetable Garden)", annexDesc: "建造时，你面前每有一个红色别馆(包含本别馆)便获得 1F。", aptitude: "build" },
    
    { name: "修车工 (Mechanic)", role: "artisan", color: "artisan-red", rank: 1, loot: 1, annexName: "车间 (Workshop)", annexDesc: "被动：此后执行“建造别馆”行动时，少支付一张帮工牌。", aptitude: "build" },
    { name: "修车工 (Mechanic)", role: "artisan", color: "artisan-red", rank: 1, loot: 1, annexName: "车间 (Workshop)", annexDesc: "被动：此后执行“建造别馆”行动时，少支付一张帮工牌。", aptitude: "build" },
    { name: "修车工 (Mechanic)", role: "artisan", color: "artisan-red", rank: 1, loot: 1, annexName: "车间 (Workshop)", annexDesc: "被动：此后执行“建造别馆”行动时，少支付一张帮工牌。", aptitude: "build" },
    { name: "修车工 (Mechanic)", role: "artisan", color: "artisan-red", rank: 1, loot: 1, annexName: "车间 (Workshop)", annexDesc: "被动：此后执行“建造别馆”行动时，少支付一张帮工牌。", aptitude: "build" },
    
    { name: "酿酒师 (Distiller)", role: "artisan", color: "artisan-red", rank: 2, loot: 1, annexName: "酒厂 (Distillery)", annexDesc: "被动：每轮清晨阶段支付帮工工资时，免除其中一名帮工的 1F 工资。", aptitude: "build" },
    { name: "酿酒师 (Distiller)", role: "artisan", color: "artisan-red", rank: 2, loot: 1, annexName: "酒厂 (Distillery)", annexDesc: "被动：每轮清晨阶段支付帮工工资时，免除其中一名帮工的 1F 工资。", aptitude: "build" },
    { name: "酿酒师 (Distiller)", role: "artisan", color: "artisan-red", rank: 2, loot: 1, annexName: "酒厂 (Distillery)", annexDesc: "被动：每轮清晨阶段支付帮工工资时，免除其中一名帮工的 1F 工资。", aptitude: "build" },
    
    { name: "花匠 (Gardener)", role: "artisan", color: "artisan-red", rank: 3, loot: 2, annexName: "花园 (Gardens)", annexDesc: "被动：每轮清晨阶段的“房客离店”步骤中，你额外获得 2F 租金。", aptitude: "build" },
    { name: "绿化师 (Landscaper)", role: "artisan", color: "artisan-red", rank: 3, loot: 4, annexName: "公园 (Park)", annexDesc: "建造时立刻获得 4F。游戏结束时，离店堆中每有一张红色卡牌，你获得 4F。", aptitude: "build" },
    { name: "屠夫 (Butcher)", role: "artisan", color: "artisan-red", rank: 3, loot: 1, annexName: "肉铺 (Butchers Shop)", annexDesc: "被动：你在一回合“刺杀”行动中可以刺杀任意数量的旅客(须支付所有刺杀费用)。", aptitude: "build" },

    // --- 蓝色：商贾商贩 (Merchants) - 拉拢特长 (共14张) ---
    { name: "报童 (Newsboy)", role: "merchant", color: "merchant-blue", rank: 0, loot: 1, annexName: "报摊 (Kiosk)", annexDesc: "建造时，你面前每有一个蓝色别馆(包含本别馆)便获得 1F。", aptitude: "bribe" },
    { name: "报童 (Newsboy)", role: "merchant", color: "merchant-blue", rank: 0, loot: 1, annexName: "报摊 (Kiosk)", annexDesc: "建造时，你面前每有一个蓝色别馆(包含本别馆)便获得 1F。", aptitude: "bribe" },
    { name: "报童 (Newsboy)", role: "merchant", color: "merchant-blue", rank: 0, loot: 1, annexName: "报摊 (Kiosk)", annexDesc: "建造时，你面前每有一个蓝色别馆(包含本别馆)便获得 1F。", aptitude: "bribe" },
    { name: "报童 (Newsboy)", role: "merchant", color: "merchant-blue", rank: 0, loot: 1, annexName: "报摊 (Kiosk)", annexDesc: "建造时，你面前每有一个蓝色别馆(包含本别馆)便获得 1F。", aptitude: "bribe" },
    
    { name: "销售代表 (Representative)", role: "merchant", color: "merchant-blue", rank: 1, loot: 1, annexName: "会客厅 (Parlour)", annexDesc: "被动：此后执行“拉拢帮凶”行动时，少支付一张帮工牌。", aptitude: "bribe" },
    { name: "销售代表 (Representative)", role: "merchant", color: "merchant-blue", rank: 1, loot: 1, annexName: "会客厅 (Parlour)", annexDesc: "被动：此后执行“拉拢帮凶”行动时，少支付一张帮工牌。", aptitude: "bribe" },
    { name: "销售代表 (Representative)", role: "merchant", color: "merchant-blue", rank: 1, loot: 1, annexName: "会客厅 (Parlour)", annexDesc: "被动：此后执行“拉拢帮凶”行动时，少支付一张帮工牌。", aptitude: "bribe" },
    { name: "销售代表 (Representative)", role: "merchant", color: "merchant-blue", rank: 1, loot: 1, annexName: "会客厅 (Parlour)", annexDesc: "被动：此后执行“拉拢帮凶”行动时，少支付一张帮工牌。", aptitude: "bribe" },
    
    { name: "礼宾员 (Concierge)", role: "merchant", color: "merchant-blue", rank: 2, loot: 1, annexName: "客房服务 (Room Service)", annexDesc: "建造时：立刻选择任意客房布置服务。每次该客房有旅客入住时，你获得等同于该旅客等级的F。", aptitude: "bribe" },
    { name: "礼宾员 (Concierge)", role: "merchant", color: "merchant-blue", rank: 2, loot: 1, annexName: "客房服务 (Room Service)", annexDesc: "建造时：立刻选择任意客房布置服务。每次该客房有旅客入住时，你获得等同于该旅客等级的F。", aptitude: "bribe" },
    { name: "礼宾员 (Concierge)", role: "merchant", color: "merchant-blue", rank: 2, loot: 1, annexName: "客房服务 (Room Service)", annexDesc: "建造时：立刻选择任意客房布置服务。每次该客房有旅客入住时，你获得等同于该旅客等级的F。", aptitude: "bribe" },
    
    { name: "杂货商 (Grocer)", role: "merchant", color: "merchant-blue", rank: 3, loot: 4, annexName: "杂货铺 (Grocery)", annexDesc: "建造时获得 4F。游戏结束时，离店堆中每有一张蓝色卡牌，你获得 4F。", aptitude: "bribe" },
    { name: "店主 (Shopkeeper)", role: "merchant", color: "merchant-blue", rank: 3, loot: 1, annexName: "商铺 (Store)", annexDesc: "被动：你在一回合“拉拢”行动中可以拉拢任意数量的旅客（不适用于农民，须支付费用）。", aptitude: "bribe" },
    { name: "酿酒人 (Brewer)", role: "merchant", color: "merchant-blue", rank: 3, loot: 1, annexName: "啤酒厂 (Brewery)", annexDesc: "被动：你在一回合“拉拢”行动中可以同时收买最多 4 个酒馆农民（农民本身不需花卡）。", aptitude: "bribe" },

    // --- 紫色：神职人员 (Religious) - 埋尸特长 (共14张) ---
    { name: "新修士 (Novice)", role: "religious", color: "religious-purple", rank: 0, loot: 1, annexName: "祭坛 (Altar)", annexDesc: "建造时，你面前每有一个紫色别馆(包含本别馆)便获得 1F。", aptitude: "bury" },
    { name: "新修士 (Novice)", role: "religious", color: "religious-purple", rank: 0, loot: 1, annexName: "祭坛 (Altar)", annexDesc: "建造时，你面前每有一个紫色别馆(包含本别馆)便获得 1F。", aptitude: "bury" },
    { name: "新修士 (Novice)", role: "religious", color: "religious-purple", rank: 0, loot: 1, annexName: "祭坛 (Altar)", annexDesc: "建造时，你面前每有一个紫色别馆(包含本别馆)便获得 1F。", aptitude: "bury" },
    { name: "新修士 (Novice)", role: "religious", color: "religious-purple", rank: 0, loot: 1, annexName: "祭坛 (Altar)", annexDesc: "建造时，你面前每有一个紫色别馆(包含本别馆)便获得 1F。", aptitude: "bury" },
    
    { name: "修道士 (Monk)", role: "religious", color: "religious-purple", rank: 1, loot: 1, annexName: "厢房 (Room)", annexDesc: "建造时：立刻将版图上的一颗中立白色钥匙替换为你自己颜色的钥匙（你永久多一间客房）。", aptitude: "bury" },
    { name: "修道士 (Monk)", role: "religious", color: "religious-purple", rank: 1, loot: 1, annexName: "厢房 (Room)", annexDesc: "建造时：立刻将版图上的一颗中立白色钥匙替换为你自己颜色的钥匙（你永久多一间客房）。", aptitude: "bury" },
    { name: "修道士 (Monk)", role: "religious", color: "religious-purple", rank: 1, loot: 1, annexName: "厢房 (Room)", annexDesc: "建造时：立刻将版图上的一颗中立白色钥匙替换为你自己颜色的钥匙（你永久多一间客房）。", aptitude: "bury" },
    { name: "修道士 (Monk)", role: "religious", color: "religious-purple", rank: 1, loot: 1, annexName: "厢房 (Room)", annexDesc: "建造时：立刻将版图上的一颗中立白色钥匙替换为你自己颜色的钥匙（你永久多一间客房）。", aptitude: "bury" },
    
    { name: "修道院院长 (Abbott)", role: "religious", color: "religious-purple", rank: 2, loot: 1, annexName: "酒窖 (Cellar)", annexDesc: "被动：此后执行“埋葬尸体”行动时，少支付一张帮工牌。", aptitude: "bury" },
    { name: "修道院院长 (Abbott)", role: "religious", color: "religious-purple", rank: 2, loot: 1, annexName: "酒窖 (Cellar)", annexDesc: "被动：此后执行“埋葬尸体”行动时，少支付一张帮工牌。", aptitude: "bury" },
    { name: "修道院院长 (Abbott)", role: "religious", color: "religious-purple", rank: 2, loot: 1, annexName: "酒窖 (Cellar)", annexDesc: "被动：此后执行“埋葬尸体”行动时，少支付一张帮工牌。", aptitude: "bury" },
    
    { name: "神父 (Priest)", role: "religious", color: "religious-purple", rank: 3, loot: 1, annexName: "小教堂 (Chapel)", annexDesc: "被动：此后执行“埋尸”时，打出的非铲子特长帮工不需要丢入弃牌堆，可以直接返回手牌。", aptitude: "bury" },
    { name: "大主教 (Archbishop)", role: "religious", color: "religious-purple", rank: 3, loot: 1, annexName: "地下墓室 (Crypt)", annexDesc: "被动：你在一回合“埋尸”行动中可以埋葬任意数量的尸体（必须支付对应费用）。", aptitude: "bury" },
    { name: "主教 (Bishop)", role: "religious", color: "religious-purple", rank: 3, loot: 4, annexName: "主教区 (Bishopric)", annexDesc: "建造时获得 4F。游戏结束时，离店堆中每有一张紫色卡牌，你获得 4F。", aptitude: "bury" },

    // --- 绿色：贵族达官 (Nobles) - 无特长但油水最多 (共14张) ---
    { name: "男爵 (Baron)", role: "noble", color: "noble-green", rank: 0, loot: 4, annexName: "豪华吊灯 (Grand Chandelier)", annexDesc: "建造时：立刻获得 4F 现金奖励。", aptitude: "none" },
    { name: "男爵 (Baron)", role: "noble", color: "noble-green", rank: 0, loot: 4, annexName: "豪华吊灯 (Grand Chandelier)", annexDesc: "建造时：立刻获得 4F 现金奖励。", aptitude: "none" },
    { name: "男爵 (Baron)", role: "noble", color: "noble-green", rank: 0, loot: 4, annexName: "豪华吊灯 (Grand Chandelier)", annexDesc: "建造时：立刻获得 4F 现金奖励。", aptitude: "none" },
    { name: "男爵 (Baron)", role: "noble", color: "noble-green", rank: 0, loot: 4, annexName: "豪华吊灯 (Grand Chandelier)", annexDesc: "建造时：立刻获得 4F 现金奖励。", aptitude: "none" },
    
    { name: "子爵 (Viscount)", role: "noble", color: "noble-green", rank: 1, loot: 6, annexName: "特大号床 (King Size Bed)", annexDesc: "建造时：立刻获得 6F 现金奖励。", aptitude: "none" },
    { name: "子爵 (Viscount)", role: "noble", color: "noble-green", rank: 1, loot: 6, annexName: "特大号床 (King Size Bed)", annexDesc: "建造时：立刻获得 6F 现金奖励。", aptitude: "none" },
    { name: "子爵 (Viscount)", role: "noble", color: "noble-green", rank: 1, loot: 6, annexName: "特大号床 (King Size Bed)", annexDesc: "建造时：立刻获得 6F 现金奖励。", aptitude: "none" },
    { name: "子爵 (Viscount)", role: "noble", color: "noble-green", rank: 1, loot: 6, annexName: "特大号床 (King Size Bed)", annexDesc: "建造时：立刻获得 6F 现金奖励。", aptitude: "none" },
    
    { name: "伯爵 (Count)", role: "noble", color: "noble-green", rank: 2, loot: 9, annexName: "豪华餐厅 (Dining Room)", annexDesc: "建造时：立刻获得 9F 现金奖励。", aptitude: "none" },
    { name: "伯爵 (Count)", role: "noble", color: "noble-green", rank: 2, loot: 9, annexName: "豪华餐厅 (Dining Room)", annexDesc: "建造时：立刻获得 9F 现金奖励。", aptitude: "none" },
    { name: "伯爵 (Count)", role: "noble", color: "noble-green", rank: 2, loot: 9, annexName: "豪华餐厅 (Dining Room)", annexDesc: "建造时：立刻获得 9F 现金奖励。", aptitude: "none" },
    
    { name: "公爵 (Duke)", role: "noble", color: "noble-green", rank: 3, loot: 4, annexName: "马厩 (Stables)", annexDesc: "建造时获得 4F。游戏结束时，离店堆中每有一张绿色卡牌，你获得 4F。", aptitude: "none" },
    { name: "王子 (Prince)", role: "noble", color: "noble-green", rank: 3, loot: 0, annexName: "温室 (Greenhouse)", annexDesc: "被动：游戏结束结算时，你所拥有的每张支票为你提供额外 3F 收益。", aptitude: "none" },
    { name: "侯爵 (Marquis)", role: "noble", color: "noble-green", rank: 3, loot: 18, annexName: "凉亭 (Pavilion)", annexDesc: "建造时：立刻获得 18F 现金奖励。", aptitude: "none" },

    // --- 灰色：治安警察 (Police) - 刺杀特长 (共14张) ---
    { name: "协警 (Peacekeeper)", role: "police", color: "police-grey", rank: 0, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "协警 (Peacekeeper)", role: "police", color: "police-grey", rank: 0, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "协警 (Peacekeeper)", role: "police", color: "police-grey", rank: 0, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "协警 (Peacekeeper)", role: "police", color: "police-grey", rank: 0, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    
    { name: "警佐 (Brigadier Chief)", role: "police", color: "police-grey", rank: 1, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警佐 (Brigadier Chief)", role: "police", color: "police-grey", rank: 1, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警佐 (Brigadier Chief)", role: "police", color: "police-grey", rank: 1, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警佐 (Brigadier Chief)", role: "police", color: "police-grey", rank: 1, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    
    { name: "警长 (Police Chief)", role: "police", color: "police-grey", rank: 2, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警长 (Police Chief)", role: "police", color: "police-grey", rank: 2, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "警长 (Police Chief)", role: "police", color: "police-grey", rank: 2, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },

    { name: "督察 (Inspector)", role: "police", color: "police-grey", rank: 3, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "督察 (Inspector)", role: "police", color: "police-grey", rank: 3, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" },
    { name: "督察 (Inspector)", role: "police", color: "police-grey", rank: 3, loot: 1, annexName: "", annexDesc: "警察无法成为别馆。清晨留在房内触发调查。", aptitude: "kill" }
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
    { name: "骗子 (Con Artist)", role: "carnie", color: "carnie-orange", rank: 0, buildRank: 1, loot: 14, annexName: "拖车 (Trailer)", annexDesc: "嘉年华拖车：可像别馆一样埋尸，清晨有旅客时收 1F。", aptitude: "bribe", isTrailer: true },
    { name: "杂耍艺人 (Juggler)", role: "carnie", color: "carnie-orange", rank: 2, buildRank: 2, loot: 14, annexName: "拖车 (Trailer)", annexDesc: "嘉年华拖车：迎客时也要入住旅客。", aptitude: "build", isTrailer: true },
    { name: "小丑 (Clown)", role: "carnie", color: "carnie-orange", rank: 0, buildRank: 2, loot: 14, annexName: "拖车 (Trailer)", annexDesc: "嘉年华拖车：迎客时若拖车下没有尸体，也必须安排旅客入住。", aptitude: "bury", isTrailer: true },
    { name: "马戏叫卖人 (Barker)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 3, loot: 20, annexName: "嘉年华摊位 (Carnival Booth)", annexDesc: "建成后：此后每当一名嘉年华旅客入住旅馆，你便获得 3F。", aptitude: "bribe" },
    { name: "驯熊师 (Bear Tamer)", role: "carnie", color: "carnie-orange", rank: 3, buildRank: 1, loot: 20, annexName: "熊笼 (Bear Cage)", annexDesc: "被动：此后执行刺杀行动时少支付一张帮工牌。", aptitude: "kill" },
    { name: "伴游 (Companion)", role: "carnie", color: "carnie-orange", rank: 3, buildRank: 1, loot: 20, annexName: "密室 (Nook)", annexDesc: "被动：执行拉拢行动时，打出的帮工全部返回手牌。", aptitude: "bribe" },
    { name: "飞刀手 (Knife Thrower)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 0, loot: 10, annexName: "刀靶 (Target Stand)", annexDesc: "建造时，你可以立刻对一名等级0旅客执行一次免费刺杀。", aptitude: "kill" },
    { name: "占卜师 (Fortune Teller)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 1, loot: 10, annexName: "占卜帐篷 (Fortune Tent)", annexDesc: "建造时查看旅客牌堆顶 3 张并重新排序。", aptitude: "bury" },
    { name: "大力士 (Strongman)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 0, loot: 10, annexName: "铁锤游戏 (Hammer Game)", annexDesc: "建造时获得 4F。", aptitude: "build" },
    { name: "空中飞人 (Acrobat)", role: "carnie", color: "carnie-orange", rank: 1, buildRank: 0, loot: 10, annexName: "高台 (High Wire)", annexDesc: "建造时获得 1F，并可把一名小酒馆农民加入手牌。", aptitude: "build" },
    { name: "侏儒 (Dwarf)", role: "carnie", color: "carnie-orange", rank: 2, buildRank: 1, loot: 16, annexName: "小舞台 (Tiny Stage)", annexDesc: "特殊埋葬：埋入别馆时不占用容量。", aptitude: "bury", specialBurial: "dwarf" },
    { name: "大胡子女士 (Bearded Lady)", role: "carnie", color: "carnie-orange", rank: 2, buildRank: 1, loot: 24, annexName: "梳妆间 (Dressing Room)", annexDesc: "特殊埋葬：埋葬她时油水须与对手（叔叔）平分——你只得一半(向上取整)，另一半归对手。", aptitude: "bribe", specialBurial: "bearded" },
    { name: "双胞胎 (Twins)", role: "carnie", color: "carnie-orange", rank: 2, buildRank: 1, loot: 24, annexName: "双人房 (Twin Room)", annexDesc: "特殊埋葬：必须埋在至少有 2 个空位的别馆下，埋葬后计为 2 具尸体（影响平局判定与告解室）。", aptitude: "bury", specialBurial: "twins" }
];

const NOTABLE_TRAVELERS = [
    // 以下 6 张为正版扩展名流，数字经中文PNP卡面逐张核对
    { name: "养蚕人 (Sericulturist)", role: "notable", color: "notable-gold", rank: 0, buildRank: 0, loot: 10, annexName: "丝绸农场 (Silk Farm)", annexDesc: "建造时，你每有一间住着旅客的自家客房，获得 3F。", aptitude: "none" },
    { name: "酿酒庄主 (Winemaker)", role: "notable", color: "notable-gold", rank: 2, buildRank: 0, loot: 14, annexName: "酒桶 (Wine Cask)", annexDesc: "建造时，每有一间住着旅客的中立客房，获得 3F。", aptitude: "none" },
    { name: "外科医生 (Surgeon)", role: "notable", color: "notable-gold", rank: 1, buildRank: 2, loot: 16, annexName: "实验室 (Laboratory)", annexDesc: "清晨退房时，若对手有未埋尸体，你获得 3F。", aptitude: "none" },
    { name: "银行家 (Banker)", role: "notable", color: "notable-gold", rank: 1, buildRank: 3, loot: 20, annexName: "保险库 (Safe)", annexDesc: "被动：对手获得超过40F上限的现金时，溢出部分归你。", aptitude: "none" },
    { name: "公证人 (Notary)", role: "notable", color: "notable-gold", rank: 3, buildRank: 1, loot: 20, annexName: "书房 (Study)", annexDesc: "对手洗钱/兑票时，你获得 1F。", aptitude: "none" },
    { name: "药剂师 (Pharmacist)", role: "notable", color: "notable-gold", rank: 1, buildRank: 3, loot: 20, annexName: "药房 (Pharmacy)", annexDesc: "清晨若你手牌至少 3 张，获得 2F。", aptitude: "none" },
    // 以下 8 张为本数字版自制名流（该中文PNP未收录其余名流），用于补足 14 张以替换贵族；效果均已实装
    { name: "律师 (Lawyer)", role: "notable", color: "notable-gold", rank: 0, buildRank: 1, loot: 4, annexName: "档案室 (Archive)", annexDesc: "建造时获得 4F。", aptitude: "none" },
    { name: "医生 (Doctor)", role: "notable", color: "notable-gold", rank: 1, buildRank: 1, loot: 6, annexName: "诊所 (Clinic)", annexDesc: "警察调查时，你可以少处理 1 具未埋尸体。", aptitude: "none" },
    { name: "收藏家 (Collector)", role: "notable", color: "notable-gold", rank: 2, buildRank: 3, loot: 10, annexName: "画廊 (Gallery)", annexDesc: "游戏结束时，每有一种颜色别馆获得 2F。", aptitude: "none" },
    { name: "铁路大亨 (Magnate)", role: "notable", color: "notable-gold", rank: 3, buildRank: 2, loot: 14, annexName: "马车站 (Coach House)", annexDesc: "建造时获得 6F。", aptitude: "none" },
    { name: "贵妇 (Heiress)", role: "notable", color: "notable-gold", rank: 3, buildRank: 1, loot: 18, annexName: "珠宝室 (Jewelry Room)", annexDesc: "建造时获得 8F。", aptitude: "none" },
    { name: "参议员 (Senator)", role: "notable", color: "notable-gold", rank: 3, buildRank: 3, loot: 15, annexName: "议事厅 (Council Room)", annexDesc: "游戏结束时，每张支票额外 2F。", aptitude: "none" },
    { name: "法官 (Judge)", role: "notable", color: "notable-gold", rank: 2, buildRank: 2, loot: 9, annexName: "法庭 (Court)", annexDesc: "警察调查时，先获得 2F。", aptitude: "none" },
    { name: "投机商 (Speculator)", role: "notable", color: "notable-gold", rank: 0, buildRank: 3, loot: 7, annexName: "交易所 (Exchange)", annexDesc: "建造时可立刻买 1 张支票。", aptitude: "none" }
];

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
    { id: "cake", name: "蛋糕", cost: 0, timing: "黄昏", desc: "放在一名住客上：其本轮退房时你额外获得 2F。", effect: "extra_rent" },
    { id: "gold_teeth", name: "金牙", cost: 0, timing: "埋尸", desc: "下一次埋尸额外多掠夺 2F。", effect: "bury_bonus" },
    { id: "letter", name: "举报信", cost: 0, timing: "黄昏", desc: "本轮清晨即使没有警察，也强制按调查处理所有未埋尸体。", effect: "force_police" },
    { id: "rug", name: "地毯", cost: 0, timing: "清晨", desc: "把 1 具未埋尸体扫到地毯下，本轮调查不会被发现。", effect: "hide_corpse" },
    { id: "coffee", name: "咖啡", cost: 1, timing: "黄昏", desc: "立刻获得 2F。", effect: "coffee" },
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
let gameLength = 'short'; // 'short' (35张) 或 'long' (45张)
let difficulty = 'silly'; // 'silly', 'scheming', 'murderous'
let expansionOptions = {
    carnies: false,
    carnieEvents: false,
    notables: false,
    objects: false,
    sound: true
};

let roundNum = 1;
let seasonNum = 1;
let currentPhase = 'welcome';
let firstPlayer = 'player';
let activeTurn = 'player';
let actionNumber = 1;

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

// AI 状态 (邪恶叔叔)
let ai = {
    cash: 5,
    checks: 1,
    keys: [3, 4], // AI占用的客房ID，初始2间房间（房号3和4）
    hasServiceOn: 3, // 礼宾服务在3房
    corpses: [], // AI未埋尸体
    bribePile: [], // 拉拢堆 (计分)
    killPile: []  // 刺杀堆 (计分)
};

// 房间状态
let rooms = [];

// AI 动作卡组 (14张)
const AI_ACTION_TEMPLATES = [
    { name: "AI_01", top: "kill", bottom: "peasant_bribe" },
    { name: "AI_02", top: "bribe", bottom: "check" },
    { name: "AI_03", top: "room", bottom: "kill" },
    { name: "AI_04", top: "room_service", bottom: "bribe" },
    { name: "AI_05", top: "peasant_bribe", bottom: "room" },
    { name: "AI_06", top: "kill", bottom: "room_service" },
    { name: "AI_07", top: "bribe", bottom: "kill" },
    { name: "AI_08", top: "check", bottom: "bribe" },
    { name: "AI_09", top: "room", bottom: "peasant_bribe" },
    { name: "AI_10", top: "room_service", bottom: "check" },
    { name: "AI_11", top: "peasant_bribe", bottom: "kill" },
    { name: "AI_12", top: "bribe", bottom: "room" },
    { name: "AI_13", top: "kill", bottom: "room_service" },
    { name: "AI_14", top: "check", bottom: "bribe" }
];
let aiDeck = [];
let aiDiscard = [];

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
    cards.sort(() => Math.random() - 0.5);
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
    ai.keys = rooms.filter(r => r.key === 'ai').map(r => r.id);
    let aiServiceRoom = rooms.find(r => r.serviceOwner === 'ai');
    ai.hasServiceOn = aiServiceRoom ? aiServiceRoom.id : null;
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
        playerExtraRent: 0
    };
}

function resetObjectEffects() {
    objectEffects = {
        returnHelpersFor: {},
        buryBonus: 0,
        buryDiscount: 0,
        well: false,
        buildFromRoom: false
    };
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

// ==========================================
// 初始化与设置
// ==========================================
function setGameLength(length) {
    gameLength = length;
    document.getElementById('btn-short-game').classList.toggle('active', length === 'short');
    document.getElementById('btn-long-game').classList.toggle('active', length === 'long');
}

function setDifficulty(diff) {
    difficulty = diff;
    document.getElementById('btn-diff-silly').classList.toggle('active', diff === 'silly');
    document.getElementById('btn-diff-scheming').classList.toggle('active', diff === 'scheming');
    document.getElementById('btn-diff-murderous').classList.toggle('active', diff === 'murderous');
    let mm = document.getElementById('btn-diff-mastermind');
    if (mm) mm.classList.toggle('active', diff === 'mastermind');
    let ml = document.getElementById('btn-diff-ml');
    if (ml) ml.classList.toggle('active', diff === 'ml');
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
    allTravelers.forEach((c, idx) => c.id = 'trav_' + idx + '_' + Math.random().toString(36).substr(2, 5));
    shuffleCards(allTravelers);
    
    bistro = [];
    for (let i = 0; i < 8; i++) {
        bistro.push({
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
    
    player.hand = [bistro.pop(), bistro.pop()];
    
    // 入店牌堆固定为短局 35 / 长局 45 张，无论是否开启扩展都保持局长一致
    let targetDeck = (gameLength === 'short') ? 35 : 45;
    let deckSize = Math.min(allTravelers.length, Math.max(1, targetDeck));
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
    
    // 2. 初始化客房
    // 邪恶叔叔模式使用 8 间客房版图，其中 5 间初始开放：
    // 玩家 1 间、AI 3 间（其中 1 间带客房服务）、中立 1 间；其余客房暂未开放。
    rooms = [
        { id: 1, key: 'player', serviceOwner: null, hasService: false, occupant: null },
        { id: 2, key: 'neutral', serviceOwner: null, hasService: false, occupant: null },
        { id: 3, key: 'ai', serviceOwner: 'ai', hasService: true, occupant: null },
        { id: 4, key: 'ai', serviceOwner: null, hasService: false, occupant: null },
        { id: 5, key: 'ai', serviceOwner: null, hasService: false, occupant: null },
        { id: 6, key: 'closed', serviceOwner: null, hasService: false, occupant: null },
        { id: 7, key: 'closed', serviceOwner: null, hasService: false, occupant: null },
        { id: 8, key: 'closed', serviceOwner: null, hasService: false, occupant: null }
    ];
    
    aiDeck = JSON.parse(JSON.stringify(AI_ACTION_TEMPLATES));
    shuffleCards(aiDeck);
    aiDiscard = [];
    
    player.cash = 5;
    player.checks = 1;
    player.annexes = [
        { 
            card: { name: "大篷车宿营地 (Barn)", role: "artisan", color: "artisan-red", rank: 1, loot: 0, annexName: "大篷棚车", annexDesc: "自带1个埋尸坑的初始资产别馆。", aptitude: "none" },
            buried: []
        }
    ];
    player.corpses = [];
    player.objects = [];
    if (expansionOptions.objects) {
        player.cash = 10; // 姑妈道具：起始现金 10F，道具通过轮抽获得、付款后再扣
    }
    
    ai.cash = 5;
    ai.checks = 1;
    syncAIKeys();
    ai.corpses = [];
    ai.bribePile = [];
    ai.killPile = [];
    
    roundNum = 1;
    seasonNum = 1;
    currentPhase = 'welcome';
    firstPlayer = 'player';
    activeTurn = firstPlayer;
    actionNumber = 1;
    
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    document.getElementById('info-game-length').innerText = (gameLength === 'short') ? '短局 (35张牌)' : '长局 (45张牌)';
    let diffName = '傻叔叔 (只算支票)';
    if (difficulty === 'scheming') diffName = '阴险叔叔 (+拉拢分)';
    if (difficulty === 'murderous') diffName = '嗜血叔叔 (+刺杀积分)';
    if (difficulty === 'mastermind') diffName = '策略叔叔 (真人级)';
    if (difficulty === 'ml') diffName = '学习叔叔 (ML调优)';
    document.getElementById('info-difficulty').innerText = diffName;
    let enabledModules = [];
    if (expansionOptions.carnies) enabledModules.push('嘉年华员工');
    if (expansionOptions.carnieEvents) enabledModules.push('事件牌');
    if (expansionOptions.notables) enabledModules.push('名流替换贵族');
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

function startObjectDraft() {
    let deck = shuffleCards(OBJECT_CARDS.map(o => ({ ...o })));
    deck.forEach((o, i) => o.instanceId = `obj_${i}_${Math.random().toString(36).substr(2, 5)}`);
    draftState = { deck, packetSizes: [4, 3, 2], step: 0, picked: [], packet: [] };
    dealDraftPacket();
}
function dealDraftPacket() {
    let size = draftState.packetSizes[draftState.step];
    draftState.packet = draftState.deck.splice(0, size);
    renderDraftModal();
    document.getElementById('draft-modal').classList.remove('hidden');
}
function pickDraftCard(instanceId) {
    if (!draftState) return;
    let idx = draftState.packet.findIndex(o => o.instanceId === instanceId);
    if (idx === -1) return;
    draftState.picked.push(draftState.packet.splice(idx, 1)[0]);
    playSound('object');
    draftState.step++;
    if (draftState.step < draftState.packetSizes.length) {
        dealDraftPacket();
    } else {
        document.getElementById('draft-modal').classList.add('hidden');
        startObjectPayment();
    }
}
function renderDraftModal() {
    const hints = ['从 4 张里选 1 张（其余 3 张传给下一位）', '从 3 张里选 1 张（其余 2 张传给下一位）', '从 2 张里选 1 张（剩下 1 张丢弃）'];
    document.getElementById('draft-step-label').innerText = `轮抽 ${draftState.step + 1} / 3 · 已选 ${draftState.picked.length} 张`;
    document.getElementById('draft-hint').innerText = hints[draftState.step];
    document.getElementById('draft-cards').innerHTML = draftState.packet.map(o =>
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
    let hostName = firstPlayer === 'player' ? '玩家' : '邪恶叔叔';
    logMessage("系统", `--- 第 ${roundNum} 轮：黄昏阶段 (迎客入店)，本轮主理人：${hostName} ---`, "system");
    showBanner(`第 ${roundNum} 轮`, `主理人：${hostName} · ${seasonNum === 1 ? '第一' : '第二'}季度`, 'round');

    if (firstPlayer === 'player') {
        logMessage("玩家", "您是第一玩家。每抽到一位旅客后，请选择一间开放且空置的客房。", "player");
        welcomeGuestsSequentially();
    } else {
        logMessage("AI", "邪恶叔叔是第一玩家，他决定迎客的房间顺序...", "ai");
        setTimeout(aiWelcomeGuests, 1000);
    }
}

function welcomeGuestsSequentially() {
    let emptyRooms = rooms.filter(r => isOpenRoom(r) && !r.occupant);
    if (emptyRooms.length === 0) {
        finishWelcomePhase();
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
        <div class="hint-line" id="welcome-hint">${firstPlayer === 'player'
            ? `请把 <strong>${card.name}</strong> 安排进一间开放且空置的客房（点击客房）。`
            : '邪恶叔叔正在安排入住…'}</div>
        ${nextCard
            ? `<div class="next-peek">取走后下一位：<strong>${nextCard.name}</strong>（${getRankDisplay(nextCard)}）</div>`
            : `<div class="next-peek">这是入店牌堆的最后一位旅客。</div>`}
    `;
    document.getElementById('action-box-title').innerText = "黄昏迎客";
    document.getElementById('action-box-desc').innerText = firstPlayer === 'player' ? `请安置 ${card.name}（点击客房）。` : '';
    enableMainActionButtons(false);
    playSound('checkin');
    refreshIcons();
}

function handleWelcomeRoomSelect(roomId) {
    if (currentPhase !== 'welcome' || !pendingWelcomeCard || firstPlayer !== 'player') return;
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

function aiWelcomeGuests() {
    let emptyRooms = rooms.filter(r => isOpenRoom(r) && !r.occupant);
    if (emptyRooms.length === 0) {
        finishWelcomePhase();
        return;
    }
    
    // 规则（Evil Uncle 单人模式）：查看牌堆顶等同空房数的旅客，最低等级塞玩家房、最高塞自己房、其余进中立房
    let drawn = [];
    for (let i = 0; i < emptyRooms.length; i++) {
        let card = drawTravelerCard();
        if (card) drawn.push(card);
    }
    if (drawn.length === 0) {
        finishWelcomePhase();
        return;
    }

    drawn.sort((a, b) => getCardRank(a, 'bribe') - getCardRank(b, 'bribe'));
    let playerRooms = emptyRooms.filter(r => r.key === 'player');
    let aiRooms = emptyRooms.filter(r => r.key === 'ai');
    let neutralRooms = emptyRooms.filter(r => r.key !== 'player' && r.key !== 'ai');

    // 单次分配，避免双计数器交叉导致的重复/漏发
    let assignments = [];
    let lo = 0, hi = drawn.length - 1;
    playerRooms.forEach(r => { if (lo <= hi) assignments.push({ room: r, card: drawn[lo++], kind: 'player' }); });
    aiRooms.forEach(r => { if (lo <= hi) assignments.push({ room: r, card: drawn[hi--], kind: 'ai' }); });
    neutralRooms.forEach(r => { if (lo <= hi) assignments.push({ room: r, card: drawn[lo++], kind: 'neutral' }); });

    // 逐个入住，带交错的翻牌/入住动画
    let idx = 0;
    (function placeNext() {
        if (idx >= assignments.length) {
            renderUI();
            setTimeout(finishWelcomePhase, 700);
            return;
        }
        let { room, card, kind } = assignments[idx++];
        room.occupant = card;
        let rank = getCardRank(card, 'bribe');
        if (kind === 'player') {
            logMessage("AI", `邪恶叔叔故意让等级 ${rank} 的 ${card.name} 入住了您的 ${room.id} 号房间。`, "ai");
        } else if (kind === 'ai') {
            logMessage("AI", `邪恶叔叔为自己的 ${room.id} 号房间安排了等级 ${rank} 的高价值 ${card.name} 入住。`, "ai");
        } else {
            logMessage("AI", `${card.name}（等级 ${rank}）被安排在 ${room.id} 号中立客房入住。`, "ai");
        }
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
    return rooms.some(r => isOpenRoom(r) && r.occupant && r.occupant.role === 'carnie')
        || player.annexes.some(a => a.card.isTrailer && a.occupant && a.occupant.role === 'carnie');
}

function resolveCarnieEvent() {
    if (!currentEvent || !anyCarnieInPlay()) return;
    logMessage("事件", `结算嘉年华事件：【${currentEvent.name}】`, "warn");

    if (currentEvent.id === 'blackmail' || currentEvent.id === 'red_herring') {
        roundEffects.forceInvestigation = true;
    } else if (currentEvent.id === 'broken_safe') {
        let playerLost = Math.ceil(player.checks / 2);
        let aiLost = Math.ceil(ai.checks / 2);
        player.checks = Math.max(0, player.checks - playerLost);
        ai.checks = Math.max(0, ai.checks - aiLost);
        logMessage("事件", `破保险箱：你失去 ${playerLost} 张支票，邪恶叔叔失去 ${aiLost} 张。`, "warn");
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
        let owner = room.serviceOwner || room.key;
        if (owner === 'player') {
            addPlayerCash(occupantRank);
            logMessage("玩家", `您的客房服务在 ${room.id} 房生效，立刻获得 ${occupantRank}F！`, "player");
        } else if (owner === 'ai') {
            addAICash(occupantRank);
            logMessage("AI", `邪恶叔叔的客房服务在 ${room.id} 房生效，他立刻获得了额外 ${occupantRank}F！`, "ai");
        }
    }
}

function finishWelcomePhase() {
    pendingWelcomeCard = null;
    let occupiedCount = rooms.filter(r => isOpenRoom(r) && r.occupant).length;
    renderUI();

    if (finalRoundPending && occupiedCount < HUMAN_PLAYER_COUNT) {
        logMessage("系统", "最终迎客时旅馆内旅客不足 2 位，按规则不再进行最后一轮行动。", "warn");
        setTimeout(triggerGameOver, 700);
        return;
    }

    setTimeout(startNightPhase, 700);
}

function startNightPhase() {
    pendingWelcomeCard = null;
    resetPendingAction();
    actionNumber = 1;
    activeTurn = firstPlayer;
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
    
    if (activeTurn === 'player') {
        document.getElementById('player-action-box').classList.add('active');
        document.getElementById('action-box-title').innerText = `您的第 ${actionNumber} 次行动`;
        document.getElementById('action-box-desc').innerText = "请从下方选择一项违法行动：";
        enableMainActionButtons(true);
    } else {
        document.getElementById('player-action-box').classList.remove('active');
        document.getElementById('action-box-title').innerText = "邪恶叔叔正在执行行动...";
        document.getElementById('action-box-desc').innerText = "等待叔叔翻开他的行动卡片...";
        enableMainActionButtons(false);
        setTimeout(aiStrategicAction, 1200); // 所有难度都用策略引擎（按性格与阶段加权），不再翻固定行动卡
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
            totalCapacity += (maxBurial - annex.buried.length);
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
        let targetSlot = player.annexes[pendingAction.target.annexIndex];
        if (!targetSlot) {
            logMessage("系统", "目标别馆不存在，请取消后重新选择埋尸位置。", "warn");
            return;
        }
        let maxBurial = getAnnexCapacity(targetSlot.card);
        if (targetSlot.buried.length >= maxBurial) {
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
    if (pendingAction.type === 'bribe') {
        targets.forEach(t => {
            let room = rooms.find(r => r.occupant && r.occupant.id === t.id);
            if (room) {
                room.occupant = null;
            } else {
                let bIdx = bistro.findIndex(p => p.id === t.id);
                if (bIdx !== -1) bistro.splice(bIdx, 1);
            }
            player.hand.push(t);
            logMessage("玩家", `成功拉拢帮凶 ${t.name} 入手！`, "player");
            playEffect('bribe', t.name, room ? document.getElementById('room-' + room.id) : document.getElementById('player-action-box'));
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
            let room = rooms.find(r => r.occupant && r.occupant.id === t.id);
            if (room) {
                room.occupant = null;
            } else {
                let bIdx = bistro.findIndex(p => p.id === t.id);
                if (bIdx !== -1) bistro.splice(bIdx, 1);
            }
            t.isDead = true;
            if (objectEffects.well) {
                removedStack.push(t);
                objectEffects.well = false;
                logMessage("玩家", `刺杀了 ${t.name}，并用 [井] 直接处理了尸体。`, "player");
            } else {
                player.corpses.push(t);
                logMessage("玩家", `刺杀了 ${t.name}！尸体已移入您的未埋尸体堆。`, "player");
            }
            playEffect('kill', t.name, room ? document.getElementById('room-' + room.id) : document.getElementById('player-action-box'));
        });
    } 
    else if (pendingAction.type === 'bury') {
        if (pendingAction.target && pendingAction.target.annexIndex !== undefined) {
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
                    let maxBurial = getAnnexCapacity(annex.card);
                    if (annex.buried.length + needed <= maxBurial) {
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
    if (activeTurn === firstPlayer) {
        activeTurn = (firstPlayer === 'player') ? 'ai' : 'player';
        runActionStep();
    } else {
        if (actionNumber === 1) {
            actionNumber = 2;
            activeTurn = firstPlayer;
            runActionStep();
        } else {
            runPhaseMorning();
        }
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
    } else if (card.annexName.includes("珠宝室")) {
        addPlayerCash(8);
    } else if (card.annexName.includes("档案室")) {
        addPlayerCash(4);
    } else if (card.annexName.includes("交易所") && player.cash >= 10) {
        player.cash -= 10;
        player.checks += 1;
        logMessage("玩家", "交易所立刻购买 1 张支票。", "player");
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
        // 寻找有容量空位的别馆
        let availableSlots = [];
        player.annexes.forEach((annex, index) => {
            let maxBurial = getAnnexCapacity(annex.card);
            if (annex.buried.length < maxBurial) availableSlots.push(index);
        });
        
        if (availableSlots.length === 0) {
            logMessage("系统", "您的别馆全满，没有空间埋这具尸体！", "warn");
            cancelPendingAction();
            return;
        }
        
        logMessage("系统", "已选定一具尸体。现在请点击下方一个有空闲容量的别馆。", "system");
        document.querySelectorAll('.annex-slot-container').forEach((el, idx) => {
            if (availableSlots.includes(idx)) el.classList.add('highlight');
        });
    }
}

function handleAnnexSlotSelect(index) {
    if (pendingAction.type !== 'bury' || !pendingAction.targetCorpse || warnIfAwaitingPayment()) return;

    let targetSlot = player.annexes[index];
    if (!targetSlot) return;
    let corpse = pendingAction.targetCorpse;
    let maxBurial = getAnnexCapacity(targetSlot.card);
    let needed = corpse.specialBurial === 'twins' ? 2 : 1; // 双胞胎占 2 个埋尸位、计 2 具尸体
    if (targetSlot.buried.length + needed > maxBurial) {
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
function aiThink(text) {
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
const AI_PROFILES = {
    silly:      { kill: 1.0,  bribe: 0.2, room: 0.7, service: 0.7, deny: 0.2, launderAt: 36 },
    scheming:   { kill: 0.9,  bribe: 1.2, room: 0.9, service: 0.9, deny: 0.7, launderAt: 34 },
    murderous:  { kill: 1.3,  bribe: 0.5, room: 0.7, service: 0.7, deny: 0.9, launderAt: 34 },
    mastermind: { kill: 1.15, bribe: 1.0, room: 1.0, service: 1.0, deny: 1.0, launderAt: 32 },
    // 学习叔叔：由 ml/optimize_ai.js 自我对弈 + 进化策略(ES) 学到的权重（含各自的阶段调节）。
    // 取自适应度可信的候选(约 68% 对基线胜率)；高于此的候选被判为过拟合模拟器而舍弃。
    ml: {
        kill: 1.40, bribe: 0.95, room: 0.60, service: 0.85, deny: 1.50, launderAt: 28,
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

function aiStrategicAction() {
    let prof = AI_PROFILES[difficulty] || AI_PROFILES.mastermind;
    let pm = (prof.phase && prof.phase[getRoundPhase()]) || PHASE_MOD[getRoundPhase()];
    let occupied = rooms.filter(r => isOpenRoom(r) && r.occupant);
    let neutralRoom = rooms.find(r => r.key === 'neutral');
    let myOpenRooms = rooms.filter(r => isOpenRoom(r) && r.key === 'ai');
    let unservicedMine = myOpenRooms.find(r => !roomHasService(r));

    // 为每个可选行动按「性格 × 阶段」估收益分，再挑最高的执行
    let plans = [];

    if (occupied.length > 0) {
        // A) 刺杀并洗劫：油水越高越值得，住你房里额外加权（断你财路）
        let killTarget = occupied.slice().sort((a, b) => b.occupant.loot - a.occupant.loot)[0];
        let kScore = killTarget.occupant.loot * prof.kill * pm.kill + (killTarget.key === 'player' ? 6 : 0) * prof.deny;
        plans.push({ type: 'kill', room: killTarget, score: kScore });

        // B) 拉拢：拆你的台、攒拉拢堆，偏好高等级、你房间、非农民
        let bribeTarget = occupied.slice().sort((a, b) =>
            (getCardRank(b.occupant, 'bribe') + (b.occupant.role === 'peasant' ? -3 : 0)) -
            (getCardRank(a.occupant, 'bribe') + (a.occupant.role === 'peasant' ? -3 : 0)))[0];
        let bScore = getCardRank(bribeTarget.occupant, 'bribe') * 2 * prof.bribe
            + (bribeTarget.key === 'player' ? 4 : 0) * prof.deny
            + (bribeTarget.occupant.role === 'peasant' ? -4 : 0);
        plans.push({ type: 'bribe', room: bribeTarget, score: bScore });
    }
    // C) 扩张地盘（早期权重高、后期几乎不扩张）
    if (neutralRoom && ai.keys.length < 4) plans.push({ type: 'room', score: 6 * prof.room * pm.room });
    // D) 布置客房服务（早期建立稳定收入引擎）
    if (unservicedMine) plans.push({ type: 'room_service', score: 5 * prof.service * pm.service });
    // E) 兜底：洗钱攒支票
    plans.push({ type: 'check', score: 4.5 });
    // F) 现金接近上限就先洗钱落袋（阈值随性格不同）
    if (ai.cash >= 36) plans.push({ type: 'launder', score: 100 });
    else if (ai.cash >= prof.launderAt) plans.push({ type: 'launder', score: 9 });

    plans.sort((a, b) => b.score - a.score);
    let plan = plans[0];

    if (plan.type === 'kill') {
        let victim = plan.room.occupant;
        plan.room.occupant = null;
        victim.isDead = true;
        ai.killPile.push(victim);
        addAICash(victim.loot);
        let denial = plan.room.key === 'player' ? '，顺手断了你的房租财路！' : '。';
        aiThink(`邪恶叔叔盯上了 ${plan.room.id} 号房油水丰厚的 ${victim.name}，一刀放倒、搜走 ${victim.loot}F${denial}`);
        playEffect('kill', `+${victim.loot}F`, document.getElementById('room-' + plan.room.id));
        if (ai.bribePile.length > 0) { exitStack.push(ai.bribePile.pop()); }
    } else if (plan.type === 'bribe') {
        let t = plan.room.occupant;
        plan.room.occupant = null;
        ai.bribePile.push(t);
        let denial = plan.room.key === 'player' ? '，免得落到你手里。' : '，收为己用。';
        aiThink(`邪恶叔叔抢先收买了 ${plan.room.id} 号房的 ${t.name}${denial}`);
        playEffect('bribe', t.name, document.getElementById('room-' + plan.room.id));
    } else if (plan.type === 'room') {
        neutralRoom.key = 'ai'; syncAIKeys();
        aiThink(`旅馆暂时没什么肥羊，邪恶叔叔强占了 ${neutralRoom.id} 号中立客房，扩张地盘等下一拨客人。`);
    } else if (plan.type === 'room_service') {
        setRoomService(unservicedMine, 'ai'); syncAIKeys();
        aiThink(`邪恶叔叔给 ${unservicedMine.id} 号房布置了客房服务，坐收稳定油水。`);
    } else if (plan.type === 'launder') {
        ai.cash = Math.max(0, ai.cash - 10);
        ai.checks += 1;
        aiThink("现金快到 40F 上限，邪恶叔叔把 10F 洗成支票存好，落袋为安。");
        playEffect('launder', '', document.querySelector('.ai-wealth-box'));
    } else {
        ai.checks += 1;
        aiThink("没有值得动手的目标，邪恶叔叔不动声色地攒了一张 10F 支票。");
    }

    renderUI();
    setTimeout(advanceTurn, 1100);
}

function aiExecuteAction() {
    if (aiDeck.length === 0) {
        aiDeck = JSON.parse(JSON.stringify(aiDiscard));
        shuffleCards(aiDeck);
        aiDiscard = [];
    }
    
    let aiCard = aiDeck.pop();
    if (!aiCard) {
        logMessage("AI", "邪恶叔叔没有可用的行动牌，本次行动跳过。", "warn");
        setTimeout(advanceTurn, 1000);
        return;
    }
    aiDiscard.push(aiCard);
    
    let action = (actionNumber === 1) ? aiCard.top : aiCard.bottom;
    
    let cardNameTranslated = "未知AI";
    if (action === "kill") cardNameTranslated = "刺杀房客 (Kill)";
    if (action === "bribe") cardNameTranslated = "拉拢帮工 (Bribe)";
    if (action === "check") cardNameTranslated = "获得支票 (Checks)";
    if (action === "peasant_bribe") cardNameTranslated = "拉拢农民 (Peasant Bribe)";
    if (action === "room") cardNameTranslated = "霸占钥匙 (Rooms)";
    if (action === "room_service") cardNameTranslated = "布置服务 (Room Service)";
    
    document.getElementById('ai-drawn-card').innerText = cardNameTranslated;
    logMessage("AI", `邪恶叔叔执行了行动：【${cardNameTranslated}】。`, "ai");
    
    if (action === 'kill') {
        let targets = [];
        rooms.forEach(r => {
            if (r.occupant) targets.push(r);
        });
        
        if (targets.length > 0) {
            targets.sort((a, b) => {
                if (getCardRank(b.occupant, 'kill') !== getCardRank(a.occupant, 'kill')) {
                    return getCardRank(b.occupant, 'kill') - getCardRank(a.occupant, 'kill');
                }
                if (a.key === 'player' && b.key !== 'player') return -1;
                if (b.key === 'player' && a.key !== 'player') return 1;
                return 0;
            });
            
            let victimRoom = targets[0];
            let victim = victimRoom.occupant;
            victimRoom.occupant = null;
            
            victim.isDead = true;
            ai.killPile.push(victim);
            
            logMessage("AI", `邪恶叔叔刺杀了 ${victimRoom.id} 号房的 ${victim.name} (等级 ${getCardRank(victim, 'kill')})！`, "ai");
            playEffect('kill', `${victimRoom.id}号房`, document.getElementById('room-' + victimRoom.id));
            
            if (ai.bribePile.length > 0) {
                let discarded = ai.bribePile.pop();
                exitStack.push(discarded);
                logMessage("AI", `因为发生了谋杀，邪恶叔叔拉拢堆中的 ${discarded.name} 被恐吓而连夜逃离。`, "ai");
            }
        } else {
            logMessage("AI", "旅馆内没有旅客可以被暗杀，邪恶叔叔无功而返。", "ai");
        }
    } 
    else if (action === 'bribe') {
        let targets = [];
        rooms.forEach(r => {
            if (r.occupant) targets.push(r);
        });
        
        if (targets.length > 0) {
            targets.sort((a, b) => {
                if (getCardRank(a.occupant, 'bribe') !== getCardRank(b.occupant, 'bribe')) {
                    return getCardRank(a.occupant, 'bribe') - getCardRank(b.occupant, 'bribe');
                }
                if (a.key === 'player' && b.key !== 'player') return -1;
                if (b.key === 'player' && a.key !== 'player') return 1;
                return 0;
            });
            
            let bribedRoom = targets[0];
            let targetCard = bribedRoom.occupant;
            bribedRoom.occupant = null;
            
            ai.bribePile.push(targetCard);
            logMessage("AI", `邪恶叔叔强行拉拢了 ${bribedRoom.id} 号房的 ${targetCard.name}。`, "ai");
            playEffect('bribe', `${bribedRoom.id}号房`, document.getElementById('room-' + bribedRoom.id));
        } else {
            logMessage("AI", "旅馆内没有旅客可被收买。", "ai");
        }
    } 
    else if (action === 'check') {
        ai.checks += 1;
        logMessage("AI", "邪恶叔叔直接获得了一张 10F 支票。", "ai");
        let notaryCount = player.annexes.filter(a => a.card.annexName.includes("书房")).length;
        if (notaryCount > 0) {
            addPlayerCash(notaryCount);
            logMessage("玩家", `[书房] 对手兑换支票，你顺势获得 ${notaryCount}F。`, "player");
        }
    }
    else if (action === 'peasant_bribe') {
        let peasantsInBribe = ai.bribePile.filter(c => c.role === 'peasant');
        if (peasantsInBribe.length >= 2) {
            let returnedCount = 0;
            for (let i = ai.bribePile.length - 1; i >= 0; i--) {
                if (ai.bribePile[i].role === 'peasant' && returnedCount < 2) {
                    let p = ai.bribePile.splice(i, 1)[0];
                    bistro.push(p);
                    returnedCount++;
                }
            }
            logMessage("AI", "邪恶叔叔解雇了 2 名杂役农民，将他们遣返回了小酒馆。", "ai");
        } 
        else if (bistro.length > 0) {
            let takeCount = Math.min(2, bistro.length);
            for (let i = 0; i < takeCount; i++) {
                ai.bribePile.push(bistro.pop());
            }
            logMessage("AI", `邪恶叔叔从小酒馆雇佣了 ${takeCount} 名农民拉入他的拉拢堆。`, "ai");
        } 
        else {
            let targets = [];
            rooms.forEach(r => { if (r.occupant) targets.push(r); });
            if (targets.length > 0) {
                targets.sort((a, b) => getCardRank(a.occupant, 'bribe') - getCardRank(b.occupant, 'bribe'));
                let targetCard = targets[0].occupant;
                targets[0].occupant = null;
                ai.bribePile.push(targetCard);
                logMessage("AI", `酒馆缺少农民，邪恶叔叔转而拉拢了客房中的 ${targetCard.name}。`, "ai");
            } else {
                logMessage("AI", "没有可以交互的农民或旅客。", "ai");
            }
        }
    } 
    else if (action === 'room') {
        let neutralRoom = rooms.find(r => r.key === 'neutral');
        if (neutralRoom) {
            neutralRoom.key = 'ai';
            syncAIKeys();
            logMessage("AI", `邪恶叔叔强行霸占了中立客房 ${neutralRoom.id} 号房间，换成了他自己的钥匙！`, "ai");
        } else {
            logMessage("AI", "没有空闲的中立钥匙，霸房行动落空。", "ai");
        }
    } 
    else if (action === 'room_service') {
        let myRooms = rooms.filter(r => isOpenRoom(r) && r.key === 'ai');
        let unserviced = myRooms.find(r => !roomHasService(r));
        if (unserviced) {
            setRoomService(unserviced, 'ai');
            syncAIKeys();
            logMessage("AI", `邪恶叔叔为自己名下的 ${unserviced.id} 号房间布置了客房服务。`, "ai");
        } else {
            logMessage("AI", "邪恶叔叔名下所有房间都已覆盖客房服务。", "ai");
        }
    }

    renderUI();
    setTimeout(advanceTurn, 1000);
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
    let policeInRooms = rooms.some(r => isOpenRoom(r) && r.occupant && r.occupant.role === 'police') || roundEffects.forceInvestigation;
    
    if (policeInRooms) {
        logMessage("警察", "🚓 警察在大堂展开调查！发现未掩埋的尸体...", "police");
        playEffect('police');

        // 名流[法庭/法官]：调查时先获得 2F
        let judgeCount = player.annexes.filter(a => a.card.annexName.includes("法庭")).length;
        if (judgeCount > 0) {
            addPlayerCash(2 * judgeCount);
            logMessage("玩家", `[法庭] 警察调查时你先获得 ${2 * judgeCount}F。`, "player");
        }
        // 名流[诊所/医生]：每座诊所让你少处理 1 具未埋尸体（该尸体不被罚款也不被带走）
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
            } else {
                player.cash = 0;
                player.checks = 0;
                logMessage("玩家", "你付不起封口费，所有的赃款被没收！暴露尸体被直接拖走。", "warn");
            }
            let protectedCorpses = protectedCount > 0 ? player.corpses.slice(0, protectedCount) : [];
            player.corpses.slice(protectedCount).forEach(c => removedStack.push(c));
            player.corpses = protectedCorpses;
            if (protectedCount > 0) {
                logMessage("玩家", `${protectedCount} 具尸体受诊所/道具保护，留在未埋尸体堆中。`, "player");
            }
        } else {
            logMessage("玩家", "您名下没有未埋的尸体，治安官查无实据。", "player");
        }
        
        if (ai.corpses.length > 0) {
            let corpseCount = ai.corpses.length;
            let penalty = ai.corpses.length * 10;
            let aiTotalVal = ai.cash + (ai.checks * 10);
            if (aiTotalVal >= penalty) {
                deductAITotal(penalty);
            } else {
                ai.cash = 0;
                ai.checks = 0;
            }
            ai.corpses.forEach(c => removedStack.push(c));
            ai.corpses = [];
            logMessage("AI", `邪恶叔叔被罚款并处理了 ${corpseCount} 具未埋尸体。`, "ai");
        }
    } else {
        logMessage("系统", "本轮没有警察查夜，相安无事。", "system");
    }
    
    renderUI();
    setTimeout(morningStepRent, 1000);
}

function morningStepRent() {
    logMessage("系统", "房客退房结算房租...", "system");
    let gardenCount = player.annexes.filter(a => a.card.annexName.includes("花园")).length;
    let playerRentBonus = gardenCount * 2 + (roundEffects.playerExtraRent || 0);
    if (playerRentBonus > 0) {
        addPlayerCash(playerRentBonus);
        logMessage("玩家", `别馆/道具在退房阶段带来额外 ${playerRentBonus}F。`, "player");
        playEffect('rent', `+${playerRentBonus}F`, document.querySelector('.player-wealth-box'));
    }
    
    rooms.forEach(room => {
        if (room.occupant) {
            if (room.key === 'player') {
                let rent = 1 + (roundEffects.extraRent || 0);
                addPlayerCash(rent);
                logMessage("玩家", `由于房客退租，您的 ${room.id} 号房间为您提供 ${rent}F 租金。`, "player");
                playEffect('rent', `+${rent}F`, document.getElementById('room-' + room.id));
            } else if (room.key === 'ai') {
                let rent = 1 + (roundEffects.extraRent || 0);
                addAICash(rent);
                logMessage("AI", `邪恶叔叔名下 ${room.id} 号客房退租，他获得 ${rent}F。`, "ai");
            }
            
            exitStack.push(room.occupant);
            room.occupant = null;
        }
    });

    // 名流[实验室/外科医生]：退房时若对手仍有未埋尸体，每座实验室获得 3F
    let labCount = player.annexes.filter(a => a.card.annexName.includes("实验室")).length;
    if (labCount > 0 && ai.corpses.length > 0) {
        addPlayerCash(3 * labCount);
        logMessage("玩家", `[实验室] 退房时对手仍有未埋尸体，你获得 ${3 * labCount}F。`, "player");
        playEffect('rent', `+${3 * labCount}F`, document.querySelector('.player-wealth-box'));
    }

    if (roundEffects.pickpockets) {
        player.cash = Math.max(0, player.cash - 2);
        ai.cash = Math.max(0, ai.cash - 2);
        logMessage("事件", "扒手横行：双方各损失 2F 现金。", "warn");
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
        logMessage("事件", "惨败事件：你的帮工四散离去，本轮无需再支付这些工资。", "warn");
        playEffect('wage', '帮工四散', document.querySelector('.player-wealth-box'));
    }

    // 名流[药房/药剂师]：清晨若手牌不少于 3 张，每座药房获得 2F
    let pharmCount = player.annexes.filter(a => a.card.annexName.includes("药房")).length;
    if (pharmCount > 0 && player.hand.length >= 3) {
        addPlayerCash(2 * pharmCount);
        logMessage("玩家", `[药房] 清晨你手牌不少于 3 张，获得 ${2 * pharmCount}F。`, "player");
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
            logMessage("玩家", `现金不足，只支付了 ${paid}F。${dismissed.length} 名未拿到工资的帮工离开。`, "warn");
        }
    } else {
        logMessage("玩家", "您手头没有帮手，无需支付清晨工资。", "player");
    }
    
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
    firstPlayer = (firstPlayer === 'player') ? 'ai' : 'player';
    logMessage("系统", `--- 第 ${roundNum} 轮即将开始，本轮第一玩家换人！ ---`, "system");
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
    
    if (ai.corpses.length > 0) {
        let penalty = ai.corpses.length * 10;
        let total = ai.cash + ai.checks * 10;
        if (total >= penalty) {
            deductAITotal(penalty);
        } else {
            ai.cash = 0;
            ai.checks = 0;
        }
        ai.corpses.forEach(c => removedStack.push(c));
        ai.corpses = [];
    }
    
    // 1. 玩家资产计算
    let playerTotal = player.cash + player.checks * 10;
    
    let greenhouseCount = player.annexes.filter(a => a.card.annexName.includes("温室")).length;
    if (greenhouseCount > 0) {
        let bonus = player.checks * 3 * greenhouseCount;
        playerTotal += bonus;
        logMessage("玩家", `别馆 [温室] 在局终为你每张支票加成 3F，共获得额外 ${bonus}F 赃款！`, "player");
    }

    // 名流[议事厅/参议员]：局终每张支票额外 2F
    let senatorCount = player.annexes.filter(a => a.card.annexName.includes("议事厅")).length;
    if (senatorCount > 0) {
        let bonus = player.checks * 2 * senatorCount;
        playerTotal += bonus;
        logMessage("玩家", `别馆 [议事厅] 局终为你每张支票额外加成 2F，共 ${bonus}F！`, "player");
    }
    // 名流[画廊/收藏家]：局终每有一种颜色的别馆获得 2F
    let galleryCount = player.annexes.filter(a => a.card.annexName.includes("画廊")).length;
    if (galleryCount > 0) {
        let distinctColors = new Set(player.annexes.map(a => a.card.color)).size;
        let bonus = distinctColors * 2 * galleryCount;
        playerTotal += bonus;
        logMessage("玩家", `别馆 [画廊] 局终：你拥有 ${distinctColors} 种颜色的别馆，获得额外 ${bonus}F！`, "player");
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
    
    // 2. AI 资产计算
    let aiTotal = ai.cash + ai.checks * 10;
    let aiBribeBonus = 0;
    let aiKillBonus = 0;
    
    if (difficulty === 'scheming' || difficulty === 'murderous') {
        aiBribeBonus = ai.bribePile.length;
    }
    
    if (difficulty === 'murderous') {
        ai.killPile.forEach(c => {
            aiKillBonus += getCardRank(c, 'kill');
        });
    }
    
    aiTotal += (aiBribeBonus + aiKillBonus);
    
    document.getElementById('score-player-cash').innerText = `${player.cash} F`;
    document.getElementById('score-player-checks').innerText = `${player.checks * 10} F`;
    document.getElementById('score-ai-cash').innerText = `${ai.cash} F`;
    document.getElementById('score-ai-checks').innerText = `${ai.checks * 10} F`;
    
    if (difficulty === 'silly' || difficulty === 'mastermind' || difficulty === 'ml') {
        document.getElementById('score-player-bribe-bonus').innerText = "--";
        document.getElementById('score-ai-bribe-bonus').innerText = "--";
        document.getElementById('score-player-kill-bonus').innerText = "--";
        document.getElementById('score-ai-kill-bonus').innerText = "--";
    } else {
        document.getElementById('score-player-bribe-bonus').innerText = "0 F";
        document.getElementById('score-ai-bribe-bonus').innerText = `${aiBribeBonus} F`;
        
        if (difficulty === 'murderous') {
            document.getElementById('score-player-kill-bonus').innerText = "0 F";
            document.getElementById('score-ai-kill-bonus').innerText = `${aiKillBonus} F`;
        } else {
            document.getElementById('score-player-kill-bonus').innerText = "--";
            document.getElementById('score-ai-kill-bonus').innerText = "--";
        }
    }
    
    document.getElementById('score-player-total').innerText = `${playerTotal} F`;
    document.getElementById('score-ai-total').innerText = `${aiTotal} F`;
    
    let verdict = "";
    let playerWon = null;
    if (playerTotal > aiTotal) {
        verdict = "恭喜！您在财富战中胜过叔叔，成为了当地最令人侧目的黑店之王！👑";
        playerWon = true;
    } else if (playerTotal < aiTotal) {
        verdict = "很遗憾，邪恶叔叔的黑心资产盖过了您。您破产退出了！💀";
        playerWon = false;
    } else {
        let playerBuriedCount = 0;
        player.annexes.forEach(a => playerBuriedCount += a.buried.length);
        let aiBuriedCount = ai.killPile.length;
        
        if (playerBuriedCount > aiBuriedCount) {
            verdict = "法郎打平！但由于您掩埋的尸体数量更多，更少露出破绽，您获得了胜利！";
        } else if (playerBuriedCount < aiBuriedCount) {
            verdict = "法郎打平！但由于邪恶叔叔掩埋的尸体更多，您略逊一筹！";
        } else {
            verdict = "旗鼓相当的对手！你们完全打平了，看来你们应该重新对决一局！";
        }
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

function addAICash(amount) {
    // 名流[保险库/银行家]：对手现金溢出 40F 上限的部分归你
    let hasBanker = player.annexes.some(a => a.card.annexName.includes("保险库"));
    let room = 40 - ai.cash;
    let gained = Math.max(0, Math.min(amount, room));
    ai.cash += gained;
    let overflow = amount - gained;
    if (hasBanker && overflow > 0) {
        addPlayerCash(overflow);
        logMessage("玩家", `[保险库] 截获了对手溢出 40F 上限的 ${overflow}F！`, "player");
    }
}

// 把尸体塞入别馆下；双胞胎额外塞一张占位，使其占 2 个埋尸位、计为 2 具尸体
function tuckCorpse(slot, corpse) {
    slot.buried.push(corpse);
    if (corpse.specialBurial === 'twins') {
        slot.buried.push({ name: '双胞胎之二', loot: 0, isTwinPlaceholder: true, color: corpse.color });
    }
}

// 埋尸掠夺结算（含金牙加成与大胡子女士的平分特殊埋葬）
function awardBuryLoot(corpse, annexName, autoBishop) {
    let loot = corpse.loot + (objectEffects.buryBonus || 0);
    objectEffects.buryBonus = 0;
    let prefix = autoBishop ? '（大主教技能）' : '';
    if (corpse.specialBurial === 'bearded') {
        let mine = Math.ceil(loot / 2);
        let theirs = loot - mine;
        addPlayerCash(mine);
        ai.cash = Math.min(40, ai.cash + theirs);
        logMessage("玩家", `${prefix}大胡子女士被埋入 ${annexName}，与对手平分油水：你得 ${mine}F，叔叔得 ${theirs}F。`, "player");
    } else {
        addPlayerCash(loot);
        logMessage("玩家", `${prefix}将 ${corpse.name} 的尸体埋入 ${annexName} 下，掠夺 ${loot}F！`, "player");
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

function deductAITotal(amount) {
    while (amount >= 10 && ai.checks > 0) {
        ai.checks -= 1;
        amount -= 10;
    }
    if (amount > ai.cash && ai.checks > 0) {
        ai.checks -= 1;
        ai.cash += 10;
    }
    ai.cash = Math.max(0, ai.cash - amount);
}

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
    if (hostBadge) hostBadge.innerText = `主理人: ${firstPlayer === 'player' ? '玩家' : '邪恶叔叔'}`;
}

function renderUI() {
    document.getElementById('player-cash').innerText = player.cash;
    document.getElementById('player-checks').innerText = `10F支票 x${player.checks}`;
    document.getElementById('ai-cash').innerText = ai.cash;
    document.getElementById('ai-checks').innerText = `10F支票 x${ai.checks}`;
    
    let playerPct = (player.cash / 40) * 90;
    let aiPct = (ai.cash / 40) * 90;
    document.getElementById('player-marker').style.left = `${playerPct}%`;
    document.getElementById('ai-marker').style.left = `${aiPct}%`;
    
    const roomsGrid = document.getElementById('inn-rooms-grid');
    roomsGrid.innerHTML = '';
    
    rooms.forEach(room => {
        let doorDiv = document.createElement('div');
        doorDiv.id = `room-${room.id}`;
        let openClass = isOpenRoom(room) ? 'open' : 'closed-room';
        doorDiv.className = `room-door ${openClass} ${room.occupant ? 'occupied' : ''}`;
        
        if (currentPhase === 'welcome' && pendingWelcomeCard && firstPlayer === 'player' && isOpenRoom(room) && !room.occupant) {
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
        
        let keyClass = `key-${room.key}`;
        let keyLetter = room.key === 'player' ? 'P' : (room.key === 'ai' ? 'U' : (room.key === 'neutral' ? 'N' : 'X'));
        
        let markerHtml = `<div class="room-key-icon ${keyClass}">${keyLetter}</div>`;
        if (roomHasService(room)) {
            let serviceClass = room.serviceOwner === 'player' ? 'service-player' : (room.serviceOwner === 'ai' ? 'service-ai' : '');
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
    document.getElementById('hand-count').innerText = `${player.hand.length} 张`;
    
    const annexesDiv = document.getElementById('player-annexes');
    annexesDiv.innerHTML = '';
    player.annexes.forEach((slot, index) => {
        let slotContainer = document.createElement('div');
        slotContainer.className = 'annex-slot-container';
        
        if (pendingAction.type === 'bury' && pendingAction.targetCorpse) {
            slotContainer.classList.add('clickable');
            slotContainer.onclick = () => handleAnnexSlotSelect(index);
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
        
        slotContainer.innerHTML = `
            <div class="card ${card.color}">
                <div class="card-header">
                    <span class="card-rank">${getRankDisplay(card)}</span>
                </div>
                <div class="card-body">
                    <span class="card-name">${annexLabel(card)}</span>
                    <span class="card-role-label">别馆</span>
                    <span style="font-size: 8px; color: #daa520; margin-top: 4px;">容量: ${slot.buried.length}/${getAnnexCapacity(card)}</span>
                </div>
                <div class="card-footer">
                    <span class="annex-ability">${card.annexDesc}</span>
                </div>
            </div>
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
    
    document.getElementById('ai-stat-bribe').innerText = `${ai.bribePile.length} 张`;
    document.getElementById('ai-stat-kill').innerText = `${ai.killPile.length} 具`;
    syncAIKeys();
    document.getElementById('ai-stat-rooms').innerText = `${ai.keys.length} 间`;
    document.getElementById('ai-stat-corpses').innerText = `${ai.corpses.length} 具`;
    document.getElementById('ai-deck-count').innerText = aiDeck.length;
    
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
           `<div class="card-emblem">${getRoleEmblem(card.role)}</div>`;
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
        roundEffects.playerExtraRent += 2;
    } else if (obj.effect === 'bury_bonus') {
        objectEffects.buryBonus += 2;
    } else if (obj.effect === 'force_police') {
        roundEffects.forceInvestigation = true;
    } else if (obj.effect === 'hide_corpse') {
        roundEffects.protectedCorpses += 1;
    } else if (obj.effect === 'coffee') {
        addPlayerCash(2);
        logMessage("道具", "[咖啡] 立刻获得 2F。", "player");
    } else if (obj.effect === 'return_build') {
        objectEffects.returnHelpersFor.build = true;
    } else if (obj.effect === 'return_bribe') {
        objectEffects.returnHelpersFor.bribe = true;
    } else if (obj.effect === 'return_kill') {
        objectEffects.returnHelpersFor.kill = true;
    } else if (obj.effect === 'return_bury') {
        objectEffects.returnHelpersFor.bury = true;
    } else if (obj.effect === 'catchup') {
        let playerBuried = player.annexes.reduce((s, a) => s + a.buried.length, 0);
        let aiBuried = ai.killPile.length;
        if (playerBuried < aiBuried) {
            addPlayerCash(6);
            logMessage("道具", "[告解室] 你埋的尸体比对手少，立刻获得 6F。", "player");
        } else {
            logMessage("道具", "[告解室] 你埋的尸体不比对手少，本次没有收益。", "player");
        }
    } else if (obj.effect === 'remove_corpse') {
        let corpse = player.corpses.shift();
        if (corpse) removedStack.push(corpse);
    } else if (obj.effect === 'poison') {
        let targets = rooms.filter(r => isOpenRoom(r) && r.occupant);
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
               <p>结算时，<strong>谁的总财富多谁就赢</strong> —— 你要比"邪恶叔叔"AI 更狠、更有钱。</p>
               <p class="tut-tip">💡 这是一款关于精打细算的"犯罪经营"游戏，每一步都要权衡风险与收益。</p>`
    },
    {
        title: "🌗 一轮分三个阶段",
        body: `<ul class="tut-list">
                 <li><strong>① 黄昏·迎客</strong>：本轮"主理人"把入店牌堆顶的旅客逐个安排进客房（牌堆正面朝上，能看到来的是谁）。</li>
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
               <p>比邪恶叔叔有钱，你就是这片乡野最令人侧目的<strong>黑店之王</strong>！👑</p>
               <p class="tut-tip">💡 想要最接近真人对手的体验，难度选 <strong>"策略叔叔 (真人级)"</strong> —— 他会抢劫肥羊、专断你的财路。</p>`
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
