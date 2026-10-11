import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  /** Rendered element — use a semantic tag when the wrapper carries meaning. */
  as?: 'div' | 'span' | 'li' | 'p';
};

const EASE = [0.25, 0.1, 0.25, 1] as const;

/**
 * Enter-on-view wrapper. `amount: 0` fires as soon as a single pixel crosses the
 * margin, so tall blocks animate on approach rather than waiting to be centred.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = 'div',
}: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
