import { motion } from 'framer-motion';
import { LuArrowUpRight, LuPlay } from 'react-icons/lu';
import GoldButton from '../ui/GoldButton';
import SectionLabel from '../ui/SectionLabel';
import TagPill from '../ui/TagPill';
import { IMAGES } from '../../lib/img';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const TICKER = [
  { label: 'WURI 2025 · Global Rank', value: '40' },
  { label: 'HEC NSCT 2026 · Khyber Pakhtunkhwa', value: '#01' },
  { label: 'Faculties / Departments', value: '07 / 30' },
  { label: 'Degree Programs', value: '77' },
];

/**
 * Hero — cinematic 100vh opening: oversized Fraunces headline, torn-paper
 * clipped valley photograph and a floating glass ranking card.
 */
export default function Hero() {
  return (
    <section className="hero" data-chapter="Home">
      <div className="shell hero__grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="hero__eyebrow">
            <SectionLabel>Where the mountains meet the future</SectionLabel>
            <TagPill variant="gold">Est. 2010 · Charbagh, Swat</TagPill>
          </motion.div>

          <motion.h1 variants={item} className="hero__headline">
            A university built by mountains,
            <br />
            <span className="italic-accent">for the future</span>
          </motion.h1>

          <motion.p variants={item} className="hero__sub">
            Khyber Pakhtunkhwa · Pakistan / Founded 2010 / Public Sector University
          </motion.p>

          <motion.p variants={item} className="hero__lede">
            From the terraced fields of Swat Valley, the university teaches seventy-seven
            programs to a generation that will not have to leave home to build something
            world-class.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <GoldButton
              to="/academics"
              size="lg"
              icon={<LuArrowUpRight aria-hidden="true" />}
            >
              Explore Programs
            </GoldButton>
            <GoldButton
              to="/campus-life"
              size="lg"
              variant="ghost"
              icon={<LuPlay aria-hidden="true" />}
            >
              Watch Film
            </GoldButton>
          </motion.div>

          <motion.div variants={item} className="hero__ticker">
            {TICKER.map((tick) => (
              <span className="hero__tick" key={tick.label}>
                {tick.label}
                <b>{tick.value}</b>
              </span>
            ))}
            <span className="hero__scrollcue" aria-hidden="true" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__media"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="hero__torn">
            <img
              src={IMAGES.heroValley}
              alt="Terraced fields and pine-forested mountains of Swat Valley at golden hour"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              width="880"
              height="1100"
            />
            <div className="hero__caption">
              <span>Swat Valley · 34.7°N 72.3°E</span>
              <span>Elev. 980 m</span>
            </div>
          </div>

          <motion.aside
            className="hero__card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <span className="mono">HEC NSCT 2026</span>
            <p className="hero__card-num">#1</p>
            <p style={{ margin: '8px 0 0', fontSize: '0.9rem', lineHeight: 1.45 }}>
              Ranked first in Khyber Pakhtunkhwa — and #40 in the world for innovation
              (<em>WURI 2025</em>).
            </p>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
