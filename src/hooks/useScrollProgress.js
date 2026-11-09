import { useEffect, useState } from 'react';

/**
 * useScrollProgress — rAF-throttled document scroll progress.
 * Returns the full-document progress (0→1) plus a `scrolled` flag that turns
 * true once the page passes the navbar morph threshold (80px).
 */
export default function useScrollProgress(threshold = 80) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY || doc.scrollTop || 0;
      setProgress(max > 8 ? Math.min(1, Math.max(0, y / max)) : 0);
      setScrolled(y > threshold);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return { progress, scrolled };
}
