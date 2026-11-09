import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import StatNumber from '../ui/StatNumber';

const STATS = [
  { value: 77, label: 'Degree programs', suffix: '' },
  { value: 30, label: 'Academic departments', suffix: '' },
  { value: 7, label: 'Faculties', suffix: '' },
  { value: 40, label: 'WURI 2025 world rank', prefix: '#', suffix: '' },
];

/** Stylised plate of the Charbagh campus and the wider Swat district. */
function CampusMap() {
  return (
    <div className="mapcard">
      <span className="mapcard__tag">Charbagh Campus · District Swat</span>
      <svg viewBox="0 0 420 320" role="img" aria-label="Stylised map of the Charbagh campus in District Swat">
        <defs>
          <linearGradient id="mapFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A8C0A0" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#0A2E23" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <path
          d="M40 60 L108 28 L176 52 L232 24 L300 58 L364 44 L392 96 L352 150 L376 208 L316 250 L246 236 L178 268 L112 244 L58 264 L28 200 L52 148 L22 108 Z"
          fill="url(#mapFill)"
          stroke="#0A2E23"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />

        {/* Swat river */}
        <path
          d="M96 12 C 120 76, 168 96, 190 140 C 212 184, 246 196, 262 244 C 272 274, 268 296, 258 312"
          fill="none"
          stroke="#D4A24C"
          strokeWidth="1.6"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />

        {/* Road spine */}
        <path
          d="M60 250 C 130 214, 176 178, 224 128 C 262 88, 300 70, 356 62"
          fill="none"
          stroke="#0A2E23"
          strokeOpacity="0.28"
          strokeWidth="1"
        />

        {/* Campus marker: Charbagh */}
        <g>
          <circle className="map-ring" cx="214" cy="150" r="3" fill="none" stroke="#D4A24C" strokeWidth="1.4" />
          <circle className="map-ring" cx="214" cy="150" r="3" fill="none" stroke="#D4A24C" strokeWidth="1.4" />
          <circle className="map-ring" cx="214" cy="150" r="3" fill="none" stroke="#D4A24C" strokeWidth="1.4" />
          <circle cx="214" cy="150" r="5" fill="#D4A24C" />
          <text x="228" y="146" fill="#141A17" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1.4">
            CHARBAGH
          </text>
          <text x="228" y="158" fill="#5B6660" fontSize="7" fontFamily="JetBrains Mono, monospace" letterSpacing="1.2">
            MAIN CAMPUS
          </text>
        </g>

        {/* Surrounding towns */}
        <g fill="#0A2E23" fillOpacity="0.5">
          <circle cx="150" cy="216" r="3.4" />
          <circle cx="286" cy="196" r="3.4" />
          <circle cx="96" cy="132" r="3" />
        </g>
        <g fill="#5B6660" fontSize="7.5" fontFamily="JetBrains Mono, monospace" letterSpacing="1.2">
          <text x="138" y="234">MINGORA</text>
          <text x="272" y="216">SAIDU SHARIF</text>
          <text x="66" y="120">MADYAN</text>
        </g>

        {/* North arrow */}
        <g transform="translate(372 268)" stroke="#0A2E23" strokeOpacity="0.5">
          <path d="M0 22 L0 0 M-5 8 L0 0 L5 8" fill="none" strokeWidth="1.1" />
          <text x="-4" y="34" fill="#5B6660" fontSize="7" fontFamily="JetBrains Mono, monospace">
            N
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * NumbersMap — animated counters paired with the pulsing campus map.
 */
export default function NumbersMap() {
  return (
    <section className="section" data-chapter="Numbers">
      <div className="shell">
        <div className="section-head">
          <div>
            <SectionLabel>The university in numbers</SectionLabel>
            <h2 style={{ marginTop: 18 }}>Small campus, wide horizon</h2>
          </div>
          <p className="lede" style={{ maxWidth: '32ch', margin: 0 }}>
            Everything below sits inside a single walkable campus in the Swat district,
            thirty minutes from Mingora and three hours from Islamabad.
          </p>
        </div>

        <div>
          <div className="numbers" style={{ marginBottom: 'clamp(20px, 3vw, 34px)' }}>
            {STATS.map((stat) => (
              <motion.div
                className="stat"
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="stat__value" style={{ margin: 0 }}>
                  <StatNumber
                    value={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                  />
                </p>
                <p className="stat__label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <CampusMap />
        </div>
      </div>
    </section>
  );
}
