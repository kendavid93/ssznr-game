const roundsTotal = 5;
const secondsPerRound = 45;

const straightDecoys = [
  {
    name: "阿澈",
    visualArchetype: "亮片派对主唱风",
    actualIdentity: "直男卧底",
    socialLine: "今晚负责把气氛举到天花板。",
    imageSrc: "./assets/portraits/ache-party-singer.jpg",
    visualTags: ["亮片外套", "爱心墨镜", "玫粉灯"],
    photoStyle: {
      skin: "#f1c6a8",
      hair: "#20242a",
      outfit: "#f04f8b",
      accent: "#ffe14d",
      backdrop: "#7c3aed",
      prop: "mic",
      pose: "wink"
    },
    revealText: "他是直男，今晚打扮成这样只是因为输了派对赌约。你识破的不是外貌，是他每次聊天都把话题转回前女友和车载音响。"
  },
  {
    name: "小榫",
    visualArchetype: "柔焦花衬衫舞池风",
    actualIdentity: "直男卧底",
    socialLine: "拍照时会自动找最彩的背景。",
    imageSrc: "./assets/portraits/xiaosun-flower-shirt.jpg",
    visualTags: ["花衬衫", "珍珠链", "柔焦"],
    photoStyle: {
      skin: "#d49a72",
      hair: "#1d1717",
      outfit: "#00a896",
      accent: "#f7b2d9",
      backdrop: "#f59e0b",
      prop: "chain",
      pose: "peace"
    },
    revealText: "他是直男，珍珠链是从姐姐的配饰盒里借的。真正的破绽是他把所有人的关系都理解成“兄弟感情很好”。"
  },
  {
    name: "Nico",
    visualArchetype: "酷儿书店封面照风",
    actualIdentity: "直男卧底",
    socialLine: "站在彩色书架前，像刚从独立电影里走出来。",
    imageSrc: "./assets/portraits/nico-bookstore.jpg",
    visualTags: ["半框眼镜", "托特包", "彩色书脊"],
    photoStyle: {
      skin: "#f6d8b8",
      hair: "#6a3c23",
      outfit: "#3867d6",
      accent: "#ff7a59",
      backdrop: "#14b8a6",
      prop: "book",
      pose: "soft"
    },
    revealText: "他是直男，托特包里装的是两瓶运动饮料。照片很文艺，但他刚刚问“代词贴纸是不是桌游身份牌”。"
  },
  {
    name: "夏栩",
    visualArchetype: "粉紫眼影自拍风",
    actualIdentity: "直男卧底",
    socialLine: "相册里每张自拍都像美妆账号封面。",
    imageSrc: "./assets/portraits/xiaxu-makeup-selfie.jpg",
    visualTags: ["粉紫眼影", "耳夹", "斜角自拍"],
    photoStyle: {
      skin: "#efb8b8",
      hair: "#623a74",
      outfit: "#2e9cca",
      accent: "#ffd166",
      backdrop: "#ec4899",
      prop: "spark",
      pose: "tilt"
    },
    revealText: "他是直男，眼影是朋友拿他练手的成品。真正的线索是他夸人时只会说“挺有精神”。"
  },
  {
    name: "柚子",
    visualArchetype: "彩虹耳机DJ风",
    actualIdentity: "直男卧底",
    socialLine: "看起来马上要接管地下舞池。",
    imageSrc: "./assets/portraits/youzi-dj.jpg",
    visualTags: ["彩虹耳机", "银色夹克", "霓虹"],
    photoStyle: {
      skin: "#c9906f",
      hair: "#4d342a",
      outfit: "#8bb174",
      accent: "#60a5fa",
      backdrop: "#111827",
      prop: "headphone",
      pose: "cool"
    },
    revealText: "他是直男，耳机只是为了显得自己会打碟。暴露他的不是造型，是他把现场所有歌都叫成“电子音乐”。"
  },
  {
    name: "乔伊",
    visualArchetype: "中性西装海报风",
    actualIdentity: "直男卧底",
    socialLine: "像刚拍完一张性别流动主题杂志大片。",
    imageSrc: "./assets/portraits/qiaoyi-suit.jpg",
    visualTags: ["宽肩西装", "丝巾", "硬光"],
    photoStyle: {
      skin: "#bd7957",
      hair: "#30211b",
      outfit: "#111827",
      accent: "#e84855",
      backdrop: "#e5e7eb",
      prop: "scarf",
      pose: "serious"
    },
    revealText: "他是直男，西装是公司年会留下的。真正可疑的是他解释任何事都要从“男性视角客观分析”开始。"
  },
  {
    name: "卷星",
    visualArchetype: "复古歌舞厅主唱风",
    actualIdentity: "直男卧底",
    socialLine: "手扶麦克风架，像随时准备给全场飞吻。",
    imageSrc: "./assets/portraits/juanxing-cabaret.jpg",
    visualTags: ["卷发", "丝质衬衫", "红灯"],
    photoStyle: {
      skin: "#e2b08d",
      hair: "#2b211d",
      outfit: "#a855f7",
      accent: "#ef4444",
      backdrop: "#450a0a",
      prop: "mic",
      pose: "cool"
    },
    revealText: "卷星是直男，歌舞厅造型来自短视频挑战。真正露馅的是他把所有亲密关系都总结成“哥们儿处得来”。"
  },
  {
    name: "毛茸",
    visualArchetype: "粉色毛绒大片风",
    actualIdentity: "直男卧底",
    socialLine: "像刚从甜酷时尚大片里退场。",
    imageSrc: "./assets/portraits/maorong-pink.jpg",
    visualTags: ["粉毛绒", "彩色墨镜", "气球"],
    photoStyle: {
      skin: "#e7b596",
      hair: "#1f1b18",
      outfit: "#f9a8d4",
      accent: "#ec4899",
      backdrop: "#fce7f3",
      prop: "glasses",
      pose: "tilt"
    },
    revealText: "毛茸是直男，粉色毛绒是摄影棚借来的。真正的卧底感来自他开口第一句是“兄弟，这衣服保暖吗”。"
  },
  {
    name: "彩编",
    visualArchetype: "彩色编发街拍风",
    actualIdentity: "直男卧底",
    socialLine: "举着胶片相机，像会给每个人拍封面照。",
    imageSrc: "./assets/portraits/caibian-street.jpg",
    visualTags: ["彩色短编", "皮衣", "胶片机"],
    photoStyle: {
      skin: "#c98f70",
      hair: "#ef4444",
      outfit: "#111827",
      accent: "#60a5fa",
      backdrop: "#312e81",
      prop: "book",
      pose: "serious"
    },
    revealText: "彩编是直男，编发是音乐节摊位的即兴作品。破绽是他夸所有穿搭都只会说“挺潮”。"
  },
  {
    name: "香水",
    visualArchetype: "高级香水广告风",
    actualIdentity: "直男卧底",
    socialLine: "眼神锋利得像要把海报卖断货。",
    imageSrc: "./assets/portraits/xiangshui-ad.jpg",
    visualTags: ["湿发", "黑衬衫", "深绿光"],
    photoStyle: {
      skin: "#c58d6d",
      hair: "#111111",
      outfit: "#111111",
      accent: "#10b981",
      backdrop: "#064e3b",
      prop: "watch",
      pose: "serious"
    },
    revealText: "香水是直男，广告感是摄影师救回来的。真正暴露他的是把前任、现任和暧昧对象全叫成“朋友”。"
  },
  {
    name: "彩贴",
    visualArchetype: "音乐节彩虹贴纸风",
    actualIdentity: "直男卧底",
    socialLine: "阳光、牛仔外套和彩虹贴纸全都很会骗人。",
    imageSrc: "./assets/portraits/caitie-festival.jpg",
    visualTags: ["彩虹贴纸", "牛仔外套", "音乐节"],
    photoStyle: {
      skin: "#e1aa83",
      hair: "#2f241f",
      outfit: "#60a5fa",
      accent: "#f59e0b",
      backdrop: "#38bdf8",
      prop: "spark",
      pose: "smile"
    },
    revealText: "彩贴是直男，脸颊贴纸是朋友排队领多了顺手贴的。识破点是他一直在问这里有没有停车优惠。"
  },
  {
    name: "成都甜辣",
    visualArchetype: "成都夜生活甜辣精致风",
    actualIdentity: "直男卧底",
    socialLine: "手拿奶茶站在太古里夜色里，营业感拉满。",
    imageSrc: "./assets/portraits/chengdu-sweet-spicy.jpg",
    visualTags: ["粉色墨镜", "奶茶", "太古里"],
    photoStyle: {
      skin: "#e5b08f",
      hair: "#111827",
      outfit: "#f9a8d4",
      accent: "#ec4899",
      backdrop: "#111827",
      prop: "cup",
      pose: "tilt"
    },
    revealText: "成都甜辣是直男，精致营业是朋友拍照培训的成果。真正露馅的是他把所有夸奖都回成“还行吧兄弟”。"
  },
  {
    name: "络腮摇摇杯",
    visualArchetype: "络腮胡健身小胖风",
    actualIdentity: "直男卧底",
    socialLine: "健身房镜子前拿着摇摇杯，憨厚又很自信。",
    imageSrc: "./assets/portraits/luosaihu-gym-bear.jpg",
    visualTags: ["络腮胡", "健身背心", "摇摇杯"],
    photoStyle: {
      skin: "#c58d69",
      hair: "#171717",
      outfit: "#111111",
      accent: "#94a3b8",
      backdrop: "#27272a",
      prop: "dumbbell",
      pose: "flex"
    },
    revealText: "络腮摇摇杯是直男，外形很容易把人带进既有分类。破绽是他把所有亲密互动都解释成“练完肩比较兴奋”。"
  },
  {
    name: "香香卷毛",
    visualArchetype: "精致香香卷毛咖啡风",
    actualIdentity: "直男卧底",
    socialLine: "咖啡、蛋糕、珍珠项链，每个元素都很会演。",
    imageSrc: "./assets/portraits/juanmao-cafe.jpg",
    visualTags: ["卷毛", "珍珠", "咖啡馆"],
    photoStyle: {
      skin: "#e7b596",
      hair: "#3b241b",
      outfit: "#f8fafc",
      accent: "#f59e0b",
      backdrop: "#78350f",
      prop: "coffee",
      pose: "soft"
    },
    revealText: "香香卷毛是直男，珍珠项链是拍摄道具。真正的卧底感来自他点单时问拿铁能不能少一点“咖啡味”。"
  },
  {
    name: "拍照担当",
    visualArchetype: "姐妹局拍照担当风",
    actualIdentity: "直男卧底",
    socialLine: "拿着小相机，像今晚全桌的氛围组长。",
    imageSrc: "./assets/portraits/jiemeiju-camera.jpg",
    visualTags: ["花衬衫", "小相机", "生日气球"],
    photoStyle: {
      skin: "#d49a72",
      hair: "#111827",
      outfit: "#f97316",
      accent: "#ec4899",
      backdrop: "#7c2d12",
      prop: "book",
      pose: "smile"
    },
    revealText: "拍照担当是直男，摆拍技能来自帮女同事团建拍了太多合照。露馅点是他把修图统一叫“把人弄亮点”。"
  },
  {
    name: "熊系酒杯",
    visualArchetype: "猛男熊系酒吧风",
    actualIdentity: "直男卧底",
    socialLine: "皮夹克、络腮胡和酒吧暖光让他很有故事。",
    imageSrc: "./assets/portraits/mengnan-bear-bar.jpg",
    visualTags: ["络腮胡", "皮夹克", "酒吧"],
    photoStyle: {
      skin: "#b98261",
      hair: "#111111",
      outfit: "#111111",
      accent: "#f59e0b",
      backdrop: "#451a03",
      prop: "cup",
      pose: "confident"
    },
    revealText: "熊系酒杯是直男，成熟硬朗和亲切感都很会误导。真正破绽是他把所有暧昧语气都听成朋友在客气。"
  },
  {
    name: "舞室辣男",
    visualArchetype: "舞蹈室辣妹男孩风",
    actualIdentity: "直男卧底",
    socialLine: "紫粉灯光下像刚跳完一段杀伤力很强的编舞。",
    imageSrc: "./assets/portraits/dance-studio-spicy.jpg",
    visualTags: ["短外套", "舞蹈室", "紫粉灯"],
    photoStyle: {
      skin: "#d6a17d",
      hair: "#111827",
      outfit: "#f8fafc",
      accent: "#a855f7",
      backdrop: "#581c87",
      prop: "spark",
      pose: "cool"
    },
    revealText: "舞室辣男是直男，动作和造型来自舞蹈课作业。真正的卧底感是他跳完只关心视频有没有拍到鞋。"
  }
];

