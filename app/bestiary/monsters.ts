export type Monster = {
  name: string;
  level: number;
  exp: string;
  code: string;
  sprite: string;
  drop?: string;
};

export const monstersByRegion: Record<string, Monster[]> = {
  north: [
    { name: '三重史萊姆', level: 1, exp: '20～30', code: 'TRIPLE SLIME', sprite: 'triple-slime' },
    { name: '狂流鼻涕的蘑菇', level: 1, exp: '10～30', code: 'RUNNY MUSHROOM', sprite: 'runny-mushroom' },
    { name: '宿醉的巡邏兵', level: 1, exp: '45～55', code: 'HUNGOVER GUARD', sprite: 'hungover-guard' },
    { name: '偷鞋小咪', level: 1, exp: '1～10', code: 'SHOE THIEF KITTY', sprite: 'shoe-thief-kitty' },
    { name: '貧窮哥布林', level: 2, exp: '135～140', code: 'POOR GOBLIN', sprite: 'poor-goblin' },
  ],
  forest: [
    { name: '過動的捕蠅草', level: 2, exp: '145～155', code: 'HYPERACTIVE FLYTRAP', sprite: 'hyper-flytrap' },
    { name: '假裝植物的肉食繭', level: 2, exp: '140～165', code: 'CARNIVOROUS COCOON', sprite: 'carnivorous-cocoon' },
    { name: '「往左走」路標', level: 3, exp: '360～380', code: 'GO LEFT', sprite: 'sign-left-eyeless' },
    { name: '「往右走」路標', level: 3, exp: '360～380', code: 'GO RIGHT', sprite: 'sign-right-eyeless' },
    { name: '高分貝異化鸚鵡', level: 3, exp: '385～420', code: 'DEAFENING PARROT', sprite: 'loud-parrot' },
    { name: '調皮的元素靈', level: 3, exp: '400～410', code: 'MISCHIEVOUS ELEMENTAL', sprite: 'elemental-sprite-eyeless' },
    { name: '勃肯公雞', level: 4, exp: '540～600', code: 'BIRKEN ROOSTER', sprite: 'birken-rooster' },
  ],
  mine: [
    { name: '機械血蛭', level: 3, exp: '410～440', code: 'MECHANICAL LEECH', sprite: 'mechanical-leech' },
    { name: '火藥蝙蝠', level: 4, exp: '550～555', code: 'GUNPOWDER BAT', sprite: 'gunpowder-bat' },
    { name: '駕駛挖礦機的老鼠們', level: 4, exp: '560～590', code: 'MINING MICE', sprite: 'mining-mice' },
    { name: '巨‧型蜘蛛', level: 4, exp: '600～660', code: 'GIANT SPIDER', sprite: 'giant-spider' },
    { name: '山賊宏翰', level: 5, exp: '888', code: 'BANDIT HONGHAN', sprite: 'bandit-honghan', drop: '山賊宏翰的睡衣' },
  ],
  valley: [
    { name: '散光很嚴重的梅杜莎', level: 5, exp: '810～990', code: 'ASTIGMATIC MEDUSA', sprite: 'medusa-glasses', drop: '蛇之花' },
    { name: '唱歌很難聽的人魚', level: 6, exp: '1260～1345', code: 'OFF-KEY MERMAID', sprite: 'terrible-singer-mermaid', drop: '人魚鱗片' },
    { name: '巨型超乾紅眼球', level: 6, exp: '1300～1450', code: 'PARCHED RED EYEBALL', sprite: 'dry-red-eyeball' },
    { name: '拒絕加班的綠髮異族', level: 6, exp: '1,555', code: 'NO OVERTIME DEMON', sprite: 'overtime-demon' },
    { name: '今年207歲的尼特巫妖', level: 6, exp: '1499～1540', code: '207-YEAR-OLD NEET LICH', sprite: 'neet-lich', drop: '尼特巫妖的陳舊眼鏡' },
    { name: '超正殭屍修女', level: 7, exp: '1890～2300', code: 'UNDEAD SISTER', sprite: 'zombie-nun', drop: '殭屍修女的十字架' },
  ],
  quartz: [
    { name: '迷路的哥布林王', level: 4, exp: '555', code: 'LOST GOBLIN KING', sprite: 'lost-goblin-king' },
    { name: '速食主義半獸人', level: 8, exp: '2980～3100', code: 'FAST-FOOD ORC', sprite: 'fast-food-orc' },
    { name: '長相普通的石像鬼', level: 8, exp: '2880～3520', code: 'ORDINARY GARGOYLE', sprite: 'gargoyle-plain' },
    { name: '一臉喪氣的石像鬼', level: 8, exp: '2880～3520', code: 'GLOOMY GARGOYLE', sprite: 'gargoyle-gloomy' },
    { name: '喜歡花朵的石像鬼', level: 8, exp: '2880～3520', code: 'FLOWER-LOVING GARGOYLE', sprite: 'gargoyle-flowers' },
    { name: '意外小隻的石像鬼', level: 8, exp: '2880～3520', code: 'TINY GARGOYLE', sprite: 'gargoyle-small' },
    { name: '一臉憤怒的石像鬼', level: 9, exp: '4320～5280', code: 'FURIOUS GARGOYLE', sprite: 'gargoyle-angry' },
  ],
  temple: [
    { name: '無法成為英雄的冤魂', level: 11, exp: '10,000', code: 'SOUL OF A FAILED HERO', sprite: 'failed-hero-soul', drop: '英魂之淚' },
  ],
};
