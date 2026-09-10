import ScrollReveal from "../ScrollReveal";
import { itemCategories, itemCount } from "./data";

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

      <nav className="item-category-index" aria-label="物品分類快速導覽">
        {itemCategories.map((category) => <a href={`#${category.id}`} key={category.id}><span>{category.number}</span>{category.title}<small>{category.items.length}</small></a>)}
      </nav>

      <div className="item-archive-content">
        {itemCategories.map((category) => (
          <section className="item-category" id={category.id} aria-labelledby={`${category.id}-title`} key={category.id}>
            <header className="item-category-heading" data-reveal>
              <span>{category.number}　{category.code}</span>
              <h2 id={`${category.id}-title`}>{category.title}</h2>
              <p>{category.note}</p>
            </header>
            <div className="item-card-grid">
              {category.items.map((item, index) => (
                <article className="archive-item-card" data-reveal style={{ transitionDelay: `${(index % 3) * 55}ms` }} key={item.code}>
                  <span>{item.code}</span>
                  <h3>{item.name}</h3>
                  <p>{item.effect}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer><span>修羅國系統導覽　／　王國物品圖鑑</span><a href="/basic">返回基礎系統</a></footer>
    </main>
  );
}