const misleadingProfiles = [
  {
    name: "浩子",
    visualArchetype: "健身房硬汉风",
    actualIdentity: "双性恋朋友",
    socialLine: "头像看起来像蛋白粉广告。",
    imageSrc: "./assets/portraits/haozi-gym.jpg",
    visualTags: ["黑背心", "哑铃", "冷白光"],
    photoStyle: {
      skin: "#d29a73",
      hair: "#171717",
      outfit: "#1f2937",
      accent: "#94a3b8",
      backdrop: "#374151",
      prop: "dumbbell",
      pose: "flex"
    },
    revealText: "看起来像传统直男模板，但他不是卧底。他的感情史比你想象的立体得多，外表不负责替任何人写简历。"
  },
  {
    name: "阿强",
    visualArchetype: "商务合照裁切风",
    actualIdentity: "男同朋友",
    socialLine: "像刚从地产年会背景板前走出来。",
    imageSrc: "./assets/portraits/aqiang-business.jpg",
    visualTags: ["白衬衫", "腕表", "职业微笑"],
    photoStyle: {
      skin: "#f0c4a4",
      hair: "#2a201c",
      outfit: "#f8fafc",
      accent: "#2563eb",
      backdrop: "#cbd5e1",
      prop: "watch",
      pose: "formal"
    },
    revealText: "这张很像“标准直男证件照”，但他不是卧底。刻板印象在这里失手，因为领带不会替人宣布取向。"
  },
  {
    name: "Kevin",
    visualArchetype: "篮球场抓拍风",
    actualIdentity: "泛性恋朋友",
    socialLine: "朋友圈全是球鞋、比分和夜宵。",
    imageSrc: "./assets/portraits/kevin-basketball.jpg",
    visualTags: ["球衣", "运动手环", "汗感"],
    photoStyle: {
      skin: "#b98261",
      hair: "#151515",
      outfit: "#f97316",
      accent: "#111827",
      backdrop: "#16a34a",
      prop: "ball",
      pose: "lean"
    },
    revealText: "他不是卧底。球衣、短发和运动手环只是照片语言，不是身份鉴定报告。"
  },
  {
    name: "林眠",
    visualArchetype: "机车夹克夜拍风",
    actualIdentity: "跨性别朋友",
    socialLine: "看起来会把聊天记录都回成“收到”。",
    imageSrc: "./assets/portraits/linmian-motorcycle.jpg",
    visualTags: ["黑夹克", "短发", "停车场"],
    photoStyle: {
      skin: "#c28b6b",
      hair: "#222222",
      outfit: "#111111",
      accent: "#eab308",
      backdrop: "#334155",
      prop: "key",
      pose: "side"
    },
    revealText: "他不是卧底。酷、硬、寡言都不能自动等于直男；这局你被照片的气质骗了。"
  },
  {
    name: "塔塔",
    visualArchetype: "修车棚工作照风",
    actualIdentity: "女同朋友",
    socialLine: "袖口有机油，表情像马上要拆一台发动机。",
    imageSrc: "./assets/portraits/tata-garage.jpg",
    visualTags: ["工装", "扳手", "自然光"],
    photoStyle: {
      skin: "#e0aa82",
      hair: "#3b241b",
      outfit: "#64748b",
      accent: "#f59e0b",
      backdrop: "#78716c",
      prop: "wrench",
      pose: "confident"
    },
    revealText: "她不是卧底。工装不是直男专属，能修东西也不是身份标签。"
  },
  {
    name: "若白",
    visualArchetype: "钓鱼帽户外风",
    actualIdentity: "无性恋朋友",
    socialLine: "头像像户外装备店会员卡。",
    imageSrc: "./assets/portraits/ruobai-outdoor.jpg",
    visualTags: ["冲锋衣", "钓鱼帽", "山路"],
    photoStyle: {
      skin: "#f2c9a8",
      hair: "#5f3b2a",
      outfit: "#166534",
      accent: "#84cc16",
      backdrop: "#0f766e",
      prop: "cap",
      pose: "smile"
    },
    revealText: "这张很像“周末只聊装备”的直男，但若白不是卧底。喜欢山和装备不等于喜欢谁。"
  },
  {
    name: "明煦",
    visualArchetype: "电竞椅冷光风",
    actualIdentity: "非二元朋友",
    socialLine: "画面里有键盘光，也有没收拾的水杯。",
    imageSrc: "./assets/portraits/mingxu-esports.jpg",
    visualTags: ["卫衣", "电竞椅", "蓝光"],
    photoStyle: {
      skin: "#d7a27d",
      hair: "#222222",
      outfit: "#334155",
      accent: "#38bdf8",
      backdrop: "#020617",
      prop: "keyboard",
      pose: "focus"
    },
    revealText: "明煦不是卧底。游戏房间和大卫衣只是在制造熟悉感，不是身份答案。"
  },
  {
    name: "小路",
    visualArchetype: "办公室茶水间风",
    actualIdentity: "酷儿朋友",
    socialLine: "像刚说完“我先对齐一下需求”。",
    imageSrc: "./assets/portraits/xiaolu-office.jpg",
    visualTags: ["Polo衫", "工牌", "咖啡"],
    photoStyle: {
      skin: "#e8b995",
      hair: "#1f2937",
      outfit: "#0f766e",
      accent: "#f8fafc",
      backdrop: "#94a3b8",
      prop: "coffee",
      pose: "neutral"
    },
    revealText: "小路不是卧底。Polo、工牌和咖啡杯只是职场伪装，不能替人盖章。"
  },
  {
    name: "北野",
    visualArchetype: "直男自拍低角度风",
    actualIdentity: "男同朋友",
    socialLine: "自拍角度像手机临时滑到了桌边。",
    imageSrc: "./assets/portraits/beiye-car-selfie.jpg",
    visualTags: ["灰T恤", "低角度", "车内光"],
    photoStyle: {
      skin: "#c58d69",
      hair: "#111827",
      outfit: "#9ca3af",
      accent: "#ef4444",
      backdrop: "#475569",
      prop: "car",
      pose: "blank"
    },
    revealText: "北野不是卧底。低角度自拍很有迷惑性，但他只是不会拍照，不是直男线索。"
  },
  {
    name: "松间",
    visualArchetype: "烧烤摊合影风",
    actualIdentity: "双性恋朋友",
    socialLine: "一看就是群里负责点串的人。",
    imageSrc: "./assets/portraits/songjian-bbq.jpg",
    visualTags: ["黑T", "啤酒杯", "暖灯"],
    photoStyle: {
      skin: "#d6a17d",
      hair: "#2b211d",
      outfit: "#18181b",
      accent: "#facc15",
      backdrop: "#7c2d12",
      prop: "cup",
      pose: "cheer"
    },
    revealText: "松间不是卧底。烧烤摊、啤酒杯和黑T恤很像直男滤镜，但身份不听滤镜指挥。"
  },
  {
    name: "陈屿",
    visualArchetype: "理工实验室证件风",
    actualIdentity: "跨性别朋友",
    socialLine: "表情像刚跑完一组数据。",
    imageSrc: "./assets/portraits/chenyu-lab.jpg",
    visualTags: ["格子衬衫", "眼镜", "实验室"],
    photoStyle: {
      skin: "#ecc19f",
      hair: "#262626",
      outfit: "#475569",
      accent: "#22c55e",
      backdrop: "#e2e8f0",
      prop: "badge",
      pose: "still"
    },
    revealText: "陈屿不是卧底。格子衬衫只是格子衬衫，不是任何人的身份二维码。"
  },
  {
    name: "海盐",
    visualArchetype: "板寸黑框照风",
    actualIdentity: "酷儿朋友",
    socialLine: "像会把所有消息都回成一个句号。",
    imageSrc: "./assets/portraits/haiyan-minimal.jpg",
    visualTags: ["板寸", "黑框眼镜", "素色墙"],
    photoStyle: {
      skin: "#f0c7aa",
      hair: "#111111",
      outfit: "#2563eb",
      accent: "#111827",
      backdrop: "#f1f5f9",
      prop: "glasses",
      pose: "deadpan"
    },
    revealText: "海盐不是卧底。沉默、短发和黑框眼镜不构成直男三件套。"
  },
  {
    name: "黑瓴",
    visualArchetype: "极简黑色高领风",
    actualIdentity: "无性恋朋友",
    socialLine: "头像像科技公司官网的创始人介绍。",
    imageSrc: "./assets/portraits/heiling-turtleneck.jpg",
    visualTags: ["黑高领", "白棚", "冷淡"],
    photoStyle: {
      skin: "#e6b594",
      hair: "#151515",
      outfit: "#111111",
      accent: "#94a3b8",
      backdrop: "#f8fafc",
      prop: "badge",
      pose: "still"
    },
    revealText: "黑瓴不是卧底。极简、高领和冷脸只是一种审美，不是身份声明。"
  },
  {
    name: "夜润",
    visualArchetype: "城市夜跑反光风",
    actualIdentity: "泛性恋朋友",
    socialLine: "看起来像每晚都把配速发朋友圈。",
    imageSrc: "./assets/portraits/yerun-runner.jpg",
    visualTags: ["运动夹克", "耳机", "夜跑"],
    photoStyle: {
      skin: "#c99372",
      hair: "#222222",
      outfit: "#111827",
      accent: "#38bdf8",
      backdrop: "#1e293b",
      prop: "headphone",
      pose: "lean"
    },
    revealText: "夜润不是卧底。反光条和跑步耳机能说明他爱运动，不能说明他爱谁。"
  },
  {
    name: "便利",
    visualArchetype: "便利店夜班冷光风",
    actualIdentity: "男同朋友",
    socialLine: "手里的罐装咖啡像是他的第二条命。",
    imageSrc: "./assets/portraits/bianli-nightshift.jpg",
    visualTags: ["深夹克", "罐咖啡", "货架"],
    photoStyle: {
      skin: "#d5a07b",
      hair: "#1f2937",
      outfit: "#111827",
      accent: "#60a5fa",
      backdrop: "#0f172a",
      prop: "cup",
      pose: "blank"
    },
    revealText: "便利不是卧底。夜班疲惫感和罐装咖啡只是生活状态，不是取向提示。"
  },
  {
    name: "贝斯",
    visualArchetype: "复古乐队后台风",
    actualIdentity: "酷儿朋友",
    socialLine: "像刚从地下演出后台拎着贝斯出来。",
    imageSrc: "./assets/portraits/beisi-bassist.jpg",
    visualTags: ["皮夹克", "舞台红光", "贝斯"],
    photoStyle: {
      skin: "#d2a07a",
      hair: "#151515",
      outfit: "#171717",
      accent: "#ef4444",
      backdrop: "#450a0a",
      prop: "key",
      pose: "cool"
    },
    revealText: "贝斯不是卧底。皮夹克和乐队气质很会制造故事感，但故事不等于身份答案。"
  },
  {
    name: "木观",
    visualArchetype: "美术馆黑白穿搭风",
    actualIdentity: "非二元朋友",
    socialLine: "站在展墙前，像正在判断这幅画是不是太吵。",
    imageSrc: "./assets/portraits/muguan-gallery.jpg",
    visualTags: ["黑白穿搭", "展墙", "冷白光"],
    photoStyle: {
      skin: "#e6b99a",
      hair: "#202020",
      outfit: "#111827",
      accent: "#e5e7eb",
      backdrop: "#f8fafc",
      prop: "book",
      pose: "serious"
    },
    revealText: "木观不是卧底。美术馆和黑白穿搭只能证明他很会摆，不负责替身份盖章。"
  },
  {
    name: "天台",
    visualArchetype: "城市天台风衣风",
    actualIdentity: "双性恋朋友",
    socialLine: "像电影剧照里下一秒要说一句狠话。",
    imageSrc: "./assets/portraits/tiantai-trenchcoat.jpg",
    visualTags: ["深风衣", "天台", "城市夜景"],
    photoStyle: {
      skin: "#c58d6d",
      hair: "#171717",
      outfit: "#111111",
      accent: "#60a5fa",
      backdrop: "#0f172a",
      prop: "scarf",
      pose: "side"
    },
    revealText: "天台不是卧底。夜景、风衣和克制表情只是电影感，不是身份鉴定。"
  },
  {
    name: "家辰",
    visualArchetype: "厨房围裙居家风",
    actualIdentity: "男同朋友",
    socialLine: "像刚把朋友聚餐的菜单全部接管。",
    imageSrc: "./assets/portraits/jiachen-kitchen.jpg",
    visualTags: ["围裙", "厨房", "料理"],
    photoStyle: {
      skin: "#e5b08f",
      hair: "#1f2937",
      outfit: "#111827",
      accent: "#f59e0b",
      backdrop: "#f5f5f4",
      prop: "cup",
      pose: "soft"
    },
    revealText: "家辰不是卧底。会做饭和围裙照只是生活技能，不是任何人的身份标签。"
  },
  {
    name: "安全",
    visualArchetype: "工地安全帽现场风",
    actualIdentity: "双性恋朋友",
    socialLine: "像项目现场最靠谱的那个人。",
    imageSrc: "./assets/portraits/anquan-construction.jpg",
    visualTags: ["安全帽", "工装", "工地"],
    photoStyle: {
      skin: "#d6a17d",
      hair: "#1f1b18",
      outfit: "#111827",
      accent: "#f8fafc",
      backdrop: "#a16207",
      prop: "badge",
      pose: "formal"
    },
    revealText: "安全不是卧底。安全帽和项目现场只说明他在工作，不说明他的人生关系图。"
  },
  {
    name: "程序",
    visualArchetype: "程序员工位自拍风",
    actualIdentity: "酷儿朋友",
    socialLine: "双显示器背景里藏着加班咖啡。",
    imageSrc: "./assets/portraits/chengxu-workstation.jpg",
    visualTags: ["黑卫衣", "显示器", "键盘"],
    photoStyle: {
      skin: "#d4a07b",
      hair: "#111827",
      outfit: "#111827",
      accent: "#38bdf8",
      backdrop: "#334155",
      prop: "keyboard",
      pose: "focus"
    },
    revealText: "程序不是卧底。黑卫衣和代码背景只是职业滤镜，不是直男通行证。"
  },
  {
    name: "白壁",
    visualArchetype: "普通白墙证件风",
    actualIdentity: "非二元朋友",
    socialLine: "像临时拍的工作资料照。",
    imageSrc: "./assets/portraits/baibi-id-photo.jpg",
    visualTags: ["灰T恤", "白墙", "平光"],
    photoStyle: {
      skin: "#e8b995",
      hair: "#111827",
      outfit: "#9ca3af",
      accent: "#111827",
      backdrop: "#f8fafc",
      prop: "badge",
      pose: "still"
    },
    revealText: "白壁不是卧底。越普通的照片越容易让人偷懒判断，但身份不等于证件照风格。"
  },
  {
    name: "理发",
    visualArchetype: "理发店镜前自拍风",
    actualIdentity: "泛性恋朋友",
    socialLine: "刚修完头发，镜子比本人还认真。",
    imageSrc: "./assets/portraits/lifa-mirror.jpg",
    visualTags: ["短发", "镜前自拍", "理发店"],
    photoStyle: {
      skin: "#c58d69",
      hair: "#111827",
      outfit: "#18181b",
      accent: "#94a3b8",
      backdrop: "#44403c",
      prop: "glasses",
      pose: "blank"
    },
    revealText: "理发不是卧底。短发、黑围布和镜前自拍都只是生活照，不是身份答案。"
  },
  {
    name: "街口",
    visualArchetype: "便利店门口街头风",
    actualIdentity: "男同朋友",
    socialLine: "夜色和冷光让他看起来像在等人。",
    imageSrc: "./assets/portraits/jiekou-convenience.jpg",
    visualTags: ["黑夹克", "便利店", "冷光"],
    photoStyle: {
      skin: "#c58d6d",
      hair: "#222222",
      outfit: "#111827",
      accent: "#60a5fa",
      backdrop: "#020617",
      prop: "key",
      pose: "side"
    },
    revealText: "街口不是卧底。便利店门口的疲惫感很像某种固定印象，但那不是身份说明书。"
  },
  {
    name: "码头",
    visualArchetype: "钓鱼码头户外风",
    actualIdentity: "无性恋朋友",
    socialLine: "手里拿着鱼竿，像一整天都不回消息。",
    imageSrc: "./assets/portraits/matou-fishing.jpg",
    visualTags: ["棒球帽", "鱼竿", "码头"],
    photoStyle: {
      skin: "#d6a17d",
      hair: "#1f1b18",
      outfit: "#111827",
      accent: "#38bdf8",
      backdrop: "#0f766e",
      prop: "cap",
      pose: "confident"
    },
    revealText: "码头不是卧底。钓鱼爱好可以很强烈，但它不能替任何人的亲密关系下定义。"
  }
];

