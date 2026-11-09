import { LuMail, LuPhone } from 'react-icons/lu';

const LINKS = [
  { label: 'CMS', href: 'https://cms.uswat.edu.pk' },
  { label: 'SUJRIS', href: 'https://uswat.edu.pk' },
  { label: 'e-Office', href: 'https://uswat.edu.pk' },
  { label: 'Campus TV', href: 'https://uswat.edu.pk' },
  { label: 'M-Varsities', href: 'https://uswat.edu.pk' },
  { label: 'Exam', href: 'https://uswat.edu.pk' },
];

/**
 * UtilityRail — thin monospace service rail pinned to the very top of the
 * viewport. Institutional tooling lives here, never in the main navbar.
 */
export default function UtilityRail() {
  return (
    <div className="utilrail">
      <div className="shell utilrail__inner">
        <nav className="utilrail__links" aria-label="Service links">
          {LINKS.map((link, index) => (
            <a
              key={link.label}
              className="utilrail__link"
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.label}
              {index < LINKS.length - 1 ? (
                <span aria-hidden="true" style={{ opacity: 0.35, marginLeft: 14 }}>
                  /
                </span>
              ) : null}
            </a>
          ))}
        </nav>

        <div className="utilrail__meta">
          <span>
            <LuMail aria-hidden="true" style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
            <a className="utilrail__link" href="mailto:registrar@uswat.edu.pk">
              registrar@uswat.edu.pk
            </a>
          </span>
          <span aria-hidden="true">
            <LuPhone style={{ display: 'inline', verticalAlign: '-2px' }} /> +92 946 924 0000
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span className="utilrail__dot" aria-hidden="true" />
            Admissions open
          </span>
        </div>
      </div>
    </div>
  );
}
