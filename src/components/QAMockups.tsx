import { motion } from 'framer-motion';

const C = {
  bg: '#0d1016',
  bg2: '#12151c',
  border: 'rgba(52,211,153,0.18)',
  blue: '#7dd3fc',
  green: '#34d399',
  orange: '#fbc964',
  red: '#fb7185',
  dim: '#565e6c',
  dim2: '#8b93a5',
  white: '#f2f5f9',
};

function WindowChrome({ title }: { title: string }) {
  return (
    <g>
      <rect x="0" y="0" width="600" height="28" fill="#07080c" />
      <circle cx="14" cy="14" r="5" fill={C.red} />
      <circle cx="32" cy="14" r="5" fill={C.orange} />
      <circle cx="50" cy="14" r="5" fill={C.green} />
      <text x="300" y="18" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={C.dim2} textAnchor="middle">
        {title}
      </text>
    </g>
  );
}

export function MockTestReport() {
  return (
    <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="rg-pass" x1="0" x2="1">
          <stop offset="0%" stopColor={C.green} stopOpacity="0.7" />
          <stop offset="100%" stopColor={C.green} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="600" height="380" fill={C.bg} rx="6" />
      <WindowChrome title="allure-report — Test Results" />

      {/* Summary cards */}
      <g transform="translate(20,46)">
        {[
          { l: 'PASSED', v: '247', c: C.green },
          { l: 'FAILED', v: '3', c: C.red },
          { l: 'SKIPPED', v: '12', c: C.orange },
          { l: 'DURATION', v: '4m 12s', c: C.blue },
        ].map((s, i) => (
          <g key={i} transform={`translate(${i * 142}, 0)`}>
            <rect width="128" height="62" rx="5" fill={C.bg2} stroke={C.border} />
            <text x="12" y="22" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim} letterSpacing="1">{s.l}</text>
            <text x="12" y="46" fontFamily="Space Grotesk, sans-serif" fontSize="20" fontWeight="800" fill={s.c}>{s.v}</text>
          </g>
        ))}
      </g>

      {/* Test list */}
      <g transform="translate(20,128)">
        {[
          { name: 'test_login.py::auth::valid_credentials', status: 'pass', time: '1.2s' },
          { name: 'test_cart.py::add_multiple_items::guest', status: 'pass', time: '2.4s' },
          { name: 'test_checkout.py::apply_discount::invalid', status: 'pass', time: '0.9s' },
          { name: 'test_rng.py::slot_base::1000_spins', status: 'pass', time: '8.7s' },
          { name: 'test_paytable.py::free_spin_trigger::edge', status: 'fail', time: '3.1s' },
          { name: 'test_api.py::post_bet::schema', status: 'pass', time: '0.6s' },
          { name: 'test_jackpot.py::progressive_accrual', status: 'pass', time: '1.8s' },
        ].map((r, i) => {
          const ok = r.status === 'pass';
          return (
            <g key={i} transform={`translate(0, ${i * 30})`}>
              <rect width="560" height="26" rx="4" fill={C.bg2} opacity="0.5" />
              <circle cx="14" cy="13" r="4" fill={ok ? C.green : C.red} />
              <text x="28" y="17" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={C.white}>{r.name}</text>
              <text x="500" y="17" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim2}>{r.time}</text>
              <text x="540" y="17" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={ok ? C.green : C.red} textAnchor="end">{r.status.toUpperCase()}</text>
            </g>
          );
        })}
      </g>

      {/* Pass rate bar */}
      <g transform="translate(20, 348)">
        <rect width="560" height="6" rx="3" fill={C.bg2} />
        <rect width="540" height="6" rx="3" fill="url(#rg-pass)" />
        <text x="0" y="-8" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim} letterSpacing="1.5">PASS RATE 96.4%</text>
      </g>
    </svg>
  );
}

