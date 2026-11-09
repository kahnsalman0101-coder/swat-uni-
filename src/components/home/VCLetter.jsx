import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import GoldButton from '../ui/GoldButton';
import { LuArrowUpRight } from 'react-icons/lu';
import { IMAGES } from '../../lib/img';

function SignatureFlourish() {
  return (
    <svg viewBox="0 0 260 70" width="220" height="60" aria-hidden="true" focusable="false">
      <motion.path
        d="M6 52 C 34 8, 52 62, 78 30 S 116 4, 132 44 C 142 68, 158 18, 186 34 C 204 44, 214 20, 254 12"
        fill="none"
        stroke="#D4A24C"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

/**
 * VCLetter — full-width dark pull-quote: "A Letter", with a circular portrait,
 * hand-drawn signature flourish and a link to the Vice Chancellor's message.
 */
export default function VCLetter() {
  return (
    <section className="section section--deep" data-chapter="A Letter">
      <div className="shell vcletter">
        <div>
          <SectionLabel invert>From the Vice Chancellor</SectionLabel>

          <blockquote className="vcletter__quote" style={{ margin: '22px 0 0' }}>
            Our task is not to import excellence. It is to grow it — in our laboratories,
            our libraries and our fields — until a student from Charbagh can stand anywhere
            in the world and be unsurprised to be there.
          </blockquote>

          <div style={{ marginTop: 30, display: 'grid', gap: 6 }}>
            <SignatureFlourish />
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                margin: 0,
                color: 'var(--text-invert)',
              }}
            >
              Prof. Dr. Muhammad Qasim
            </p>
            <p className="mono-invert" style={{ margin: 0 }}>
              Vice Chancellor · University of Swat
            </p>
          </div>

          <div style={{ marginTop: 30 }}>
            <GoldButton to="/about#vc" variant="outline" icon={<LuArrowUpRight aria-hidden="true" />}>
              Read the letter
            </GoldButton>
          </div>
        </div>

        <motion.div
          className="vcletter__portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={IMAGES.vcPortrait}
            alt="Portrait of Prof. Dr. Muhammad Qasim, Vice Chancellor of the University of Swat"
            loading="lazy"
            decoding="async"
            width="640"
            height="640"
          />
        </motion.div>
      </div>
    </section>
  );
}
