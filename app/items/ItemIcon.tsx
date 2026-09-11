const giftCodes = new Set(["StrawberryNutritionTab", "FreshPuffBread", "NoYaTea", "ElinLunch", "HildaRation"]);

export function isCharacterGift(code: string) { return giftCodes.has(code); }

export default function ItemIcon({ code, category }: { code: string; category: string }) {
  const potion = code.match(/^potion_([SML])([sml])$/);
  if (potion) return <span className={`archive-potion potion-${potion[1].toLowerCase()} potion-grade-${potion[2]}`}><i /></span>;

  const kind = giftCodes.has(code) ? `gift-${code}` : `category-${category}`;
  const specialIcon = drawSpecialIcon(code);
  return <svg className={`archive-pixel-icon ${kind}`} viewBox="0 0 40 40" aria-hidden="true">
    {code === "StrawberryNutritionTab" && <><path fill="#6b351e" d="M5 8h30v27H5z"/><path fill="#ead3a4" d="M8 11h24v21H8z"/><path fill="#b72e46" d="M11 14h18v15H11z"/><path fill="#ff7587" d="M14 16h12v11H14z"/><path fill="#fff0c1" d="M16 18h3v3h-3zm6 4h3v3h-3z"/><path fill="#526c38" d="M14 6h12v7H14z"/></>}
    {code === "FreshPuffBread" && <><path fill="#56301d" d="M4 20h32v15H4z"/><path fill="#bc642a" d="M6 15h28v18H6z"/><path fill="#efa94b" d="M9 10h22v21H9z"/><path fill="#f8d47d" d="M13 7h14v22H13z"/><path fill="#fff0b0" d="M15 11h8v6h-8z"/><path fill="#26354f" d="M29 7h5v11h-5z"/></>}
    {code === "NoYaTea" && <><path fill="#67451f" d="M4 32h32v4H4z"/><path fill="#eadfba" d="M7 13h23v19H7z"/><path fill="#709bbc" d="M10 16h17v13H10z"/><path fill="#c4edf2" d="M12 17h8v8h-8z"/><path fill="#eadfba" d="M30 17h6v11h-9v-4h5v-4h-2z"/><path fill="#8e2c3e" d="M5 9h9v6H5z"/><path fill="#d9eff4" d="M15 4h3v8h-3zm7-3h3v11h-3z"/></>}
    {code === "ElinLunch" && <><path fill="#562727" d="M3 12h34v24H3z"/><path fill="#d7a24a" d="M6 9h28v24H6z"/><path fill="#f3d98c" d="M9 14h22v16H9z"/><path fill="#d84662" d="M16 19h8v3h4v5h-4v3h-8v-3h-4v-5h4z"/><path fill="#fff1c6" d="M18 21h4v5h-4z"/></>}
    {code === "HildaRation" && <><path fill="#141824" d="M3 13h34v23H3z"/><path fill="#536176" d="M6 15h28v18H6z"/><path fill="#bdcee0" d="M9 18h22v12H9z"/><path fill="#583052" d="M11 20h18v8H11z"/><path fill="#9b78c6" d="M14 22h12v4H14z"/><path fill="#edf7ff" d="M18 6h4v12h-4z"/></>}
    {!giftCodes.has(code) && (specialIcon ?? <><path className="pixel-icon-shadow" d="M7 9h26v25H7z"/><path className="pixel-icon-body" d="M10 6h20v25H10z"/><path className="pixel-icon-mark" d="M17 11h6v6h6v6h-6v6h-6v-6h-6v-6h6z"/></>)}
  </svg>;
}

