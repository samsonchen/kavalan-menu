import { useState, useEffect, useRef } from 'react';
import type { MenuItem, Lang } from '../types/menu';
import { MENU_CATEGORIES, MENU_UI } from '../data/menu-items';
import { TagBadge } from './TagBadge';
import { useScrollLock } from '../hooks/useScrollLock';

interface Props {
  item: MenuItem | null;
  lang: Lang;
  onClose: () => void;
}

const BASE = import.meta.env.BASE_URL;

export function ItemDetailModal({ item, lang, onClose }: Props) {
  const open = !!item;
  const [scale, setScale] = useState(1);
  const pinch = useRef({ active: false, startDist: 0, startScale: 1 });

  useScrollLock(open);

  useEffect(() => { setScale(1); }, [item]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
      pinch.current = { active: true, startDist: d, startScale: scale };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (pinch.current.active && e.touches.length === 2) {
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
      const s = Math.min(3, Math.max(1, pinch.current.startScale * (d / pinch.current.startDist)));
      setScale(s);
    }
  };

  const onTouchEnd = () => { pinch.current.active = false; };

  const catName = item ? MENU_CATEGORIES.find(c => c.id === item.category)?.[lang] : '';

  return (
    <div className={`modal-backdrop${open ? ' open' : ''}`} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {item && (
          <>
            <div
              className="modal-img"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <button
                className="modal-close"
                onClick={onClose}
                aria-label={MENU_UI.closeLabel[lang]}
              >
                ×
              </button>
              {item.image
                ? <img
                    src={`${BASE}images/${item.image}`}
                    alt=""
                    style={{ transform: `scale(${scale})` }}
                  />
                : <div className="placeholder">{item.emoji || '·'}</div>
              }
            </div>

            <div className="modal-body">
              <div className="modal-cat">{catName}</div>
              <h3 className="modal-title">
                {lang === 'zh' ? item.names.zh : item.names[lang]}
              </h3>
              {lang !== 'zh' && (
                <div className="modal-title-zh">{item.names.zh}</div>
              )}

              <div className="modal-prices">
                {item.price.map((p, i) => (
                  <div className="modal-price-row" key={i}>
                    <span className="lab">{p.label ? p.label[lang] : '・'}</span>
                    {p.value === 'market'
                      ? <span className="market">{MENU_UI.marketPrice[lang]}</span>
                      : <span>
                          <span className="nt">NT$</span>
                          <span className="val">{p.value}</span>
                        </span>
                    }
                  </div>
                ))}
              </div>

              {item.desc[lang] && (
                <div className="modal-section">
                  <div className="lab">{MENU_UI.descLabel[lang]}</div>
                  <p>{item.desc[lang]}</p>
                </div>
              )}

              {item.note[lang] && (
                <div className="modal-section">
                  <div className="lab">{MENU_UI.noteLabel[lang]}</div>
                  <p>{item.note[lang]}</p>
                </div>
              )}

              {item.tags.length > 0 && (
                <div className="modal-badges">
                  {item.tags.map(t => <TagBadge key={t} code={t} lang={lang} />)}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
