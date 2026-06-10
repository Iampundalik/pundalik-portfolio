import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';

const EASE = [0.23, 1, 0.32, 1] as const;

function Line({ text, className, base }: { text: string; className?: string; base: number }) {
  return (
    <span className={`sh-line${className ? ` ${className}` : ''}`}>
      {text.split('').map((c, i) => (
        <motion.span
          key={i}
          className="sh-char"
          variants={{
            hidden: { y: '110%', opacity: 0, rotateX: -45 },
            show: {
              y: '0%',
              opacity: 1,
              rotateX: 0,
              transition: { duration: 0.6, delay: base + i * 0.035, ease: EASE },
            },
          }}
        >
          {c === ' ' ? ' ' : c}
        </motion.span>
      ))}
    </span>
  );
}

type Props = {
  label: string;
  line1: string;
  line2: string;
  sub?: string;
  center?: boolean;
  h2Style?: CSSProperties;
};

/** Section heading with scroll-triggered per-character reveal. */
export function SectionHead({ label, line1, line2, sub, center, h2Style }: Props) {
  const reduce = useReducedMotion();
  const labelStyle = center ? { justifyContent: 'center' as const } : undefined;

  if (reduce) {
    return (
      <div>
        <div className="sec-label" style={labelStyle}>{label}</div>
        <h2 className="sec-h" style={h2Style}>
          {line1}
          <br />
          <span className="d">{line2}</span>
        </h2>
        {sub && <p className="sec-sub">{sub}</p>}
      </div>
    );
  }

  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
      <motion.div
        className="sec-label"
        style={labelStyle}
        variants={{
          hidden: { opacity: 0, x: -18 },
          show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
        }}
      >
        {label}
      </motion.div>
      <h2 className="sec-h" style={h2Style} aria-label={`${line1} ${line2}`}>
        <Line text={line1} base={0.05} />
        <Line text={line2} className="d" base={0.05 + line1.length * 0.035 + 0.1} />
      </h2>
      {sub && (
        <motion.p
          className="sec-sub"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6, ease: EASE } },
          }}
        >
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}
