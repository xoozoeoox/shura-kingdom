import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routes = ["", "basic", "gacha", "work", "adventure", "tavern", "market", "bestiary"];

test("exports every route as static HTML", async () => {
  for (const route of routes) {
    const html = await readFile(new URL(`../out/${route ? `${route}/` : ""}index.html`, import.meta.url), "utf8");
    assert.match(html, /<html lang="zh-Hant">/);
    assert.match(html, /\u4fee\u7f85\u570b/);
  }
});

test("keeps GitHub Pages from running Jekyll", async () => {
  assert.equal(await readFile(new URL("../out/.nojekyll", import.meta.url), "utf8"), "");
});
