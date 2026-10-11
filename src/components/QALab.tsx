import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MarqueePkg from 'react-fast-marquee';
import { SectionHead } from './SectionHead';
import { impactStats } from '../data/portfolio';

const Marquee = ((MarqueePkg as unknown as { default?: typeof MarqueePkg }).default ?? MarqueePkg) as typeof MarqueePkg;
import { MockTestReport, MockBrowser, MockTerminal, MockDashboard, MockAI } from './QAMockups';
import './QALab.css';

const galleryRow1 = [
  { kind: 'report', label: 'Allure Report', node: <MockTestReport /> },
  { kind: 'dashboard', label: 'Quality Dashboard', node: <MockDashboard /> },
  { kind: 'browser', label: 'E2E Browser Test', node: <MockBrowser /> },
  { kind: 'terminal', label: 'CI Pipeline', node: <MockTerminal /> },
  { kind: 'ai', label: 'BugLogger', node: <MockAI /> },
];

const galleryRow2 = [
  { kind: 'browser', label: 'Cross-Browser Run', node: <MockBrowser /> },
  { kind: 'terminal', label: 'Playwright Run', node: <MockTerminal /> },
  { kind: 'report', label: 'Coverage Report', node: <MockTestReport /> },
  { kind: 'ai', label: 'LLM Defect Reports', node: <MockAI /> },
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
      <SectionHead
        label="05 QA LAB"
        line1="EVIDENCE,"
        line2="SHIPPED"
        sub="A snapshot of the artefacts I work with daily — Allure reports, automation runs, coverage dashboards and LLM-powered defect reporting."
      />

      <div className="lab__rows">
        <Marquee speed={30} gradient gradientColor="#06070a" gradientWidth={120} pauseOnHover>
          {galleryRow1.map((g, i) => (
            <GalleryCard key={i} label={g.label}>{g.node}</GalleryCard>
          ))}
        </Marquee>

        <Marquee speed={26} direction="right" gradient gradientColor="#06070a" gradientWidth={120} pauseOnHover>
          {galleryRow2.map((g, i) => (
            <GalleryCard key={i} label={g.label}>{g.node}</GalleryCard>
          ))}
        </Marquee>
      </div>

      {/* Parallax stat strip — real, resume-backed outcomes */}
      <motion.div className="lab__strip" style={{ x: tx }}>
        <div className="lab__strip-track">
          {impactStats.concat(impactStats).map((s, i) => (
            <span key={i} className="lab__strip-item">{s}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
