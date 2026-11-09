import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import { IMAGES } from '../../lib/img';

const CAPTIONS = [
  'Studio critique · Faculty of Arts & Humanities',
  'North colonnade · Charbagh Campus',
  'Research poster session · ORIC',
  'Central Library reading room',
  'Inter-faculty finals · Upper ground',
  'Teaching laboratory · Life Sciences',
  'Cultural evening · Attan performance',
  'Botanical greenhouse · endemic species',
];

/**
 * ParallaxFigure — one masonry tile whose image drifts against the scroll.
 * Motion is skipped entirely for reduced-motion users.
 */
function ParallaxFigure({ src, caption, index }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const drift = index % 2 === 0 ? 34 : 22;
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);

  return (
    <motion.figure ref={ref} className="gallery__item" style={{ y: reduceMotion ? 0 : y }}>
      <img
        src={src}
        alt={caption}
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-sm)' }}
      />
      <figcaption>{caption}</figcaption>
    </motion.figure>
  );
}

/**
 * GalleryMasonry — parallax masonry plate of campus life, drawn from the
 * eight art-directed images in lib/img.js.
 */
export default function GalleryMasonry() {
  return (
    <section className="section section--alt" data-chapter="Campus Life">
      <div className="shell">
        <div className="section-head">
          <div>
            <SectionLabel>Campus life</SectionLabel>
            <h2 style={{ marginTop: 18 }}>
              Between the lectures,
              <br />
              a valley happens
            </h2>
          </div>
          <p className="lede" style={{ maxWidth: '30ch', margin: 0 }}>
            Societies, sports, culture nights and field seasons — the parts of a degree
            that do not appear on a transcript.
          </p>
        </div>

        <div className="gallery">
          {IMAGES.gallery.map((src, index) => (
            <ParallaxFigure
              key={src}
              src={src}
              index={index}
              caption={CAPTIONS[index] || 'Campus life'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
