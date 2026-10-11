/**
 * Hand-drawn SVG props for the editorial layout — an isometric hero object and
 * four smaller shapes that anchor the corners of the About slab. Everything is
 * vector and inline, so the layout carries no image payload and stays on-palette
 * in every viewport.
 */

/** Isometric slab: a rhombus top face plus the two visible side walls. */
function Slab({
  cx,
  cy,
  w,
  h,
  d,
  fill,
  side,
  sideDark,
  opacity = 1,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  d: number;
  fill: string;
  side: string;
  sideDark: string;
  opacity?: number;
}) {
  return (
    <g opacity={opacity}>
      <polygon
        points={`${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx - w},${cy + d}`}
        fill={sideDark}
      />
      <polygon
        points={`${cx + w},${cy} ${cx},${cy + h} ${cx},${cy + h + d} ${cx + w},${cy + d}`}
        fill={side}
      />
      <polygon
        points={`${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`}
        fill={fill}
        stroke="rgba(167,243,208,0.55)"
        strokeWidth="1.2"
      />
    </g>
  );
}

/**
 * The hero centrepiece — three floating slabs read as the test pyramid: broad
 * unit coverage at the base, narrowing to the end-to-end tip.
 */
export function HeroObject() {
  return (
    <svg viewBox="0 0 560 640" xmlns="http://www.w3.org/2000/svg" className="hero-obj__svg" aria-hidden="true">
      <defs>
        <linearGradient id="ho-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="55%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#0f9b74" />
        </linearGradient>
        <linearGradient id="ho-top2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d6fbea" />
          <stop offset="60%" stopColor="#4ade9f" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <radialGradient id="ho-glow" cx="50%" cy="52%" r="50%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
          <stop offset="55%" stopColor="#10b981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#06070a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="280" cy="330" rx="270" ry="270" fill="url(#ho-glow)" />

      {/* Vertical guides linking the stack, echoing an exploded assembly drawing */}
      {[
        [50, 300, 155],
        [510, 300, 155],
      ].map(([x, y1, len], i) => (
        <line
          key={i}
          x1={x}
          y1={y1}
          x2={x}
          y2={y1 + len}
          stroke="rgba(167,243,208,0.28)"
          strokeWidth="1"
          strokeDasharray="5 7"
        />
      ))}

      {/* Base — the broad unit / API layer */}
      <Slab cx={280} cy={430} w={230} h={116} d={40} fill="url(#ho-top)" side="#0b7a5c" sideDark="#07553f" />

      {/* Middle — integration */}
      <Slab cx={280} cy={300} w={168} h={85} d={34} fill="url(#ho-top2)" side="#0f9b74" sideDark="#0a6e52" opacity={0.96} />

      {/* Tip — end-to-end, drawn as an open wireframe */}
      <g>
        <polygon
          points="280,110 388,164 280,218 172,164"
          fill="none"
          stroke="rgba(167,243,208,0.75)"
          strokeWidth="1.6"
        />
        <polygon points="280,140 340,170 280,200 220,170" fill="url(#ho-top2)" opacity="0.9" />
        <polygon points="220,170 280,200 280,222 220,192" fill="#0a6e52" />
        <polygon points="340,170 280,200 280,222 340,192" fill="#0f9b74" />
      </g>

      {/* Orbiting specks */}
      {[
        [96, 214, 3.5],
        [452, 250, 2.6],
        [120, 520, 2.6],
        [438, 500, 3.2],
        [280, 62, 2.4],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#a7f3d0" opacity="0.65" />
      ))}
    </svg>
  );
}

/** Cratered sphere — the "moon" in the top-left corner of the About slab. */
export function DecorSphere() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="ds-body" cx="34%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#d9fbec" />
          <stop offset="42%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#064e3b" />
        </radialGradient>
        <radialGradient id="ds-halo" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#34d399" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="96" fill="url(#ds-halo)" />
      <circle cx="100" cy="100" r="72" fill="url(#ds-body)" />
      {[
        [78, 74, 13],
        [124, 108, 9],
        [88, 128, 7],
        [130, 66, 5],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#06070a" opacity="0.16" />
      ))}
    </svg>
  );
}

/** Isometric cube, bottom-left. */
export function DecorCube() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="dc-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <polygon points="100,34 168,74 100,114 32,74" fill="url(#dc-top)" />
      <polygon points="32,74 100,114 100,168 32,128" fill="#07553f" />
      <polygon points="168,74 100,114 100,168 168,128" fill="#0b7a5c" />
      <polygon
        points="100,34 168,74 168,128 100,168 32,128 32,74"
        fill="none"
        stroke="rgba(167,243,208,0.4)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/** Stacked blocks, top-right — coverage building up layer by layer. */
export function DecorBlocks() {
  const rows = [
    { y: 118, w: 62, fill: '#0f9b74' },
    { y: 88, w: 48, fill: '#34d399' },
    { y: 58, w: 34, fill: '#a7f3d0' },
  ];
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {rows.map((r, i) => (
        <g key={i}>
          <polygon
            points={`100,${r.y - r.w * 0.5} ${100 + r.w},${r.y} 100,${r.y + r.w * 0.5} ${100 - r.w},${r.y}`}
            fill={r.fill}
            stroke="rgba(6,7,10,0.25)"
            strokeWidth="1"
          />
          <polygon
            points={`${100 - r.w},${r.y} 100,${r.y + r.w * 0.5} 100,${r.y + r.w * 0.5 + 16} ${100 - r.w},${r.y + 16}`}
            fill="#07553f"
          />
          <polygon
            points={`${100 + r.w},${r.y} 100,${r.y + r.w * 0.5} 100,${r.y + r.w * 0.5 + 16} ${100 + r.w},${r.y + 16}`}
            fill="#0b7a5c"
          />
        </g>
      ))}
    </svg>
  );
}

/** Orbit rings, bottom-right. */
export function DecorOrbit() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="do-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#0f9b74" />
        </linearGradient>
      </defs>
      <g stroke="url(#do-ring)" fill="none" strokeWidth="2">
        <ellipse cx="100" cy="100" rx="86" ry="34" />
        <ellipse cx="100" cy="100" rx="86" ry="34" transform="rotate(60 100 100)" />
        <ellipse cx="100" cy="100" rx="86" ry="34" transform="rotate(-60 100 100)" />
      </g>
      <circle cx="100" cy="100" r="22" fill="#34d399" />
      <circle cx="92" cy="92" r="8" fill="#d9fbec" opacity="0.75" />
      <circle cx="186" cy="100" r="5" fill="#a7f3d0" />
    </svg>
  );
}
