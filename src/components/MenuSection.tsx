import type { Category, MenuItem, Lang } from '../types/menu';
import { CAT_NUM } from '../data/menu-items';
import { MenuCard } from './MenuCard';

interface Props {
  category: Category;
  items: MenuItem[];
  lang: Lang;
  onOpen: (item: MenuItem) => void;
}

export function MenuSection({ category, items, lang, onOpen }: Props) {
  return (
    <section id={`cat-${category.id}`} className="cat">
      <div className="cat-head">
        <div className="num">{CAT_NUM[category.id]}</div>
        <div className="titles">
          {lang !== 'zh' && <div className="ch">{category.zh}</div>}
          <h3>{category[lang]}</h3>
        </div>
      </div>
      {items.map(item => (
        <MenuCard key={item.id} item={item} lang={lang} onOpen={onOpen} />
      ))}
    </section>
  );
}
