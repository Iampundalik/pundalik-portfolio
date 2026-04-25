import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MarqueePkg from 'react-fast-marquee';
import { Reveal } from './Reveal';

const Marquee = ((MarqueePkg as unknown as { default?: typeof MarqueePkg }).default ?? MarqueePkg) as typeof MarqueePkg;
import { MockTestReport, MockBrowser, MockTerminal, MockDashboard, MockAI } from './QAMockups';
import './QALab.css';

const galleryRow1 = [
  { kind: 'report', label: 'Playwright Report', node: <MockTestReport /> },
  { kind: 'dashboard', label: 'Quality Dashboard', node: <MockDashboard /> },
  { kind: 'browser', label: 'E2E Browser Test', node: <MockBrowser /> },
  { kind: 'terminal', label: 'CI Pipeline', node: <MockTerminal /> },
  { kind: 'ai', label: 'AI Anomaly Detector', node: <MockAI /> },
];

const galleryRow2 = [
  { kind: 'browser', label: 'Cross-Browser Run', node: <MockBrowser /> },
  { kind: 'terminal', label: 'pytest CLI', node: <MockTerminal /> },
  { kind: 'report', label: 'Coverage Report', node: <MockTestReport /> },
  { kind: 'ai', label: 'LLM Test Gen', node: <MockAI /> },
  { kind: 'dashboard', label: 'Sprint Metrics', node: <MockDashboard /> },
];

function GalleryCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.div
      className="lab__card"
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="lab__card-media">{children}</div>
      <div className="lab__card-label">
        <span className="lab__card-dot" />
        {label}
      </div>
    </motion.div>
  );
}

export function QALab() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const tx = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="section" id="gallery" ref={ref}>
      <Reveal>
        <div className="sec-label">05 QA LAB</div>
        <h2 className="sec-h">EVIDENCE,<br /><span className="d">SHIPPED</span></h2>
        <p className="sec-sub">A snapshot of the artefacts I work with daily — test reports, automation runs, dashboards, AI-assisted analysis.</p>
      </Reveal>

      <div className="lab__rows">
        <Marquee speed={30} gradient gradientColor="#020408" gradientWidth={120} pauseOnHover>
          {galleryRow1.map((g, i) => (
            <GalleryCard key={i} label={g.label}>{g.node}</GalleryCard>
          ))}
        </Marquee>

        <Marquee speed={26} direction="right" gradient gradientColor="#020408" gradientWidth={120} pauseOnHover>
          {galleryRow2.map((g, i) => (
            <GalleryCard key={i} label={g.label}>{g.node}</GalleryCard>
          ))}
        </Marquee>
      </div>

      {/* Parallax stat strip */}
      <motion.div className="lab__strip" style={{ x: tx }}>
        <div className="lab__strip-track">
          {['96.8% PASS RATE', '247 TESTS / RUN', '4.2 MIN AVG SUITE', '0.18 DEFECT DENSITY', '+213% AUTOMATION ROI', '92.4% COVERAGE',
            '96.8% PASS RATE', '247 TESTS / RUN', '4.2 MIN AVG SUITE', '0.18 DEFECT DENSITY', '+213% AUTOMATION ROI', '92.4% COVERAGE',
          ].map((s, i) => (
            <span key={i} className="lab__strip-item">{s}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
