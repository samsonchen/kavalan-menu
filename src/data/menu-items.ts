import type { Category, MenuItem, PriceOption, I18nText, TagDef, Lang } from '../types/menu';

export const MENU_CATEGORIES: Category[] = [
  { id: 'seafood',   zh: '海鮮類', en: 'Seafood',    ja: '魚介類',   ko: '해산물' },
  { id: 'meat',      zh: '肉類',   en: 'Meat',       ja: '肉料理',   ko: '육류' },
  { id: 'vegetable', zh: '青菜',   en: 'Vegetables', ja: '野菜料理', ko: '채소' },
  { id: 'staple',    zh: '主食',   en: 'Staples',    ja: '主食',     ko: '주식' },
  { id: 'soup',      zh: '湯類',   en: 'Soups',      ja: 'スープ',   ko: '국물요리' },
];

export const MENU_UI: Record<string, I18nText> = {
  brand: {
    zh: '新社噶瑪蘭小吃店',
    en: 'Sinshe Kavalan Eatery',
    ja: '新社カバラン食堂',
    ko: '신실대 카발란 식당',
  },
  brandShort: { zh: '噶瑪蘭', en: 'KAVALAN', ja: 'カバラン', ko: '카발란' },
  address: {
    zh: '977 花蓮縣豐濱鄉新社村 42 號',
    en: 'No. 42, Sinshe Village, Fengbin Township, Hualien County 977',
    ja: '花蓮県豊濱郷新社村 42 番地 〒977',
    ko: '977 화련현 펑빈향 신사촌 42번지',
  },
  phone: { zh: '(03) 871-1339', en: '(03) 871-1339', ja: '(03) 871-1339', ko: '(03) 871-1339' },
  hours: {
    zh: '請查詢 Google Maps',
    en: 'Please check Google Maps',
    ja: 'Googleマップでご確認ください',
    ko: 'Google 지도에서 확인해 주세요',
  },
  diningInfo: {
    zh: '本店僅二位工作人員・餐具請自取・如有怠慢之處請多包容',
    en: 'Only two staff on duty · Please help yourself to utensils · Thank you for your patience',
    ja: 'スタッフ2名のみ・食器はセルフサービス・行き届かぬ点はご容赦ください',
    ko: '직원 2명 운영・식기는 셀프・부족한 점 양해 부탁드립니다',
  },
  closeLabel:   { zh: '關閉',   en: 'Close',         ja: '閉じる',             ko: '닫기' },
  marketPrice:  { zh: '時價',   en: 'Market Price',  ja: '時価',               ko: '시가' },
  noteLabel:    { zh: '備註',   en: 'Notes',         ja: '備考',               ko: '참고' },
  descLabel:    { zh: '說明',   en: 'Description',   ja: '説明',               ko: '설명' },
  diningLabel:  { zh: '用餐須知', en: 'House Notes', ja: 'ご案内',             ko: '안내' },
  addrLabel:    { zh: '店址',   en: 'Address',       ja: '住所',               ko: '주소' },
  telLabel:     { zh: '電話',   en: 'Tel',           ja: '電話',               ko: '전화' },
  hoursLabel:   { zh: '營業',   en: 'Hours',         ja: '営業',               ko: '영업' },
};

export const MENU_TAGS: Record<string, TagDef> = {
  R:   { icon: '★',    zh: '本店推薦',  en: 'Recommended',           ja: 'おすすめ',        ko: '추천' },
  '1': { icon: '🌶',   zh: '小辣',      en: 'Mild Spicy',            ja: '少し辛い',        ko: '약간 매운' },
  '2': { icon: '🌶🌶', zh: '中辣',      en: 'Medium Spicy',          ja: '中辛',            ko: '보통 매운' },
  '3': { icon: '🔥',   zh: '大辣',      en: 'Very Spicy',            ja: '激辛',            ko: '매우 매운' },
  P:   { icon: '🐷',   zh: '含豬肉',    en: 'Contains Pork',         ja: '豚肉入り',        ko: '돼지고기 포함' },
  B:   { icon: '🐂',   zh: '含牛肉',    en: 'Contains Beef',         ja: '牛肉入り',        ko: '소고기 포함' },
  L:   { icon: '🐑',   zh: '含羊肉',    en: 'Contains Lamb',         ja: 'ラム入り',        ko: '양고기 포함' },
  V:   { icon: '🥬',   zh: '素食',      en: 'Vegetarian',            ja: 'ベジタリアン',    ko: '채식' },
  V5:  { icon: '🧄',   zh: '五辛素',    en: 'Plant-based w/ Allium', ja: '五葷あり精進',    ko: '오신채 채식' },
  H:   { icon: '☪',    zh: '清真認證',  en: 'Halal Certified',       ja: 'ハラール認証',    ko: '할랄 인증' },
};

