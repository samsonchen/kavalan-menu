import type { Lang } from '../types/menu';
import { MENU_TAGS } from '../data/menu-items';

interface Props {
  code: string;
  lang: Lang;
}

export function TagBadge({ code, lang }: Props) {
  const t = MENU_TAGS[code];
  if (!t) return null;
  return (
    <span className={`badge${code === 'R' ? ' r' : ''}`}>
      <span className="ic">{t.icon}</span>
      <span>{t[lang]}</span>
    </span>
  );
}
