import ScrollReveal from "../ScrollReveal";
import { PAJAMAS_DESCRIPTION } from './items';

const battleRates = [
  { gap: "高 3 等以上（含）", rate: "10%", exp: "250%", danger: "extreme" },
  { gap: "高 2 等", rate: "40%", exp: "150%", danger: "high" },
  { gap: "高 1 等", rate: "70%", exp: "120%", danger: "medium" },
  { gap: "同等級", rate: "100%", exp: "100%", danger: "safe" },
  { gap: "低 1 等", rate: "100%", exp: "70%", danger: "safe" },
  { gap: "低 2 等", rate: "100%", exp: "30%", danger: "safe" },
  { gap: "低 3 等以上（含）", rate: "100%", exp: "10%", danger: "safe" },
];

const cooldowns = [
  ["等級差 0", "1 HR"], ["等級差 1", "3 HR"], ["等級差 2", "6 HR"], ["等級差 3 以上", "12 HR"],
];

const events = [
  { rate: 60, title: "遇到怪物", code: "MONSTER", text: "可以選擇揍牠、觀察或逃跑。怪物的詳細資料請參考城外怪物圖鑑。" },
  { rate: 15, title: "什麼都沒發生", code: "NOTHING", text: "貨真價實的什麼事也沒有，還會退還 30 點體力，讓你重新選擇要去哪裡玩。佛心遊戲！" },
  { rate: 10, title: "得到寶箱", code: "TREASURE", text: "走著走著撿到錢。唔呼！" },
  { rate: 6, title: "遇到山賊小梁", code: "LIANG", text: "會出現在各地的山賊。遇見他時會獲得［山賊宏翰的睡衣］；小梁不會觸發戰鬥，交出睡衣後就會立刻逃跑。" },
  { rate: 5, title: "低調出門的國主", code: "THE KING", text: "就算是國主也會偷跑出來玩。剛好遇見算你幸運，他會送你一份禮物；拿去貢獻給酒館的小姐姐們吧！" },
  { rate: 3, title: "傳送陷阱", code: "WARP TRAP", text: "立即結束冒險，並隨機獲得 1～300 EXP。持有［反傳送指南針］時可以避開，選擇重新冒險或直接回家。" },
  { rate: 1, title: "強盜團事件", code: "ROBBERS", text: "會被搶走身上 3～10% 的修羅幣。持有［山賊宏翰的睡衣］或［山賊宏翰的憑證］時可完全免疫。" },
];

const itemDescriptions: Record<string, string> = {
  "［山賊宏翰的睡衣］": PAJAMAS_DESCRIPTION,
  "［山賊宏翰的憑證］": "冒險遇到《強盜團事件》時可免疫偷錢一次，隨機消耗 1 個。",
  "［反傳送指南針］": "冒險遇到《傳送陷阱》時可免除傳送一次，隨機消耗 1 個並重新開始冒險事件。",
};

function formatItemText(text: string) {
  return text.split(/(［[^］]+］|\[[^\]]+\])/g).map((part, index) => {
    if (!/^(?:［[^］]+］|\[[^\]]+\])$/.test(part)) return part;
    const normalizedItem = part.startsWith("[") ? `［${part.slice(1, -1)}］` : part;
    const description = itemDescriptions[normalizedItem];
    return <strong className={`item-name${description ? " has-item-tooltip" : ""}`} data-tooltip={description} tabIndex={description ? 0 : undefined} key={`${part}-${index}`}>{part}</strong>;
  });
}

export const metadata = {
  title: "外出探險｜修羅國系統導覽",
  description: "修羅國的地圖探險、怪物戰鬥、受傷冷卻與隨機事件說明。",
};

