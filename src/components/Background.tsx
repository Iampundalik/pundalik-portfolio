import { useEffect, useRef } from 'react';

type Orb = {
  x: number; y: number; r: number; vx: number; vy: number;
  baseA: number; a: number; c: string; phase: number; speed: number;
};
type Pt = { x: number; y: number; vx: number; vy: number; r: number; a: number; c: string };

export function Background() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();

    const VW = () => window.innerWidth;
    const VH = () => window.innerHeight;

    const orbs: Orb[] = Array.from({ length: 7 }, () => ({
      x: Math.random() * VW(),
      y: Math.random() * VH(),
      r: 150 + Math.random() * 220,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      baseA: 0.018 + Math.random() * 0.045,
      a: 0,
      c: Math.random() > 0.5 ? '0,212,255' : '0,255,157',
      phase: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.003,
    }));

    const reset = (p: Pt) => {
      p.x = Math.random() * VW();
      p.y = Math.random() * VH();
      p.vx = (Math.random() - 0.5) * 0.25;
      p.vy = (Math.random() - 0.5) * 0.25;
      p.r = 0.4 + Math.random() * 1.4;
      p.a = 0.1 + Math.random() * 0.4;
      p.c = Math.random() > 0.6 ? '0,212,255' : '0,255,157';
    };
    const pts: Pt[] = Array.from({ length: 110 }, () => {
      const p = { x: 0, y: 0, vx: 0, vy: 0, r: 0, a: 0, c: '' };
      reset(p as Pt);
      return p as Pt;
    });

    let t = 0;
    const frame = () => {
      ctx.clearRect(0, 0, VW(), VH());
      t++;
      for (const o of orbs) {
        o.x += o.vx; o.y += o.vy;
        o.a = o.baseA * (0.5 + 0.5 * Math.sin(t * o.speed + o.phase));
        if (o.x < -o.r) o.x = VW() + o.r;
        if (o.x > VW() + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = VH() + o.r;
        if (o.y > VH() + o.r) o.y = -o.r;
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, `rgba(${o.c},${o.a})`);
        g.addColorStop(1, `rgba(${o.c},0)`);
        ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
      }

      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        const dx = p.x - mouse.current.x, dy = p.y - mouse.current.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14400) {
          const f = (1 - Math.sqrt(d2) / 120) * 0.6;
          p.x += (dx / Math.sqrt(d2 || 1)) * f;
          p.y += (dy / Math.sqrt(d2 || 1)) * f;
        }
        if (p.x < 0 || p.x > VW() || p.y < 0 || p.y > VH()) reset(p);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${p.a})`; ctx.fill();
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 9025) {
            const a = 0.06 * (1 - Math.sqrt(d2) / 95);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const onResize = () => resize();
    const onMove = (e: MouseEvent) => { mouse.current.x = e.clientX; mouse.current.y = e.clientY; };
    const onLeave = () => { mouse.current.x = -1000; mouse.current.y = -1000; };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseout', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={ref}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse at top, rgba(0,212,255,0.04), transparent 50%),
            radial-gradient(ellipse at bottom, rgba(0,255,157,0.03), transparent 50%)
          `,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />
    </>
  );
}
