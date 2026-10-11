import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, Circle, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHead } from './SectionHead';
import { experience } from '../data/portfolio';
import './Experience.css';

export function Experience() {
  const reduce = useReducedMotion();
  return (
    <section className="section alt" id="experience">
      <SectionHead
        label="02 EXPERIENCE"
        line1="WORK"
        line2="HISTORY"
        sub="Now SDET @ Amazon (Quest Global). Before that, promoted at a global iGaming leader — 3.5+ years across real-money casino platforms and enterprise RPA."
      />

      <div className="exp">
        {experience.map((e, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <motion.article
              className="exp__card"
              style={{ ['--lc' as string]: e.accent === 'blue' ? 'var(--accent)' : 'var(--sky)' }}
              whileHover={{ x: 4, borderColor: 'rgba(255,255,255,0.16)' }}
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
                  <motion.li
                    key={k}
                    initial={reduce ? false : { opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.45, delay: k * 0.06, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <ChevronRight size={12} strokeWidth={2.5} className="exp__chev" />
                    <span>{b}</span>
                  </motion.li>
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
