import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../app/bestiary/monsters.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { monstersByRegion } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);

test('forest and mine entries match supplied names, levels and experience', () => {
  const fields = region => monstersByRegion[region].map(({ name, level, exp }) => [name, level, exp]);
  assert.deepEqual(fields('forest'), [
    ['過動的捕蠅草', 2, '145～155'], ['假裝植物的肉食繭', 2, '140～165'],
    ['「往左走」路標', 3, '360～380'], ['「往右走」路標', 3, '360～380'],
    ['高分貝異化鸚鵡', 3, '385～420'], ['調皮的元素靈', 3, '400～410'],
    ['勃肯公雞', 4, '540～600'],
  ]);
  assert.deepEqual(fields('mine'), [
    ['機械血蛭', 3, '410～440'], ['火藥蝙蝠', 4, '550～555'],
    ['駕駛挖礦機的老鼠們', 4, '560～590'], ['巨‧型蜘蛛', 4, '600～660'],
    ['山賊宏翰', 5, '888'],
  ]);
  assert.equal(monstersByRegion.north.length, 5);
  assert.equal(monstersByRegion.mine[4].drop, '山賊宏翰的睡衣');
});

test('valley, quartz and temple match all supplied stats and drops', () => {
  const fields = region => monstersByRegion[region].map(({name,level,exp,drop}) => [name,level,exp,drop ?? null]);
  assert.deepEqual(fields('valley'), [
    ['散光很嚴重的梅杜莎',5,'810～990','蛇之花'],
    ['唱歌很難聽的人魚',6,'1260～1345','人魚鱗片'],
    ['巨型超乾紅眼球',6,'1300～1450',null],
    ['拒絕加班的綠髮異族',6,'1,555',null],
    ['今年207歲的尼特巫妖',6,'1499～1540','尼特巫妖的陳舊眼鏡'],
    ['超正殭屍修女',7,'1890～2300','殭屍修女的十字架'],
  ]);
  assert.deepEqual(fields('quartz'), [
    ['迷路的哥布林王',4,'555',null], ['速食主義半獸人',8,'2980～3100',null],
    ['長相普通的石像鬼',8,'2880～3520',null], ['一臉喪氣的石像鬼',8,'2880～3520',null],
    ['喜歡花朵的石像鬼',8,'2880～3520',null], ['意外小隻的石像鬼',8,'2880～3520',null],
    ['一臉憤怒的石像鬼',9,'4320～5280',null],
  ]);
  assert.deepEqual(fields('temple'), [['無法成為英雄的冤魂',11,'10,000','英魂之淚']]);
});

test('every monster has its own shipped PNG asset', () => {
  const sprites = Object.values(monstersByRegion).flat().map(monster => monster.sprite);
  assert.equal(new Set(sprites).size, 31);
  for (const sprite of sprites) {
    const asset = new URL(`../public/adventure/monster-${sprite}.png`, import.meta.url);
    assert.ok(existsSync(asset), `Missing asset: ${sprite}`);
    assert.equal(readFileSync(asset).subarray(1, 4).toString(), 'PNG');
  }
});

test('every listed monster drop has a tooltip and Lv.11 has a red level style', async () => {
  const component = readFileSync(new URL('../app/bestiary/InteractiveAtlas.tsx', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../app/bestiary/atlas.css', import.meta.url), 'utf8');
  const itemSource = readFileSync(new URL('../app/adventure/items.ts', import.meta.url), 'utf8');
  const itemCompiled = ts.transpileModule(itemSource, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
  const { DROP_DESCRIPTIONS } = await import(`data:text/javascript;base64,${Buffer.from(itemCompiled).toString('base64')}`);
  for (const monster of Object.values(monstersByRegion).flat()) {
    if (monster.drop) assert.ok(DROP_DESCRIPTIONS[monster.drop], `Missing tooltip: ${monster.drop}`);
  }
  assert.match(component, /DROP_DESCRIPTIONS\[monster\.drop\]/);
  assert.match(component, /monster\.level === 11 \? 'level-boss'/);
  assert.match(css, /\.level-boss\{color:#ff646b\}/);
  assert.match(css, /sprite-gargoyle-small\{transform:scale\(\.65\)/);
});

test('adventure and bestiary reuse the same pajamas description', () => {
  assert.match(readFileSync(new URL('../app/adventure/page.tsx', import.meta.url), 'utf8'), /import \{ PAJAMAS_DESCRIPTION \}/);
  assert.match(readFileSync(new URL('../app/bestiary/InteractiveAtlas.tsx', import.meta.url), 'utf8'), /import \{ DROP_DESCRIPTIONS \}/);
});

test('all five romance events expose their documented effects as tooltips', () => {
  const component = readFileSync(new URL('../app/tavern/TavernExperience.tsx', import.meta.url), 'utf8');
  for (const effect of ['恢復 300 AP', '修羅幣額外 +500%', '額外 200% EXP', 'AP 消耗與返還減半', '經驗值 ×1000']) {
    assert.match(component, new RegExp(effect.replace(/[+]/g, '\\+')));
  }
  assert.match(component, /profile\.finalEffect/);
  assert.match(component, /has-item-tooltip/);
});
