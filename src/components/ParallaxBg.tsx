import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

function GridImage({ accent = '#00d4ff' }: { accent?: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid-p" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={accent} strokeOpacity="0.12" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="600" height="600" fill="url(#grid-p)" />
    </svg>
  );
}

function CodeBlock() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="280" fill="#080f18" rx="6" />
      <rect width="400" height="22" fill="#000a14" />
      <circle cx="12" cy="11" r="3.5" fill="#ff4757" /><circle cx="26" cy="11" r="3.5" fill="#ff6b35" /><circle cx="40" cy="11" r="3.5" fill="#00ff9d" />
      {[
        { c: '#6a8faa', t: 'import { test, expect } from "@playwright/test";' },
        { c: '#ffffff', t: '' },
        { c: '#00d4ff', t: 'test("checkout flow → completes successfully",' },
        { c: '#00d4ff', t: '  async ({ page }) => {' },
        { c: '#6a8faa', t: '    await page.goto("/products");' },
        { c: '#6a8faa', t: '    await page.click("[data-test=add-to-cart]");' },
        { c: '#00ff9d', t: '    await expect(page.locator(".cart-count"))' },
        { c: '#00ff9d', t: '      .toHaveText("1");' },
        { c: '#00d4ff', t: '});' },
      ].map((l, i) => (
        <text key={i} x="14" y={50 + i * 22} fontFamily="JetBrains Mono, monospace" fontSize="11" fill={l.c}>{l.t}</text>
      ))}
    </svg>
  );
}

function ChartTile() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="280" fill="#080f18" rx="6" />
      <text x="20" y="30" fontFamily="Share Tech Mono, monospace" fontSize="10" fill="#6a8faa" letterSpacing="2">PASS RATE / SPRINT</text>
      <polyline fill="none" stroke="#00ff9d" strokeWidth="2" points="20,200 80,170 140,150 200,140 260,100 320,90 380,60" />
      {[200, 170, 150, 140, 100, 90, 60].map((y, i) => (
        <circle key={i} cx={20 + i * 60} cy={y} r="3" fill="#00d4ff" />
      ))}
      <text x="380" y="55" fontFamily="Orbitron, sans-serif" fontWeight="700" fontSize="14" fill="#00ff9d" textAnchor="end">96.8%</text>
    </svg>
  );
}

function TerminalTile() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="280" fill="#080f18" rx="6" />
      <rect width="400" height="22" fill="#000a14" />
      <text x="200" y="14" fontFamily="Share Tech Mono, monospace" fontSize="9" fill="#6a8faa" textAnchor="middle">qa@runner — bash</text>
      {[
        { c: '#00ff9d', t: '$ npx playwright test --reporter=list' },
        { c: '#6a8faa', t: 'Running 247 tests using 6 workers' },
        { c: '#00ff9d', t: '✓ login.spec.ts:8  (1.2s)' },
        { c: '#00ff9d', t: '✓ cart.spec.ts:14  (2.4s)' },
        { c: '#00ff9d', t: '✓ checkout.spec.ts:22  (3.1s)' },
        { c: '#00d4ff', t: '247 passed (4m 12s)' },
      ].map((l, i) => (
        <text key={i} x="14" y={50 + i * 22} fontFamily="JetBrains Mono, monospace" fontSize="10" fill={l.c}>{l.t}</text>
      ))}
    </svg>
  );
}

export function ParallaxBg() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -900]);
  const y4 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -1200]);
  const yGrid = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -200]);

  const tiles = [
    { Component: CodeBlock, top: '8%', left: '-3%', rotate: -6, opacity: 0.18, y: y1, w: 380 },
    { Component: ChartTile, top: '22%', right: '-4%', rotate: 5, opacity: 0.16, y: y2, w: 360 },
    { Component: TerminalTile, top: '48%', left: '8%', rotate: -3, opacity: 0.14, y: y3, w: 360 },
    { Component: CodeBlock, top: '70%', right: '6%', rotate: 4, opacity: 0.13, y: y4, w: 340 },
    { Component: ChartTile, top: '88%', left: '-2%', rotate: -7, opacity: 0.15, y: y1, w: 380 },
  ];

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          y: yGrid,
        }}
      >
        <GridImage />
      </motion.div>

      {tiles.map((t, i) => {
        const Comp = t.Component;
        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: t.top,
              left: t.left,
              right: t.right,
              width: t.w,
              opacity: t.opacity,
              y: t.y,
              rotate: t.rotate,
              filter: 'blur(0.4px)',
              transformOrigin: 'center',
            }}
          >
            <Comp />
          </motion.div>
        );
      })}

      {/* Vignette overlay so text remains readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at center, transparent 20%, rgba(2,4,8,0.4) 60%, rgba(2,4,8,0.85) 100%)
          `,
        }}
      />
    </div>
  );
}
