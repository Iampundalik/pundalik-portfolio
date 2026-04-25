import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { stack } from '../data/portfolio';
import './Stack.css';

const LEVEL_LABEL: Record<string, string> = { e: 'Expert', p: 'Proficient', l: 'Working' };

export function Stack() {
  return (
    <section className="section" id="stack">
      <Reveal>
        <div className="sec-label">03 TECHNOLOGIES</div>
        <h2 className="sec-h">TECH<br /><span className="d">STACK</span></h2>
        <p className="sec-sub">Tools I work with daily.</p>
        <div className="stack__legend">
          {(['e', 'p', 'l'] as const).map(k => (
            <span key={k} className="stack__legend-item">
              <span className={`stack__dot stack__dot--${k}`} />
              {LEVEL_LABEL[k]}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="stack__cats">
        {stack.map((cat, i) => (
          <Reveal key={cat.cat} delay={i * 0.08}>
            <div>
              <div className="stack__cat-name">{cat.cat}</div>
              <div className="stack__tools">
                {cat.tools.map((t, k) => (
                  <motion.div
                    key={t.name}
                    className="stack__tool"
                    whileHover={{ y: -3, color: 'var(--blue)', borderColor: 'rgba(0,212,255,0.3)' }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: k * 0.03 }}
                  >
                    <span className={`stack__lvl stack__lvl--${t.level}`} />
                    {t.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