function drawSpecialIcon(code: string) {
  switch (code) {
    case "heal_cloth_s": return <><path fill="#eee3c9" d="M5 14h30v14H5z"/><path fill="#b52f45" d="M17 10h6v22h-6zM9 18h22v6H9z"/><path fill="#876c54" d="M5 27h30v4H5z"/></>;
    case "heal_bandage_m": return <><path fill="#756a58" d="M4 10h24v26H4z"/><path fill="#f3ead5" d="M7 7h23v26H7z"/><path fill="#a78665" d="M13 13h11v14H13z"/><path fill="#665b4e" d="M16 16h6v8h-6z"/><path fill="#d5c9b2" d="M25 14h12v22H25z"/><path fill="#f7efdc" d="M28 17h8v16h-8z"/><path fill="#a72e42" d="M27 23h10v5H27z"/></>;
    case "heal_elixir_l": return <><path fill="#413650" d="M7 10h28v28H7z"/><path fill="#b9c4bc" d="M10 7h24v28H10z"/><path fill="#e8e2cf" d="M13 11h18v21H13z"/><path fill="#66517d" d="M16 19h12v11H16z"/><path fill="#aa78bd" d="M19 22h7v6h-7z"/><path fill="#726451" d="M14 3h16v8H14z"/><path fill="#d8ad4b" d="M17 1h10v6H17z"/></>;
    case "heal_charm_x": return <><path fill="#f0d28a" d="M9 5h22v31H9z"/><path fill="#a52e3d" d="M13 9h14v4H13zm4 5h6v14h-6zm-5 8h16v5H12z"/><path fill="#eadfc2" d="M12 7h16v3H12z"/></>;
    case "BanditToken": return <><path fill="#6c4923" d="M2 8h36v27H2z"/><path fill="#f5e6b5" d="M5 6h33v26H5z"/><path fill="#8e293e" d="M5 6h33v6H5z"/><path fill="#253250" d="M8 17h15v3H8zm0 6h13v3H8z"/><path fill="#d5aa4d" d="M28 14h8v16H26V16h2z"/><path fill="#e2b28c" d="M29 18h6v6h-6z"/><path fill="#16131c" d="M28 15h8v5h-8z"/><path fill="#5b2e78" d="M28 24h8v6h-8z"/></>;
    case "BanditPajamas": return <><path fill="#7b7468" d="M13 5h15v4h7v4h4v23h-7V20h-4v18H13V20H9v16H2V13h4V9h7z"/><path fill="#f5f2e8" d="M14 7h13v4h6v4h3v18h-4V18h-6v17H15V18H9v15H5V15h3v-4h6z"/><path fill="#aaa092" d="M16 7h9v4h-2v2h-5v-2h-2zM5 23h5v3H5zm27-5h4v3h-4z"/><path fill="#72685c" d="M4 32h6v4H4zm28-2h5v5h-5z"/></>;
    case "AntiTeleCompass": return <><path fill="#553716" d="M13 2h14v4h6v5h5v18h-5v6h-6v4H13v-4H7v-6H2V11h5V6h6z"/><path fill="#d7a747" d="M13 5h14v4h6v6h3v11h-3v6h-6v4H13v-4H7v-6H5V15h2V9h6z"/><path fill="#f1e3ad" d="M12 11h16v4h5v14h-5v4H12v-4H8V15h4z"/><path fill="#245077" d="M19 11h4v10h7v4h-9v7h-4v-9h-7v-4h9z"/><path fill="#a72f42" d="M19 16h4v8h-4z"/></>;
    case "SnakeFlower": return <><path fill="#4e733b" d="M18 19h5v17h-5zM9 25h11v5H9zm13-2h10v5H22z"/><path fill="#e9a6c4" d="M8 9h9V5h7v4h9v9h-9v5h-7v-5H8z"/><path fill="#f7e16e" d="M17 11h7v7h-7z"/></>;
    case "MermaidScale": return <><path fill="#4b6f93" d="M7 14h26v20H7z"/><path fill="#75d1d5" d="M10 9h20v22H10z"/><path fill="#d4fbef" d="M14 12h9v7h-9z"/><path fill="#4385ad" d="M18 19h10v9H18z"/></>;
    case "ZombieCross": return <><path fill="#5d594f" d="M17 4h7v11h9v8h-9v14h-7V23H8v-8h9z"/><path fill="#b7aa8b" d="M19 7h3v11h8v3h-8v13h-3V21h-8v-3h8z"/></>;
    case "LichGlasses": return <><path fill="#756b57" d="M5 13h13v13H5zm17 0h13v13H22z"/><path fill="#b9d5df" d="M8 16h7v7H8zm17 0h7v7h-7z"/><path fill="#382d2b" d="M17 17h6v4h-6zM2 10h8v4H2zm28 0h8v4h-8z"/></>;
    case "HeroTear": return <><path fill="#87b8da" d="M18 4h5v6h5v7h5v12h-5v6H12v-6H7V17h5v-7h6z"/><path fill="#dff5fa" d="M17 11h5v6h4v7h-5v5h-6v-8h-4v-4h6z"/></>;
    case "PuffWrap": return <><path fill="#7f4a22" d="M5 9h30v27H5z"/><path fill="#e5b65d" d="M8 6h24v27H8z"/><path fill="#f7db93" d="M12 10h16v19H12z"/><path fill="#b87931" d="M17 7h6v25h-6z"/></>;
    case "BerryJam": return <><path fill="#70401f" d="M8 11h24v26H8z"/><path fill="#b92f4b" d="M11 15h18v19H11z"/><path fill="#f06b79" d="M14 18h8v9h-8z"/><path fill="#d6b34e" d="M7 6h26v8H7z"/><path fill="#598140" d="M23 4h8v7h-8z"/></>;
    case "StrawberryPie": return <><path fill="#7a421d" d="M4 24h32v11H4z"/><path fill="#d99237" d="M7 15h26v17H7z"/><path fill="#bf304b" d="M10 19h20v10H10z"/><path fill="#f3c66f" d="M9 13h22v6H9zm5 6h4v10h-4zm9 0h4v10h-4z"/></>;
    case "SoftVelvet": return <><path fill="#493758" d="M5 8h28v27H5z"/><path fill="#b698bd" d="M8 6h25v26H8z"/><path fill="#e2d1db" d="M12 10h17v18H12z"/><path fill="#6d4d76" d="M29 6h6v29h-6z"/></>;
    case "BearButton": return <><path fill="#412c28" d="M3 9h17v17H3zm16 7h18v18H19z"/><path fill="#b67b47" d="M6 12h11v11H6zm16 7h12v12H22z"/><path fill="#241b1c" d="M9 15h3v3H9zm5 0h3v3h-3zm11 7h3v3h-3zm5 0h3v3h-3z"/></>;
    case "TeddyBear": return <><path fill="#6d3f28" d="M5 7h10v9H5zm20 0h10v9H25zM9 13h22v23H9z"/><path fill="#bc7847" d="M12 15h16v18H12z"/><path fill="#f0c487" d="M14 23h12v9H14z"/><path fill="#24181a" d="M13 18h4v4h-4zm10 0h4v4h-4zm-5 7h4v3h-4z"/></>;
    case "ShidoLeaf": return <><path fill="#3f622f" d="M18 18h5v19h-5z"/><path fill="#6ca244" d="M5 6h17v19H5zm17 5h14v18H22z"/><path fill="#b6d56e" d="M9 9h8v10H9zm17 5h7v9h-7z"/></>;
    case "ShidoRoot": return <><path fill="#56823b" d="M7 5h26v13H7z"/><path fill="#ad814a" d="M11 15h6v19h-6zm11 0h6v22h-6zM5 29h8v5H5zm23 0h8v6h-8z"/><path fill="#dbc27a" d="M15 18h9v5h-9z"/></>;
    case "ShidoHerb": return <><path fill="#76512a" d="M5 29h30v8H5z"/><path fill="#476f32" d="M18 12h5v19h-5z"/><path fill="#75a94a" d="M5 7h15v16H5zm17-3h14v19H22z"/><path fill="#c9df78" d="M9 10h7v8H9zm17-3h6v9h-6z"/></>;
    case "WhitePepper": return <><path fill="#477038" d="M18 19h5v18h-5zM6 28h14v5H6zm16-5h13v6H22z"/><path fill="#eee8d4" d="M8 6h24v17H8z"/><path fill="#fff" d="M13 4h14v15H13z"/><path fill="#d9ba51" d="M17 11h7v7h-7z"/></>;
    case "HotChili": return <><path fill="#44662f" d="M11 5h17v8H11z"/><path fill="#b92f35" d="M6 10h28v14H6zM11 21h20v9H11zm6 8h10v7H17z"/><path fill="#ef6650" d="M10 14h16v6H10z"/></>;
    case "RawChili": return <><path fill="#805029" d="M5 30h30v7H5z"/><path fill="#3f6c31" d="M18 14h5v18h-5zM6 18h14v9H6zm16-5h13v10H22z"/><path fill="#f4eee0" d="M6 6h14v13H6z"/><path fill="#dfc04d" d="M11 10h6v6h-6z"/><path fill="#d8443d" d="M25 20h9v11h-9z"/></>;
    case "AdvNews": return <><path fill="#88714b" d="M5 8h31v29H5z"/><path fill="#eee4c9" d="M8 5h26v29H8z"/><path fill="#8f2c3b" d="M11 9h20v7H11z"/><path fill="#45577a" d="M11 19h9v11h-9zm12 0h8v3h-8zm0 6h8v3h-8z"/></>;
    case "SpecialPage": return <><path fill="#6a4b2d" d="M8 6h27v31H8z"/><path fill="#f2e5c3" d="M5 4h27v30H5z"/><path fill="#c94663" d="M9 8h19v14H9z"/><path fill="#f1bd57" d="M12 11h13v8H12z"/><path fill="#50628a" d="M9 25h19v4H9z"/></>;
    case "AdvMag": return <><path fill="#422743" d="M6 5h29v32H6z"/><path fill="#8d304d" d="M9 7h23v25H9z"/><path fill="#e6be62" d="M13 10h17v7H13z"/><path fill="#d7e3f2" d="M13 20h14v11H13z"/></>;
    case "SwordBase": return <><path fill="#263248" d="M4 30h32v6H4z"/><path fill="#a9bdc9" d="M17 3h8v27h-8z"/><path fill="#e9f0e8" d="M20 5h3v22h-3z"/><path fill="#76502b" d="M10 27h22v6H10z"/></>;
    case "SwordHilt": return <><path fill="#6e4324" d="M17 12h7v25h-7z"/><path fill="#d0a74d" d="M6 9h29v8H6z"/><path fill="#f1d178" d="M9 12h23v3H9z"/><path fill="#9b6932" d="M13 32h15v6H13z"/></>;
    case "Longsword": return <><path fill="#becfd7" d="M17 2h8v27h-8z"/><path fill="#eef6ef" d="M20 4h3v22h-3z"/><path fill="#d0a74d" d="M8 26h25v7H8z"/><path fill="#6b4023" d="M17 32h8v7h-8z"/></>;
    case "AgedGrapeJuice": return <><path fill="#d7e4df" d="M13 4h14v10H13zM8 12h24v26H8z"/><path fill="#713e78" d="M11 19h18v16H11z"/><path fill="#b06aab" d="M14 21h7v9h-7z"/><path fill="#688341" d="M24 6h8v8h-8z"/></>;
    case "WaxSealedBottle": return <><path fill="#d9e5df" d="M13 3h14v11H13zM8 12h24v27H8z"/><path fill="#6b3a69" d="M11 19h18v16H11z"/><path fill="#8d263b" d="M11 6h18v10H11z"/><path fill="#d7a84b" d="M16 9h8v6h-8z"/></>;
    case "Wine": return <><path fill="#dce9e0" d="M14 2h12v11H14zM9 11h22v28H9z"/><path fill="#71315e" d="M12 18h16v18H12z"/><path fill="#e7c35b" d="M11 6h18v8H11z"/><path fill="#efe0bd" d="M14 21h12v9H14z"/><path fill="#8b293c" d="M18 23h5v4h-5z"/></>;
    case "LuxuryPerfume": return <><path fill="#43213e" d="M6 12h28v25H6z"/><path fill="#8f3f72" d="M9 15h22v19H9z"/><path fill="#dc72a8" d="M13 18h14v13H13z"/><path fill="#f7b8cf" d="M16 21h6v7h-6z"/><path fill="#d8b453" d="M14 6h12v9H14zM11 3h18v5H11z"/></>;
    case "RoyalCharm": return <><path fill="#5e243c" d="M6 7h28v31H6z"/><path fill="#a63b5d" d="M9 10h22v25H9z"/><path fill="#e0b34f" d="M17 13h7v7h7v7h-7v7h-7v-7h-7v-7h7z"/><path fill="#fff0b6" d="M19 15h3v16h-3z"/></>;
    case "RoyalPermit": return <><path fill="#6b4722" d="M5 7h30v31H5z"/><path fill="#ead18a" d="M8 4h27v31H8z"/><path fill="#8e293d" d="M12 9h19v6H12z"/><path fill="#26385b" d="M12 19h15v3H12zm0 6h18v3H12z"/><path fill="#d5a847" d="M27 26h8v9h-8z"/></>;
    default: return null;
  }
}
