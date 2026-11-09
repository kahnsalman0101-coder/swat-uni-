import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  LuArrowUpRight,
  LuBadgeCheck,
  LuCalendar,
  LuCircleAlert,
  LuDownload,
  LuFileText,
} from 'react-icons/lu';
import SEO from '../components/ui/SEO';
import SectionLabel from '../components/ui/SectionLabel';
import TagPill from '../components/ui/TagPill';
import GoldButton from '../components/ui/GoldButton';
import downloads from '../data/downloads.json';
import { IMAGES } from '../lib/img';

const TABS = [
  { id: 'fall-2026', label: 'Fall 2026' },
  { id: 'spring-2026', label: 'Spring 2026' },
  { id: 'merit-lists', label: 'Merit Lists' },
  { id: 'fees', label: 'Fees' },
  { id: 'scholarships', label: 'Scholarships' },
];

const FALL_TIMELINE = [
  ['15 Jul 2026', 'Online applications open (CMS portal)'],
  ['20 Aug 2026', 'Last date to submit an application'],
  ['28 Aug 2026', 'Departmental test / interview where applicable'],
  ['05 Sep 2026', 'First merit list displayed'],
  ['12 Sep 2026', 'Second merit list displayed'],
  ['12 Oct 2026', 'Final merit list — Self Finance seats'],
  ['20 Oct 2026', 'Fee submission deadline for selected candidates'],
  ['01 Nov 2026', 'Classes commence'],
];

const PROGRAM_TABLE = [
  ['BS Computer Science', 'Computing & IT', 'Undergraduate', '120', 'FSc (Pre-Engg) 60% / 50%', '71.4'],
  ['BBA', 'Management & Economics', 'Undergraduate', '100', 'Intermediate 45% / 50%', '66.8'],
  ['BS Physics', 'Sciences', 'Undergraduate', '60', 'FSc (Pre-Engg) 45% / 50%', '63.2'],
  ['BS English', 'Arts & Humanities', 'Undergraduate', '80', 'Intermediate 45% / 50%', '62.1'],
  ['LLB', 'Law & Health Sciences', 'Undergraduate', '60', 'Intermediate 45% · LAT required', '68.9'],
  ['BS Biotechnology', 'Life Sciences', 'Undergraduate', '60', 'FSc (Pre-Medical) 45% / 50%', '64.5'],
  ['BS Education', 'Social Sciences', 'Undergraduate', '80', 'Intermediate 45% / 50%', '58.7'],
  ['MBA', 'Management & Economics', 'Postgraduate', '40', '16 years of education · 2.5 CGPA', 'Merit + test'],
  ['MS Computer Science', 'Computing & IT', 'Postgraduate', '30', '16 years of education · 2.5 CGPA', 'Merit + test'],
  ['MPhil Biotechnology', 'Life Sciences', 'Postgraduate', '20', '16 years of education · 3.0 CGPA', 'Merit + interview'],
  ['PhD Computer Science', 'Computing & IT', 'Postgraduate', '10', '18 years of education · GAT subject', 'Merit + interview'],
  ['PhD Management Sciences', 'Management & Economics', 'Postgraduate', '10', '18 years of education · GAT subject', 'Merit + interview'],
];

const FEE_TABLE = [
  ['Faculty of Sciences', '18,500', '42,000', '68,000'],
  ['Faculty of Life Sciences', '18,500', '46,000', '72,000'],
  ['Faculty of Computer Science & IT', '21,000', '52,000', '84,000'],
  ['Faculty of Management & Economics', '21,000', '50,000', '80,000'],
  ['Faculty of Arts & Humanities', '16,000', '36,000', '58,000'],
  ['Faculty of Social Sciences', '16,000', '38,000', '60,000'],
  ['Faculty of Law & Health Sciences', '22,000', '58,000', '92,000'],
];

const SCHOLARSHIPS = [
  {
    title: 'HEC Need-Based Scholarship',
    body: 'Full tuition support for admitted students whose household income falls below the HEC threshold, administered through the Financial Aid Office.',
    tag: 'Need-based',
  },
  {
    title: 'Merit Scholarship',
    body: 'Awarded each semester to the highest-scoring student in every department — tuition waiver for the following semester.',
    tag: 'Merit',
  },
  {
    title: 'Khyber Pakhtunkhwa Sports Quota',
    body: 'Concessions for provincial and national level athletes competing under the university colours.',
    tag: 'Sports',
  },
  {
    title: 'Ehsaas Undergraduate Scholarship',
    body: 'Federally funded support covering tuition and a monthly stipend for eligible undergraduate students.',
    tag: 'Federal',
  },
];

