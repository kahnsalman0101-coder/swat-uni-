import { Link } from 'react-router-dom';
import { LuClock, LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import SEO from '../components/ui/SEO';
import SectionLabel from '../components/ui/SectionLabel';
import TagPill from '../components/ui/TagPill';
import ContactForm from '../components/forms/ContactForm';
import { IMAGES } from '../lib/img';

const OFFICERS = [
  {
    role: 'Registrar',
    name: 'Mr. Fayyaz Ahmed Khan',
    email: 'registrar@uswat.edu.pk',
    phone: '+92 946 924 0000',
    note: 'Academic records, admissions, convocation and the university seal.',
  },
  {
    role: 'Admissions Office',
    name: 'Directorate of Admissions',
    email: 'registrar@uswat.edu.pk',
    phone: '+92 946 924 0000',
    note: 'Applications, merit lists, eligibility queries and self-finance seats.',
  },
  {
    role: 'Examination',
    name: 'Controller of Examinations',
    email: 'registrar@uswat.edu.pk',
    phone: '+92 946 924 0000',
    note: 'Results, transcripts, re-totalling and degree issuance.',
  },
  {
    role: 'Research',
    name: 'Office of Research, Innovation & Commercialisation',
    email: 'registrar@uswat.edu.pk',
    phone: '+92 946 924 0000',
    note: 'Grants, industry partnerships and consultancy agreements.',
  },
];

const ADDRESS =
  'University of Swat, Charbagh, Tehsil Kabal, District Swat, Khyber Pakhtunkhwa, Pakistan';

export default function Contact() {
  const mapQuery = encodeURIComponent('University of Swat, Charbagh, Swat, Khyber Pakhtunkhwa');

  return (
    <>
      <SEO
        title="Contact & Campus Location"
        description="Contact the University of Swat at Charbagh, Swat. Registrar Mr. Fayyaz Ahmed Khan · registrar@uswat.edu.pk · +92 946 924 0000, with office hours and campus map."
        path="/contact"
        image={IMAGES.contactPlate}
      />

      <header className="page-hero" data-chapter="Contact">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Contact</span>
          </nav>

          <SectionLabel>Get in touch</SectionLabel>
          <h1 className="page-hero__title" style={{ marginTop: 20 }}>
            Talk to a person,
            <br />
            not a portal
          </h1>
          <p className="lede" style={{ marginTop: 22, maxWidth: '54ch' }}>
            The Registrar's Office is the single entry point for applicants, students,
            researchers and partners. Write to us and you will hear back within two working
            days.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(18px, 3vw, 44px)', marginTop: 34 }}>
            <span className="hero__tick">
              Registrar
              <b style={{ fontSize: '1.15rem' }}>Mr. Fayyaz Ahmed Khan</b>
            </span>
            <span className="hero__tick">
              Email
              <b style={{ fontSize: '1.15rem' }}>
                <a className="link-draw link-draw--gold" href="mailto:registrar@uswat.edu.pk">
                  registrar@uswat.edu.pk
                </a>
              </b>
            </span>
            <span className="hero__tick">
              Telephone
              <b style={{ fontSize: '1.15rem' }}>
                <a className="link-draw" href="tel:+929469240000">
                  +92 946 924 0000
                </a>
              </b>
            </span>
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }} data-chapter="Send a message">
        <div className="shell asymmetric">
          <div className="col-7">
            <div className="section-head" style={{ marginBottom: 30 }}>
              <div>
                <SectionLabel>Enquiry form</SectionLabel>
                <h2 style={{ marginTop: 18, fontSize: 'clamp(1.4rem, 2.2vw, 2rem)' }}>
                  Send a message
                </h2>
              </div>
            </div>
            <ContactForm />
          </div>

          <aside className="col-5">
            <div className="card-e" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
              <TagPill variant="gold">
                <LuClock aria-hidden="true" size={12} /> Office hours
              </TagPill>
              <ul className="hours-list" style={{ marginTop: 20 }}>
                <li>
                  <span>Monday – Thursday</span>
                  <b>08:30 – 16:00</b>
                </li>
                <li>
                  <span>Friday</span>
                  <b>08:30 – 12:30</b>
                </li>
                <li>
                  <span>Saturday & Sunday</span>
                  <b>Closed</b>
                </li>
                <li>
                  <span>Admissions counter</span>
                  <b>09:00 – 15:00</b>
                </li>
              </ul>

              <hr className="rule-gold" style={{ margin: '24px 0' }} />

              <p className="mono" style={{ marginBottom: 12 }}>
                <LuMapPin aria-hidden="true" style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
                Campus address
              </p>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                {ADDRESS}
              </p>

              <hr className="rule-gold" style={{ margin: '24px 0' }} />

              <p className="mono" style={{ marginBottom: 12 }}>
                <LuMail aria-hidden="true" style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
                Direct lines
              </p>
              <ul style={{ display: 'grid', gap: 12, fontSize: '0.92rem' }}>
                <li>
                  <a className="link-arrow" href="mailto:registrar@uswat.edu.pk">
                    <LuMail aria-hidden="true" size={14} /> registrar@uswat.edu.pk
                  </a>
                </li>
                <li>
                  <a className="link-arrow" href="tel:+929469240000">
                    <LuPhone aria-hidden="true" size={14} /> +92 946 924 0000
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Departments */}
      <section className="section section--alt" data-chapter="Offices">
        <div className="shell">
          <div className="section-head">
            <div>
              <SectionLabel>Who to contact</SectionLabel>
              <h2 style={{ marginTop: 18 }}>Offices and direct lines</h2>
            </div>
          </div>

          <div className="card-grid-2">
            {OFFICERS.map((officer) => (
              <article className="card-e lift" key={officer.role} style={{ padding: 'clamp(20px, 2.6vw, 30px)' }}>
                <TagPill>{officer.role}</TagPill>
                <h3 style={{ marginTop: 14, fontSize: '1.15rem' }}>{officer.name}</h3>
                <p style={{ marginTop: 10, marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {officer.note}
                </p>
                <div className="program__foot" style={{ marginTop: 18, paddingTop: 14 }}>
                  <a className="link-draw" href={`mailto:${officer.email}`}>
                    {officer.email}
                  </a>
                  <a className="link-draw" href={`tel:${officer.phone.replace(/\s/g, '')}`}>
                    {officer.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section" data-chapter="Find us">
        <div className="shell asymmetric">
          <div className="col-5">
            <SectionLabel>Find us</SectionLabel>
            <h2 style={{ marginTop: 18 }}>Charbagh, District Swat</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              The campus sits on the Charbagh plain, roughly twenty minutes from Mingora and
              Saidu Sharif on the main Swat road. Visitor parking is available inside the
              main gate.
            </p>
            <ul className="hours-list" style={{ marginTop: 24 }}>
              <li>
                <span>From Mingora</span>
                <b>≈ 25 min</b>
              </li>
              <li>
                <span>From Islamabad</span>
                <b>≈ 3 hr</b>
              </li>
              <li>
                <span>Nearest airport</span>
                <b>Saidu Sharif (SDT)</b>
              </li>
            </ul>
          </div>

          <div className="col-7">
            <div className="map-frame">
              <iframe
                title="Map showing the University of Swat campus at Charbagh, District Swat"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
