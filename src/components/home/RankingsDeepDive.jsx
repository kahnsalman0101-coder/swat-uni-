import { motion } from 'framer-motion';
import rankings from '../../data/rankings.json';
import SectionLabel from '../ui/SectionLabel';
import TagPill from '../ui/TagPill';
import GoldButton from '../ui/GoldButton';
import { LuArrowUpRight } from 'react-icons/lu';

/**
 * RankingsDeepDive — dark split screen: the WURI story on the left, and a
 * Framer Motion bar chart of the 2025 category placements on the right.
 * Shorter bars = better placement, so the ranking is legible at a glance.
 */
export default function RankingsDeepDive() {
  const { deepDive } = rankings;
  const { categories, scale } = deepDive;

  return (
    <section className="section section--deep" data-chapter="WURI 2025">
      <div className="shell deepdive">
        <div>
          <SectionLabel invert>{deepDive.eyebrow}</SectionLabel>
          <h2 style={{ marginTop: 18, maxWidth: '18ch' }}>{deepDive.title}</h2>
          <p className="lede" style={{ marginTop: 20, color: 'var(--text-invert-muted)' }}>
            {deepDive.body}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 26 }}>
            <TagPill variant="gold">WURI 2025</TagPill>
            <TagPill variant="invert">Innovation</TagPill>
            <TagPill variant="invert">Global Top Tier</TagPill>
          </div>

          <blockquote
            style={{
              margin: '34px 0 0',
              paddingLeft: 22,
              borderLeft: '2px solid var(--gold)',
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem',
              lineHeight: 1.5,
              color: 'var(--text-invert)',
              maxWidth: '46ch',
            }}
          >
            “{deepDive.quote}”
            <footer className="mono-invert" style={{ marginTop: 12 }}>
              {deepDive.quoteAuthor}
            </footer>
          </blockquote>

          <div style={{ marginTop: 32 }}>
            <GoldButton to="/research" variant="outline" icon={<LuArrowUpRight aria-hidden="true" />}>
              Research & ORIC
            </GoldButton>
          </div>
        </div>

        <div>
          <p className="mono" style={{ marginBottom: 22 }}>
            Category standing · rank of {scale}
          </p>

          {categories.map((category, index) => {
            const ratio = Math.min(1, Math.max(0.08, category.rank / scale));
            return (
              <div className="bar" key={category.id}>
                <div className="bar__head">
                  <span className="bar__label">{category.label}</span>
                  <span className="bar__value">#{category.rank}</span>
                </div>
                <div
                  className="bar__track"
                  role="img"
                  aria-label={`${category.label}: rank ${category.rank} of ${scale}`}
                >
                  <motion.span
                    className="bar__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${ratio * 100}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