const straightProfileCopy = {
  "ache-party-singer.jpg": {
    revealText: "亮片外套、麦克风、玫粉灯，整个人像一颗会唱歌的迪厅水晶球。结果呢？直男。舞台给他了，弯没给他。",
    successText: "开牌！这是直男卧底。亮片闪得像要出道，灵魂却在研究车载低音炮，反差大到音响都低头。"
  },
  "xiaosun-flower-shirt.jpg": {
    revealText: "花衬衫、珍珠链、peace 手，像是朋友圈里负责把大家拍漂亮的那位。很遗憾，直男，珍珠只是借来的，不是天降身份铭牌。",
    successText: "抓包成功！他看起来像舞池蝴蝶，实际聊天只会把所有关系总结成“兄弟们感情好”，蝴蝶当场变折叠椅。"
  },
  "nico-bookstore.jpg": {
    revealText: "书店、托特包、半框眼镜，文艺浓度高到能泡一壶冷萃。结果是直男，包里不是诗集，是运动饮料和充电宝。",
    successText: "漂亮，卧底现形。站在书架前像会引用电影长镜头，一开口问代词贴纸是不是桌游身份牌，书店空气都凝固了。"
  },
  "xiaxu-makeup-selfie.jpg": {
    revealText: "粉紫眼影一上脸，你的雷达就开始乱叫。冷静，他只是朋友练手模特，gay 在哪？在你脑内美妆分区里。",
    successText: "命中！眼影是烟雾弹，真正的直男味是夸人只会说“挺有精神”，像社区表彰大会主持人。"
  },
  "youzi-dj.jpg": {
    revealText: "彩虹耳机、银色夹克、地下舞池，像要把你拽进凌晨三点的 after party。结果直男，耳机只是装饰，歌名一个不认识。",
    successText: "抓到了！他看起来像 DJ，实际上把 techno、house、disco 统一叫“电子音乐”，夜店地板听了都想报警。"
  },
  "qiaoyi-suit.jpg": {
    revealText: "宽肩西装加丝巾，像杂志专题《性别边界的雾》。揭晓：直男。边界没雾，他只是公司年会服装没还。",
    successText: "精准！大片感救不了他，一句“从男性视角客观分析”落地，时尚摄影棚瞬间变圆桌论坛。"
  },
  "juanxing-cabaret.jpg": {
    revealText: "卷发、红灯、麦克风架，他像下一秒要唱碎三段爱情。实际上直男，短视频挑战后遗症罢了。",
    successText: "抓到卷星！手扶麦克风像深情男主，嘴里全是“哥们处得来”，舞台幕布连夜申请下班。"
  },
  "maorong-pink.jpg": {
    revealText: "粉色毛绒外套怎么了？这明显是一个怕冷且敢穿的直男，gay 在哪？在你那台冒烟的刻板印象榨汁机里。",
    successText: "开出来了！甜酷大片外壳，第一句“兄弟，这衣服保暖吗”直接把摄影棚打回羽绒服卖场。"
  },
  "caibian-street.jpg": {
    revealText: "彩色短编发加胶片相机，你脑内已经自动响起独立乐队。结果直男，编发摊十分钟速成，不含身份附魔。",
    successText: "命中彩编！造型像街拍主理人，夸人只会“挺潮”，词汇量薄得像一次性相机说明书。"
  },
  "xiangshui-ad.jpg": {
    revealText: "湿发、黑衬衫、深绿光，像奢侈品香水广告。开牌：直男。高级感是摄影师的，混乱感是他自己的。",
    successText: "香水卧底被抓！脸像海报，关系管理像 Excel 崩盘，前任现任暧昧对象统统叫“朋友”。"
  },
  "caitie-festival.jpg": {
    revealText: "脸颊彩虹贴纸不是身份证盖章，是朋友排队领多了随手一贴。你还真把贴纸当户口本翻啊？",
    successText: "抓到彩贴！阳光、音乐节、牛仔外套全在演，他本人却从头到尾只关心停车有没有优惠。"
  },
  "chengdu-sweet-spicy.jpg": {
    revealText: "太古里、粉墨镜、奶茶，一整套成都甜辣套餐。结果直男，营业感是朋友教的，灵魂还在问“拍完了吗兄弟”。",
    successText: "漂亮！成都甜辣被你抓住了。外表像要去拍城市生活方式大片，回夸奖只会“还行吧兄弟”，甜辣当场变微辣。"
  },
  "luosaihu-gym-bear.jpg": {
    revealText: "这明显就是一个热爱健身的壮汉，gay 在哪？真是世风日下，人心不古！摇摇杯都比你的判断稳。",
    successText: "抓到了！络腮胡、背心、摇摇杯全是烟雾弹，他把所有亲密互动解释成“练完肩比较兴奋”，铁直得能当杠铃杆。"
  },
  "juanmao-cafe.jpg": {
    revealText: "卷毛、珍珠、拿铁、小蛋糕，你就开始脑补十集都市情感剧。结果直男，坐咖啡馆不等于自动获得隐藏身份。",
    successText: "香香卷毛开牌！精致得像甜品柜广告，点拿铁却问能不能少点咖啡味，咖啡师沉默了三秒。"
  },
  "jiemeiju-camera.jpg": {
    revealText: "花衬衫拿小相机，像全桌姐妹的拍照救星。结果直男，技术是真的，滤镜审美也是从团建血战里练出来的。",
    successText: "抓到拍照担当！他会摆、会拍、会喊“再自然点”，但修图统一叫“把人弄亮点”，软件听了都白屏。"
  },
  "mengnan-bear-bar.jpg": {
    revealText: "这明显是一个目光如炬的硬汉，gay 在哪？？？皮夹克都快被你脑补出彩虹反光了。",
    successText: "熊系酒杯现形！成熟硬朗很会骗，他把所有暧昧语气都听成朋友客气，酒杯差点从他手里滑走。"
  },
  "dance-studio-spicy.jpg": {
    revealText: "短外套、紫粉灯、舞蹈室，你大脑自动开演唱会。结果直男，人家只是交作业，别给作业加宇宙观。",
    successText: "舞室辣男被抓！动作很杀，造型很辣，跳完第一句“鞋拍到了吗”直接把舞台砸回器材室。"
  }
};

