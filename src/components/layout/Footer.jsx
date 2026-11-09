import { Link } from 'react-router-dom';
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
  LuYoutube,
} from 'react-icons/lu';

const COLUMNS = [
  {
    title: 'Study',
    links: [
      { label: 'Academics & Faculties', to: '/academics' },
      { label: 'Admissions Fall 2026', to: '/admissions' },
      { label: 'Merit Lists', to: '/admissions' },
      { label: 'Fee Structure', to: '/admissions' },
      { label: 'Scholarships', to: '/admissions' },
    ],
  },
  {
    title: 'University',
    links: [
      { label: 'About the University', to: '/about' },
      { label: 'Chancellor & Vice Chancellor', to: '/about' },
      { label: 'Research & ORIC', to: '/research' },
      { label: 'Campus Life', to: '/campus-life' },
      { label: 'News & Events', to: '/' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'CMS Portal', href: 'https://cms.uswat.edu.pk' },
      { label: 'SUJRIS', href: 'https://uswat.edu.pk' },
      { label: 'e-Office', href: 'https://uswat.edu.pk' },
      { label: 'Campus TV', href: 'https://uswat.edu.pk' },
      { label: 'Examination', href: 'https://uswat.edu.pk' },
    ],
  },
];

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: LuFacebook },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: LuInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: LuLinkedin },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: LuYoutube },
];

/**
 * Footer — oversized outlined wordmark, four-column editorial grid and a
 * monospace legal bar signed by the IT Cell.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <p className="footer__wordmark" aria-hidden="true">
          UNIVERSITY OF SWAT
        </p>

        <div className="footer__grid">
          <div className="footer__col">
            <h4>Charbagh Campus</h4>
            <ul style={{ gap: 16 }}>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <LuMapPin aria-hidden="true" style={{ marginTop: 4, flex: 'none', color: '#D4A24C' }} />
                <span style={{ color: 'rgba(244,241,234,0.72)', fontSize: '0.875rem' }}>
                  University of Swat, Charbagh, Tehsil Kabal,
                  <br />
                  District Swat, Khyber Pakhtunkhwa, Pakistan
                </span>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <LuPhone aria-hidden="true" style={{ flex: 'none', color: '#D4A24C' }} />
                <a href="tel:+929469240000">+92 946 924 0000</a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <LuMail aria-hidden="true" style={{ flex: 'none', color: '#D4A24C' }} />
                <a href="mailto:registrar@uswat.edu.pk">registrar@uswat.edu.pk</a>
              </li>
              <li className="footer__social">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label}>
                    <Icon aria-hidden="true" size={16} />
                  </a>
                ))}
              </li>
            </ul>
          </div>

          {COLUMNS.map((column) => (
            <nav className="footer__col" key={column.title} aria-label={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) =>
                  link.to ? (
                    <li key={link.label}>
                      <Link className="link-draw link-draw--gold" to={link.to}>
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        className="link-draw link-draw--gold"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} University of Swat. All rights reserved.</span>
          <span>Registrar — Mr. Fayyaz Ahmed Khan</span>
          <span>Designed by IT Cell</span>
        </div>
      </div>
    </footer>
  );
}
