import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
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
            {fullName}
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
          <strong>3+ years</strong> engineering quality at scale.
          Playwright, Selenium, API testing, CI/CD pipelines — with hands-on knowledge in{' '}
          <strong>AI-assisted testing</strong>, <strong>Kubernetes</strong>, <strong>networking</strong>, and <strong>DSA</strong>.
          ISTQB Certified. GLI compliant. Promotion-proven at Light &amp; Wonder.
        </motion.p>

        <motion.div
          className="hero__ctas"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.85}
        >
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            GET IN TOUCH <ArrowRight size={14} strokeWidth={2.5} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            <LinkedinIcon size={14} /> LINKEDIN <ExternalLink size={12} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            <GithubIcon size={14} /> GITHUB <ExternalLink size={12} />
          </a>
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
              whileHover={{ y: -3, backgroundColor: 'rgba(0,212,255,0.08)' }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ transitionDelay: `${1 + i * 0.05}s` }}
            >
              <div className="hero__metric-v">{m.v}</div>
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
