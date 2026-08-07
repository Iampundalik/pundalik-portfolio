import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { SectionHead } from './SectionHead';
import { stack } from '../data/portfolio';
import './Stack.css';

const LEVEL_LABEL: Record<string, string> = { e: 'Expert', p: 'Proficient', l: 'Working' };

export function Stack() {
  return (
    <section className="section" id="stack">
      <SectionHead
        label="03 TECHNOLOGIES"
        line1="TECH"
        line2="STACK"
        sub="Tools I work with daily."
      />
      <Reveal delay={0.3}>
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
                    whileHover={{ y: -3, color: 'var(--accent)', borderColor: 'rgba(52,211,153,0.4)' }}
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
