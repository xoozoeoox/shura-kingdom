import ScrollReveal from "../ScrollReveal";
import KingdomBuildAnimation from "../KingdomBuildAnimation";

const foundations = [
  {
    number: "01", icon: "potion", title: "體力系統", eyebrow: "ACTION POINT",
    lead: "為修羅國更加賣命！",
    body: "建立角色後，初始體力值為 200。你可以馬上決定要去探險，或是打工賺錢。每日簽到會恢復 100 點體力，體力上限為 500。",
    facts: [["初始體力", "200"], ["每日恢復", "+100"], ["體力上限", "500"]],
  },
  {
    number: "02", icon: "coin", title: "COIN 系統", eyebrow: "SHURA COIN",
    lead: "無論是買東西、抽卡，還是找小姐姐，都需要錢的……！",
    body: "修羅幣是修羅國境內流通的統一貨幣。每日完成簽到，即可領取 50 枚修羅幣。",
    facts: [["起始修羅幣", "0"], ["貨幣名稱", "修羅幣"], ["每日簽到", "+50"]],
  },
  {
    number: "03", icon: "level", title: "等級系統", eyebrow: "ADVENTURER LEVEL",
    lead: "你可以當條米蟲，也可以當個會升級的冒險者。",
    body: "修羅國的等級上限為 10 級。透過打工、探險與擊敗怪物累積經驗值，達到指定數量後即可升級，前往更加危險的地區。某些怪物，似乎還會掉落小姐姐喜歡的東西……？",
    facts: [["等級上限", "LV. 10"], ["經驗來源", "打工・探險・打怪"], ["升級解鎖", "高危險區域"]],
  },
];

export const metadata = {
  title: "基礎系統｜修羅國系統導覽",
  description: "修羅國的體力、修羅幣與等級系統說明。",
};

export default function BasicSystemsPage() {
  return (
    <main className="basic-page">
      <ScrollReveal />
      <header className="site-header">
        <a className="brand" href="/" aria-label="回到修羅國系統導覽首頁">
          <span className="brand-seal">修</span><span><b>修羅國系統總覽</b><small>SYSTEM ARCHIVE</small></span>
        </a>
        <nav aria-label="頁面導覽"><a href="/">系統首頁</a><a className="active" href="/basic">基礎系統</a><a href="/gacha">西區賭場</a><a href="/work">城內工作</a><a href="/adventure">外出探險</a><a href="/tavern">小灼酒館</a><a href="/market">中央市集</a></nav>
      </header>

      <section className="subpage-heading">
        <a className="back-link" href="/">◀　返回系統首頁</a>
        <p className="kicker">CHAPTER I　／　THE THREE FOUNDATIONS</p>
        <h1>基礎系統</h1>
        <p>支撐修羅國運作的三大基礎架構</p>
      </section>

      <section className="kingdom-panel basic-kingdom-panel" data-reveal>
        <div className="kingdom-copy">
          <p className="kicker">THE KINGDOM OF SHURA</p>
          <h2>修羅國<br />王城領地</h2>
          <p>北方王城統領國境，南方城門迎接新任國民。城牆之內，中央商店街、小灼酒館、西區賭場與居民街區共同維持著修羅國每日的繁榮——至少官方文書上是這樣寫的。</p>
        </div>
        <figure className="kingdom-figure">
          <KingdomBuildAnimation />
          <figcaption><span>MAP 01</span> 修羅國・王城領地</figcaption>
        </figure>
      </section>

      <section className="basic-section" aria-labelledby="foundation-title">
        <div className="basic-section-title"><span>CHAPTER I</span><h2 id="foundation-title">基礎系統</h2><p>體力、修羅幣與等級，缺一不可。除非你真的打算一輩子當米蟲。</p></div>
        <div className="basic-grid">
          {foundations.map((item, index) => (
            <article className="system-card" key={item.title} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="card-topline"><span className="card-number">{item.number}</span><p className="eyebrow">{item.eyebrow}</p></div>
              <div className="title-line"><h3>{item.title}</h3><div className={`system-icon ${item.icon}`} role="img" aria-label={`${item.title}圖示`} /></div>
              <blockquote>{item.lead}</blockquote>
              <p className="card-body">{item.body}</p>
              <dl>{item.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            </article>
          ))}
        </div>
      </section>

      <footer><span>修羅國系統導覽　／　基礎系統</span><a href="/">返回系統首頁</a></footer>
    </main>
  );
}
