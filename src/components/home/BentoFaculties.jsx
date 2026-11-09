import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import facultiesData from '../../data/faculties.json';
import SectionLabel from '../ui/SectionLabel';
import TagPill from '../ui/TagPill';

/**
 * BentoFaculties — seven faculties as a mixed-size bento grid.
 * The Computing faculty card is the rotating gold-filled accent; every card
 * reveals its department list on hover or keyboard focus.
 */
export default function BentoFaculties() {
  const { faculties } = facultiesData;

  // Mixed card sizes: two wide tiles anchor the grid, one tile spans two rows.
  const sizeFor = (index) => {
    if (index === 0 || index === 5) return 'bento__card--wide';
    if (index === 3) return 'bento__card--tall';
    return '';
  };

  return (
    <section className="section section--alt" data-chapter="Faculties">
      <div className="shell">
        <div className="section-head">
          <div>
            <SectionLabel>Academics</SectionLabel>
            <h2 style={{ marginTop: 18 }}>
              Seven faculties.
              <br />
              One valley.
            </h2>
          </div>
          <p className="lede" style={{ maxWidth: '34ch', margin: 0 }}>
            Thirty departments and seventy-seven programs, taught across a single compact
            campus at Charbagh — close enough that a physicist and a poet share the same
            canteen queue.
          </p>
        </div>

        <div className="bento">
          {faculties.map((faculty, index) => {
            const tone = faculty.tone === 'gold' ? 'bento__card--gold' : '';
            const rotating = faculty.id === 'computing' ? 'bento__card--rotating' : '';
            const programCount = faculty.departments.reduce(
              (total, dept) => total + dept.programs.length,
              0
            );

            return (
              <article
                key={faculty.id}
                className={`bento__card lift ${sizeFor(index)} ${tone} ${rotating}`.trim()}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <span className="bento__index">FAC / {faculty.index}</span>
                    <TagPill variant={faculty.tone === 'gold' ? 'invert' : 'default'}>
                      {faculty.departments.length} depts · {programCount} programs
                    </TagPill>
                  </div>

                  <h3 className="bento__title">{faculty.name}</h3>
                  <p
                    style={{
                      marginTop: 12,
                      marginBottom: 0,
                      fontSize: '0.9rem',
                      color: 'inherit',
                      opacity: 0.78,
                      maxWidth: '44ch',
                    }}
                  >
                    {faculty.blurb}
                  </p>

                  <div className="bento__depts">
                    {faculty.departments.map((dept) => (
                      <span className="bento__dept" key={dept.name}>
                        {dept.name}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/academics?faculty=${faculty.id}`}
                  className="bento__arrow"
                  aria-label={`Explore the ${faculty.name}`}
                >
                  <LuArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