const p = (
  label_zh: string | null,
  label_en: string | null,
  label_ja: string | null,
  label_ko: string | null,
  value: number | 'market',
): PriceOption => ({
  label: label_zh ? { zh: label_zh, en: label_en!, ja: label_ja!, ko: label_ko! } : null,
  value,
});

const EMPTY: I18nText = { zh: '', en: '', ja: '', ko: '' };

export const MENU_ITEMS: MenuItem[] = [
  // ────────── 海鮮類 SEAFOOD ──────────
  {
    id: 'seafood-001', category: 'seafood',
    names: { zh: '龍蝦・蔥絲清蒸', en: 'Steamed Lobster with Scallion', ja: '伊勢海老の葱蒸し', ko: '랍스터 파채 찜' },
    price: [p('每斤', 'per catty', '1斤あたり', '1근당', 1400)],
    image: null, emoji: '🦞', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-002', category: 'seafood',
    names: { zh: '龍蝦・蛋香冬粉', en: 'Lobster with Egg & Glass Noodles', ja: '伊勢海老の卵春雨', ko: '랍스터 계란 당면' },
    price: [p('每斤', 'per catty', '1斤あたり', '1근당', 1400)],
    image: null, emoji: '🦞', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-003', category: 'seafood',
    names: { zh: '龍蝦・原味川燙', en: 'Blanched Lobster, Original', ja: '伊勢海老の湯引き', ko: '랍스터 데침' },
    price: [p('每斤', 'per catty', '1斤あたり', '1근당', 1400)],
    image: null, emoji: '🦞', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-004', category: 'seafood',
    names: { zh: '綜合生魚片', en: 'Assorted Sashimi', ja: '刺身盛り合わせ', ko: '모듬 사시미' },
    price: [p('一份', 'per plate', '1人前', '1인분', 450)],
    image: 'sashimi.jpg', emoji: '🍣', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-005', category: 'seafood',
    names: { zh: '鳳梨檸檬清蒸魚', en: 'Steamed Fish with Pineapple & Lime', ja: '魚のパイナップルライム蒸し', ko: '파인애플 라임 생선찜' },
    price: [p('一尾', 'whole fish', '1尾', '한 마리', 550)],
    image: null, emoji: '🐟', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-006', category: 'seafood',
    names: { zh: '蔥絲豆腐清蒸魚', en: 'Steamed Fish with Scallion & Tofu', ja: '魚の葱と豆腐蒸し', ko: '파 두부 생선찜' },
    price: [p('一尾', 'whole fish', '1尾', '한 마리', 550)],
    image: null, emoji: '🐟', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-007', category: 'seafood',
    names: { zh: '剝皮辣椒豆腐魚', en: 'Steamed Fish with Pickled Chili & Tofu', ja: '魚の青唐辛子漬けと豆腐蒸し', ko: '청양고추 두부 생선찜' },
    price: [p('一尾', 'whole fish', '1尾', '한 마리', 550)],
    image: null, emoji: '🌶', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-008', category: 'seafood',
    names: { zh: '龍虎石斑', en: 'Hybrid Grouper', ja: 'ハイブリッドハタ', ko: '하이브리드 그루퍼' },
    price: [p('一尾', 'whole fish', '1尾', '한 마리', 550)],
    image: '/images/grouper.jpg', emoji: '🐟', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-009', category: 'seafood',
    names: { zh: '午仔魚・薑蔥爆香煎', en: 'Pan-fried Threadfin with Ginger & Scallion', ja: 'ツバメコノシロの生姜葱焼き', ko: '실꼬리돔 생강파 구이' },
    price: [
      p('一尾', '1 fish', '1尾', '한 마리', 300),
      p('兩尾', '2 fish', '2尾', '두 마리', 500),
    ],
    image: null, emoji: '🐟', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-010', category: 'seafood',
    names: { zh: '午仔魚・香煎豆豉', en: 'Pan-fried Threadfin with Black Bean', ja: 'ツバメコノシロの豆豉焼き', ko: '실꼬리돔 두시 구이' },
    price: [
      p('一尾', '1 fish', '1尾', '한 마리', 300),
      p('兩尾', '2 fish', '2尾', '두 마리', 500),
    ],
    image: null, emoji: '🐟', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-011', category: 'seafood',
    names: { zh: '鮭魚頭・薑蔥爆香煎', en: 'Salmon Head with Ginger & Scallion', ja: 'サーモンヘッドの生姜葱焼き', ko: '연어머리 생강파 구이' },
    price: [p('一份', 'per portion', '1人前', '1인분', 450)],
    image: null, emoji: '🐟', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-012', category: 'seafood',
    names: { zh: '鮭魚頭・香煎豆豉', en: 'Salmon Head with Black Bean', ja: 'サーモンヘッドの豆豉焼き', ko: '연어머리 두시 구이' },
    price: [p('一份', 'per portion', '1人前', '1인분', 450)],
    image: null, emoji: '🐟', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-013', category: 'seafood',
    names: { zh: '透抽・鹹蛋香', en: 'Cuttlefish with Salted Egg', ja: 'イカの塩卵炒め', ko: '갑오징어 소금란 볶음' },
    price: [p('一份', 'per portion', '1人前', '1인분', 500)],
    image: null, emoji: '🦑', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-014', category: 'seafood',
    names: { zh: '透抽・薑爆蔥香', en: 'Cuttlefish with Ginger & Scallion', ja: 'イカの生姜葱炒め', ko: '갑오징어 생강파 볶음' },
    price: [p('一份', 'per portion', '1人前', '1인분', 500)],
    image: null, emoji: '🦑', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-015', category: 'seafood',
    names: { zh: '白蝦・蛋香冬粉', en: 'White Shrimp with Egg & Glass Noodles', ja: '白海老の卵春雨', ko: '흰새우 계란 당면' },
    price: [p('一份', 'per portion', '1人前', '1인분', 600)],
    image: null, emoji: '🦐', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-016', category: 'seafood',
    names: { zh: '白蝦・檸檬胡椒', en: 'White Shrimp with Lime & Pepper', ja: '白海老のライム胡椒', ko: '흰새우 라임 후추' },
    price: [p('一份', 'per portion', '1人前', '1인분', 500)],
    image: 'shrimp-lemon-pepper.jpg', emoji: '🦐', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'seafood-017', category: 'seafood',
    names: { zh: '白蝦・川燙芥菜', en: 'Blanched White Shrimp with Mustard Greens', ja: '白海老と高菜の湯引き', ko: '흰새우 갓 데침' },
    price: [p('一份', 'per portion', '1人前', '1인분', 460)],
    image: null, emoji: '🦐', tags: [], desc: EMPTY, note: EMPTY,
  },

  // ────────── 肉類 MEAT ──────────
  {
    id: 'meat-001', category: 'meat',
    names: { zh: '綜合紅燒牛肉・辣味', en: 'Braised Beef Combo, Spicy', ja: '牛バラ煮込み(辛口)', ko: '소고기 모듬 매운 조림' },
    price: [
      p('小份', 'small', '小', '소', 450),
      p('大份', 'large', '大', '대', 650),
    ],
    image: 'braised-beef.jpg', emoji: '🥩', tags: ['B'], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'meat-002', category: 'meat',
    names: { zh: '綜合紅燒牛肉・原味', en: 'Braised Beef Combo, Original', ja: '牛バラ煮込み(原味)', ko: '소고기 모듬 조림' },
    price: [
      p('小份', 'small', '小', '소', 450),
      p('大份', 'large', '大', '대', 650),
    ],
    image: 'braised-beef.jpg', emoji: '🥩', tags: ['B'], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'meat-003', category: 'meat',
    names: { zh: '蔥油白切玉米雞', en: 'Poached Corn-fed Chicken with Scallion Oil', ja: 'コーン鶏の葱油がけ', ko: '옥수수 닭 파기름' },
    price: [p('半隻', 'half bird', '半羽', '반 마리', 500)],
    image: 'scallion-chicken.jpg', emoji: '🍗', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'meat-004', category: 'meat',
    names: { zh: '香酥三層肉', en: 'Crispy Pork Belly', ja: '三枚肉のパリパリ揚げ', ko: '바삭한 삼겹살' },
    price: [p('一份', 'per portion', '1人前', '1인분', 380)],
    image: null, emoji: '🥓', tags: ['P'], desc: EMPTY, note: EMPTY,
  },

  // ────────── 青菜 VEGETABLES ──────────
  {
    id: 'vegetable-001', category: 'vegetable',
    names: { zh: '蛋香波菜', en: 'Spinach with Egg', ja: 'ほうれん草の卵炒め', ko: '시금치 계란 볶음' },
    price: [p(null, null, null, null, 180)],
    image: null, emoji: '🥬', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'vegetable-002', category: 'vegetable',
    names: { zh: '綜合時節蔬菜', en: 'Seasonal Mixed Vegetables', ja: '季節野菜の盛り合わせ', ko: '제철 모듬 채소' },
    price: [p(null, null, null, null, 250)],
    image: 'seasonal-vegetables.jpg', emoji: '🥦', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'vegetable-003', category: 'vegetable',
    names: { zh: '薑炒香水金針', en: 'Day Lily Stir-fried with Ginger', ja: '金針菜の生姜炒め', ko: '원추리 생강 볶음' },
    price: [p(null, null, null, null, 250)],
    image: null, emoji: '🌿', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'vegetable-004', category: 'vegetable',
    names: { zh: '地瓜葉皮蛋', en: 'Sweet Potato Leaves with Century Egg', ja: 'さつまいもの葉とピータン', ko: '고구마잎 송화단' },
    price: [p(null, null, null, null, 180)],
    image: null, emoji: '🥬', tags: [], desc: EMPTY, note: EMPTY,
  },

  // ────────── 主食 STAPLES ──────────
  {
    id: 'staple-001', category: 'staple',
    names: { zh: '白蝦海鮮粥', en: 'White Shrimp Seafood Congee', ja: '白海老海鮮粥', ko: '흰새우 해산물 죽' },
    price: [p('一份', 'per portion', '1人前', '1인분', 900)],
    image: 'seafood-congee.jpg', emoji: '🍲', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'staple-002', category: 'staple',
    names: { zh: '肉絲炒麵', en: 'Pork Stir-fried Noodles', ja: '豚肉細切り焼きそば', ko: '돼지고기 채 볶음면' },
    price: [p('一份', 'per portion', '1人前', '1인분', 120)],
    image: 'pork-noodles.jpg', emoji: '🍜', tags: ['P'], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'staple-003', category: 'staple',
    names: { zh: '白飯', en: 'Steamed Rice', ja: '白ごはん', ko: '흰밥' },
    price: [p('一碗', 'per bowl', '1杯', '한 공기', 20)],
    image: null, emoji: '🍚', tags: [], desc: EMPTY, note: EMPTY,
  },

  // ────────── 湯類 SOUPS ──────────
  {
    id: 'soup-001', category: 'soup',
    names: { zh: '綜合鮮魚湯・薑絲蛤蜊', en: 'Mixed Fish Soup with Ginger & Clam', ja: '魚介スープ・生姜とアサリ', ko: '생선 모듬탕 생강 바지락' },
    price: [
      p('大', 'large', '大', '대', 380),
      p('小', 'small', '小', '소', 300),
    ],
    image: null, emoji: '🥣', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'soup-002', category: 'soup',
    names: { zh: '綜合鮮魚湯・味噌蔬菜', en: 'Mixed Fish Soup with Miso & Vegetables', ja: '魚介スープ・味噌野菜', ko: '생선 모듬탕 미소 채소' },
    price: [
      p('大', 'large', '大', '대', 380),
      p('小', 'small', '小', '소', 300),
    ],
    image: null, emoji: '🥣', tags: [], desc: EMPTY, note: EMPTY,
  },
  {
    id: 'soup-003', category: 'soup',
    names: { zh: '魩仔魚海帶蛋香雞湯', en: 'Whitebait, Kelp & Egg Chicken Soup', ja: 'シラスと昆布の卵鶏スープ', ko: '실치 다시마 계란 닭탕' },
    price: [p(null, null, null, null, 'market')],
    image: null, emoji: '🍲', tags: [], desc: EMPTY,
    note: { zh: '請洽店家', en: 'Please ask staff', ja: 'スタッフへお問い合わせ', ko: '직원에게 문의' },
  },
];

export const CAT_NUM: Record<string, string> = {
  seafood: '01', meat: '02', vegetable: '03', staple: '04', soup: '05',
};

export const LANGS: Array<{ code: Lang; label: string }> = [
  { code: 'zh', label: '繁中' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本' },
  { code: 'ko', label: '한국' },
];