function MeritBanner() {
  const { meritBanner } = downloads;
  return (
    <div className="merit-banner" style={{ marginBottom: 'clamp(28px, 4vw, 56px)' }}>
      <div>
        <span className="merit-banner__pulse">
          <span className="utilrail__dot" aria-hidden="true" />
          {meritBanner.status}
        </span>
        <h2 style={{ marginTop: 14, fontSize: 'clamp(1.35rem, 2.4vw, 2.1rem)' }}>
          {meritBanner.title}
        </h2>
        <p
          style={{
            margin: '10px 0 0',
            color: 'rgba(244,241,234,0.72)',
            fontSize: '0.9rem',
            maxWidth: '58ch',
          }}
        >
          {meritBanner.note}
        </p>
      </div>

      <GoldButton href={meritBanner.href} icon={<LuDownload aria-hidden="true" />}>
        {meritBanner.label}
      </GoldButton>
    </div>
  );
}

export default function Admissions() {
  const [tab, setTab] = useState('fall-2026');

  return (
    <>
      <SEO
        title="Admissions Fall 2026"
        description="Apply to the University of Swat: eligibility, key dates, merit lists, fee structure and scholarships for Fall 2026 across 77 programs and 30 departments."
        path="/admissions"
        image={IMAGES.admissionsPlate}
      />

      <header className="page-hero" data-chapter="Admissions">
        <div className="shell asymmetric">
          <div className="col-7">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Admissions</span>
            </nav>

            <SectionLabel>Admissions · Fall 2026</SectionLabel>
            <h1 className="page-hero__title" style={{ marginTop: 20 }}>
              Admission is by merit.
              <br />
              <span className="italic-accent">Always.</span>
            </h1>
            <p className="lede" style={{ marginTop: 22, maxWidth: '52ch' }}>
              Applications for Fall 2026 are open across all seven faculties. Standard seats
              and Self-Finance seats are filled strictly on the published merit formula — no
              donations, no discretion.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
              <GoldButton
                href="https://cms.uswat.edu.pk"
                size="lg"
                icon={<LuArrowUpRight aria-hidden="true" />}
              >
                Apply on the CMS portal
              </GoldButton>
              <GoldButton to="/academics" variant="ghost" size="lg">
                Browse programs
              </GoldButton>
            </div>
          </div>

          <div className="col-5">
            <ul className="hours-list" style={{ marginTop: 8 }}>
              <li>
                <span>Application window</span>
                <b>15 Jul – 20 Aug 2026</b>
              </li>
              <li>
                <span>Entry test</span>
                <b>28 Aug 2026</b>
              </li>
              <li>
                <span>Final merit list</span>
                <b>12 Oct 2026</b>
              </li>
              <li>
                <span>Classes commence</span>
                <b>01 Nov 2026</b>
              </li>
              <li>
                <span>Admissions office</span>
                <b>+92 946 924 0000</b>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <MeritBanner />

          {/* Sticky tab bar */}
          <div
            style={{
              position: 'sticky',
              top: 'calc(var(--utilrail-h) + 62px)',
              zIndex: 20,
              paddingBlock: 14,
              background: 'var(--bg)',
              borderBottom: '1px solid var(--border)',
              marginBottom: 'clamp(26px, 4vw, 48px)',
            }}
          >
            <div className="tabs" role="tablist" aria-label="Admissions sections">
              {TABS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === item.id}
                  aria-controls={`panel-${item.id}`}
                  id={`tab-${item.id}`}
                  className={`tab ${tab === item.id ? 'is-active' : ''}`}
                  onClick={() => setTab(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              id={`panel-${tab}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {tab === 'fall-2026' ? (
                <>
                  <div className="split" style={{ marginBottom: 'clamp(34px, 5vw, 64px)' }}>
                    <div>
                      <h2>Key dates</h2>
                      <ul style={{ marginTop: 22, display: 'grid', gap: 0 }}>
                        {FALL_TIMELINE.map(([date, event]) => (
                          <li
                            key={date}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '128px 1fr',
                              gap: 18,
                              paddingBlock: 16,
                              borderTop: '1px solid var(--border)',
                            }}
                          >
                            <span className="mono" style={{ color: 'var(--gold-600)' }}>
                              {date}
                            </span>
                            <span>{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-e" style={{ padding: 'clamp(22px, 3vw, 34px)' }}>
                      <TagPill variant="gold">
                        <LuCircleAlert aria-hidden="true" size={12} /> Eligibility
                      </TagPill>
                      <h3 style={{ marginTop: 18 }}>Before you apply</h3>
                      <ul style={{ marginTop: 16, display: 'grid', gap: 12, fontSize: '0.9rem' }}>
                        <li>
                          <LuBadgeCheck aria-hidden="true" style={{ color: 'var(--gold-600)', marginRight: 8 }} />
                          Intermediate / FSc / equivalent with the minimum percentage shown
                          against each program.
                        </li>
                        <li>
                          <LuBadgeCheck aria-hidden="true" style={{ color: 'var(--gold-600)', marginRight: 8 }} />
                          For postgraduate programs: 16 or 18 years of education with the
                          required CGPA and a valid GAT where applicable.
                        </li>
                        <li>
                          <LuBadgeCheck aria-hidden="true" style={{ color: 'var(--gold-600)', marginRight: 8 }} />
                          LAW admission requires a passing LAT score.
                        </li>
                        <li>
                          <LuBadgeCheck aria-hidden="true" style={{ color: 'var(--gold-600)', marginRight: 8 }} />
                          All documents must be attested; the merit formula uses the marks
                          entered at application.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="table-scroll">
                    <table className="e-table">
                      <caption>
                        Selected programs — seats, eligibility and last year's closing merit
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">Program</th>
                          <th scope="col">Faculty</th>
                          <th scope="col">Level</th>
                          <th scope="col">Seats</th>
                          <th scope="col">Eligibility</th>
                          <th scope="col">Closing merit 2025</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PROGRAM_TABLE.map((row) => (
                          <tr key={row[0]}>
                            <th scope="row" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500 }}>
                              {row[0]}
                            </th>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                            <td>{row[3]}</td>
                            <td>{row[4]}</td>
                            <td style={{ color: 'var(--gold-600)', fontFamily: 'var(--font-mono)' }}>
                              {row[5]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mono" style={{ marginTop: 18 }}>
                    Closing merit is indicative. The full table for all 77 programs is in the
                    admission prospectus.
                  </p>
                </>
              ) : null}

              {tab === 'spring-2026' ? (
                <div className="card-grid-2">
                  <article className="card-e" style={{ padding: 'clamp(22px, 3vw, 34px)' }}>
                    <TagPill>Closed · archive</TagPill>
                    <h2 style={{ marginTop: 18 }}>Spring 2026 admissions</h2>
                    <p className="lede" style={{ marginTop: 14 }}>
                      The Spring 2026 cycle closed with 3,180 applications processed against
                      1,940 available seats. Merit lists remain published for reference.
                    </p>
                    <ul className="hours-list" style={{ marginTop: 22 }}>
                      <li>
                        <span>Applications received</span>
                        <b>3,180</b>
                      </li>
                      <li>
                        <span>Seats offered</span>
                        <b>1,940</b>
                      </li>
                      <li>
                        <span>Class start</span>
                        <b>02 Feb 2026</b>
                      </li>
                    </ul>
                  </article>

                  <article className="card-e" style={{ padding: 'clamp(22px, 3vw, 34px)' }}>
                    <TagPill variant="sage">Next cycle</TagPill>
                    <h2 style={{ marginTop: 18 }}>Spring 2027</h2>
                    <p className="lede" style={{ marginTop: 14 }}>
                      Spring 2027 applications are expected to open in December 2026 for a
                      February 2027 start. Notify the Admissions Office to receive the
                      announcement by email.
                    </p>
                    <ul className="hours-list" style={{ marginTop: 22 }}>
                      <li>
                        <span>Expected opening</span>
                        <b>15 Dec 2026</b>
                      </li>
                      <li>
                        <span>Expected class start</span>
                        <b>01 Feb 2027</b>
                      </li>
                    </ul>
                  </article>
                </div>
              ) : null}

              {tab === 'merit-lists' ? (
                <>
                  <div className="asymmetric" style={{ marginBottom: 'clamp(30px, 4vw, 54px)' }}>
                    <div className="col-5">
                      <SectionLabel>Merit lists</SectionLabel>
                      <h2 style={{ marginTop: 18 }}>Published lists & how merit is calculated</h2>
                      <p className="lede" style={{ marginTop: 18 }}>
                        Lists are published on this page and on the notice boards of the
                        Directorate of Admissions. Merit is calculated on the marks recorded
                        at the time of application; later corrections are not admitted.
                      </p>
                      <ul className="hours-list" style={{ marginTop: 24 }}>
                        <li>
                          <span>Standard seats</span>
                          <b>Merit only</b>
                        </li>
                        <li>
                          <span>Self-finance seats</span>
                          <b>Merit ranked</b>
                        </li>
                        <li>
                          <span>Objection window</span>
                          <b>3 working days</b>
                        </li>
                      </ul>
                    </div>

                    <div className="col-7">
                      <div className="card-grid-3">
                        {downloads.downloads.map((item) => (
                          <article className="dl-card lift" key={item.id}>
                            <span className="dl-card__icon">
                              {item.kind === 'Merit List' ? (
                                <LuBadgeCheck aria-hidden="true" size={20} />
                              ) : (
                                <LuFileText aria-hidden="true" size={20} />
                              )}
                            </span>
                            <div>
                              <p className="mono" style={{ color: 'var(--gold-600)', margin: 0 }}>
                                {item.kind}
                              </p>
                              <h3 style={{ marginTop: 10, fontSize: '1.1rem' }}>{item.title}</h3>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                              {item.meta}
                            </p>
                            <a className="link-arrow link-draw" href={item.href} download>
                              Download
                              <LuDownload aria-hidden="true" size={14} />
                            </a>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

              {tab === 'fees' ? (
                <>
                  <p className="lede" style={{ marginBottom: 30 }}>
                    Per-semester tuition by faculty. Admission and security charges are
                    one-time, charged in the first semester only.
                  </p>
                  <div className="table-scroll">
                    <table className="e-table">
                      <caption>Fee structure 2026–27 (PKR)</caption>
                      <thead>
                        <tr>
                          <th scope="col">Faculty</th>
                          <th scope="col">Admission (one-time)</th>
                          <th scope="col">Tuition / semester</th>
                          <th scope="col">Self-finance / semester</th>
                        </tr>
                      </thead>
                      <tbody>
                        {FEE_TABLE.map((row) => (
                          <tr key={row[0]}>
                            <th scope="row" style={{ fontWeight: 500 }}>
                              {row[0]}
                            </th>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                            <td style={{ color: 'var(--gold-600)' }}>{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mono" style={{ marginTop: 18 }}>
                    Hostel, transport and examination charges are billed separately.
                  </p>
                </>
              ) : null}

              {tab === 'scholarships' ? (
                <div className="card-grid-2">
                  {SCHOLARSHIPS.map((item) => (
                    <article className="card-e lift" key={item.title} style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
                      <TagPill variant="gold">{item.tag}</TagPill>
                      <h3 style={{ marginTop: 16 }}>{item.title}</h3>
                      <p style={{ marginTop: 12, marginBottom: 0, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                        {item.body}
                      </p>
                    </article>
                  ))}
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div
            className="card-e"
            style={{
              marginTop: 'clamp(34px, 5vw, 64px)',
              padding: 'clamp(22px, 3vw, 34px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <TagPill variant="gold">
                <LuCalendar aria-hidden="true" size={12} /> Need help applying?
              </TagPill>
              <h3 style={{ marginTop: 14 }}>The Admissions Office answers within two working days</h3>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <GoldButton to="/contact" icon={<LuArrowUpRight aria-hidden="true" />}>
                Contact admissions
              </GoldButton>
              <GoldButton href="mailto:registrar@uswat.edu.pk" variant="ghost">
                registrar@uswat.edu.pk
              </GoldButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
