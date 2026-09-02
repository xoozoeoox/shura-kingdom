import ScrollReveal from "../ScrollReveal";

const prizes = [
  { number: "01", title: "修羅國幣", text: "你可以血本無歸，或是中個大獎。", symbol: "◈" },
  { number: "02", title: "治療物", text: "喜歡探險的你，一定無法忍受被迫休養的，對吧？", symbol: "✚" },
  { number: "03", title: "體力罐", text: "社畜必備佳品！工作只有做一次跟無限次！", symbol: "⚗" },
  { number: "04", title: "特別身分組", text: "抽中後即可獲得玩樂身分，或解鎖特殊的限時工作。", symbol: "♛" },
];

export const metadata = {
  title: "抽卡系統｜修羅國系統導覽",
  description: "修羅國的抽卡獎品與特別身分組說明。",
};

export default function GachaPage() {
  return (
    <main className="gacha-page">
      <ScrollReveal />
      <header className="site-header">
        <a className="brand" href="/" aria-label="回到修羅國系統導覽首頁"><span className="brand-seal">修</span><span><b>修羅國系統總覽</b><small>SYSTEM ARCHIVE</small></span></a>
        <nav aria-label="頁面導覽"><a href="/">系統首頁</a><a href="/basic">基礎系統</a><a className="active" href="/gacha">西區賭場</a><a href="/work">城內工作</a><a href="/adventure">外出探險</a><a href="/tavern">小灼酒館</a><a href="/market">中央市集</a></nav>
      </header>

      <section className="subpage-heading gacha-heading">
        <a className="back-link" href="/">◀　返回系統首頁</a>
        <div className="gacha-title-row">
          <div><p className="kicker">CHAPTER II　／　FORTUNE WHEEL</p><h1>抽卡系統</h1></div>
        </div>
        <blockquote>小賭怡情，大賭傷心，巨賭敗家，<strong>一擲千金。</strong></blockquote>
        <p className="gacha-odds-copy">轉盤落定以前，人人都有一夕致富的可能。落定以後就不一定了。</p>
      </section>

      <section className="gacha-content">
        <div className="gacha-section-title"><span>PRIZE POOL</span><h2>抽卡獎品</h2></div>
        <div className="prize-grid">
          {prizes.map((prize, index) => <article className="prize-card" key={prize.title} data-reveal style={{ transitionDelay: `${index * 90}ms` }}><span className="prize-number">{prize.number}</span><span className="prize-symbol" aria-hidden="true">{prize.symbol}</span><h3>{prize.title}</h3><p>{prize.text}</p></article>)}
        </div>

        <section className="role-section">
          <div className="role-heading"><p className="kicker">SPECIAL ROLES</p><h2>特別身分組</h2><p>特別身分組分為兩種：純粹玩樂用的系列身分，以及能夠解鎖特殊工作的限時身分。</p></div>

          <div className="fun-role-grid">
            <article className="role-card" data-reveal><div><span>PLAY ROLE 01</span><h3>『封弊者』系列</h3><p>戴上只屬於先行者的名號。至於這究竟是榮譽還是嘲諷，就看你怎麼理解了。</p></div><div className="gacha-pixel-icon sword" role="img" aria-label="16-bit 黑色長劍" /></article>
            <article className="role-card" data-reveal style={{ transitionDelay: "90ms" }}><div><span>PLAY ROLE 02</span><h3>『超高校級的幸運』系列</h3><p>能抽到它本身，大概就足以證明你的幸運。希望這份運氣不要用在更糟的地方。</p></div><div className="gacha-pixel-icon bear" role="img" aria-label="16-bit 黑白熊" /></article>
          </div>

          <article className="limited-role-card" data-reveal>
            <div className="limited-copy"><span>LIMITED JOB ROLE</span><h3>解鎖特別工作的限時身分組</h3><p>各身分組可解鎖的工作與詳細條件，請至<a className="limited-work-link" href="/work">城內工作</a>查看。</p></div>
            <div className="role-tags" aria-label="限時身分組列表"><span>《考古師》</span><span>《探索者》</span><span>《煉金師》</span></div>
          </article>
        </section>
      </section>

      <footer><span>修羅國系統導覽　／　抽卡系統</span><a href="/">返回系統首頁</a></footer>
    </main>
  );
}