export function MockBrowser() {
  return (
    <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
      <rect width="600" height="380" fill={C.bg} rx="6" />
      <WindowChrome title="Selenium • chrome • staging.app.local" />

      {/* URL bar */}
      <rect x="68" y="40" width="464" height="20" rx="10" fill={C.bg2} stroke={C.border} />
      <text x="78" y="54" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim2}>https://staging.app.local/checkout/cart</text>
      <circle cx="540" cy="50" r="3" fill={C.green} />

      {/* Page mock — a fake e-commerce checkout */}
      <g transform="translate(28, 78)">
        <text x="0" y="14" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="800" fill={C.white}>YOUR CART</text>
        <line x1="0" y1="22" x2="544" y2="22" stroke={C.border} />

        {[
          { name: 'Item A — Variant Black/M', qty: '×2', price: '$24.00' },
          { name: 'Item B — Variant Blue/L', qty: '×1', price: '$59.00' },
          { name: 'Item C — Bundle Pack', qty: '×1', price: '$120.00' },
        ].map((it, i) => (
          <g key={i} transform={`translate(0, ${36 + i * 38})`}>
            <rect width="544" height="32" rx="4" fill={C.bg2} stroke={C.border} />
            <rect x="6" y="4" width="24" height="24" rx="3" fill={C.dim} />
            <text x="36" y="20" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill={C.white}>{it.name}</text>
            <text x="430" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={C.dim2}>{it.qty}</text>
            <text x="525" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={C.blue} textAnchor="end">{it.price}</text>
          </g>
        ))}

        <g transform="translate(0, 168)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim} letterSpacing="1">SUBTOTAL</text>
          <text x="544" y="0" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700" fill={C.green} textAnchor="end">$203.00</text>
        </g>

        <rect x="0" y="184" width="544" height="36" rx="4" fill={C.blue} />
        <text x="272" y="207" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={C.bg} textAnchor="middle" letterSpacing="2">PROCEED TO CHECKOUT →</text>

        {/* Locator highlight */}
        <rect x="-4" y="180" width="552" height="44" fill="none" stroke={C.green} strokeWidth="1.5" strokeDasharray="3 3" rx="6" />
        <text x="0" y="240" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.green}>driver.find_element(By.CSS_SELECTOR, "[data-testid=checkout]").click()</text>
      </g>
    </svg>
  );
}

export function MockTerminal() {
  const lines = [
    { c: C.green, t: '$ npx playwright test bet-settings --workers=4' },
    { c: C.dim2, t: 'Running 6 checks using 4 workers' },
    { c: C.green, t: '  ✓ EUR   default 1.00    min 0.20   max 100.00    match' },
    { c: C.green, t: '  ✓ USD   default 1.00    min 0.20   max 100.00    match' },
    { c: C.green, t: '  ✓ SEK   default 10.00   min 2.00   max 1000.00   match' },
    { c: C.green, t: '  ✓ ZAR   default 20.00   min 4.00   max 2000.00   match' },
    { c: C.green, t: '  ✓ AED   default 4.00    min 0.80   max 400.00    match' },
    { c: C.orange, t: '  ✗ GBP   max: config 50.00 ≠ live 100.00     MISMATCH' },
    { c: C.dim2, t: '──────────── 5 passed · 1 flagged · 12.4s ────────────' },
    { c: C.blue, t: '$ open reports/index.html' },
    { c: C.dim2, t: '✓ HTML + Allure report written, JSON evidence attached' },
    { c: C.green, t: '$ _' },
  ];
  return (
    <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
      <rect width="600" height="380" fill={C.bg} rx="6" />
      <WindowChrome title="iampundalik@qa-lab — bash" />
      <g transform="translate(20, 50)">
        {lines.map((l, i) => (
          <text key={i} x="0" y={i * 26 + 14} fontFamily="JetBrains Mono, monospace" fontSize="10" fill={l.c}>
            {l.t}
          </text>
        ))}
      </g>
    </svg>
  );
}

