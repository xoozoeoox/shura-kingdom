import InteractiveAtlas from './InteractiveAtlas';
export const metadata = { title: '城外怪物圖鑑｜修羅國系統導覽' };
export default function BestiaryPage() { return <main className="bestiary-page">
<header className="site-header"><a className="brand" href="/"><span className="brand-seal">修</span><span><b>修羅國系統總覽</b><small>SYSTEM ARCHIVE</small></span></a><nav aria-label="頁面導覽"><a href="/">系統首頁</a><a href="/basic">基礎系統</a><a href="/gacha">西區賭場</a><a href="/work">城內工作</a><a className="active" href="/adventure">外出探險</a><a href="/tavern">小灼酒館</a><a href="/market">中央市集</a></nav></header>
<section className="bestiary-heading"><a className="back-link" href="/adventure">◀　返回外出探險</a><p className="kicker">FIELD MONSTER ARCHIVE　／　ROYAL BESTIARY</p><h1>城外怪物圖鑑</h1><p>點選地名查閱怪物；再次點選即可收起。</p></section>
<InteractiveAtlas />
<footer><span>修羅國系統導覽　／　城外怪物圖鑑</span><a href="/adventure">返回外出探險</a></footer></main>; }
