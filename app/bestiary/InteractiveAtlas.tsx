'use client';
import { useEffect, useRef, useState } from 'react';
import { monstersByRegion } from './monsters';
import type { Monster } from './monsters';
import MonsterImageDialog from './MonsterImageDialog';
import { PAJAMAS_DESCRIPTION } from '../adventure/items';
import './atlas.css';
type Region = { id:string; name:string; side:'left'|'right'; y:number; description?:string };
const regions:Region[] = [
{id:'north',name:'北城門近郊',side:'left',y:18.5,description:'冒險者的起點，雖然安全但充滿了讓人尷尬的小麻煩。'},
{id:'forest',name:'低語者之森',side:'right',y:29,description:'森林裡充滿了噪音與偽裝，不小心就會被吵到耳鳴。'},
{id:'mine',name:'廢棄礦坑',side:'left',y:44,description:'陰暗潮濕，除了昆蟲還有躲避追緝的危險人類（宏翰）。'},
{id:'valley',name:'寂靜翠谷',side:'right',y:57,description:'這裡的寂靜是因為人魚的歌聲非常致命而導致生命意義上的寂靜。'},
{id:'quartz',name:'地下石英迴廊',side:'left',y:69,description:'滿地都是個性迥異的石像鬼，與速食主義半獸人。除此之外似乎還有迷路的怪物？'},
{id:'temple',name:'無名古廟',side:'right',y:94,description:'最終的試煉之地，埋葬著所有挑戰失敗的靈魂。'}];
// Frame the visible artwork, excluding the original transparent canvas margins.
const spriteFrames:Record<string,{viewBox:string;width:number;height:number}>={
'triple-slime':{viewBox:'0 302 334 342',width:334,height:754},
'runny-mushroom':{viewBox:'46 258 334 374',width:384,height:762},
'hungover-guard':{viewBox:'61 21 325 601',width:424,height:748},
'shoe-thief-kitty':{viewBox:'7 282 279 332',width:308,height:744},
'poor-goblin':{viewBox:'0 188 383 460',width:413,height:770},
};
export default function InteractiveAtlas(){
const root=useRef<HTMLDivElement>(null), wanted=useRef<Region|null>(null), shown=useRef<Region|null>(null), running=useRef(false), alive=useRef(true);
const [selected,setSelected]=useState<string>(),[panel,setPanel]=useState<Region|null>(null),[phase,setPhase]=useState('closed'),[dock,setDock]=useState('center');
const [viewedMonster,setViewedMonster]=useState<Monster|null>(null);
// Keep lower-region dossiers inside the page without shrinking cards or text.
useEffect(()=>{
const atlas=root.current, map=atlas?.querySelector<HTMLElement>('.interactive-map'), dossier=atlas?.querySelector<HTMLElement>('.interactive-dossier');
if(!atlas||!map)return;
const measure=()=>{
const mapHeight=map.offsetHeight, top=panel?Math.max(0,panel.y-18.5)/100*mapHeight:0;
atlas.style.setProperty('--dossier-top',`${top}px`);
atlas.style.setProperty('--atlas-bottom-space',`${Math.max(100,top+(dossier?.offsetHeight??0)-mapHeight+100)}px`);
};
const observer=new ResizeObserver(measure);observer.observe(map);if(dossier)observer.observe(dossier);measure();
return()=>observer.disconnect();
},[panel]);
useEffect(()=>{
const page=root.current?.closest('main');
const prevent=(event:Event)=>event.preventDefault();
page?.addEventListener('contextmenu',prevent);
page?.addEventListener('dragstart',prevent);
return()=>{page?.removeEventListener('contextmenu',prevent);page?.removeEventListener('dragstart',prevent);};
},[]);
useEffect(()=>{alive.current=true; const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('label-revealed');observer.unobserve(entry.target);}}),{threshold:.25,rootMargin:'0px 0px -6% 0px'});root.current?.querySelectorAll('.atlas-region-label').forEach(el=>observer.observe(el));return()=>{alive.current=false;observer.disconnect();};},[]);
async function selectRegion(region:Region|null){
wanted.current=wanted.current?.id===region?.id?null:region;setSelected(wanted.current?.id);if(running.current)return;running.current=true;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches, wait=(ms:number)=>new Promise(resolve=>setTimeout(resolve,reduced?0:ms));
try{while(alive.current){if(shown.current){setPhase('closing');await wait(280);if(!alive.current)break;shown.current=null;setPanel(null);}
const next=wanted.current;setPhase('moving');setDock(next?(next.side==='left'?'right':'left'):'center');await wait(500);if(!alive.current)break;if(wanted.current?.id!==next?.id)continue;if(!next){setPhase('closed');break;}
shown.current=next;setPanel(next);setPhase('opening');await wait(280);if(!alive.current)break;if(wanted.current?.id!==next.id)continue;setPhase('open');break;}}finally{running.current=false;}}
return <div ref={root} className="interactive-atlas" data-dock={dock}>
<div className="interactive-map"><img className="interactive-map-art pixel-art" src="/adventure/world-map-clean.png" width="682" height="2048" alt="修羅國城外探索地圖"/><img className="atlas-city-sign" src="/adventure/sign-city.png" alt="修羅國城"/>
{regions.map(region=><div key={region.id} className={`atlas-region-label label-${region.side}`} style={{top:`${region.y}%`}}><button type="button" aria-label={region.name} aria-expanded={selected===region.id} aria-controls="region-monster-panel" onClick={()=>selectRegion(region)}><img src={`/adventure/sign-${region.id}.png`} alt={region.name}/></button>{region.description&&<span className="region-description" role="tooltip">{region.description}</span>}</div>)}</div>
{panel&&<section id="region-monster-panel" className={`interactive-dossier dossier-${panel.side}`} data-phase={phase} style={{top:'var(--dossier-top, 0px)'}} aria-label={`${panel.name}怪物圖鑑`} aria-live="polite"><header><div><small>REGION MONSTER ARCHIVE</small><h2>{panel.name}</h2></div><button type="button" onClick={()=>selectRegion(null)} aria-label="收起怪物圖鑑">×</button></header>
{monstersByRegion[panel.id]?.length ? monstersByRegion[panel.id].map(monster => (
  <article className="interactive-monster-card" key={monster.name}>
    <button type="button" className="monster-image-trigger" aria-label={`查看${monster.name}原圖`} aria-haspopup="dialog" onClick={()=>setViewedMonster(monster)}>
    {spriteFrames[monster.sprite] ? (
      <svg className={`monster-sprite sprite-${monster.sprite}`} viewBox={spriteFrames[monster.sprite].viewBox} role="img" aria-label={monster.name}>
        <image href={`/adventure/monster-${monster.sprite}.png`} width={spriteFrames[monster.sprite].width} height={spriteFrames[monster.sprite].height}/>
      </svg>
    ) : <img className={`monster-sprite pixel-art sprite-${monster.sprite}`} src={`/adventure/monster-${monster.sprite}.png`} alt={monster.name} draggable={false}/>}
    </button>
    <div><small>{monster.code}</small><h3>{monster.name}</h3>
      <div className="interactive-monster-stats"><strong className={monster.level === 11 ? 'level-boss' : undefined}>Lv.{monster.level}</strong><span>經驗值 <b>{monster.exp}</b></span></div>
      {monster.drop && <p className="monster-drop">掉落物　{monster.drop === '山賊宏翰的睡衣' ? <strong className="item-name has-item-tooltip" data-tooltip={PAJAMAS_DESCRIPTION} tabIndex={0} aria-label={`${monster.drop}：${PAJAMAS_DESCRIPTION}`}>［{monster.drop}］</strong> : <strong className="item-name">［{monster.drop}］</strong>}</p>}
    </div>
  </article>
)) : <p className="atlas-pending">此地區的怪物資料尚待編纂。</p>}</section>}
{viewedMonster&&<MonsterImageDialog key={viewedMonster.sprite} monster={viewedMonster} onClose={()=>setViewedMonster(null)}/>}
</div>;
}
