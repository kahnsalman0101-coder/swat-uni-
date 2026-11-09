import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import GoldButton from '../ui/GoldButton';
import { LuArrowUpRight } from 'react-icons/lu';

function Topographic() {
  return (
    <svg viewBox="0 0 1200 700" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((ring) => (
          <ellipse
            key={ring}
            cx={600}
            cy={360}
            rx={120 + ring * 62}
            ry={70 + ring * 34}
            transform={`rotate(${ring * 4} 600 360)`}
          />
        ))}
        {[1, 2, 3, 4].map((ring) => (
          <ellipse
            key={`s${ring}`}
            cx={240}
            cy={540}
            rx={60 + ring * 40}
            ry={34 + ring * 22}
            transform={`rotate(${-ring * 7} 240 540)`}
          />
        ))}
      </g>
    </svg>
  );
}

/**
 * Manifesto — the university's editorial statement set over a faded
 * topographic contour plate.
 */
export default function Manifesto() {
  return (
    <section className="section manifesto" data-chapter="The University">
      <div className="manifesto__bg" aria-hidden="true">
        <Topographic />
      </div>

      <div className="shell manifesto__grid">
        <div>
          <SectionLabel>The University</SectionLabel>
          <motion.p
            className="manifesto__text"
            style={{ marginTop: 28 }}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            The University of Swat was founded in 2010 so that the valley's students could
            study physics, law, literature and software <em>without leaving the mountains</em>.
            Sixteen years on, it is a public university of seven faculties measured not by
            its buildings but by what its graduates return to the region.
          </motion.p>

          <div style={{ marginTop: 38 }}>
            <GoldButton to="/about" variant="ghost" icon={<LuArrowUpRight aria-hidden="true" />}>
              Read the full history
            </GoldButton>
          </div>
        </div>

        <aside style={{ display: 'grid', gap: 24 }}>
          <p className="manifesto__sign">— Office of the Vice Chancellor</p>
          <hr className="rule-gold" />
          <dl style={{ margin: 0, display: 'grid', gap: 18 }}>
            <div>
              <dt className="mono">Chartered</dt>
              <dd style={{ margin: '4px 0 0', fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
                2010
              </dd>
            </div>
            <div>
              <dt className="mono">Campus</dt>
              <dd style={{ margin: '4px 0 0', fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
                Charbagh, Swat
              </dd>
            </div>
            <div>
              <dt className="mono">Sector</dt>
              <dd style={{ margin: '4px 0 0', fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
                Public
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
