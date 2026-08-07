import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Magnetic } from './Magnetic';
import { ScrambleText } from './ScrambleText';
import { useRef } from 'react';
import { profile, metrics } from '../data/portfolio';
import './Hero.css';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({ opacity: 1, y: 0, transition: { delay: d, duration: 0.7, ease: EASE_OUT } }),
};

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const fullName = profile.name;

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div className="hero__inner" style={{ y, opacity }}>
        <motion.p
          className="hero__pre"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <span className="hero__chev">{'>'}</span>
          pundalik_mhamal.profile
          <span className="hero__caret" />
        </motion.p>

        <h1 className="hero__h1">
          <motion.span
            className="hero__line hero__line--gradient"
            initial={reduce ? false : { opacity: 0, y: 40, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <ScrambleText text={fullName} duration={1200} delay={350} />
          </motion.span>
        </h1>

        <motion.p
          className="hero__role"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
        >
          {profile.role}
          <span className="sep">//</span>
          {profile.company}
          <span className="sep">//</span>
          {profile.tagline}
        </motion.p>

        <motion.p
          className="hero__sub"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          <strong>3.5 years</strong> across live, real-money gaming platforms and enterprise
          software — including <strong>1.5 years fully remote</strong> across time zones.
          Manual and automated QA on <strong>Android, iOS and web</strong>, a{' '}
          <strong>Selenium + Cucumber BDD</strong> suite wired into Jenkins CI/CD, and backend
          REST/SQL validation. ISTQB CTFL certified. GLI compliant.
        </motion.p>

        <motion.div
          className="hero__ctas"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.85}
        >
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              GET IN TOUCH <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <LinkedinIcon size={14} /> LINKEDIN <ExternalLink size={12} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <GithubIcon size={14} /> GITHUB <ExternalLink size={12} />
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          className="hero__metrics"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.l}
              className="hero__metric"
              whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.05)' }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ transitionDelay: `${1 + i * 0.05}s` }}
            >
              <div className="hero__metric-v">
                <ScrambleText text={m.v} duration={650} delay={1100 + i * 140} />
              </div>
              <div className="hero__metric-l">{m.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <span>scroll</span>
        <ChevronDown size={14} className="hero__scroll-icon" />
      </motion.div>

      <div className="hero__scanlines" aria-hidden />
    </section>
  );
}
