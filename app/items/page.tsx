import ScrollReveal from "../ScrollReveal";
import { itemCategories, itemCount } from "./data";
import CategoryIndex from "./CategoryIndex";
import ItemIcon, { isCharacterGift } from "./ItemIcon";

export const metadata = {
  title: "王國物品圖鑑｜修羅國系統導覽",
  description: "修羅國現有體力、療傷、探險、掉落、禮物與特殊物品的效果圖鑑。",
};

export default function ItemArchivePage() {
  return (
    <main className="items-page">
      <ScrollReveal />
      <header className="site-header">
        <a className="brand" href="/" aria-label="回到修羅國系統導覽首頁"><span className="brand-seal">修</span><span><b>修羅國系統總覽</b><small>SYSTEM ARCHIVE</small></span></a>
        <nav aria-label="頁面導覽"><a href="/">系統首頁</a><a className="active" href="/basic">基礎系統</a><a href="/gacha">西區賭場</a><a href="/work">城內工作</a><a href="/adventure">外出探險</a><a href="/tavern">小灼酒館</a><a href="/market">中央市集</a></nav>
      </header>

      <section className="subpage-heading items-heading">
        <a className="back-link" href="/basic">◀　返回基礎系統</a>
        <p className="kicker">CHAPTER I-A　／　KINGDOM ITEM ARCHIVE</p>
        <h1>王國物品圖鑑</h1>
        <p>收錄目前王國登記在冊的 {itemCount} 種物品。效果、名稱與代碼均依現行系統資料整理。</p>
      </section>

      <CategoryIndex categories={itemCategories} />

      <div className="item-archive-content">
        {itemCategories.map((category) => (
          <section className="item-category" id={category.id} aria-labelledby={`${category.id}-title`} key={category.id}>
            <header className="item-category-heading" data-reveal>
              <span>{category.number}　{category.code}</span>
              <h2 id={`${category.id}-title`}>{category.title}</h2>
              <p>{category.note}</p>
            </header>
            <div className={`item-list-layout item-layout-${category.id}`}>
              {category.id === "stamina" ? <>
                <ItemList title="藥水、精華與靈藥" code="POTIONS & ELIXIRS" category={category.id} items={category.items.filter((item) => !isCharacterGift(item.code))} />
                <ItemList title="小姊姊的贈禮" code="CHARACTER GIFTS" category={category.id} items={category.items.filter((item) => isCharacterGift(item.code))} tooltip />
              </> : category.id === "general" ? <SynthesisList items={category.items} /> : <ItemList category={category.id} items={category.items} expanded />}
            </div>
          </section>
        ))}
      </div>

      <footer><span>修羅國系統導覽　／　王國物品圖鑑</span><a href="/basic">返回基礎系統</a></footer>
    </main>
  );
}

function ItemList({ items, category, title, code, tooltip = false, expanded = false }: { items: (typeof itemCategories)[number]["items"]; category: string; title?: string; code?: string; tooltip?: boolean; expanded?: boolean }) {
  return <div className="archive-item-list">
    {title && <header className="archive-list-title"><b>{title}</b><small>{code}</small></header>}
    {items.map((item, index) => {
      const isRecovery = /^AP\+\d+$/.test(item.effect);
      return <article className={`archive-item-row${tooltip ? " has-archive-tooltip" : ""}${expanded ? " expanded-item-row" : ""}`} data-tooltip={tooltip ? (item.description ?? item.effect) : undefined} tabIndex={tooltip ? 0 : undefined} data-reveal style={{ transitionDelay: `${(index % 4) * 40}ms` }} key={item.code}>
        <span className="archive-item-icon"><ItemIcon code={item.code} category={category} /></span>
        <div className="archive-item-copy"><small>{item.code}</small><h3>{item.name}</h3></div>
        <div className="archive-item-effect"><small>{isRecovery ? "RECOVERY" : "DETAIL"}</small><strong>{item.effect}</strong></div>
      </article>;
    })}
  </div>;
}

const synthesisGroups = [
  ["PuffWrap", "BerryJam", "StrawberryPie"], ["SoftVelvet", "BearButton", "TeddyBear"],
  ["ShidoLeaf", "ShidoRoot", "ShidoHerb"], ["WhitePepper", "HotChili", "RawChili"],
  ["AdvNews", "SpecialPage", "AdvMag"], ["SwordBase", "SwordHilt", "Longsword"],
  ["AgedGrapeJuice", "WaxSealedBottle", "Wine"],
];

function SynthesisList({ items }: { items: (typeof itemCategories)[number]["items"] }) {
  const byCode = new Map(items.map((item) => [item.code, item]));
  return <div className="synthesis-list"><header className="synthesis-labels"><span>合成素材 1</span><span>合成素材 2</span><span>成品</span></header>{synthesisGroups.map((group, row) => <div className="synthesis-row" key={group[2]}>{group.map((code, column) => { const item = byCode.get(code)!; return <article className={`synthesis-item${column === 2 ? " synthesis-result" : ""}`} data-reveal key={code}><span className="archive-item-icon"><ItemIcon code={item.code} category="general" /></span><div><small>{item.code}</small><h3>{item.name}</h3><p>{item.effect}</p></div></article>; })}</div>)}</div>;
}
