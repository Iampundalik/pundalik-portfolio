import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode, MouseEvent } from 'react';

type Props = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

/** Magnetic hover — child gravitates toward the cursor, springs back on leave. */
export function Magnetic({ children, strength = 0.25, className }: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.3 });

  if (reduce) {
    return <span className={className} style={{ display: 'inline-block' }}>{children}</span>;
  }

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  return (
    <motion.span
      className={className}
      style={{ x: sx, y: sy, display: 'inline-block' }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

type MagnetProps = {
  children: ReactNode;
  /** How far outside the element's bounds the magnetic field reaches, in px. */
  padding?: number;
  /** Divisor — higher means the element lags further behind the cursor. */
  strength?: number;
  className?: string;
};

/**
 * Field-based magnet. Unlike `Magnetic` (which only reacts while hovered), this
 * one starts pulling as soon as the cursor enters an invisible box `padding`
 * pixels around the element, so large hero art drifts before you reach it.
 */
export function Magnet({ children, padding = 150, strength = 3, className }: MagnetProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: globalThis.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const withinX = Math.abs(e.clientX - cx) < r.width / 2 + padding;
      const withinY = Math.abs(e.clientY - cy) < r.height / 2 + padding;

      if (withinX && withinY) {
        setActive(true);
        setOffset({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength });
      } else if (active) {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [active, padding, strength, reduce]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
