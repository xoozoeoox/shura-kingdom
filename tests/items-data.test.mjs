import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const compile = path => ts.transpileModule(readFileSync(new URL(path, import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;

const { itemCategories, itemCount } = await import(`data:text/javascript;base64,${Buffer.from(compile('../app/items/data.ts')).toString('base64')}`);
const { DROP_DESCRIPTIONS } = await import(`data:text/javascript;base64,${Buffer.from(compile('../app/adventure/items.ts')).toString('base64')}`);

test('item archive contains six categories and all 50 current items', () => {
  assert.equal(itemCategories.length, 6);
  assert.equal(itemCount, 50);
  const items = itemCategories.flatMap(category => category.items);
  assert.equal(new Set(items.map(item => item.code)).size, 50);
  assert.ok(items.every(item => item.name && item.effect));
});

test('item archive keeps monster drop descriptions aligned', () => {
  const drops = itemCategories.find(category => category.id === 'drops').items;
  for (const item of drops) assert.equal(item.effect, DROP_DESCRIPTIONS[item.name]);
});
