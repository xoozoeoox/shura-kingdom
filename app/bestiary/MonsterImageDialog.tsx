'use client';

import { useEffect, useRef, useState } from 'react';
import type { Monster } from './monsters';

export default function MonsterImageDialog({ monster, onClose }: { monster: Monster; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [originalSize, setOriginalSize] = useState(false);

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog ref={dialog} className="monster-image-dialog" aria-labelledby="monster-image-title"
      onClose={onClose} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
      onContextMenu={event => event.preventDefault()} onDragStart={event => event.preventDefault()}>
      <section className="monster-image-window">
        <header>
          <h2 id="monster-image-title">{monster.name}</h2>
          <button type="button" className="monster-image-close" autoFocus aria-label="關閉怪物圖片" onClick={() => dialog.current?.close()}>×</button>
        </header>
        <div className="monster-image-toolbar">
          <button type="button" aria-pressed={originalSize} onClick={() => setOriginalSize(value => !value)}>
            {originalSize ? '縮放至視窗' : '原始尺寸（100%）'}
          </button>
        </div>
        <div className={`monster-image-viewport${originalSize ? ' is-original' : ''}`} tabIndex={0} aria-label="怪物原圖，可捲動查看">
          <img src={`/adventure/monster-${monster.sprite}.png`} alt={monster.name} draggable={false} />
        </div>
      </section>
    </dialog>
  );
}