const misleadingProfileCopy = {
  "haozi-gym.jpg": {
    revealText: "浩子不是卧底。黑背心、哑铃、冷白光只是健身房三件套，不是直男许可证。",
    wrongText: "你点浩子？肌肉一亮你就交卷，健身房前台已经给你办了“刻板印象私教课”。"
  },
  "aqiang-business.jpg": {
    revealText: "阿强不是卧底。白衬衫和腕表很像样板间销售冠军，但样板间不销售取向。",
    wrongText: "你点阿强？白衬衫一出现你就放心了，衬衫扣子都比你的判断更紧张。"
  },
  "kevin-basketball.jpg": {
    revealText: "Kevin 不是卧底。球衣、汗感、低角度自拍只是运动照语言，不是宇宙直男公章。",
    wrongText: "你点 Kevin？看见篮球就觉得答案稳了，篮筐都想问你投的是球还是偏见。"
  },
  "linmian-motorcycle.jpg": {
    revealText: "林眠不是卧底。冷脸、机车夹克、停车场只是氛围，不是把人焊成直男的钢印。",
    wrongText: "你点林眠？皮夹克还没说话你就替它发言，停车场监控都觉得你戏多。"
  },
  "tata-garage.jpg": {
    revealText: "塔塔不是卧底。工装和扳手是生活技能，不是身份标签，更不是你的判断外挂。",
    wrongText: "你点塔塔？扳手一亮你就宕机，工具箱里最钝的可能不是螺丝刀。"
  },
  "ruobai-outdoor.jpg": {
    revealText: "若白不是卧底。冲锋衣和钓鱼帽只能证明他防晒，不负责证明他喜欢谁。",
    wrongText: "你点若白？帽檐一压你就上钩，鱼都没你这么配合。"
  },
  "mingxu-esports.jpg": {
    revealText: "明煦不是卧底。电竞椅、大卫衣、蓝光只是房间氛围，不是人生说明书。",
    wrongText: "你点明煦？键盘发蓝你眼睛也跟着发蓝，显示器都快给你弹错误提示了。"
  },
  "xiaolu-office.jpg": {
    revealText: "小路不是卧底。Polo、工牌和咖啡杯是职场皮肤，不是默认直男职业套装。",
    wrongText: "你点小路？他只是拿杯咖啡，你却像 HR 误点了性格测试。"
  },
  "beiye-car-selfie.jpg": {
    revealText: "北野不是卧底。低角度自拍很灾难，但摄影灾难不能等价于取向答案。",
    wrongText: "你点北野？自拍角度丑你就判直，手机前置镜头都替你背锅背累了。"
  },
  "songjian-bbq.jpg": {
    revealText: "松间不是卧底。烧烤摊、啤酒杯、黑 T 恤是夜宵滤镜，不是身份裁判。",
    wrongText: "你点松间？一杯啤酒把你灌成判断力泡沫，烤串都比你有层次。"
  },
  "chenyu-lab.jpg": {
    revealText: "陈屿不是卧底。格子衬衫只是格子衬衫，不是人体二维码，不扫码也没答案。",
    wrongText: "你点陈屿？实验室背景让你自动判直，你这实验连对照组都没设。"
  },
  "haiyan-minimal.jpg": {
    revealText: "海盐不是卧底。板寸、黑框、素色墙只是极简，不是直男三件套豪华版。",
    wrongText: "你点海盐？人家表情少，不代表你脑补空间大。白墙都被你看出剧情了。"
  },
  "heiling-turtleneck.jpg": {
    revealText: "黑瓴不是卧底。黑高领、冷脸、白棚是审美套餐，不是性向发布会。",
    wrongText: "你点黑瓴？高领一穿你就开判，科技发布会都没你这么爱宣布结论。"
  },
  "yerun-runner.jpg": {
    revealText: "夜润不是卧底。反光条说明夜跑安全，不说明你的刻板印象安全。",
    wrongText: "你点夜润？他跑步，你脑子也跟着跑偏，配速还挺稳定。"
  },
  "bianli-nightshift.jpg": {
    revealText: "便利不是卧底。夜班、冷光、罐咖啡只是累，不是隐藏身份提示。",
    wrongText: "你点便利？便利店冷光一照你就迷糊，罐咖啡都想给你醒醒脑。"
  },
  "beisi-bassist.jpg": {
    revealText: "贝斯不是卧底。皮夹克和舞台红光只负责制造氛围，不负责制造答案。",
    wrongText: "你点贝斯？低音还没进，你的判断已经全程跑调，调音师当场离席。"
  },
  "muguan-gallery.jpg": {
    revealText: "木观不是卧底。美术馆黑白穿搭只是会摆，不是身份盖章机。",
    wrongText: "你点木观？站展墙前你就开始过度解读，策展人看了都说收敛点。"
  },
  "tiantai-trenchcoat.jpg": {
    revealText: "天台不是卧底。风衣、夜景、克制表情是电影感，不是人物小传。",
    wrongText: "你点天台？风衣一吹你就写剧本，城市夜景都被你编得加班。"
  },
  "jiachen-kitchen.jpg": {
    revealText: "家辰不是卧底。会做饭是技能，不是自动触发隐藏身份成就。",
    wrongText: "你点家辰？锅铲一拿你就开判，厨房油烟机都吸不走你这股偏见味。"
  },
  "anquan-construction.jpg": {
    revealText: "安全不是卧底。安全帽说明他在工地，不说明他的人生关系图。",
    wrongText: "你点安全？看到工地就以为稳，建议先给你的判断力戴个安全帽。"
  },
  "chengxu-workstation.jpg": {
    revealText: "程序不是卧底。黑卫衣和代码背景只是工位日常，不是 if straight 的返回值。",
    wrongText: "你点程序？他坐在电脑前，不代表你的脑回路可以直接 `return true`。"
  },
  "baibi-id-photo.jpg": {
    revealText: "白壁不是卧底。普通白墙照只是普通，不是“直男模式：已开启”。",
    wrongText: "你点白壁？这都能被白墙骗，墙都没想到自己戏份这么重。"
  },
  "lifa-mirror.jpg": {
    revealText: "理发不是卧底。刚剪完头发只是刚剪完头发，理发店没有附赠身份鉴定。",
    wrongText: "你点理发？剪个头就被你剪进刻板印象，理发师都没你下手快。"
  },
  "jiekou-convenience.jpg": {
    revealText: "街口不是卧底。便利店门口的疲惫感只是疲惫，不是隐藏剧情提示。",
    wrongText: "你点街口？冷光把他照冷了，也把你判断力冻住了是吧。"
  },
  "matou-fishing.jpg": {
    revealText: "码头不是卧底。钓鱼是爱好，不是把亲密关系写进鱼竿说明书。",
    wrongText: "你点码头？他还没甩竿你先上钩，恭喜成为本轮最大鱼获。"
  }
};

