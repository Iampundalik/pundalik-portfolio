import { motion } from 'framer-motion';
import { ChevronRight, Circle, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { experience } from '../data/portfolio';
import './Experience.css';

export function Experience() {
  return (
    <section className="section alt" id="experience">
      <Reveal>
        <div className="sec-label">02 EXPERIENCE</div>
        <h2 className="sec-h">WORK<br /><span className="d">HISTORY</span></h2>
        <p className="sec-sub">Promoted at a global iGaming leader. 3 years across casino games and enterprise RPA.</p>
      </Reveal>

      <div className="exp">
        {experience.map((e, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <motion.article
              className="exp__card"
              style={{ ['--lc' as string]: e.accent === 'blue' ? 'var(--blue)' : 'var(--green)' }}
              whileHover={{ x: 4, borderColor: 'rgba(0,212,255,0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="exp__period">
                {e.period}
                {e.badges.map(b => (
                  b.tone === 'live'
                    ? (
                      <span key={b.label} className="exp__live">
                        <Circle size={6} fill="currentColor" />
                        {b.label}
                      </span>
                    )
                    : (
                      <span key={b.label} className="exp__promo">
                        <ArrowUpRight size={10} strokeWidth={2.5} />
                        {b.label}
                      </span>
                    )
                ))}
              </div>
              <h3 className="exp__co">{e.company}</h3>
              <p className="exp__role">// {e.role}</p>
              <ul className="exp__list">
                {e.bullets.map((b, k) => (
                  <li key={k}>
                    <ChevronRight size={12} strokeWidth={2.5} className="exp__chev" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className={`exp__foot exp__foot--${e.footTone}`}>{e.foot}</div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
