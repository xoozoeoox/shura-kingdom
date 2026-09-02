import ScrollReveal from "../ScrollReveal";

type Job = {
  name: string;
  energy: number;
  hours: number;
  coin: string;
  role: string;
  exp: number;
};

const commonJobs: Job[] = [
  { name: "雜役支援", energy: 10, hours: 1, coin: "10～20", role: "—", exp: 3 },
  { name: "打掃街道", energy: 25, hours: 5, coin: "30～60", role: "—", exp: 10 },
  { name: "城門修繕", energy: 30, hours: 6, coin: "40～75", role: "—", exp: 10 },
  { name: "信件寄送", energy: 35, hours: 7, coin: "60～100", role: "—", exp: 10 },
];

const rankJobs: Job[] = [
  { name: "城內站崗", energy: 60, hours: 8, coin: "90～160", role: "大大、巨巨、碩碩", exp: 25 },
  { name: "街道巡邏", energy: 50, hours: 8, coin: "100～140", role: "大大、巨巨、碩碩", exp: 25 },
  { name: "王國行政", energy: 120, hours: 8, coin: "200～260", role: "巨巨、碩碩", exp: 25 },
  { name: "皇室委託", energy: 150, hours: 8, coin: "420～520", role: "碩碩", exp: 80 },
  { name: "貴族巡察", energy: 150, hours: 8, coin: "380～560", role: "碩碩", exp: 80 },
];

const limitedJobs: Job[] = [
  { name: "古蹟探訪", energy: 150, hours: 8, coin: "400～600", role: "考古師", exp: 50 },
  { name: "遺跡調查", energy: 150, hours: 8, coin: "400～600", role: "探索者", exp: 50 },
  { name: "藥劑研發", energy: 150, hours: 8, coin: "400～600", role: "煉金師", exp: 50 },
];

function JobTable({ jobs }: { jobs: Job[] }) {
  return (
    <div className="job-table-wrap">
      <table className="job-table">
        <thead><tr><th>工作名</th><th>消耗體力</th><th>時間 <small>HR</small></th><th>修羅幣</th><th>所需身分組</th><th>EXP</th></tr></thead>
        <tbody>{jobs.map((job, index) => (
          <tr key={job.name} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
            <th scope="row">{job.name}</th><td>{job.energy}</td><td>{job.hours}</td><td className="coin-pay">{job.coin}</td><td><span className={job.role === "—" ? "role-none" : "job-role"}>{job.role}</span></td><td className="exp-pay">+{job.exp}</td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}

export const metadata = {
  title: "城內工作｜修羅國系統導覽",
  description: "修羅國城內工作的體力、時間、薪資、身分與經驗值一覽。",
};

export default function WorkPage() {
  return (
    <main className="work-page">
      <ScrollReveal />
      <header className="site-header">
        <a className="brand" href="/" aria-label="回到修羅國系統導覽首頁"><span className="brand-seal">修</span><span><b>修羅國系統總覽</b><small>SYSTEM ARCHIVE</small></span></a>
        <nav aria-label="頁面導覽"><a href="/">系統首頁</a><a href="/basic">基礎系統</a><a href="/gacha">西區賭場</a><a className="active" href="/work">城內工作</a><a href="/adventure">外出探險</a><a href="/tavern">小灼酒館</a><a href="/market">中央市集</a></nav>
      </header>

      <section className="subpage-heading work-heading">
        <a className="back-link" href="/">◀　返回系統首頁</a>
        <p className="kicker">CHAPTER III　／　ROYAL LABOR BUREAU</p>
        <h1>城內工作</h1>
        <blockquote>王國並沒有多餘的人力，所以每天都有大量的、無限的、恐怖的、持續積累的工作……<strong>交給你們來做。</strong></blockquote>
        <p>沒事！打工還是會給錢的！畢竟是國家指派的嘛！如果你有些「身分」，還可以接到更好的工作內容哦……！</p>
      </section>

      <section className="work-content">
        <section className="job-section" aria-labelledby="common-jobs">
          <div className="job-section-title"><span>01　PUBLIC DUTY</span><h2 id="common-jobs">一般工作</h2><p>不問來歷、不看身分。只要還有體力，王國就認為你能繼續工作。</p></div>
          <JobTable jobs={commonJobs} />
        </section>

        <section className="job-section" aria-labelledby="rank-jobs">
          <div className="job-section-title"><span>02　RANKED DUTY</span><h2 id="rank-jobs">身分限定工作</h2><p>身分越高，責任越重。當然，薪水也終於開始像一回事了。</p></div>
          <JobTable jobs={rankJobs} />
        </section>

        <section className="job-section limited-job-section" aria-labelledby="limited-jobs">
          <div className="job-section-title"><span>03　LIMITED DUTY</span><h2 id="limited-jobs">限時身分工作</h2><p>所需身分組可在西區賭場獲得，並且只於指定期間開放。</p></div>
          <div className="casino-notice" data-reveal><span>WEST CASINO NOTICE</span><strong>考古師・探索者・煉金師</strong><p>三種限時身分均由西區賭場抽取。能不能接到好工作，第一步竟然是先去賭——非常修羅國。</p></div>
          <JobTable jobs={limitedJobs} />
        </section>
      </section>

      <footer><span>修羅國系統導覽　／　城內工作</span><a href="/">返回系統首頁</a></footer>
    </main>
  );
}