const revealCopyByName = {
  "林眠": "咋地，姐妹不能穿机车服吗？Look my eyes！！",
  "阿强": "没事儿~ 我老公的白衬衫我穿也很好看的，你看不出来太正常了！",
  "若白": "出来徒步，必须得注意防晒！",
  "拍照担当": "非常好！直男也可以穿夏威夷度假衫，也可以喜欢用卡片机拍照。嘴大是爹妈给的，又不是自己的错！",
  "卷星": "很棒！复古时代的男星，就是这种风格！你是懂审美的！",
  "小榫": "没错！直男拍照就是只会比个耶！根本不靠别的，就硬帅！",
  "成都甜辣": "哎呦！看见成都，不一定非得是gay对吧！直男就不能待在想待的城市了吗？",
  "彩贴": "好！听个音乐会，脸上贴点东西很正常啊！真正的直男才不会在意这些细节！",
  "乔伊": "不错！宽肩西装配丝巾，现在男明星都这么拍！只要女孩子喜欢，圈粉才是第一要务！",
  "络腮摇摇杯": "OK！这明显就是对自己今天训练成果很满意的自律直男，直男就不能欣赏自己身材了吗？",
  "海盐": "不是哥们,板材配黑框你都看不出来么，你疑似有点直了！",
  "Nico": "确实嗷！直男也是可以文艺青年的，算你蒙对了，没毛病！",
  "塔塔": "你瞎吗？这么明显的是一个女生，你从哪里看出来像直男的？？？",
  "北野": "低角度是为了展示下颌线，直男能有这小心眼子？",
  "浩子": "都说多少遍了？健身招女，过度健身招男！",
  "松间": "招呼大家点串的老妈子，母性都要爆发了。",
  "夏栩": "铁直男！化妆是作为模特的日常工作内容，gay在哪了？",
  "木观": "美术馆精装照，黑白穿搭，性冷淡打光，gay完了。",
  "程序": "搞开发的强度下，依然时刻保持精致，是这蒲苇之韧！",
  "阿澈": "选的好！直男带心型眼镜咋了？穿亮片外套咋了？舞台需求，为了赚米不丢人嗷！",
  "黑瓴": "这冷脸，这黑高领。直在哪，头发丝吗？",
  "便利": "单凭这迷离的小眼神，就必须得是大母零！",
  "香香卷毛": "选的没错！直男的珍珠项链就不能是女朋友送的吗？拿铁、小蛋糕就不能是女朋友请的吗？你是懂辩证思维的！",
  "毛茸": "正确的选择！谁规定直男不能穿粉色外套？这明显是一个怕冷且敢穿的直男。",
  "小路": "这挂工牌的方式，这端杯子的手势，这发型的样式，这嘴角上扬的姿势，妥妥的酷儿。",
  "贝斯": "直男能练贝斯吗？毫无存在感咋吸引女生注意？贝斯手只能吸引一样喜欢贝斯的男人！",
  "夜润": "谁夜跑发自拍？直男夜跑发只会发公里数和配速！",
  "理发": "原来你理完发还要一个劲自拍啊，gay死了！",
  "Kevin": "笑嘻了，真的有直男会精修腋毛吗？",
  "码头": "正常钓鱼佬这样拿鱼竿啊？这不是在摆拍的gay是什么？",
  "天台": "确实不那么gay了，但是双性恋也不是直男！我的朋友！",
  "柚子": "没毛病老铁！彩虹色耳机，直男的标志性审美。毫不避讳，恰恰是属于直男最有利的证明！",
  "熊系酒杯": "选的好！这明显就是一个目光如炬的硬汉，gay在哪了？？？",
  "家辰": "直男在家做顿便饭还系围裙？？？gay完了。",
  "安全": "白色！！！懂白色的含金量吗？",
  "白壁": "are you kidding？临时拍的工作证件照都能这么精致，你跟我讲这个是直男？",
  "香水": "没毛病老铁！直男他就得喷点香水！不然怎么体现男人味？用狐臭吗？",
  "明煦": "又偷穿男朋友卫衣了吧！直男只会开房间主灯，从来不搞蓝色氛围灯。",
  "彩编": "真不错！这纹身多爷们！染发咋了？直男就不能染发了吗？",
  "街口": "直男只会约好地方抓紧时间直接出发，而不是在便利店门口嗯等！",
  "陈屿": "这一看就是穿格子衫、带眼睛的跨性别女啊，只能说只模仿到了直男的型，没有直男的魂。",
  "舞室辣男": "没错！谁说直男就不能穿露脐装！专业的爵士舞演员就应该对自己的职业尽责！"
};

