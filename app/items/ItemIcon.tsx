const giftCodes = new Set(["StrawberryNutritionTab", "FreshPuffBread", "NoYaTea", "ElinLunch", "HildaRation"]);

export function isCharacterGift(code: string) { return giftCodes.has(code); }

export default function ItemIcon({ code, category }: { code: string; category: string }) {
  const potion = code.match(/^potion_([SML])([sml])$/);
  if (potion) return <span className={`archive-potion potion-${potion[1].toLowerCase()} potion-grade-${potion[2]}`}><i /></span>;

  const kind = giftCodes.has(code) ? `gift-${code}` : `category-${category}`;
  return <svg className={`archive-pixel-icon ${kind}`} viewBox="0 0 40 40" aria-hidden="true">
    {code === "StrawberryNutritionTab" && <><path fill="#6b351e" d="M5 8h30v27H5z"/><path fill="#ead3a4" d="M8 11h24v21H8z"/><path fill="#b72e46" d="M11 14h18v15H11z"/><path fill="#ff7587" d="M14 16h12v11H14z"/><path fill="#fff0c1" d="M16 18h3v3h-3zm6 4h3v3h-3z"/><path fill="#526c38" d="M14 6h12v7H14z"/></>}
    {code === "FreshPuffBread" && <><path fill="#56301d" d="M4 20h32v15H4z"/><path fill="#bc642a" d="M6 15h28v18H6z"/><path fill="#efa94b" d="M9 10h22v21H9z"/><path fill="#f8d47d" d="M13 7h14v22H13z"/><path fill="#fff0b0" d="M15 11h8v6h-8z"/><path fill="#26354f" d="M29 7h5v11h-5z"/></>}
    {code === "NoYaTea" && <><path fill="#67451f" d="M4 32h32v4H4z"/><path fill="#eadfba" d="M7 13h23v19H7z"/><path fill="#709bbc" d="M10 16h17v13H10z"/><path fill="#c4edf2" d="M12 17h8v8h-8z"/><path fill="#eadfba" d="M30 17h6v11h-9v-4h5v-4h-2z"/><path fill="#8e2c3e" d="M5 9h9v6H5z"/><path fill="#d9eff4" d="M15 4h3v8h-3zm7-3h3v11h-3z"/></>}
    {code === "ElinLunch" && <><path fill="#562727" d="M3 12h34v24H3z"/><path fill="#d7a24a" d="M6 9h28v24H6z"/><path fill="#f3d98c" d="M9 14h22v16H9z"/><path fill="#d84662" d="M16 19h8v3h4v5h-4v3h-8v-3h-4v-5h4z"/><path fill="#fff1c6" d="M18 21h4v5h-4z"/></>}
    {code === "HildaRation" && <><path fill="#141824" d="M3 13h34v23H3z"/><path fill="#536176" d="M6 15h28v18H6z"/><path fill="#bdcee0" d="M9 18h22v12H9z"/><path fill="#583052" d="M11 20h18v8H11z"/><path fill="#9b78c6" d="M14 22h12v4H14z"/><path fill="#edf7ff" d="M18 6h4v12h-4z"/></>}
    {!giftCodes.has(code) && <><path className="pixel-icon-shadow" d="M7 9h26v25H7z"/><path className="pixel-icon-body" d="M10 6h20v25H10z"/><path className="pixel-icon-mark" d="M17 11h6v6h6v6h-6v6h-6v-6h-6v-6h6z"/></>}
  </svg>;
}
