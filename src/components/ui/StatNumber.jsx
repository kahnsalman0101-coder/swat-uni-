import { useEffect, useRef, useState } from 'react';
import useInView from '../../hooks/useInView';

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

const format = (value, decimals, separator) => {
  const fixed = value.toFixed(decimals);
  const [whole, fraction] = fixed.split('.');
  const grouped = separator ? whole.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : whole;
  return fraction ? `${grouped}.${fraction}` : grouped;
};

/**
 * StatNumber — count-up numeral that runs once, when scrolled into view.
 * Respects prefers-reduced-motion by snapping straight to the final value.
 */
export default function StatNumber({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
  separator = ',',
  duration = 1600,
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.4, once: true });
  const [display, setDisplay] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!inView) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDisplay(value);
      return undefined;
    }

    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      setDisplay(value * easeOutExpo(t));
      if (t < 1) frameRef.current = window.requestAnimationFrame(tick);
    };
    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [inView, value, duration]);

  const rendered = format(display, decimals, separator);

  return (
    <span ref={ref} className={`statnum ${className}`.trim()}>
      {prefix}
      <span aria-hidden="true">{rendered}</span>
      <span className="sr-only">
        {format(value, decimals, separator)}
      </span>
      {suffix ? <span className="stat__suffix">{suffix}</span> : null}
    </span>
  );
}
