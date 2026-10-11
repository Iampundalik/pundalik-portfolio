import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { MockAI, MockBrowser, MockDashboard, MockTerminal, MockTestReport } from './QAMockups';
import { projects, projectMeta } from '../data/portfolio';
import './Projects.css';

const SHOTS: Record<string, () => React.ReactElement> = {
  report: MockTestReport,
  browser: MockBrowser,
  terminal: MockTerminal,
  dashboard: MockDashboard,
  ai: MockAI,
};

function Shot({ kind, className }: { kind: string; className?: string }) {
  const Mock = SHOTS[kind] ?? MockDashboard;
  return (
    <div className={`proj__shot ${className ?? ''}`}>
      <Mock />
    </div>
  );
}

type Project = (typeof projects)[number];

function Card({
  p,
  index,
  total,
  progress,
}: {
  p: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  // Every card below the top of the stack settles a little smaller, so the
  // finished pile reads as depth rather than a flat overlap.
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const meta = projectMeta[p.name] ?? { category: 'Project', shots: ['dashboard', 'terminal', 'browser'] };

  return (
    <div className="proj__slot">
      <motion.article
        className="proj__card"
        style={{
          scale: reduce ? 1 : scale,
          top: `calc(var(--stack-top) + ${index * 28}px)`,
        }}
      >
        <header className="proj__head">
          <div className="proj__num">{String(index + 1).padStart(2, '0')}</div>
          <div className="proj__id">
            <div className="proj__cat">{meta.category}</div>
            <h3 className="proj__name">{p.name}</h3>
            <p className="proj__desc">{p.desc}</p>
          </div>
          {p.href ? (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill--ghost proj__cta"
            >
              View Source <ArrowUpRight size={14} strokeWidth={2.4} />
            </a>
          ) : (
            <span className="pill pill--ghost proj__cta proj__cta--locked">
              <Lock size={12} strokeWidth={2.4} /> {p.note}
            </span>
          )}
        </header>

        <div className="proj__grid">
          <div className="proj__col proj__col--a">
            <Shot kind={meta.shots[0]} className="proj__shot--sm" />
            <Shot kind={meta.shots[1]} className="proj__shot--md" />
          </div>
          <div className="proj__col proj__col--b">
            <Shot kind={meta.shots[2]} className="proj__shot--tall" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function Projects() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="proj" id="projects" ref={container}>
      <FadeIn y={40}>
        <h2 className="proj__h2 hero-heading">Projects</h2>
      </FadeIn>

      {projects.map((p, i) => (
        <Card key={p.name} p={p} index={i} total={projects.length} progress={scrollYProgress} />
      ))}
    </section>
  );
}
