import type { MenuItem, Lang } from '../types/menu';
import { MENU_UI } from '../data/menu-items';
import { TagBadge } from './TagBadge';

interface Props {
  item: MenuItem;
  lang: Lang;
  onOpen: (item: MenuItem) => void;
}

const BASE = import.meta.env.BASE_URL;

function Thumb({ image, emoji }: { image: string | null; emoji: string }) {
  if (image) {
    return (
      <div className="thumb">
        <img src={`${BASE}images/${image}`} alt="" loading="lazy" />
      </div>
    );
  }
  return (
    <div className="thumb">
      <div className="placeholder">{emoji || '·'}</div>
    </div>
  );
}

function PriceCell({ entry, lang }: { entry: MenuItem['price'][number]; lang: Lang }) {
  if (entry.value === 'market') {
    return (
      <div className="price-cell">
        {entry.label && <span className="lab">{entry.label[lang]}</span>}
        <span className="market">{MENU_UI.marketPrice[lang]}</span>
      </div>
    );
  }
  return (
    <div className="price-cell">
      {entry.label && <span className="lab">{entry.label[lang]}</span>}
      <span className="nt">NT$</span>
      <span className="val">{entry.value}</span>
    </div>
  );
}

export function MenuCard({ item, lang, onOpen }: Props) {
  const desc = item.desc[lang];
  return (
    <button className="item" onClick={() => onOpen(item)}>
      <Thumb image={item.image} emoji={item.emoji} />
      <div className="body">
        <div>
          <div className="name">{item.names[lang]}</div>
          {desc && <div className="desc">{desc}</div>}
        </div>
        <div className="price-row">
          <div className="price-list">
            {item.price.map((p, i) => (
              <PriceCell key={i} entry={p} lang={lang} />
            ))}
          </div>
        </div>
        {item.tags.length > 0 && (
          <div className="badges">
            {item.tags.map(t => <TagBadge key={t} code={t} lang={lang} />)}
          </div>
        )}
      </div>
    </button>
  );
}
