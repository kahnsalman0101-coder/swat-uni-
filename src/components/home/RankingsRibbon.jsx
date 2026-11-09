import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import rankings from '../../data/rankings.json';
import SectionLabel from '../ui/SectionLabel';

/**
 * RankingsRibbon — draggable horizontal band of oversized serif numerals
 * separated by gold rules. Drag is constrained to the measured overflow so the
 * rail can never be pulled past its own content; arrow keys also move it.
 */
export default function RankingsRibbon() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      setDragLimit(Math.max(0, track.scrollWidth - viewport.offsetWidth));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section className="section section--sm rank-ribbon" data-chapter="Rankings">
      <div className="shell">
        <SectionLabel>Proof of impact — 2025 / 2026</SectionLabel>
      </div>

      <div
        ref={viewportRef}
        className="shell"
        style={{ overflow: 'hidden', marginTop: 26 }}
      >
        <motion.div
          ref={trackRef}
          className="rank-ribbon__row"
          drag="x"
          dragConstraints={{ left: -dragLimit, right: 0 }}
          dragElastic={0.06}
          dragTransition={{ power: 0.28, timeConstant: 320 }}
          whileTap={{ cursor: 'grabbing' }}
          tabIndex={0}
          role="group"
          aria-label="University rankings — drag or use arrow keys to explore"
          onKeyDown={(event) => {
            const step = 240;
            if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
            event.preventDefault();
            const node = trackRef.current;
            if (!node) return;
            const current = Number(node.dataset.offset || 0);
            const next = Math.min(
              0,
              Math.max(-dragLimit, current + (event.key === 'ArrowRight' ? -step : step))
            );
            node.dataset.offset = String(next);
            node.animate(
              [{ transform: `translateX(${current}px)` }, { transform: `translateX(${next}px)` }],
              { duration: 380, easing: 'cubic-bezier(0.22,1,0.36,1)', fill: 'forwards' }
            );
          }}
        >
          {rankings.ribbon.map((entry, index) => (
            <div key={entry.id} style={{ display: 'contents' }}>
              <article className="rank-item">
                <span className="rank-item__num">{entry.num}</span>
                <div className="rank-item__meta">
                  <p className="rank-item__label" style={{ margin: 0 }}>
                    {entry.label}
                  </p>
                  <p className="rank-item__desc">{entry.desc}</p>
                </div>
              </article>
              {index < rankings.ribbon.length - 1 ? (
                <span className="rank-rule" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </motion.div>
      </div>

      <p className="rank-ribbon__hint" aria-hidden="true">
        Drag ↔
      </p>
    </section>
  );
}
