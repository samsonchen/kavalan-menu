export type Lang = 'zh' | 'en' | 'ja' | 'ko';
export type I18nText = Record<Lang, string>;

export interface PriceOption {
  label: I18nText | null;
  value: number | 'market';
}

export interface MenuItem {
  id: string;
  category: string;
  names: I18nText;
  price: PriceOption[];
  image: string | null;
  emoji: string;
  tags: string[];
  desc: I18nText;
  note: I18nText;
}

export interface Category {
  id: string;
  zh: string;
  en: string;
  ja: string;
  ko: string;
}

export interface TagDef {
  icon: string;
  zh: string;
  en: string;
  ja: string;
  ko: string;
}
