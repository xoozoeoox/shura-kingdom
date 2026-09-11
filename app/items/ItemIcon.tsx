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
    case "heal_bandage_m": return <><path fill="#d7c8aa" d="M7 8h26v24H7z"/><path fill="#f3ead5" d="M10 11h20v18H10z"/><path fill="#a78665" d="M12 14h4v4h-4zm12 0h4v4h-4zm-12 8h4v4h-4zm12 0h4v4h-4z"/></>;
    case "heal_elixir_l": return <><path fill="#a4d6df" d="M12 8h16v25H12z"/><path fill="#6c3f85" d="M14 17h12v14H14z"/><path fill="#e7f4ec" d="M15 5h10v8H15z"/><path fill="#f5a4cb" d="M17 20h4v7h-4z"/></>;
    case "heal_charm_x": return <><path fill="#f0d28a" d="M9 5h22v31H9z"/><path fill="#a52e3d" d="M13 9h14v4H13zm4 5h6v14h-6zm-5 8h16v5H12z"/><path fill="#eadfc2" d="M12 7h16v3H12z"/></>;
    case "BanditToken": return <><path fill="#795129" d="M5 12h30v21H5z"/><path fill="#d1a24d" d="M8 9h24v21H8z"/><path fill="#8d2839" d="M16 14h8v4h4v8h-4v4h-8v-4h-4v-8h4z"/></>;
    case "BanditPajamas": return <><path fill="#d7b489" d="M8 9h9v7h6V9h9v25H8z"/><path fill="#6f9cac" d="M11 13h5v18h-5zm13 0h5v18h-5z"/><path fill="#f1ddba" d="M17 18h6v4h-6z"/></>;
    case "AntiTeleCompass": return <><path fill="#8a5d26" d="M5 8h30v27H5z"/><path fill="#e3bd5a" d="M8 11h24v21H8z"/><path fill="#204d73" d="M18 13h5v8h5v5h-8v5h-5v-8h-5v-5h8z"/><path fill="#f2eee0" d="M18 17h4v8h-4z"/></>;
    case "SnakeFlower": return <><path fill="#4e733b" d="M18 19h5v17h-5zM9 25h11v5H9zm13-2h10v5H22z"/><path fill="#e9a6c4" d="M8 9h9V5h7v4h9v9h-9v5h-7v-5H8z"/><path fill="#f7e16e" d="M17 11h7v7h-7z"/></>;
    case "MermaidScale": return <><path fill="#4b6f93" d="M7 14h26v20H7z"/><path fill="#75d1d5" d="M10 9h20v22H10z"/><path fill="#d4fbef" d="M14 12h9v7h-9z"/><path fill="#4385ad" d="M18 19h10v9H18z"/></>;
    case "ZombieCross": return <><path fill="#5d594f" d="M17 4h7v11h9v8h-9v14h-7V23H8v-8h9z"/><path fill="#b7aa8b" d="M19 7h3v11h8v3h-8v13h-3V21h-8v-3h8z"/></>;
    case "LichGlasses": return <><path fill="#756b57" d="M5 13h13v13H5zm17 0h13v13H22z"/><path fill="#b9d5df" d="M8 16h7v7H8zm17 0h7v7h-7z"/><path fill="#382d2b" d="M17 17h6v4h-6zM2 10h8v4H2zm28 0h8v4h-8z"/></>;
    case "HeroTear": return <><path fill="#87b8da" d="M18 4h5v6h5v7h5v12h-5v6H12v-6H7V17h5v-7h6z"/><path fill="#dff5fa" d="M17 11h5v6h4v7h-5v5h-6v-8h-4v-4h6z"/></>;
    default: return null;
  }
}