function fileNameFromImage(profile) {
  return profile.imageSrc ? profile.imageSrc.split("/").pop() : "";
}

function applyProfileCopy(profiles, copyByImage, defaultWrongText) {
  profiles.forEach((profile) => {
    const copy = copyByImage[fileNameFromImage(profile)];
    if (!copy) {
      profile.successText = profile.revealText;
      profile.wrongText = defaultWrongText;
      return;
    }
    profile.revealText = copy.revealText || profile.revealText;
    profile.successText = copy.successText || profile.revealText;
    profile.wrongText = copy.wrongText || defaultWrongText;
  });
}

function applyRevealCopyByName(profiles, outcomeKey) {
  profiles.forEach((profile) => {
    const copy = revealCopyByName[profile.name];
    if (!copy) {
      return;
    }

    profile.revealText = copy;
    profile[outcomeKey] = copy;
  });
}

applyProfileCopy(straightDecoys, straightProfileCopy, "抓到了，但这张缺文案。先算你赢，文案组回去补锅。");
applyProfileCopy(misleadingProfiles, misleadingProfileCopy, "你选错了，而且错得很有想象力。");
applyRevealCopyByName(straightDecoys, "successText");
applyRevealCopyByName(misleadingProfiles, "wrongText");

const state = {
  round: 1,
  score: 0,
  time: secondsPerRound,
  locked: false,
  targetId: "",
  selectedId: "",
  currentProfiles: [],
  pendingGuess: null,
  targetQueue: [],
  misleadingQueue: [],
  fallbackMisleadingQueue: [],
  loadingRoundId: 0,
  timerId: 0
};

