import { motion } from 'framer-motion';
import {
  FlaskConical, Smartphone, Bot, Zap, Brain, Globe, Dices, Network, Rocket, Hash,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHead } from './SectionHead';
import { Tilt } from './Tilt';
import { skills } from '../data/portfolio';
import './Skills.css';

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  flask: FlaskConical,
  phone: Smartphone,
  bot: Bot,
  zap: Zap,
  brain: Brain,
  globe: Globe,
  dice: Dices,
  graph: Network,
  rocket: Rocket,
  count: Hash,
};

export function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHead
        label="01 EXPERTISE"
        line1="WHAT I"
        line2="KNOW"
        sub="Full-spectrum quality engineering — manual and automated, mobile and web, from spec review through live production release."
      />

      <div className="skills">
        {skills.map((s, i) => {
          const Icon = ICONS[s.icon] || FlaskConical;
          const isCount = s.icon === 'count';
          return (
            <Reveal key={i} delay={(i % 3) * 0.08} className={`skill-cell skill--c${s.span}`}>
              <Tilt className="tilt">
              <motion.div
                className="skill"
                whileHover={{ y: -4, borderColor: 'rgba(52,211,153,0.35)' }}
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
                    <div className="skill__big">{s.title.replace(/\s*YEARS?$/i, '')}</div>
                    <div className="skill__big-l">{s.desc}</div>
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
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