export default function AdventurePage() {
  return (
    <main className="adventure-page">
      <ScrollReveal />
      <header className="site-header">
        <a className="brand" href="/" aria-label="回到修羅國系統導覽首頁"><span className="brand-seal">修</span><span><b>修羅國系統總覽</b><small>SYSTEM ARCHIVE</small></span></a>
        <nav aria-label="頁面導覽"><a href="/">系統首頁</a><a href="/basic">基礎系統</a><a href="/gacha">西區賭場</a><a href="/work">城內工作</a><a className="active" href="/adventure">外出探險</a><a href="/tavern">小灼酒館</a><a href="/market">中央市集</a></nav>
      </header>

      <section className="subpage-heading adventure-heading">
        <a className="back-link" href="/">◀　返回系統首頁</a>
        <p className="kicker">CHAPTER IV　／　BEYOND THE CITY WALLS</p>
        <h1>外出探險</h1>
        <p>選擇地圖後即可出發；後續地區將依冒險者等級陸續開放。</p>
        <div className="adventure-cost"><span>每次探險</span><strong>體力 −40</strong><small>SELECT MAP TO DEPART</small></div>
      </section>

      <section className="adventure-content">
        <section className="encounter-actions" aria-labelledby="encounter-actions-title">
          <div className="adventure-section-title"><span>01　ENCOUNTER</span><h2 id="encounter-actions-title">遭遇怪物</h2><p>碰見怪物時，可以選擇揍牠、觀察或逃跑。</p></div>
          <div className="action-grid">
            <article data-reveal><span>FIGHT</span><h3>揍牠</h3><p>戰鬥成功可獲得經驗值，部分怪物還有極低機率掉落道具。戰鬥失敗則會進入受傷冷卻，冷卻期間無法再次出城。</p></article>
            <article data-reveal style={{ transitionDelay: "90ms" }}><span>OBSERVE</span><h3>觀察</h3><p>得知怪物等級與預計獲得的經驗值，但有 <strong>20%</strong> 機率被發現並強制戰鬥；該次戰鬥勝率無條件 <strong>−10%</strong>。</p></article>
            <article data-reveal style={{ transitionDelay: "180ms" }}><span>ESCAPE</span><h3>逃跑</h3><p>不進行戰鬥，離開目前遭遇。打不過就跑並不可恥，躺十二小時才比較耽誤行程。</p></article>
          </div>
        </section>

        <section className="battle-section" aria-labelledby="battle-rate-title">
          <div className="adventure-section-title"><span>02　BATTLE RATE</span><h2 id="battle-rate-title">戰鬥勝率</h2><p>勝率與經驗值倍率依怪物和冒險者的等級差計算。</p></div>
          <div className="battle-layout">
            <div className="battle-rate-list">{battleRates.map((item, index) => <div className={`battle-rate-row ${item.danger}`} data-reveal style={{ transitionDelay: `${index * 55}ms` }} key={item.gap}><strong>{item.gap}</strong><span>勝率 <b>{item.rate}</b></span><span>EXP <b>{item.exp}</b></span></div>)}</div>
            <aside className="cooldown-panel" data-reveal>
              <span>INJURY COOLDOWN</span><h3>戰敗冷卻</h3>
              <dl>{cooldowns.map(([gap, time]) => <div key={gap}><dt>{gap}</dt><dd>{time}</dd></div>)}</dl>
              <p>冷卻時間可以使用 <em>治療物</em> 快速削減。</p>
            </aside>
          </div>
        </section>

        <section className="event-section" aria-labelledby="events-title">
          <div className="adventure-section-title"><span>03　RANDOM EVENTS</span><h2 id="events-title">探險事件</h2><p>以下依事件發生機率由高至低排列。</p></div>
          <div className="event-grid">{events.map((event, index) => <article className={`event-card event-${event.rate}`} data-reveal style={{ transitionDelay: `${(index % 3) * 80}ms` }} key={event.title}><div className="event-rate"><strong>{event.rate}</strong><span>%</span></div><div><span>{event.code}</span><h3>{event.title}</h3><p>{formatItemText(event.text)}</p></div></article>)}</div>
        </section>

        <section className="monster-index-entry" aria-labelledby="monster-index-title" data-reveal>
          <div className="adventure-section-title">
            <span>04　FIELD MONSTER ARCHIVE</span>
            <h2 id="monster-index-title">城外怪物圖鑑</h2>
            <p>城外各區域的怪物資料、等級與經驗值均收錄於獨立圖鑑。</p>
          </div>
          <div className="monster-entry-card">
            <div>
              <span>NOW ARCHIVED　01</span>
              <h3>北城門近郊</h3>
              <p>首批五種怪物資料已完成編纂。</p>
            </div>
            <a href="/bestiary">開啟怪物圖鑑　▶</a>
          </div>
        </section>
      </section>

      <footer><span>修羅國系統導覽　／　外出探險</span><a href="/">返回系統首頁</a></footer>
    </main>
  );
}