const grid = document.querySelector("#grid");
const roundText = document.querySelector("#roundText");
const scoreText = document.querySelector("#scoreText");
const timerText = document.querySelector("#timerText");
const resultText = document.querySelector("#resultText");
const nextButton = document.querySelector("#nextButton");
const restartButton = document.querySelector("#restartButton");
const confirmOverlay = document.querySelector("#confirmOverlay");
const focusCard = document.querySelector("#focusCard");
const confirmText = document.querySelector("#confirmText");
const confirmRevealButton = document.querySelector("#confirmRevealButton");
const cancelRevealButton = document.querySelector("#cancelRevealButton");

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function drawProfile(queueKey, pool) {
  if (!state[queueKey] || state[queueKey].length === 0) {
    state[queueKey] = shuffle(pool);
  }

  return state[queueKey].shift();
}

function drawProfiles(queueKey, pool, count) {
  const picked = [];
  const maxAttempts = pool.length * 2;
  let attempts = 0;

  while (picked.length < count && attempts < maxAttempts) {
    const profile = drawProfile(queueKey, pool);
    attempts += 1;

    if (profile && !picked.includes(profile)) {
      picked.push(profile);
    }
  }

  if (picked.length < count) {
    const backup = shuffle(pool.filter((profile) => !picked.includes(profile)));
    picked.push(...backup.slice(0, count - picked.length));
  }

  return picked;
}

function preloadImage(src) {
  return new Promise((resolve) => {
    if (!src || typeof Image === "undefined") {
      resolve();
      return;
    }

    const image = new Image();
    let settled = false;
    const finish = () => {
      if (settled) {
        return;
      }

      settled = true;
      if (typeof image.decode === "function") {
        image.decode().catch(() => {}).then(resolve);
        return;
      }

      resolve();
    };

    image.onload = finish;
    image.onerror = finish;
    image.decoding = "async";
    image.src = src;

    if (image.complete) {
      finish();
    }
  });
}

function preloadRoundImages(profiles) {
  if (typeof Image === "undefined") {
    return null;
  }

  const sources = [...new Set(profiles.map((profile) => profile.imageSrc).filter(Boolean))];
  return Promise.all(sources.map(preloadImage));
}

function pickRoundProfiles() {
  const target = drawProfile("targetQueue", straightDecoys);
  const picturedPool = misleadingProfiles.filter((profile) => profile.imageSrc);
  const fallbackPool = misleadingProfiles.filter((profile) => !profile.imageSrc);
  const picturedOthers = drawProfiles("misleadingQueue", picturedPool, 8);
  const fallbackOthers = fallbackPool.length > 0
    ? drawProfiles("fallbackMisleadingQueue", fallbackPool, 8 - picturedOthers.length)
    : [];
  const others = [...picturedOthers, ...fallbackOthers].slice(0, 8);
  return shuffle([target, ...others]).map((profile, index) => ({
    ...profile,
    id: `${profile.name}-${state.round}-${index}`,
    isTarget: profile === target
  }));
}

function startRoundTimer(loadId) {
  if (loadId !== state.loadingRoundId || state.selectedId) {
    return;
  }

  state.locked = false;
  [...document.querySelectorAll(".profile-card")].forEach((card) => {
    card.disabled = false;
  });
  resultText.textContent = "图片就绪。先看图，再下注。点一张你觉得最像“混进来的直男卧底”。";
  renderStatus();
  state.timerId = setInterval(tick, 1000);
}

function renderStatus() {
  roundText.textContent = `${state.round}/${roundsTotal}`;
  scoreText.textContent = String(state.score);
  timerText.textContent = String(state.time);
}

