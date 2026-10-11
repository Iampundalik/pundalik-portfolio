import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

type Props = {
  text: string;
  className?: string;
};

function Char({
  char,
  range,
  progress,
}: {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="atext__char">
      {char === ' ' ? ' ' : char}
    </motion.span>
  );
}

/**
 * Scroll-driven reveal — characters brighten left to right as the paragraph
 * travels up the viewport. Split text is hidden from assistive tech; the real
 * sentence is exposed once via aria-label.
 */
export function AnimatedText({ text, className }: Props) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  const chars = text.split('');
  const step = 1 / chars.length;

  return (
    <p ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {chars.map((c, i) => (
          <Char
            key={i}
            char={c}
            range={[i * step, Math.min(1, (i + 3) * step)]}
            progress={scrollYProgress}
          />
        ))}
      </span>
    </p>
  );
}
