export type ArchiveItem = {
  code: string;
  name: string;
  effect: string;
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
      { code: "StrawberryNutritionTab", name: "草莓風味營養片", effect: "AP+60" },
      { code: "FreshPuffBread", name: "現烤酥皮麵包", effect: "AP+60" },
      { code: "NoYaTea", name: "特調提神午茶", effect: "AP+60" },
      { code: "ElinLunch", name: "滿滿愛心便當", effect: "AP+60" },
      { code: "HildaRation", name: "自製濃縮口糧", effect: "AP+80" },
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
      { code: "BanditToken", name: "山賊宏翰的憑證", effect: "冒險遇到《強盜團事件》時可免疫偷錢一次，隨機消耗 1 個。" },
      { code: "BanditPajamas", name: "山賊宏翰的睡衣", effect: "山賊宏翰珍藏多年的睡衣，穿上後散發著一股連山賊都不想靠近的神祕氣息。冒險遇到《強盜團事件》時可免疫偷錢一次，隨機消耗 1 個；若同時有睡衣與憑證，優先消耗睡衣。" },
      { code: "AntiTeleCompass", name: "反傳送指南針", effect: "冒險遇到《傳送陷阱》時可免除傳送一次，隨機消耗 1 個並重新開始冒險事件。" },
    ],
  },
  {
    id: "drops", number: "04", code: "MONSTER DROPS", title: "怪物掉落",
    note: "由城外特定怪物掉落的收藏品與禮物。",
    items: [
      { code: "SnakeFlower", name: "蛇之花", effect: "梅杜莎族花，與梅杜莎的恐怖外表不同，長得相當甜美漂亮。" },
      { code: "MermaidScale", name: "人魚鱗片", effect: "人魚身上最漂亮的一塊鱗片。" },
      { code: "ZombieCross", name: "殭屍修女的十字架", effect: "成為殭屍的修女死前也堅持配戴的十字架，上頭似乎有現在仍無法解析的文字。" },
      { code: "LichGlasses", name: "尼特巫妖的陳舊眼鏡", effect: "據傳巫妖的眼鏡有能夠看透伴侶的數據能力。" },
      { code: "HeroTear", name: "英魂之淚", effect: "為無法成為英魂的冒險者流的淚水。是固體。" },
    ],
  },
  {
    id: "general", number: "05", code: "GIFTS & MATERIALS", title: "禮物／一般物品",
    note: "中央市集可見的合成素材，以及能送給酒館小姐姐的完整物品。",
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
      { code: "LuxuryPerfume", name: "精緻香水", effect: "意外的女性們都會喜歡的味道。" },
      { code: "RoyalCharm", name: "國主護符", effect: "打怪失敗率降低 10%，持有 1 個月後自動失效並刪除，可疊加。" },
      { code: "RoyalPermit", name: "皇家特許令", effect: "國內工作給的修羅國幣 +10%，持有 1 個月後自動失效並刪除，可疊加。" },
    ],
  },
];

export const itemCount = itemCategories.reduce((total, category) => total + category.items.length, 0);
