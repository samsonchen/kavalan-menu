import { useState, useEffect, useMemo } from 'react';
import type { MenuItem } from './types/menu';
import { MENU_CATEGORIES, MENU_ITEMS, MENU_UI } from './data/menu-items';
import { useLanguage } from './hooks/useLanguage';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { MenuSection } from './components/MenuSection';
import { ItemDetailModal } from './components/ItemDetailModal';

export function App() {
  const [lang, setLang] = useLanguage();
  const [activeCat, setActiveCat] = useState(MENU_CATEGORIES[0].id);
  const [openItem, setOpenItem] = useState<MenuItem | null>(null);

  const grouped = useMemo(() => {
    const m: Record<string, MenuItem[]> = {};
    for (const c of MENU_CATEGORIES) m[c.id] = [];
    for (const it of MENU_ITEMS) (m[it.category] ??= []).push(it);
    return m;
  }, []);

  useEffect(() => {
    const els = MENU_CATEGORIES
      .map(c => document.getElementById('cat-' + c.id))
      .filter((el): el is HTMLElement => !!el);

    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = els[0]?.id ?? '';
      for (const el of els) {
        if (el.offsetTop <= y) cur = el.id;
      }
      if (cur) setActiveCat(cur.replace('cat-', ''));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goCat = (id: string) => {
    const el = document.getElementById('cat-' + id);
    if (el) window.scrollTo({ top: el.offsetTop - 96, behavior: 'smooth' });
  };

  return (
    <div className="device">
      <LanguageSwitcher lang={lang} onChangeLang={setLang} />
      <Header lang={lang} />
      <CategoryNav lang={lang} activeCat={activeCat} onSelect={goCat} />

      {MENU_CATEGORIES.map(c => (
        <MenuSection
          key={c.id}
          category={c}
          items={grouped[c.id] ?? []}
          lang={lang}
          onOpen={setOpenItem}
        />
      ))}

      <footer>
        <div className="mark">{MENU_UI.brandShort[lang]}</div>
        <div className="ch">新 社 噶 瑪 蘭</div>
      </footer>

      <ItemDetailModal
        item={openItem}
        lang={lang}
        onClose={() => setOpenItem(null)}
      />
    </div>
  );
}
