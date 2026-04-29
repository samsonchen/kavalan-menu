import type { Lang } from '../types/menu';
import { LANGS, MENU_UI } from '../data/menu-items';

interface Props {
  lang: Lang;
  onChangeLang: (l: Lang) => void;
}

export function LanguageSwitcher({ lang, onChangeLang }: Props) {
  return (
    <div className="langbar">
      <div className="mark">{MENU_UI.brandShort[lang]}</div>
      <div className="lang-pills">
        {LANGS.map(L => (
          <button
            key={L.code}
            className={`lang-pill${lang === L.code ? ' active' : ''}`}
            onClick={() => onChangeLang(L.code)}
          >
            {L.label}
          </button>
        ))}
      </div>
    </div>
  );
}
