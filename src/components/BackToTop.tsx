import { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../lib/smoothScroll';
import './BackToTop.css';

/** Floating back-to-top button with a scroll-progress ring. */
export function BackToTop() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="btt"
          aria-label="Back to top"
          initial={reduce ? false : { opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          whileHover={reduce ? undefined : { scale: 1.08 }}
          whileTap={reduce ? undefined : { scale: 0.92 }}
          onClick={() => (reduce ? window.scrollTo({ top: 0 }) : scrollToTop())}
        >
          <svg className="btt__ring" viewBox="0 0 44 44" aria-hidden>
            <circle className="btt__track" cx="22" cy="22" r="19" />
            <motion.circle
              className="btt__bar"
              cx="22"
              cy="22"
              r="19"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp size={16} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
