import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

const GLYPHS = '!<>-_\\/[]{}=+*^?#ABCDEF0123456789';

type Props = {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
};

/** Cyberpunk decode effect — characters settle left-to-right from random glyphs. */
export function ScrambleText({ text, className, duration = 900, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [out, setOut] = useState(text);
  const raf = useRef(0);

  useEffect(() => {
    // `out` starts as the final text, so nothing to do until the effect runs
    if (!inView || reduce) return;
    let start: number | null = null;
    const timer = window.setTimeout(() => {
      const tick = (now: number) => {
        if (start === null) start = now;
        const p = Math.min((now - start) / duration, 1);
        const settled = Math.floor(p * text.length);
        let s = '';
        for (let i = 0; i < text.length; i++) {
          const c = text[i];
          s += i < settled || c === ' ' ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setOut(p < 1 ? s : text);
        if (p < 1) raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf.current);
    };
  }, [inView, reduce, text, duration, delay]);

  // Assistive tech reads the real string; only the animating glyphs are hidden.
  // (`role="text"` is non-standard and unsupported outside Safari, so it isn't used.)
  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{out}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
