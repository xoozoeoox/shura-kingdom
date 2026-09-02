import ScrollReveal from "../ScrollReveal";

const shopTimes = ["00:00～07:59", "08:00～15:59", "16:00～23:59"];

export const metadata = {
  title: "中央市集｜修羅國系統導覽",
  description: "中央商店的商品更新時段、自由交易與物品拋售規則。",
};

export default function MarketPage() {
  return (
    <main className="market-page">
      <ScrollReveal />
      <header className="site-header">
        <a className="brand" href="/" aria-label="回到修羅國系統導覽首頁"><span className="brand-seal">修</span><span><b>修羅國系統總覽</b><small>SYSTEM ARCHIVE</small></span></a>
        <nav aria-label="頁面導覽"><a href="/">系統首頁</a><a href="/basic">基礎系統</a><a href="/gacha">西區賭場</a><a href="/work">城內工作</a><a href="/adventure">外出探險</a><a href="/tavern">小灼酒館</a><a className="active" href="/market">中央市集</a></nav>
      </header>

      <section className="subpage-heading market-heading">
        <a className="back-link" href="/">◀　返回系統首頁</a>
        <p className="kicker">CHAPTER VI　／　CENTRAL MARKET</p>
        <h1>中央市集</h1>
        <blockquote>猶豫可能不會敗北，但可能會後悔。</blockquote>
        <p>修羅國沒有宵禁。半夜無聊時，除了去 <a className="tavern-route-link" href="/tavern">小灼酒館</a>，也可以來修羅國最大的市集逛逛。</p>
      </section>

      <section className="market-content">
        <section className="market-shop-section" aria-labelledby="central-shop-title">
          <div className="market-section-title"><span>01　CENTRAL SHOP</span><h2 id="central-shop-title">中央商店</h2><p>每天更新三輪商品；特殊身分組也可能改變出現的品項。</p></div>
          <div className="market-shop-copy" data-reveal>
            <p>每天會更新三次商品，每個時段開始時會有新一輪的商品販售，並且依據你是否擁有特殊身分組，而有出現不同品項的機會哦！</p>
            <p>中央商店會販售六種不同物品，除了體力罐、治療物這些常見物品之外，如果想討小姐姐歡心，不妨留意那些特殊物品，很可能就會合成出小姐姐喜歡的東西……！</p>
          </div>
          <div className="market-time-table-wrap" data-reveal>
            <table className="market-time-table">
              <thead><tr><th>商品時段</th></tr></thead>
              <tbody>{shopTimes.map((time, index) => <tr key={time}><th><span>{String(index + 1).padStart(2, "0")}</span>{time}</th></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="trade-section" aria-labelledby="trade-title">
          <div className="market-section-title"><span>02　TRADE MARKET</span><h2 id="trade-title">交易市場</h2><p>背包太滿，或想用其他方式取得好感度物品？來和其他國民交易。</p></div>
          <p className="trade-intro" data-reveal>背包東西太多？想要用別種方式取得小姐姐的好感度物品？那就來交易市場交易吧！</p>
          <div className="trade-copy-grid">
            <article className="trade-copy" data-reveal>
              <h3>＜自由交易＞</h3>
              <p>你可以選擇 <strong className="trade-action">＜心動購入＞</strong> 別人上架的物品。在 DC 有個好處：你可以隨時在遊戲頻道裡詢問是否有人要買這個東西，還有機會取得 <strong className="item-name has-item-tooltip" data-tooltip="打怪失敗率降低 10%，持有 1 個月後自動失效並刪除，時間可疊加。" tabIndex={0}>［國主護符］</strong>、<strong className="item-name has-item-tooltip" data-tooltip="國內工作給的修羅國幣 +10%，持有 1 個月後自動失效並刪除，時間可疊加。" tabIndex={0}>［皇家特許令］</strong> 等特殊道具……？！</p>
              <p>當然你也可以選擇 <strong className="trade-action">＜上架賣出＞</strong> 你包包裡不需要的物品。而且比起拋售商店只能賺五成價格，在交易市場成功交易後僅會收取 1 成的服務費，很划算吧～</p>
              <p>目前開放每個人可以上架 10 筆物品（數量不限）。上架超過 10 天會自己退回背包，同時你也可以自己選擇後台自行下架。</p>
            </article>
            <article className="trade-copy resale-copy" data-reveal style={{ transitionDelay: "90ms" }}>
              <h3>＜拋售商店＞</h3>
              <p>如果你嫌麻煩，覺得不想等顧客購買，也可以把包包裡用不到的東西拋售商店。<br />但是拋售只能獲得原價的<strong className="trade-action">5成</strong>，想要快速就必須犧牲一點，你懂的。</p>
            </article>
          </div>
        </section>
      </section>

      <footer><span>修羅國系統導覽　／　中央市集</span><a href="/">返回系統首頁</a></footer>
    </main>
  );
}
