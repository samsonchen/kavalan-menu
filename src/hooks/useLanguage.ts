import { useState, useCallback } from 'react';
import type { Lang } from '../types/menu';

export function useLanguage(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) || 'zh';
  });

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem('lang', l);
    setLangState(l);
  }, []);

  return [lang, setLang];
}