function renderRound() {
  clearInterval(state.timerId);
  state.timerId = 0;
  state.time = secondsPerRound;
  state.locked = true;
  state.selectedId = "";
  state.pendingGuess = null;
  const loadId = state.loadingRoundId + 1;
  state.loadingRoundId = loadId;
  closeConfirmOverlay();

  const profiles = pickRoundProfiles();
  const target = profiles.find((profile) => profile.isTarget);
  state.currentProfiles = profiles;
  state.targetId = target.id;

  resultText.textContent = "正在加载本轮照片，倒计时会在 9 张图就绪后开始。";
  nextButton.classList.add("hidden");
  grid.innerHTML = "";

  profiles.forEach((profile) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "profile-card";
    card.disabled = true;
    card.dataset.id = profile.id;
    card.dataset.target = profile.isTarget ? "true" : "false";
    card.style.setProperty("--skin", profile.photoStyle.skin);
    card.style.setProperty("--hair", profile.photoStyle.hair);
    card.style.setProperty("--outfit", profile.photoStyle.outfit);
    card.style.setProperty("--accent", profile.photoStyle.accent);
    card.style.setProperty("--backdrop", profile.photoStyle.backdrop);
    card.innerHTML = `
      <span class="stamp">${profile.isTarget ? "直男卧底" : "不是卧底"}</span>
      <div class="photo-frame ${profile.photoStyle.pose}" aria-label="伪照片：${profile.visualArchetype}">
        ${
          profile.imageSrc
            ? `<img class="portrait-photo" src="${profile.imageSrc}" alt="${profile.visualArchetype}：${profile.name}">`
            : `<span class="photo-noise" aria-hidden="true"></span>
              <div class="portrait-person ${profile.photoStyle.prop}" aria-hidden="true">
                <span class="head"></span>
                <span class="hair"></span>
                <span class="face"></span>
                <span class="neck"></span>
                <span class="body"></span>
                <span class="prop"></span>
              </div>`
        }
      </div>
      <div class="card-copy">
        <p class="archetype">${profile.visualArchetype}</p>
        <p class="name">${profile.name}</p>
        <p class="social-line">${profile.socialLine}</p>
        <div class="visual-tags">
          ${profile.visualTags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="identity-reveal">
          <strong>${profile.actualIdentity}</strong>
          <p>${profile.revealText}</p>
        </div>
      </div>
    `;
    card.addEventListener("click", () => guess(profile.id));
    grid.appendChild(card);
  });

  renderStatus();
  const imagePreload = preloadRoundImages(profiles);
  if (!imagePreload) {
    startRoundTimer(loadId);
    return;
  }

  imagePreload.then(() => startRoundTimer(loadId));
}

function tick() {
  if (state.locked) {
    return;
  }

  state.time -= 1;
  renderStatus();

  if (state.time <= 0) {
    reveal(false, "时间到。直男卧底已经混进合照角落，还顺手问了一句“你们这个主题派对有 dress code 吗”。");
  }
}

function guess(id) {
  if (state.locked) {
    return;
  }

  const correct = id === state.targetId;
  const selectedProfile = state.currentProfiles.find((profile) => profile.id === id);
  const message = correct ? selectedProfile.successText : selectedProfile.wrongText;
  openConfirmOverlay(selectedProfile, correct, message, id);
}

function openConfirmOverlay(profile, correct, message, id) {
  state.locked = true;
  state.pendingGuess = { correct, message, id };
  clearInterval(state.timerId);

  const selectedCard = document.querySelector(`.profile-card[data-id="${id}"]`);
  focusCard.className = "focus-card profile-card";
  focusCard.innerHTML = selectedCard ? selectedCard.innerHTML : "";
  confirmText.textContent = `你选的是「${profile.name}」。再点一次大图或“揭示答案”，这局就开牌。`;
  confirmOverlay.classList.remove("hidden");
  resultText.textContent = `已锁定「${profile.name}」。先别急着笑，确认后才揭示。`;
}

function closeConfirmOverlay() {
  if (!confirmOverlay) {
    return;
  }

  confirmOverlay.classList.add("hidden");
  if (focusCard) {
    focusCard.className = "focus-card";
    focusCard.innerHTML = "";
  }
}

function cancelPendingGuess() {
  if (!state.pendingGuess) {
    return;
  }

  state.pendingGuess = null;
  state.locked = false;
  closeConfirmOverlay();
  resultText.textContent = "撤回下注。继续看图，别让刻板印象替你点鼠标。";
  state.timerId = setInterval(tick, 1000);
}

function confirmPendingGuess() {
  if (!state.pendingGuess) {
    return;
  }

  const pending = state.pendingGuess;
  state.pendingGuess = null;
  closeConfirmOverlay();
  reveal(pending.correct, pending.message, pending.id);
}

function reveal(correct, message, selectedId = "") {
  state.locked = true;
  state.selectedId = selectedId;
  clearInterval(state.timerId);

  const cards = [...document.querySelectorAll(".profile-card")];
  cards.forEach((card) => {
    card.disabled = true;

    if (card.dataset.id !== selectedId) {
      return;
    }

    card.classList.add("revealed");
    if (correct) {
      card.classList.add("correct");
    } else {
      card.classList.add("wrong");
    }
  });

  if (correct) {
    state.score += 100 + state.time * 2;
  }

  resultText.textContent = message;
  nextButton.textContent = state.round >= roundsTotal ? "看结算" : "继续下一轮";
  nextButton.classList.remove("hidden");
  renderStatus();
}

function nextRound() {
  if (state.round >= roundsTotal) {
    finishGame();
    return;
  }

  state.round += 1;
  renderRound();
}

function getStraightBiasRating(score) {
  if (score >= 850) {
    return {
      level: "0 级",
      title: "刻板印象戒断成功",
      tag: "直男歧视指数：几乎没有",
      comment: "你看图，但不被图牵着鼻子走。恭喜，你的判断力暂时没有被亮片、围裙和工牌绑架。"
    };
  }

  if (score >= 650) {
    return {
      level: "1 级",
      title: "轻微嘴硬型偏见",
      tag: "直男歧视指数：有点痒",
      comment: "你大体清醒，偶尔还是会被粉色外套和氛围灯拐进小巷。问题不大，回去少刷三条刻板印象短视频。"
    };
  }

  if (score >= 450) {
    return {
      level: "2 级",
      title: "中度雷达乱响",
      tag: "直男歧视指数：开始发烫",
      comment: "你看到精致就怀疑，看到工地就放心。你的雷达不是坏了，是正在用十年前的地图导航。"
    };
  }

  if (score >= 250) {
    return {
      level: "3 级",
      title: "重度看图定罪",
      tag: "直男歧视指数：需要降温",
      comment: "你已经把心型眼镜、香水、贝斯和自拍角度全送上审判席。直男本人路过都要被你查三遍证件。"
    };
  }

  if (score > 0) {
    return {
      level: "4 级",
      title: "特重度脑补执法",
      tag: "直男歧视指数：红灯闪烁",
      comment: "你不是在找真直男，你是在给每张照片写同人设定。建议暂停执法，先把想象力从审讯室放出来。"
    };
  }

  return {
    level: "5 级",
    title: "满级直男歧视大师",
    tag: "直男歧视指数：爆表",
    comment: "五轮下来颗粒无收，你的判断力已经把所有人都判成了隐藏剧情。直男在你面前连呼吸都像表演。"
  };
}

function finishGame() {
  const rating = getStraightBiasRating(state.score);
  clearInterval(state.timerId);
  grid.innerHTML = `
    <article class="final-report">
      <p class="kicker">最终鉴定报告</p>
      <div class="final-score">
        <span>本局得分</span>
        <strong>${state.score}</strong>
      </div>
      <div class="bias-badge">
        <span>${rating.level}</span>
        <strong>${rating.title}</strong>
      </div>
      <p class="bias-tag">${rating.tag}</p>
      <p class="bias-comment">${rating.comment}</p>
    </article>
  `;
  resultText.textContent = "结算完成。记住本局唯一可靠结论：照片很会演，身份别靠猜。";
  nextButton.classList.add("hidden");
}

function restart() {
  state.round = 1;
  state.score = 0;
  renderRound();
}

nextButton.addEventListener("click", nextRound);
restartButton.addEventListener("click", restart);
confirmRevealButton.addEventListener("click", confirmPendingGuess);
focusCard.addEventListener("click", confirmPendingGuess);
cancelRevealButton.addEventListener("click", cancelPendingGuess);
restart();
