import Lenis from 'lenis';

let lenis: Lenis | null = null;

/**
 * Inertial smooth scrolling (Lenis) + soft anchor navigation.
 * No-op when the user prefers reduced motion — native scrolling stays.
 * Returns a cleanup function for React effects.
 */
export function initSmoothScroll(): (() => void) | undefined {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (lenis) return;

  lenis = new Lenis({ lerp: 0.1 });

  let raf = 0;
  const loop = (time: number) => {
    lenis?.raf(time);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  // Route in-page anchor clicks through Lenis so they glide instead of jump.
  const onClick = (e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null;
    if (!a) return;
    const id = a.getAttribute('href')?.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    lenis?.scrollTo(el, { offset: -72, duration: 1.2 });
    history.replaceState(null, '', `#${id}`);
  };
  document.addEventListener('click', onClick);

  return () => {
    document.removeEventListener('click', onClick);
    cancelAnimationFrame(raf);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1 });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}
