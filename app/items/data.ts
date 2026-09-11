export type ArchiveItem = {
  code: string;
  name: string;
  effect: string;
  description?: string;
};

export type ItemCategory = {
  id: string;
  number: string;
  code: string;
  title: string;
  note: string;
  items: ArchiveItem[];
};

export const itemCategories: ItemCategory[] = [
  {
    id: "stamina", number: "01", code: "STAMINA RECOVERY", title: "體力恢復",
    note: "直接恢復 AP 的藥水、精華、靈藥與角色贈禮。",
    items: [
      { code: "potion_Ss", name: "普通活力藥水(小)", effect: "AP+3" },
      { code: "potion_Sm", name: "優良活力藥水(小)", effect: "AP+10" },
      { code: "potion_Sl", name: "精緻活力藥水(小)", effect: "AP+15" },
      { code: "potion_Ms", name: "普通魔力精華(中)", effect: "AP+30" },
      { code: "potion_Mm", name: "優良魔力精華(中)", effect: "AP+60" },
      { code: "potion_Ml", name: "精緻魔力精華(中)", effect: "AP+90" },
      { code: "potion_Ls", name: "普通英雄靈藥(大)", effect: "AP+100" },
      { code: "potion_Lm", name: "優良英雄靈藥(大)", effect: "AP+150" },
      { code: "potion_Ll", name: "精緻英雄靈藥(大)", effect: "AP+200" },
      { code: "StrawberryNutritionTab", name: "草莓風味營養片", effect: "AP+60", description: "米露贈送的禮物。帶著草莓甜香的小巧營養片，是她在藥草鋪幫忙時偷偷改良的隨身補給。" },
      { code: "FreshPuffBread", name: "現烤酥皮麵包", effect: "AP+60", description: "莉莉安贈送的禮物。剛出爐的酥皮麵包層層鬆脆，仍留著酒館廚房裡溫暖的奶油香氣。" },
      { code: "NoYaTea", name: "特調提神午茶", effect: "AP+60", description: "諾雅贈送的禮物。以她旅行途中蒐集的茶葉調製，沉穩香氣能讓疲憊的思緒重新清晰。" },
      { code: "ElinLunch", name: "滿滿愛心便當", effect: "AP+60", description: "艾琳贈送的禮物。仔細裝滿家常料理的便當，每一道菜都藏著她溫柔而周到的心意。" },
      { code: "HildaRation", name: "自製濃縮口糧", effect: "AP+80", description: "希爾妲贈送的禮物。依傭兵團配方壓製的高濃度口糧，外觀樸素，卻能迅速補足遠行所需的體力。" },
    ],
  },
  {
    id: "healing", number: "02", code: "INJURY TREATMENT", title: "療傷用品",
    note: "縮短療傷冷卻，或直接解除目前的療傷狀態。",
    items: [
      { code: "heal_cloth_s", name: "止血布", effect: "使用後可縮短療傷時間 1 小時" },
      { code: "heal_bandage_m", name: "修補繃帶", effect: "使用後可縮短療傷時間 3 小時" },
      { code: "heal_elixir_l", name: "癒傷秘藥", effect: "使用後可縮短療傷時間 6 小時" },
      { code: "heal_charm_x", name: "赦傷符", effect: "立即解除目前療傷狀態" },
    ],
  },
  {
    id: "adventure", number: "03", code: "ADVENTURE SUPPORT", title: "探險輔助",
    note: "在特定探險事件中提供保護或重新選擇機會。",
    items: [
      { code: "BanditToken", name: "山賊宏翰的憑證", effect: "冒險遇到《強盜團事件》時可免疫偷錢一次，隨機消耗 1 個。", description: "為什麼前老闆的身分證在這裡？" },
      { code: "BanditPajamas", name: "山賊宏翰的睡衣", effect: "冒險遇到《強盜團事件》時可免疫偷錢一次；若同時持有睡衣與憑證，優先消耗睡衣。", description: "山賊宏翰珍藏多年的白色睡衣，有些髒污與破損。" },
      { code: "AntiTeleCompass", name: "反傳送指南針", effect: "遇到《傳送陷阱》時會自動消耗 1 個，使你免除傳送並重新選擇地圖；本次探險的增益效果會繼續保留，但已消耗的 AP 不會返還。", description: "迷路了也用不了的爛東西，但關鍵時刻能救你一命。" },
    ],
  },
  {
    id: "drops", number: "04", code: "MONSTER DROPS", title: "怪物掉落物",
    note: "由城外特定怪物掉落的收藏品與禮物。",
    items: [
      { code: "SnakeFlower", name: "蛇之花", effect: "梅杜莎族花，與梅杜莎的恐怖外表不同，長得相當甜美漂亮。據說是某些藥水的藥材之一，收集難度較高，藥水鋪長期收集中。" },
      { code: "MermaidScale", name: "人魚鱗片", effect: "人魚身上最漂亮的一塊鱗片。據說隨身攜帶，能給予人一點點面對困難的勇氣。" },
      { code: "ZombieCross", name: "殭屍修女的十字架", effect: "上面刻著無法辨讀的文字，每枚十字架的磨損程度也各不相同；送給喜歡研究古老事物的人，應該會很開心。" },
      { code: "LichGlasses", name: "尼特巫妖的陳舊眼鏡", effect: "據傳巫妖的眼鏡有能夠看透伴侶數據的能力，因此也有冒險者蒐集後製作成定情物，送給自己的愛人。" },
      { code: "HeroTear", name: "英魂之淚", effect: "冤魂消逝前留下的最後遺贈品，是凝結成固體的淚水。傭兵之間會把它當作幸運物，贈送給其他同袍。" },
    ],
  },
  {
    id: "general", number: "05", code: "SYNTHESIS ITEMS", title: "合成物品",
    note: "每組依序列出合成素材一、合成素材二與完成品。",
    items: [
      { code: "PuffWrap", name: "酥皮紙包", effect: "烘得酥脆的派皮，聞起來帶著淡淡奶香，是製作派類甜點不可少的底胚。" },
      { code: "BerryJam", name: "莓香果醬罐", effect: "以新鮮草莓熬成果餡，酸甜香氣濃郁，光是打開就讓人想偷吃一口。" },
      { code: "SoftVelvet", name: "柔軟絨布", effect: "觸感柔軟細密的絨布，摸起來暖呼呼的，很適合拿來縫製布偶。" },
      { code: "BearButton", name: "熊熊鈕扣眼", effect: "成對的小圓鈕扣，亮晶晶的，裝上後立刻就有熊熊玩偶的模樣了。" },
      { code: "ShidoLeaf", name: "希多草嫩葉", effect: "希多草最柔嫩的葉片，帶著淡淡草香，是較少見的藥草材料。" },
      { code: "ShidoRoot", name: "希多草根鬚", effect: "細長的根鬚仍保有藥性，雖不起眼，卻是構成完整藥草的重要部分。" },
      { code: "WhitePepper", name: "白花椒苞", effect: "尚未完全綻放的小巧白花苞，帶著一點清香，是生花辣椒特有的部分。" },
      { code: "HotChili", name: "嗆辣椒果", effect: "個頭不算大，但辛辣勁十足，光靠近就能感覺到它不好惹。" },
      { code: "AdvNews", name: "冒險快報", effect: "記載近期消息與流言的小冊頁，內容有時比正式報導還精彩。" },
      { code: "SpecialPage", name: "特別刊附頁", effect: "從期刊中拆出的附頁，上頭往往刊著熱門人物、特集或特別情報。" },
      { code: "SwordBase", name: "劍胚", effect: "尚未完全打磨完成的劍身雛形，已經能看出一把長劍的輪廓。" },
      { code: "SwordHilt", name: "護手握柄", effect: "長劍的握柄與護手部件，裝上後才能真正握在手中使用。" },
      { code: "AgedGrapeJuice", name: "熟成葡萄汁", effect: "經過處理與熟成的葡萄原液，香氣濃厚。" },
      { code: "WaxSealedBottle", name: "封蠟酒瓶", effect: "瓶口封著蠟的玻璃酒瓶，看起來體面又正式，很適合裝作禮物送人。" },
      { code: "StrawberryPie", name: "草莓派", effect: "甜甜的草莓派，酥脆派皮讓人欲罷不能。" },
      { code: "TeddyBear", name: "可愛的絨毛熊熊玩偶", effect: "抱起來又軟又可愛的熊熊玩偶，總是很難不多看兩眼它有多可愛。" },
      { code: "ShidoHerb", name: "希多草", effect: "城內較少見的藥草，藥草店長期發布任務請冒險者採摘或收集。" },
      { code: "RawChili", name: "生花辣椒", effect: "會開出白花的特殊辣椒，模樣漂亮，辣度卻一點都不客氣。" },
      { code: "AdvMag", name: "冒險者雜誌", effect: "專門提供冒險者新聞與話題的雜誌，想知道最近誰又出事，翻它就對了。" },
      { code: "Longsword", name: "長劍", effect: "冒險者常見又實用的武器，樸實無華卻無比鋒利。" },
      { code: "Wine", name: "葡萄酒", effect: "小灼酒館出品，一定精品。" },
    ],
  },
  {
    id: "special", number: "06", code: "SPECIAL & LIMITED", title: "特殊／限時物品",
    note: "具有特殊取得條件、有效期限或可疊加效果的物品。",
    items: [
      { code: "LuxuryPerfume", name: "精緻香水", effect: "城內流行的香水品牌，女性們都相當喜歡。贈送給酒館小姊姊的話可以獲得不少好感度……？" },
      { code: "RoyalCharm", name: "國主護符", effect: "打怪失敗率降低 10%，持有 1 個月後自動失效並刪除，可疊加。" },
      { code: "RoyalPermit", name: "皇家特許令", effect: "國內工作給的修羅國幣 +10%，持有 1 個月後自動失效並刪除，可疊加。" },
    ],
  },
];

export const itemCount = itemCategories.reduce((total, category) => total + category.items.length, 0);
