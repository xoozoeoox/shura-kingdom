const systems = [
  { name: "基礎系統", mark: "I", href: "basic/", note: "體力・修羅幣・等級" },
  { name: "西區賭場", mark: "II", href: "gacha/", note: "抽卡・特殊身分組" },
  { name: "城內工作", mark: "III", href: "work/", note: "工資・體力・經驗" },
  { name: "外出探險", mark: "IV", href: "adventure/", note: "地圖・怪物・隨機事件" },
  { name: "小灼酒館", mark: "V", href: "tavern/", note: "喝酒・聊天・好感度" },
  { name: "中央市集", mark: "VI", href: "market/", note: "商店・交易・拋售" },
];

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header">
        <a className="brand" href="./" aria-label="回到修羅國系統導覽首頁">
          <span className="brand-seal">修</span><span><b>修羅國系統總覽</b><small>SYSTEM ARCHIVE</small></span>
        </a>
        <nav aria-label="頁面導覽"><a className="active" href="./">系統首頁</a><a href="basic/">基礎系統</a><a href="gacha/">西區賭場</a><a href="work/">城內工作</a><a href="adventure/">外出探險</a><a href="tavern/">小灼酒館</a><a href="market/">中央市集</a></nav>
      </header>

      <section className="hero home-hero">
        <div className="pixel-stars" aria-hidden="true">✦　·　✧　·　✦</div>
        <div className="hero-copybox home-copybox">
          <p className="kicker">新任國民必讀・官方生存指南</p>
          <h1>修羅國<br /><em>系統導覽</em></h1>
          <p className="hero-copy">選擇想查閱的系統卷章。讀懂規則、善用資源，然後決定你要怎麼為這個國家賣命。</p>
          <div className="system-menu" aria-label="系統分類">
            {systems.map((system) => system.href ? (
              <a className="system-button available" href={system.href} key={system.name}>
                <span className="button-mark">{system.mark}</span><span><b>{system.name}</b><small>{system.note}</small></span><i>▶</i>
              </a>
            ) : (
              <span className="system-button locked" aria-disabled="true" key={system.name}>
                <span className="button-mark">{system.mark}</span><span><b>{system.name}</b><small>{system.note}</small></span><i>◇</i>
              </span>
            ))}
          </div>
        </div>
        <div className="hero-king-wrap">
          <div className="level-flag">KING　LV. MAX</div>
          <img className="hero-king pixel-art" src="shura-king-16bit.png" alt="戴著王冠與紅色斗篷的修羅國國王行走圖" />
        </div>
      </section>

      <footer><span>修羅國系統導覽</span><span>SELECT A CHAPTER TO CONTINUE</span></footer>
    </main>
  );
}
