import type { Lang } from '../types/menu';
import { MENU_CATEGORIES } from '../data/menu-items';

interface Props {
  lang: Lang;
  activeCat: string;
  onSelect: (id: string) => void;
}

export function CategoryNav({ lang, activeCat, onSelect }: Props) {
  return (
    <div className="tabs">
      <div className="tabs-scroll">
        {MENU_CATEGORIES.map(c => (
          <button
            key={c.id}
            className={`tab${activeCat === c.id ? ' active' : ''}`}
            onClick={() => onSelect(c.id)}
          >
            {c[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
