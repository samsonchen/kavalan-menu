import type { Lang } from '../types/menu';
import { MENU_UI } from '../data/menu-items';

interface Props {
  lang: Lang;
}

const BASE = import.meta.env.BASE_URL;

export function Header({ lang }: Props) {
  return (
    <>
      <div className="hero">
        <img src={`${BASE}images/hero.jpg`} alt="新社噶瑪蘭小吃店" />
      </div>

      <div className="brand-block">
        <div className="brand-zh">新社噶瑪蘭小吃店</div>
        <h1 className="brand-en">{MENU_UI.brandShort[lang]}</h1>
        {lang !== 'zh' && <div className="brand-sub">{MENU_UI.brand[lang]}</div>}
      </div>

      <div className="info-strip">
        <div className="span2">
          <div className="lab">{MENU_UI.addrLabel[lang]}</div>
          <div className="val">{MENU_UI.address[lang]}</div>
        </div>
        <div>
          <div className="lab">{MENU_UI.telLabel[lang]}</div>
          <div className="val">
            <a href="tel:+886038711339" style={{ color: 'inherit', textDecoration: 'none' }}>
              {MENU_UI.phone[lang]}
            </a>
          </div>
        </div>
        <div>
          <div className="lab">{MENU_UI.hoursLabel[lang]}</div>
          <div className="val">
            <a href="https://maps.app.goo.gl/PBX8BzFLxmfLKvGi7" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
              {MENU_UI.hours[lang]}
            </a>
          </div>
        </div>
      </div>

      <div className="house">
        <div className="label">{MENU_UI.diningLabel[lang]}</div>
        <div className="text">{MENU_UI.diningInfo[lang]}</div>
      </div>
    </>
  );
}
