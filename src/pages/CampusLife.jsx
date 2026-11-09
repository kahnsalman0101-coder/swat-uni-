import { Link } from 'react-router-dom';
import {
  LuArrowUpRight,
  LuBedDouble,
  LuBus,
  LuHeartPulse,
  LuMusic,
  LuTrophy,
  LuUsers,
} from 'react-icons/lu';
import SEO from '../components/ui/SEO';
import SectionLabel from '../components/ui/SectionLabel';
import TagPill from '../components/ui/TagPill';
import GoldButton from '../components/ui/GoldButton';
import GalleryMasonry from '../components/home/GalleryMasonry';
import { IMAGES } from '../lib/img';

const FACILITIES = [
  {
    title: 'Hostels',
    icon: LuBedDouble,
    body: 'Separate male and female residences on campus with mess facilities, study rooms and 24-hour security.',
    facts: ['On-campus residence', 'Warden & security staff', 'Mess and common rooms'],
  },
  {
    title: 'Sports',
    icon: LuTrophy,
    body: 'Cricket, football, volleyball and badminton grounds, plus inter-faculty leagues and provincial representation.',
    facts: ['Inter-faculty leagues', 'KP Sports Quota', 'Coaching support'],
  },
  {
    title: 'Societies',
    icon: LuUsers,
    body: 'Over thirty registered societies — from debating and literature to robotics, entrepreneurship and community service.',
    facts: ['30+ registered societies', 'Annual society fair', 'Faculty advisors'],
  },
  {
    title: 'Culture & Events',
    icon: LuMusic,
    body: 'Culture nights, Pashto and Urdu poetry evenings, drama and the annual convocation week.',
    facts: ['Culture nights', 'Poetry & drama', 'Convocation week'],
  },
  {
    title: 'Health',
    icon: LuHeartPulse,
    body: 'On-campus medical room with a duty doctor, first-aid facilities and referral support for the district hospital.',
    facts: ['Duty doctor', 'First aid', 'Referral support'],
  },
  {
    title: 'Transport',
    icon: LuBus,
    body: 'University transport on major routes across Swat district, including Mingora and Saidu Sharif pick-up points.',
    facts: ['Mingora route', 'Saidu Sharif route', 'Staff & student passes'],
  },
];

export default function CampusLife() {
  return (
    <>
      <SEO
        title="Campus Life"
        description="Hostels, sports, thirty-plus societies, culture nights and transport at the University of Swat's Charbagh campus — the parts of a degree that never appear on a transcript."
        path="/campus-life"
        image={IMAGES.campusLifePlate}
      />

      <header className="page-hero" data-chapter="Campus Life">
        <div className="shell asymmetric">
          <div className="col-7">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Campus Life</span>
            </nav>

            <SectionLabel>Life at Charbagh</SectionLabel>
            <h1 className="page-hero__title" style={{ marginTop: 20 }}>
              Nine hours of study.
              <br />
              <span className="italic-accent">Fifteen of everything else.</span>
            </h1>
            <p className="lede" style={{ marginTop: 22, maxWidth: '54ch' }}>
              The campus is walkable, residential and busy. Societies run the calendar,
              the grounds run all year, and the valley is twenty minutes from the gate.
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
              <TagPill variant="gold">Residential</TagPill>
              <TagPill>30+ societies</TagPill>
              <TagPill variant="sage">On-campus sports</TagPill>
              <TagPill>Transport network</TagPill>
            </div>
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }} data-chapter="Facilities">
        <div className="shell">
          <div className="section-head">
            <div>
              <SectionLabel>Facilities</SectionLabel>
              <h2 style={{ marginTop: 18 }}>What is on campus</h2>
            </div>
          </div>

          <div className="card-grid-3">
            {FACILITIES.map((facility) => {
              const Icon = facility.icon;
              return (
                <article className="card-e lift" key={facility.title} style={{ padding: 'clamp(22px, 2.6vw, 32px)' }}>
                  <span className="dl-card__icon">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <h3 style={{ marginTop: 18 }}>{facility.title}</h3>
                  <p style={{ marginTop: 12, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    {facility.body}
                  </p>
                  <ul className="hours-list" style={{ marginTop: 18 }}>
                    {facility.facts.map((fact) => (
                      <li key={fact}>
                        <span>{fact}</span>
                        <b>Available</b>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax gallery (shared with the homepage) */}
      <GalleryMasonry />

      <section className="section section--deep section--sm" data-chapter="Visit">
        <div className="shell asymmetric">
          <div className="col-7">
            <SectionLabel invert>Visit the campus</SectionLabel>
            <h2 style={{ marginTop: 18, maxWidth: '22ch' }}>Open days run through the admissions cycle</h2>
            <p className="lede" style={{ marginTop: 18, color: 'var(--text-invert-muted)' }}>
              Prospective students and families are welcome on campus during the application
              window. Call the Registrar's Office a day ahead so a guide can meet you at the
              main gate.
            </p>
          </div>
          <div className="col-5" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <GoldButton to="/contact" icon={<LuArrowUpRight aria-hidden="true" />}>
              Plan a visit
            </GoldButton>
            <GoldButton to="/admissions" variant="outline">
              Admissions Fall 2026
            </GoldButton>
          </div>
        </div>
      </section>
    </>
  );
}