export function MockDashboard() {
  const bars = [38, 56, 42, 78, 64, 92, 71, 88, 67, 94, 82, 76];
  return (
    <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="bg-bar" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={C.blue} stopOpacity="1" />
          <stop offset="100%" stopColor={C.blue} stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="bg-line" x1="0" x2="1">
          <stop offset="0%" stopColor={C.green} />
          <stop offset="100%" stopColor={C.blue} />
        </linearGradient>
      </defs>
      <rect width="600" height="380" fill={C.bg} rx="6" />
      <WindowChrome title="QA Quality Dashboard — Sprint 24.4" />

      <g transform="translate(20, 46)">
        {[
          { l: 'DEFECT DENSITY', v: '0.18', c: C.green },
          { l: 'TEST COVERAGE', v: '92.4%', c: C.blue },
          { l: 'AUTOMATION ROI', v: '+213%', c: C.green },
          { l: 'OPEN BUGS', v: '7', c: C.orange },
        ].map((s, i) => (
          <g key={i} transform={`translate(${i * 142}, 0)`}>
            <rect width="128" height="62" rx="5" fill={C.bg2} stroke={C.border} />
            <text x="12" y="22" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim} letterSpacing="1">{s.l}</text>
            <text x="12" y="46" fontFamily="Space Grotesk, sans-serif" fontSize="18" fontWeight="800" fill={s.c}>{s.v}</text>
          </g>
        ))}
      </g>

      {/* Bar chart - tests per sprint */}
      <g transform="translate(20, 130)">
        <rect width="356" height="220" rx="5" fill={C.bg2} stroke={C.border} />
        <text x="14" y="22" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim2} letterSpacing="1">TESTS EXECUTED / DAY</text>
        {bars.map((h, i) => (
          <g key={i}>
            <rect x={20 + i * 28} y={200 - h * 1.4} width="18" height={h * 1.4} fill="url(#bg-bar)" rx="2" />
            <text x={29 + i * 28} y={212} fontFamily="JetBrains Mono, monospace" fontSize="7" fill={C.dim} textAnchor="middle">{i + 1}</text>
          </g>
        ))}
      </g>

      {/* Line chart - pass rate trend */}
      <g transform="translate(390, 130)">
        <rect width="190" height="220" rx="5" fill={C.bg2} stroke={C.border} />
        <text x="14" y="22" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim2} letterSpacing="1">PASS RATE</text>
        <polyline
          fill="none"
          stroke="url(#bg-line)"
          strokeWidth="2"
          points="20,180 45,160 70,140 95,150 120,110 145,95 170,80"
        />
        {[180, 160, 140, 150, 110, 95, 80].map((y, i) => (
          <circle key={i} cx={20 + i * 25} cy={y} r="3" fill={C.green} />
        ))}
        <text x="14" y="200" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700" fill={C.green}>96.8%</text>
      </g>
    </svg>
  );
}

export function MockAI() {
  const points = Array.from({ length: 80 }, (_, i) => {
    const x = i * 7.5;
    const y = 190 + Math.sin(i * 0.25) * 60 + Math.cos(i * 0.13) * 30;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="ai-grad" x1="0" x2="1">
          <stop offset="0%" stopColor={C.orange} />
          <stop offset="50%" stopColor={C.blue} />
          <stop offset="100%" stopColor={C.green} />
        </linearGradient>
      </defs>
      <rect width="600" height="380" fill={C.bg} rx="6" />
      <WindowChrome title="BugLogger — Gemini → Jira REST API" />

      {/* Prompt panel */}
      <g transform="translate(20, 46)">
        <rect width="560" height="80" rx="5" fill={C.bg2} stroke={C.border} />
        <text x="14" y="20" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim2} letterSpacing="1">RAW NOTE → STRUCTURED TICKET</text>
        <text x="14" y="40" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={C.white}>
          "free spins not awarded after retrigger on android build 412"
        </text>
        <text x="14" y="58" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={C.green}>
          → steps · severity · env · evidence → JIRA-4821 created
        </text>
        <rect x="14" y="64" width="80" height="12" rx="2" fill={C.green} opacity="0.2" />
        <text x="20" y="74" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={C.green}>FILED</text>
      </g>

      {/* Intake time saved */}
      <g transform="translate(0, 140)">
        <text x="20" y="0" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.dim2} letterSpacing="1">INTAKE TIME · 25 MIN → UNDER 5</text>
        <polyline points={points} fill="none" stroke="url(#ai-grad)" strokeWidth="1.6" />
        {/* Anomaly markers */}
        {[15, 38, 64].map((idx) => (
          <g key={idx}>
            <circle cx={idx * 7.5} cy={190 + Math.sin(idx * 0.25) * 60 + Math.cos(idx * 0.13) * 30} r="6" fill="none" stroke={C.orange} strokeWidth="1.5" />
            <line
              x1={idx * 7.5}
              y1={190 + Math.sin(idx * 0.25) * 60 + Math.cos(idx * 0.13) * 30 - 12}
              x2={idx * 7.5}
              y2={120}
              stroke={C.orange}
              strokeDasharray="2 3"
              opacity="0.6"
            />
            <text x={idx * 7.5} y={114} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={C.orange} textAnchor="middle">!</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function QAImage({ kind, accent }: { kind: string; accent?: string }) {
  let inner: React.ReactNode;
  if (kind === 'browser') inner = <MockBrowser />;
  else if (kind === 'terminal') inner = <MockTerminal />;
  else if (kind === 'ai') inner = <MockAI />;
  else inner = <MockDashboard />;
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: `0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px ${accent || 'rgba(52,211,153,0.18)'}33`,
        background: '#0d1016',
      }}
    >
      {inner}
    </motion.div>
  );
}
