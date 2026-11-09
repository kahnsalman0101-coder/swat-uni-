import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/ui/SEO';
import SectionLabel from '../components/ui/SectionLabel';
import GoldButton from '../components/ui/GoldButton';
import TagPill from '../components/ui/TagPill';
import ImageReveal from '../components/ui/ImageReveal';
import StatNumber from '../components/ui/StatNumber';
import { IMAGES } from '../lib/img';
import { LuArrowUpRight, LuQuote } from 'react-icons/lu';

const MILESTONES = [
  {
    year: '2010',
    title: 'Establishment',
    body: 'The University of Swat is established by an Act of the Khyber Pakhtunkhwa Assembly, giving the valley its own public university.',
  },
  {
    year: '2013',
    title: 'First faculties',
    body: 'Teaching begins at Charbagh with the first faculties of Sciences, Arts and Management.',
  },
  {
    year: '2017',
    title: 'Research scale-up',
    body: 'Centre-based research expands into biotechnology, environmental sciences and computing.',
  },
  {
    year: '2022',
    title: 'Digital campus',
    body: 'CMS, e-Office and the online examination pipeline replace paper-based administration end to end.',
  },
  {
    year: '2026',
    title: 'Global recognition',
    body: 'WURI 2025 places the university at #40 in the world for innovation; HEC NSCT 2026 ranks it #1 in Khyber Pakhtunkhwa.',
  },
];

const LEADERSHIP = [
  {
    name: 'Chancellor, University of Swat',
    role: 'Chancellor · Governor of Khyber Pakhtunkhwa (ex officio)',
    photo: IMAGES.chancellorPortrait,
    note: 'The Chancellor is the constitutional head of the university, holding office ex officio as Governor of the province.',
  },
  {
    name: 'Prof. Dr. Muhammad Qasim',
    role: 'Vice Chancellor',
    photo: IMAGES.vcPortrait,
    note: 'Charged with research integrity, accreditation and student welfare across the seven faculties.',
  },
  {
    name: 'Mr. Fayyaz Ahmed Khan',
    role: 'Registrar',
    photo: IMAGES.registrarPortrait,
    note: 'Custodian of academic records, admissions, and the university seal. registrar@uswat.edu.pk',
  },
];

