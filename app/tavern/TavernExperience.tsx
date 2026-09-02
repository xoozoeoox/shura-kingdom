"use client";

import { useEffect, useRef, useState } from "react";

const sharedMilestones = [
  { color: "#9A52CC", value: "1000", text: "更改稱呼" },
  { color: "#36BE69", value: "2000", text: "來訪時機率性贈禮" },
  { color: "#FFD630", value: "3000", text: "禮物特殊化（效果強化）" },
];

const profiles = {
  miru: {
    number: "01", name: "米露", romanized: "Miru", age: "13歲｜酒館打工妹妹・藥草鋪小幫手",
    cardImage: "/miru-normal.png", modalImage: "/miru-normal-4x.png",
    intro: [
      "身上總會同時帶有酒館和藥草鋪的痕跡。米露是一個外表充滿童真、活力與自然氣息的蘿莉打工妹妹。她的服飾實用又可愛，充滿了生活氣息。",
      "她的每一個小表情、小動作都透著軟萌與活潑，與她那軟綿綿的嗓音相得益彰。她是酒館裡一道亮麗的風景，也是藥草鋪裡充滿活力的小幫手，無論在哪裡，都能帶給人溫暖和快樂。",
    ],
    core: [
      "她的雙眼總是充滿好奇與活力，臉上掛著甜美、無拘無束的笑容。走起路來輕盈，有時會像小動物一樣蹦蹦跳跳，給人一種生機勃勃的感覺。",
      "她的聲音軟綿綿的，語氣天真，有時會帶點撒嬌的意味。",
    ],
    finalEvent: "戀愛事件『米露摸摸』開啟",
  },
  lilian: {
    number: "02", name: "莉莉安", romanized: "Lilian", age: "16歲｜小灼酒館的老闆娘之女",
    cardImage: "/lilian-normal.png", modalImage: "/lilian-normal-4x.png",
    intro: [
      "莉莉安的服飾簡約而雅緻，充滿了少女的恬靜。她的每一個害羞的小表情、小動作都讓人想去保護她，與她那文靜的氣質相得益彰。",
      "她是年輕冒險者心中完美的初戀女神，是這個嘈雜酒館裡唯一的港灣。",
    ],
    core: [
      "莉莉安是相當內向且害羞的女孩子。當被過多注視或突然跟她說話時，她會立刻臉紅，眼神閃躲，雙手不自覺地抓緊衣角或圍裙。",
      "與米露的靈動不同，莉莉安的一舉一動都更為文靜；她總是一副若有所思的模樣，像是一朵靜靜盛開在角落的小花，安靜卻無法忽視。",
      "她的身上總混雜著淡淡的皂香（表示乾淨）和香草粉的氣味（表示她偶爾會幫媽媽做糕點），這種溫柔的香氣讓人感到心曠神怡。",
    ],
    finalEvent: "戀愛事件『打聽消息』開啟",
  },
  nova: {
    number: "03", name: "諾雅", romanized: "Nova", age: "25歲｜對古蹟、冒險故事很有興趣的成熟大姊姊",
    cardImage: "/nova-normal.png", modalImage: "/nova-normal-4x.png",
    intro: [
      "她的身體孱弱，膚色蒼白，常帶著疲憊感，甚至偶爾咳嗽。但她的眼神卻異常明亮、堅定，當談論起古蹟或冒險故事時，眼底會燃起熱情的火焰，展現出靈魂的韌性。",
    ],
    core: [
      "諾雅作為一位學者型的人物，舉手投足間透著成熟女性的優雅與從容。她說話聲音不大，語速平緩，卻極具條理和說服力，給人一種安心感。",
      "儘管身體孱弱，但她對古蹟和冒險的熱情，使她成為這個世界中不可或缺的存在。她是許多年輕冒險者嚮往和尊敬的導師，也是這個酒館裡知識的寶庫。",
      "身上總混雜著淡淡的陳舊紙張氣味、墨水味和溫暖的藥草茶香。身邊總離不開一本厚重的、封面磨損的筆記本和一堆凌亂的草圖和地圖。她總是隨身攜帶一個保溫杯（裡面裝著藥草茶）和一盒潤喉糖。",
    ],
    finalEvent: "戀愛事件『冒險故事』開啟",
  },
  elin: {
    number: "04", name: "艾琳", romanized: "Elin", age: "24歲｜對所有冒險者都溫柔婉約的女性",
    cardImage: "/elin-normal.png", modalImage: "/elin-normal-4x.png",
    intro: [
      "丈夫也是長年在外奔波的冒險者。身為人妻的艾琳不僅擁有成熟女性的韻味，更因此有一種能包容一切、撫慰人心的母性光輝。",
      "她對所有冒險者都溫柔婉約，因為在她眼裡，這些年輕人就像是她丈夫的縮影，需要被關懷與照顧。",
    ],
    core: [
      "艾琳的溫柔不是表面的禮貌，而是源自心底的善良與同理心。她講話聲音輕柔、富有磁性，像是在安撫受傷的小動物。她的眼神總是充滿包容，彷彿能看穿冒險者背後的疲憊與艱辛。",
      "艾琳講話講得特別慢，音調偏低，像是在說悄悄話，讓人忍不住想傾聽。",
      "因為年少結婚，歲月尚未在她的臉上留下痕跡；但她那源自心底的母性光輝，使她成為這個世界中不可或缺的存在。她是許多年輕冒險者嚮往和尊敬的女性，也是這個酒館裡最溫暖的港灣。",
    ],
    finalEvent: "戀愛事件『家庭溫暖』開啟",
  },
  hilda: {
    number: "05", name: "希爾妲", romanized: "Hilda", age: "25歲｜冰雪一般的神祕女性・鄰國傭兵團前副團長",
    cardImage: "/hilda-normal.png", modalImage: "/hilda-normal-4x.png",
    intro: [
      "在酒館那充滿木頭香與喧囂聲的環境中，希爾妲的出現就像是直接將北地的寒風帶進了室內。",
      "作為傳聞中鄰國傭兵團的前副團長，她那種從死人堆裡爬出來的肅殺之氣，與酒館的和諧氛圍形成強烈反差，讓她成為所有冒險者既敬畏又好奇的神祕存在。",
    ],
    core: [
      "她坐在酒館角落時，周圍三尺彷彿自成真空地帶，沒人敢輕易上前搭話。她的表情極少變化，眼神冷冽如冰，透著一種看透生死的冷漠。",
      "她的身上沒有花香或酒香，只有淡淡的金屬冷香、皮革氣味，以及一種極其隱約的、像是積雪消融後的清冷氣息。",
      "她是這座溫馨小酒館裡的「安全感」來源，也是最迷人的「冰之利刃」。儘管她高冷得讓人難以接近，但酒館裡的人都知道，只要有希爾妲坐在那個角落，再兇悍的流氓也不敢在此鬧事。",
    ],
    finalEvent: "戀愛事件『絕對武力』開啟",
  },
};

