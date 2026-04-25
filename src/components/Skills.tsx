import { motion } from 'framer-motion';
import {
  FlaskConical, Theater, Bot, Zap, Brain, Cloud, Dices, Network, Rocket, Hash,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { skills } from '../data/portfolio';
import './Skills.css';

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  flask: FlaskConical,
  theater: Theater,
  bot: Bot,
  zap: Zap,
  brain: Brain,
  cloud: Cloud,
  dice: Dices,
  graph: Network,
  rocket: Rocket,
  count: Hash,
};

export function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <div className="sec-label">01 EXPERTISE</div>
        <h2 className="sec-h">WHAT I<br /><span className="d">KNOW</span></h2>
        <p className="sec-sub">Full spectrum quality engineering — strategy, execution, automation, AI-augmented testing.</p>
      </Reveal>

      <div className="skills">
        {skills.map((s, i) => {
          const Icon = ICONS[s.icon] || FlaskConical;
          const isCount = s.icon === 'count';
          return (
            <Reveal key={i} delay={(i % 3) * 0.08} className={`skill-cell skill--c${s.span}`}>
              <motion.div
                className="skill"
                whileHover={{ y: -4, borderColor: 'rgba(0,212,255,0.35)' }}
                transition={{ duration: 0.25 }}
              >
                <span className="skill__topbar" />
                {!isCount && (
                  <div className="skill__icon">
                    <Icon size={26} strokeWidth={1.6} />
                  </div>
                )}
                {isCount ? (
                  <>
                    <div className="skill__big">3+</div>
                    <div className="skill__big-l">Years shipping quality</div>
                  </>
                ) : (
                  <>
                    <div className="skill__title">{s.title}</div>
                    <div className="skill__desc">{s.desc}</div>
                  </>
                )}
                <div className="tags">
                  {s.tags.map((t, k) => (
                    <span key={k} className={`tag ${t.tone}`}>{t.label}</span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
