import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LuArrowUpRight,
  LuBookOpen,
  LuFlaskConical,
  LuLightbulb,
  LuShieldCheck,
  LuUsers,
} from 'react-icons/lu';
import SEO from '../components/ui/SEO';
import SectionLabel from '../components/ui/SectionLabel';
import TagPill from '../components/ui/TagPill';
import GoldButton from '../components/ui/GoldButton';
import ImageReveal from '../components/ui/ImageReveal';
import StatNumber from '../components/ui/StatNumber';
import { IMAGES } from '../lib/img';

const OFFICES = [
  {
    id: 'oric',
    code: 'ORIC',
    name: 'Office of Research, Innovation & Commercialisation',
    body: 'Links faculty research to industry and public partners, manages grants and intellectual property, and runs the university incubator for student ventures.',
    points: [
      'Research grant facilitation and HEC reporting',
      'University–industry linkage and MoU management',
      'Intellectual property and technology transfer',
      'Student entrepreneurship and incubation',
    ],
    plate: IMAGES.oricPlate,
  },
  {
    id: 'qec',
    code: 'QEC',
    name: 'Quality Enhancement Cell',
    body: 'Owns the self-assessment cycle: program reviews, faculty course evaluations, accreditation documentation and the annual quality report submitted to HEC.',
    points: [
      'Program self-assessment and accreditation files',
      'Faculty course evaluation each semester',
      'Student feedback surveys and follow-up actions',
      'Annual quality assurance reporting',
    ],
    plate: IMAGES.researchPlate,
  },
];

const CLUSTERS = [
  {
    title: 'Mountain ecosystem science',
    body: 'Endemic plant survey, medicinal plant biotechnology and soil microbiology of the Swat corridor.',
    tag: 'Life Sciences',
    icon: LuFlaskConical,
  },
  {
    title: 'Climate & water resilience',
    body: 'Glacier melt hydrology, flood risk mapping and watershed management for Malakand Division.',
    tag: 'Environmental Sciences',
    icon: LuShieldCheck,
  },
  {
    title: 'Applied computing',
    body: 'Machine learning for health screening, regional language processing and e-governance tooling.',
    tag: 'Computing & IT',
    icon: LuLightbulb,
  },
  {
    title: 'Regional economy & tourism',
    body: 'Household economics, post-conflict enterprise recovery and sustainable tourism in Swat.',
    tag: 'Management & Economics',
    icon: LuBookOpen,
  },
  {
    title: 'Education & society',
    body: 'Learning outcomes in rural schools, teacher training models and youth migration research.',
    tag: 'Social Sciences',
    icon: LuUsers,
  },
];

export default function Research() {
  return (
    <>
      <SEO
        title="Research — ORIC & QEC"
        description="Research at the University of Swat: the Office of Research, Innovation & Commercialisation, the Quality Enhancement Cell, funded clusters and the 2025 gold-medal invention from Geneva."
        path="/research"
        image={IMAGES.researchPlate}
      />

      <header className="page-hero" data-chapter="Research">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Research</span>
          </nav>

          <SectionLabel>Research, innovation & quality</SectionLabel>
          <h1 className="page-hero__title" style={{ marginTop: 20 }}>
            Research that returns home
          </h1>
          <p className="lede" style={{ marginTop: 22, maxWidth: '58ch' }}>
            The university's research agenda is set by the region: water, land, health,
            enterprise and learning. In 2026 that agenda produced a Gold Medal at the Geneva
            International Exhibition of Inventions.
          </p>
        </div>
      </header>

      {/* ORIC + QEC split */}
      <section className="section" style={{ paddingTop: 0 }} data-chapter="ORIC & QEC">
        <div className="shell split">
          {OFFICES.map((office, index) => (
            <div key={office.id} id={office.id}>
              <ImageReveal
                src={office.plate}
                alt={
                  index === 0
                    ? 'Startup team working at a whiteboard inside the university incubator'
                    : 'Researcher examining plant tissue cultures in a laboratory'
                }
                ratio="16x9"
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <div style={{ marginTop: 26 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <TagPill variant="gold">{office.code}</TagPill>
                  <span className="mono">Established office</span>
                </div>
                <h2 style={{ marginTop: 16, fontSize: 'clamp(1.35rem, 2.2vw, 1.9rem)' }}>
                  {office.name}
                </h2>
                <p className="lede" style={{ marginTop: 14, fontSize: '1rem' }}>
                  {office.body}
                </p>
                <ul style={{ marginTop: 18, display: 'grid', gap: 10, fontSize: '0.9rem' }}>
                  {office.points.map((point) => (
                    <li key={point} style={{ paddingLeft: 18, position: 'relative' }}>
                      <span
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.6em',
                          width: 8,
                          height: 1,
                          background: 'var(--gold)',
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="section section--alt section--sm" data-chapter="Output">
        <div className="shell">
          <div className="numbers">
            {[
              { value: 20, label: 'Research units & labs' },
              { value: 3, label: 'PhD programs' },
              { value: 2026, label: 'Geneva gold medal', separator: '' },
              { value: 40, label: 'WURI 2025 world rank', prefix: '#' },
            ].map((item, index) => (
              <motion.div
                className="stat"
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="stat__value">
                  <StatNumber
                    value={item.value}
                    separator={item.separator ?? ','}
                    prefix={item.prefix || ''}
                  />
                </p>
                <p className="stat__label">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication / output carousel */}
      <section className="section" data-chapter="Research clusters">
        <div className="shell">
          <div className="section-head">
            <div>
              <SectionLabel>Research clusters</SectionLabel>
              <h2 style={{ marginTop: 18 }}>Five agendas, one region</h2>
            </div>
            <p className="lede" style={{ maxWidth: '34ch', margin: 0 }}>
              Drag sideways. Each cluster is led by a department and reports through ORIC to
              the annual research review.
            </p>
          </div>
        </div>

        <div className="shell">
          <div className="carousel" tabIndex={0} aria-label="Research clusters carousel">
            {CLUSTERS.map((cluster) => {
              const Icon = cluster.icon;
              return (
                <article className="card-e lift" key={cluster.title} style={{ padding: 'clamp(22px, 2.6vw, 32px)' }}>
                  <span className="dl-card__icon" style={{ marginBottom: 18 }}>
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <TagPill>{cluster.tag}</TagPill>
                  <h3 style={{ marginTop: 16 }}>{cluster.title}</h3>
                  <p style={{ marginTop: 12, marginBottom: 0, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    {cluster.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--deep section--sm" data-chapter="Collaborate">
        <div className="shell asymmetric">
          <div className="col-7">
            <SectionLabel invert>Work with us</SectionLabel>
            <h2 style={{ marginTop: 18, maxWidth: '20ch' }}>
              Bring us a problem worth solving
            </h2>
            <p className="lede" style={{ marginTop: 18, color: 'var(--text-invert-muted)' }}>
              ORIC signs research and consultancy agreements with industry, district
              government and development partners. Proposals are reviewed within three weeks.
            </p>
          </div>
          <div className="col-5" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <GoldButton to="/contact" icon={<LuArrowUpRight aria-hidden="true" />}>
              Start a conversation
            </GoldButton>
            <GoldButton href="mailto:registrar@uswat.edu.pk" variant="outline">
              Registrar's Office
            </GoldButton>
          </div>
        </div>
      </section>
    </>
  );
}