export default function About() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '26%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.85]);

  return (
    <>
      <SEO
        title="About the University"
        description="Founded in 2010 in Charbagh, Swat. The story, the leadership and the milestones behind a public university that turned a valley's promise into a global innovation ranking."
        path="/about"
        image={IMAGES.contactPlate}
      />

      {/* Parallax hero */}
      <header className="page-hero" ref={heroRef} data-chapter="About">
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '-12% 0 -12% 0',
            y: reduceMotion ? 0 : bgY,
            zIndex: 0,
          }}
        >
          <img
            src={IMAGES.contactPlate}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="eager"
            decoding="async"
          />
        </motion.div>
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--pine)',
            opacity: reduceMotion ? 0.78 : overlayOpacity,
            zIndex: 1,
          }}
        />

        <div className="shell" style={{ position: 'relative', zIndex: 2, color: 'var(--glacier)' }}>
          <nav className="crumbs" aria-label="Breadcrumb" style={{ color: 'rgba(244,241,234,0.66)' }}>
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>About</span>
          </nav>

          <SectionLabel invert>Established 2010 · Charbagh, Swat</SectionLabel>
          <h1 className="page-hero__title" style={{ marginTop: 20, color: 'var(--glacier)' }}>
            A valley asked for a university.
            <br />
            <span className="italic-accent">It got one.</span>
          </h1>
          <p className="lede" style={{ marginTop: 24, color: 'rgba(244,241,234,0.78)', maxWidth: '56ch' }}>
            Sixteen years, seven faculties and seventy-seven programs later, the University of
            Swat is the academic centre of Malakand Division — and, since 2025, one of the
            world's most innovative universities by the WURI measure.
          </p>
        </div>
      </header>

      {/* Manifesto / numbers */}
      <section className="section" data-chapter="At a glance">
        <div className="shell asymmetric">
          <div className="col-7">
            <SectionLabel>At a glance</SectionLabel>
            <p
              style={{
                marginTop: 22,
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 2.4vw, 2rem)',
                lineHeight: 1.34,
                letterSpacing: '-0.03em',
                maxWidth: '30ch',
              }}
            >
              Public, residential and deliberately regional — the university measures itself
              by what comes back to the valley, not by what leaves it.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
              <TagPill variant="gold">Public sector</TagPill>
              <TagPill>HEC recognised</TagPill>
              <TagPill>WURI 2025</TagPill>
              <TagPill variant="sage">Chartered 2010</TagPill>
            </div>
          </div>

          <div className="col-5">
            <div className="card-e" style={{ padding: 'clamp(22px, 3vw, 34px)' }}>
              <div className="numbers" style={{ gridTemplateColumns: '1fr 1fr', border: 0 }}>
                {[
                  { value: 7, label: 'Faculties' },
                  { value: 30, label: 'Departments' },
                  { value: 77, label: 'Programs' },
                  { value: 2010, label: 'Chartered', separator: '' },
                ].map((item) => (
                  <div className="stat" key={item.label} style={{ padding: '18px 8px' }}>
                    <p className="stat__value">
                      <StatNumber value={item.value} separator={item.separator ?? ','} />
                    </p>
                    <p className="stat__label">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal milestone scroll */}
      <section className="section section--alt" data-chapter="Milestones">
        <div className="shell">
          <div className="section-head">
            <div>
              <SectionLabel>Milestones</SectionLabel>
              <h2 style={{ marginTop: 18 }}>
                2010 <span aria-hidden="true">→</span> 2026
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: '32ch', margin: 0 }}>
              Scroll the timeline sideways — each milestone is a year the university became
              something it had not been before.
            </p>
          </div>
        </div>

        <div className="shell">
          <div className="mstones" role="list" tabIndex={0} aria-label="University milestones">
            {MILESTONES.map((milestone, index) => (
              <article className="mstone" role="listitem" key={milestone.year}>
                <p className="bento__index">M-{String(index + 1).padStart(2, '0')}</p>
                <p className="mstone__year mstone__num" style={{ margin: '14px 0 22px' }}>
                  {milestone.year}
                </p>
                <h3 style={{ fontSize: '1.25rem' }}>{milestone.title}</h3>
                <p style={{ marginTop: 10, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {milestone.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" data-chapter="Leadership">
        <div className="shell">
          <div className="section-head">
            <div>
              <SectionLabel>Leadership</SectionLabel>
              <h2 style={{ marginTop: 18 }}>The offices that carry the institution</h2>
            </div>
          </div>

          <div className="asymmetric">
            {LEADERSHIP.map((person) => (
              <div className="col-4" key={person.role}>
                <article className="profile-card lift">
                  <div className="profile-card__frame">
                    <img
                      src={person.photo}
                      alt={`Portrait — ${person.name}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem' }}>{person.name}</h3>
                    <p className="mono" style={{ marginTop: 8, color: 'var(--gold-600)' }}>
                      {person.role}
                    </p>
                    <p style={{ marginTop: 12, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      {person.note}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vice Chancellor's message */}
      <section className="section section--deep" id="vc" data-chapter="VC Message">
        <div className="shell asymmetric">
          <div className="col-7">
            <SectionLabel invert>A Letter from the Vice Chancellor</SectionLabel>
            <blockquote
              style={{
                margin: '24px 0 0',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.2vw, 1.9rem)',
                lineHeight: 1.38,
                letterSpacing: '-0.03em',
                color: 'var(--text-invert)',
              }}
            >
              <LuQuote
                aria-hidden="true"
                size={26}
                style={{ color: 'var(--gold)', marginBottom: 12 }}
              />
              <p>
                The University of Swat exists because the people of this valley decided that
                distance should never again decide destiny. Every reform we make — in
                curriculum, in research integrity, in student welfare — is measured against a
                single question: does it let a student from Charbagh compete anywhere?
              </p>
              <p style={{ marginTop: 18 }}>
                We are a young institution in an old landscape. That is our advantage. We can
                build the university this region needs rather than inherit one it can no
                longer use.
              </p>
              <footer style={{ marginTop: 26, display: 'grid', gap: 4 }}>
                <span className="vcletter__sign">Prof. Dr. Muhammad Qasim</span>
                <span className="mono-invert">Vice Chancellor · University of Swat</span>
              </footer>
            </blockquote>
          </div>

          <div className="col-5">
            <ImageReveal
              src={IMAGES.manifestoPlate}
              alt="University of Swat campus plaza at dawn"
              ratio="4x5"
              sizes="(max-width: 991px) 100vw, 40vw"
            />
            <div style={{ marginTop: 26 }}>
              <GoldButton to="/admissions" icon={<LuArrowUpRight aria-hidden="true" />}>
                Admissions Fall 2026
              </GoldButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
