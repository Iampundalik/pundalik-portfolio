import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Magnet } from './Magnetic';
import { FadeIn } from './FadeIn';
import { HeroObject } from './Decor';
import { profile } from '../data/portfolio';
import './Hero.css';

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div className="hero__stage" style={{ y, opacity }}>
        <div className="hero__headline">
          <FadeIn delay={0.05} y={16}>
            <p className="hero__role">
              SDET @ Amazon <span className="hero__role-via">(Quest Global)</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero__h1 hero-heading">Hi, i&apos;m pundalik</h1>
          </FadeIn>
        </div>

        <div className="hero__bar">
          <FadeIn delay={0.35} y={20}>
            <p className="hero__blurb">
              an sdet who builds test frameworks that catch the bug before your users do
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <a href={`mailto:${profile.email}`} className="pill pill--grad">
              Contact Me <ArrowRight size={14} strokeWidth={2.6} />
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} y={30} className="hero__obj-wrap">
          <Magnet padding={150} strength={3} className="hero__obj">
            <HeroObject />
          </Magnet>
        </FadeIn>
      </motion.div>
    </section>
  );
}
