import ScrollReveal from "../ScrollReveal";
import TavernExperience from "./TavernExperience";

const hostessGuides = [
  {
    image: "/hostess-guide-01.jpg",
    title: "太久沒回來，會扣好感度",
    text: "別讓小姐姐等得太久。長時間沒有回到酒館，她們可是會記在心上的。",
  },
  {
    image: "/hostess-guide-02.jpg",
    title: "聊到有興趣的話題，會增加好感度",
    text: "選對話題時，小姐姐可能會認真和你多聊幾句，甚至主動補充自己的看法。",
  },
  {
    image: "/hostess-guide-03.jpg",
    title: "話題不對，也要小心掉好感度哦",
    text: "不是每個話題都適合每位小姐姐。氣氛突然冷掉，大概就是撤退的訊號了。",
  },
  {
    image: "/hostess-guide-04.jpg",
    title: "送禮物給喜歡的小姐姐吧",
    text: "挑中她喜歡的禮物，說不定就能讓彼此的距離更近一點，順便收下她的芳心。",
  },
  {
    image: "/hostess-guide-05.jpg",
    title: "但要小心，她們也有不喜歡的禮物",
    text: "送禮不是把東西塞出去就算成功。送錯了，禮物會消失，好感度也可能跟著一起消失。",
  },
];

export const metadata = {
  title: "小灼酒館｜修羅國系統導覽",
  description: "小灼酒館的喝酒規則、即時背景、小姐姐與好感度事件介紹。",
};

export default function TavernPage() {
  return (
    <main className="tavern-page">
      <ScrollReveal />
      <header className="site-header">
        <a className="brand" href="/" aria-label="回到修羅國系統導覽首頁"><span className="brand-seal">修</span><span><b>修羅國系統總覽</b><small>SYSTEM ARCHIVE</small></span></a>
        <nav aria-label="頁面導覽"><a href="/">系統首頁</a><a href="/basic">基礎系統</a><a href="/gacha">西區賭場</a><a href="/work">城內工作</a><a href="/adventure">外出探險</a><a className="active" href="/tavern">小灼酒館</a><a href="/market">中央市集</a></nav>
      </header>

      <section className="subpage-heading tavern-heading">
        <a className="back-link" href="/">◀　返回系統首頁</a>
        <p className="kicker">CHAPTER V　／　A DRINK, A STORY</p>
        <h1>小灼酒館</h1>
        <blockquote>無論何時無論何地，小灼酒館<strong>小酌一杯！</strong></blockquote>
        <p>酒館是一個特別的系統。它有專屬的、隨著時間變化的酒館背景，讓你能夠即時感覺酒館與現實並行！</p>
      </section>

      <section className="tavern-content">
        <section className="tavern-section" aria-labelledby="tavern-scenes-title">
          <div className="tavern-section-title"><span>01　TIME OF DAY</span><h2 id="tavern-scenes-title">此刻的酒館</h2><p>白天、傍晚與夜晚，各有不同的酒館景色。</p></div>
          <TavernExperience mode="scenes" />
        </section>

        <section className="drink-section" data-reveal aria-labelledby="drink-title">
          <div className="drink-copy"><span>02　DRINK SYSTEM</span><h2 id="drink-title">喝酒</h2><p>小灼酒館是修羅國最受歡迎的冒險者聚集地。本地冒險者每天的第一杯由酒館請客——畢竟把人灌醉以前，總得先展現一點誠意。</p></div>
          <div className="drink-story">
            <p><strong>每日首杯免費</strong>，每杯可恢復 <b>10～50 AP</b>。酒意會讓你暫時無法工作 <em>1 小時</em>，而且喝得越多，休息時間就會繼續累計。</p>
            <p>還想再喝？從第二杯開始，每杯收取 <b>100 修羅幣</b>。每次端酒來的小姐姐，都會因為你的捧場增加 <em>1 點好感度</em>。</p>
            <div className="drink-ledger"><span>FIRST CUP　FREE</span><span>RECOVER　10～50 AP</span><span>NEXT CUP　100 COIN</span><span>AFFECTION　+1</span></div>
          </div>
        </section>

        <section className="hostess-section" aria-labelledby="hostess-title">
          <div className="tavern-section-title"><span>03　TAVERN HOSTESSES</span><h2 id="hostess-title">酒館小姐姐</h2><p>除了喝酒之外，我們還有五位小姐姐能夠陪你聊天。</p></div>
          <div className="hostess-intro"><p className="hostess-free-notice">只要是修羅國的冒險者，每天都可以和我們的小姐姐免費互動 4 次，第五次開始才會開始收費。<strong>＼德政／　＼德政／</strong></p><p>跟小姐姐們試著培養好感度吧！好感度越高，小姐姐能夠提供的沙必死也越好哦！</p><p>據說還有一些小姐姐能夠讓你在工作或探險得到一些特殊的 BUFF……？！</p></div>
          <TavernExperience mode="hostesses" />
          <section className="hostess-guide" aria-labelledby="hostess-guide-title">
            <div className="hostess-guide-heading" data-reveal>
              <span>HOW TO WIN HER HEART</span>
              <h3 id="hostess-guide-title">與小姐姐相處的小提醒</h3>
            </div>
            <div className="hostess-guide-list">
              {hostessGuides.map((guide, index) => (
                <article className="hostess-guide-item" key={guide.image} data-reveal>
                  <figure><img src={guide.image} alt={guide.title} draggable="false" /></figure>
                  <div><span>TIP　{String(index + 1).padStart(2, "0")}</span><h4>{guide.title}</h4><p>{guide.text}</p></div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </section>

      <footer><span>修羅國系統導覽　／　小灼酒館</span><a href="/">返回系統首頁</a></footer>
    </main>
  );
}
