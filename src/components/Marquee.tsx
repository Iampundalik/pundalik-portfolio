import MarqueePkg from 'react-fast-marquee';
import { tickerItems } from '../data/portfolio';
import './Marquee.css';

const Marquee = ((MarqueePkg as unknown as { default?: typeof MarqueePkg }).default ?? MarqueePkg) as typeof MarqueePkg;

export function Ticker() {
  return (
    <div className="ticker">
      <Marquee speed={45} gradient gradientColor="#020408" gradientWidth={120} pauseOnHover>
        {tickerItems.concat(tickerItems).map((t, i) => (
          <span key={i} className="ticker__item">
            {t}
            <span className="ticker__diamond">◆</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