type ProfileKey = keyof typeof profiles;

function PixelHeart({ color }: { color: string }) {
  return (
    <span className="pixel-heart" style={{ color }} aria-hidden="true">
      <svg viewBox="0 0 10 9" focusable="false">
        <path d="M1 0h3v1h2V0h3v1h1v4H9v1H8v1H7v1H6v1H4V8H3V7H2V6H1V5H0V1h1z" fill="currentColor" />
      </svg>
    </span>
  );
}

function AffectionText({ text }: { text: string }) {
  const match = text.match(/^(.*?)(『.+?』)(.*)$/);
  if (!match) return <>{text}</>;
  return <>{match[1]}<span className="romance-event-title">{match[2]}</span>{match[3]}</>;
}

export default function TavernExperience({ mode }: { mode: "scenes" | "hostesses" }) {
  const [activeProfile, setActiveProfile] = useState<ProfileKey | null>(null);
  const [unlockScreen, setUnlockScreen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const profile = activeProfile ? profiles[activeProfile] : null;

  useEffect(() => {
    if (!activeProfile) return;
    closeButton.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setActiveProfile(null);
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("modal-open");
    };
  }, [activeProfile]);

  useEffect(() => {
    if (activeProfile !== "hilda" || !unlockScreen) return;
    const timer = window.setTimeout(() => setUnlockScreen(false), 2400);
    return () => window.clearTimeout(timer);
  }, [activeProfile, unlockScreen]);

  const openProfile = (key: ProfileKey) => {
    setUnlockScreen(key === "hilda");
    setActiveProfile(key);
  };

  if (mode === "scenes") return (
      <div className="tavern-scenes" aria-label="酒館時段背景預留區" onContextMenu={(event) => event.preventDefault()}>
        {[
          ["DAY", "白天酒館", "/tavern-day.png"],
          ["DUSK", "傍晚酒館", "/tavern-evening.png"],
          ["NIGHT", "夜晚酒館", "/tavern-night.png"],
        ].map(([period, title, src]) => (
          <div className={`tavern-scene scene-${period.toLowerCase()}`} key={period}>
            <img src={src} alt={`${title}背景`} draggable="false" />
            <span>{period}</span><strong>{title}</strong>
          </div>
        ))}
      </div>
  );

  return (
    <>
      <div className="hostess-grid" aria-label="酒館小姐姐角色列表">
        <button className="hostess-card hostess-miru" type="button" onClick={() => openProfile("miru")} aria-label="查看米露的角色介紹" data-reveal>
          <img src="/miru-normal.png" alt="米露" draggable="false" onContextMenu={(event) => event.preventDefault()} />
          <span><b>米露</b><small>MIRU</small></span>
        </button>
        <button className="hostess-card hostess-miru" type="button" onClick={() => openProfile("lilian")} aria-label="查看莉莉安的角色介紹" data-reveal style={{ transitionDelay: "75ms" }}>
          <img src="/lilian-normal.png" alt="莉莉安" draggable="false" onContextMenu={(event) => event.preventDefault()} />
          <span><b>莉莉安</b><small>LILIAN</small></span>
        </button>
        <button className="hostess-card hostess-miru" type="button" onClick={() => openProfile("nova")} aria-label="查看諾雅的角色介紹" data-reveal style={{ transitionDelay: "150ms" }}>
          <img src="/nova-normal.png" alt="諾雅" draggable="false" onContextMenu={(event) => event.preventDefault()} />
          <span><b>諾雅</b><small>NOVA</small></span>
        </button>
        <button className="hostess-card hostess-miru" type="button" onClick={() => openProfile("elin")} aria-label="查看艾琳的角色介紹" data-reveal style={{ transitionDelay: "225ms" }}>
          <img src="/elin-normal.png" alt="艾琳" draggable="false" onContextMenu={(event) => event.preventDefault()} />
          <span><b>艾琳</b><small>ELIN</small></span>
        </button>
        <button className="hostess-card hostess-miru hostess-hilda" type="button" onClick={() => openProfile("hilda")} aria-label="解鎖並查看希爾妲的角色介紹" data-reveal style={{ transitionDelay: "300ms" }}>
          <img src="/hilda-normal.png" alt="希爾妲" draggable="false" onContextMenu={(event) => event.preventDefault()} />
          <span><b>希爾妲</b><small>HILDA · LIMITED</small></span>
        </button>
      </div>

      {profile && activeProfile && (
        <div className="miru-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setActiveProfile(null)}>
          <section className="miru-modal" role="dialog" aria-modal="true" aria-labelledby="hostess-profile-title">
            {activeProfile === "hilda" && unlockScreen && (
              <div className="hilda-unlock-screen" aria-label="限定身分組角色解鎖中">
                <span className="pixel-lock" aria-hidden="true"><i /><b /></span>
                <strong>限定身分組角色</strong>
                <small>LIMITED ROLE HOSTESS</small>
              </div>
            )}
            <button className="modal-close" type="button" ref={closeButton} onClick={() => setActiveProfile(null)} aria-label={`關閉${profile.name}介紹`}>×</button>
            <div className={`miru-portrait-panel profile-${activeProfile}`}>
              <span>HOSTESS {profile.number}</span>
              <img src={profile.modalImage} alt={`${profile.name}角色立繪`} draggable="false" onContextMenu={(event) => event.preventDefault()} />
            </div>
            <div className="miru-profile">
              <p className="kicker">TAVERN HOSTESS PROFILE</p>
              <h2 id="hostess-profile-title">{profile.name} <em>{profile.romanized}</em></h2>
              <p className="miru-age">{profile.age}</p>
              <div className="profile-copy">
                {profile.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <h3>核心氣質</h3>
                {profile.core.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="affection-list" aria-label={`${profile.name}好感度事件`}>
                {[...sharedMilestones, { color: "#F28B27", value: "4500", text: profile.finalEvent }].map((milestone, index) => (
                  <div className="affection-event" style={{ animationDelay: `${(activeProfile === "hilda" ? 2.75 : 1) + index * 0.2}s` }} key={milestone.value}><PixelHeart color={milestone.color} /><strong>{milestone.value} 好感度事件</strong><p><AffectionText text={milestone.text} /></p></div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
