import { LuArrowUpRight } from 'react-icons/lu';
import newsData from '../../data/news.json';
import SectionLabel from '../ui/SectionLabel';
import TagPill from '../ui/TagPill';

/**
 * DispatchTimeline — vertical editorial timeline of the university newsroom.
 * Mono date · serif headline · tag pill, with a gold swell on hover.
 */
export default function DispatchTimeline() {
  const { news } = newsData;

  return (
    <section className="section" data-chapter="Dispatches">
      <div className="shell">
        <div className="section-head">
          <div>
            <SectionLabel>Dispatches</SectionLabel>
            <h2 style={{ marginTop: 18 }}>From the newsroom</h2>
          </div>
          <a
            className="link-arrow link-draw"
            href="https://www.uswat.edu.pk/"
            target="_blank"
            rel="noreferrer noopener"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em' }}
          >
            USWAT.EDU.PK
            <LuArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>

        <div>
          {news.map((entry, index) => (
            <article className="dispatch__row" key={entry.id}>
              <div>
                <time className="dispatch__date" dateTime={entry.date}>
                  {entry.dateLabel}
                </time>
                <p className="dispatch__date" style={{ marginTop: 10, opacity: 0.6 }}>
                  D-{String(index + 1).padStart(2, '0')}
                </p>
              </div>

              <div>
                <h3 className="dispatch__title">{entry.title}</h3>
                <p className="dispatch__excerpt">{entry.excerpt}</p>
              </div>

              <div className="dispatch__side">
                <TagPill variant={entry.featured ? 'gold' : 'default'}>{entry.tag}</TagPill>
                <a
                  className="link-arrow link-draw link-draw--gold"
                  href="https://www.uswat.edu.pk/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em' }}
                >
                  READ
                  <LuArrowUpRight aria-hidden="true" size={13} />
                </a>
              </div>
            </article>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  );
}
