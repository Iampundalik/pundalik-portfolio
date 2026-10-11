import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { MockAI, MockBrowser, MockDashboard, MockTerminal, MockTestReport } from './QAMockups';
import { highlights, marqueeWords } from '../data/portfolio';
import './Marquee.css';

type Tile =
  | { kind: 'shot'; shot: string }
  | { kind: 'stat'; v: string; l: string }
  | { kind: 'word'; w: string; c: string };

const SHOTS: Record<string, () => React.ReactElement> = {
  report: MockTestReport,
  browser: MockBrowser,
  terminal: MockTerminal,
  dashboard: MockDashboard,
  ai: MockAI,
};

const ROW_A: Tile[] = [
  { kind: 'shot', shot: 'report' },
  { kind: 'stat', ...highlights[0] },
  { kind: 'shot', shot: 'browser' },
  { kind: 'word', ...marqueeWords[0] },
  { kind: 'shot', shot: 'terminal' },
  { kind: 'stat', ...highlights[1] },
  { kind: 'shot', shot: 'dashboard' },
  { kind: 'word', ...marqueeWords[1] },
  { kind: 'shot', shot: 'ai' },
  { kind: 'stat', ...highlights[2] },
  { kind: 'word', ...marqueeWords[2] },
];

const ROW_B: Tile[] = [
  { kind: 'word', ...marqueeWords[3] },
  { kind: 'shot', shot: 'dashboard' },
  { kind: 'stat', ...highlights[3] },
  { kind: 'shot', shot: 'ai' },
  { kind: 'word', ...marqueeWords[4] },
  { kind: 'shot', shot: 'browser' },
  { kind: 'stat', ...highlights[4] },
  { kind: 'shot', shot: 'report' },
  { kind: 'word', ...marqueeWords[5] },
  { kind: 'shot', shot: 'terminal' },
];

function TileCard({ tile }: { tile: Tile }) {
  if (tile.kind === 'shot') {
    const Shot = SHOTS[tile.shot];
    return (
      <div className="mq__tile mq__tile--shot">
        <Shot />
      </div>
    );
  }
  if (tile.kind === 'stat') {
    return (
      <div className="mq__tile mq__tile--stat">
        <div className="mq__stat-v">{tile.v}</div>
        <div className="mq__stat-l">{tile.l}</div>
      </div>
    );
  }
  return (
    <div className="mq__tile mq__tile--word">
      <div className="mq__word">{tile.w}</div>
      <div className="mq__word-c">{tile.c}</div>
    </div>
  );
}

function Row({ tiles, trackRef }: { tiles: Tile[]; trackRef: React.RefObject<HTMLDivElement | null> }) {
  // Tripled so the track always has material either side of the viewport.
  const tripled = [...tiles, ...tiles, ...tiles];
  return (
    <div className="mq__row">
      <div className="mq__track" ref={trackRef}>
        {tripled.map((t, i) => (
          <TileCard key={i} tile={t} />
        ))}
      </div>
    </div>
  );
}

/**
 * Two tile rows driven by page scroll rather than a timer — the top row slides
 * right and the bottom row left as the section crosses the viewport.
 */
export function Ticker() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowA = useRef<HTMLDivElement | null>(null);
  const rowB = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let frame = 0;

    const apply = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - top + window.innerHeight) * 0.3;
      const x = offset - 200;
      // The tracks sit one set to the left of centre, so both directions stay filled.
      if (rowA.current) rowA.current.style.transform = `translateX(calc(-33.333% + ${x}px))`;
      if (rowB.current) rowB.current.style.transform = `translateX(calc(-33.333% - ${x}px))`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reduce]);

  return (
    <section className="mq" ref={sectionRef} aria-label="Selected work and figures">
      <Row tiles={ROW_A} trackRef={rowA} />
      <Row tiles={ROW_B} trackRef={rowB} />
    </section>
  );
}
