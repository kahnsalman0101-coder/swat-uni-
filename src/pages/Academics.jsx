import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LuArrowUpRight, LuSearch, LuX } from 'react-icons/lu';
import SEO from '../components/ui/SEO';
import SectionLabel from '../components/ui/SectionLabel';
import TagPill from '../components/ui/TagPill';
import GoldButton from '../components/ui/GoldButton';
import facultiesData from '../data/faculties.json';
import { IMAGES } from '../lib/img';

/** Flatten the faculty JSON into one record per program. */
const toProgramRecords = (faculties) =>
  faculties.flatMap((faculty) =>
    faculty.departments.flatMap((dept) =>
      dept.programs.map((program) => ({
        program,
        department: dept.name,
        faculty: faculty.name,
        facultyId: faculty.id,
        facultyIndex: faculty.index,
        level: /^PhD|^MPhil|^MS |^MSc|^MA |^MBA|^MPA|^LLM|^MCom/i.test(program)
          ? 'Postgraduate'
          : 'Undergraduate',
      }))
    )
  );

export default function Academics() {
  const [params, setParams] = useSearchParams();
  const initialFaculty = params.get('faculty') || 'all';
  const [facultyId, setFacultyId] = useState(initialFaculty);
  const [level, setLevel] = useState('all');
  const [query, setQuery] = useState('');

  const { faculties, meta } = facultiesData;
  const records = useMemo(() => toProgramRecords(faculties), [faculties]);

  // Keep the URL in step with the filter so faculty links are shareable.
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (facultyId === 'all') next.delete('faculty');
    else next.set('faculty', facultyId);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facultyId]);

  const counts = useMemo(() => {
    const map = { all: records.length };
    faculties.forEach((faculty) => {
      map[faculty.id] = records.filter((record) => record.facultyId === faculty.id).length;
    });
    return map;
  }, [faculties, records]);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return records.filter((record) => {
      if (facultyId !== 'all' && record.facultyId !== facultyId) return false;
      if (level !== 'all' && record.level !== level) return false;
      if (!needle) return true;
      return (
        record.program.toLowerCase().includes(needle) ||
        record.department.toLowerCase().includes(needle) ||
        record.faculty.toLowerCase().includes(needle)
      );
    });
  }, [records, facultyId, level, query]);

  const activeFaculty = faculties.find((faculty) => faculty.id === facultyId);

  return (
    <>
      <SEO
        title="Academics — 7 Faculties, 30 Departments, 77 Programs"
        description="Browse every degree offered by the University of Swat: undergraduate, master's, MS/MPhil and PhD programs across seven faculties at Charbagh campus."
        path="/academics"
        image={IMAGES.gallery[1]}
      />

      <header className="page-hero" data-chapter="Academics">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Academics</span>
          </nav>

          <SectionLabel>Academics · 2026–27</SectionLabel>
          <h1 className="page-hero__title" style={{ marginTop: 20 }}>
            Seventy-seven ways into the valley
          </h1>
          <p className="lede" style={{ marginTop: 22, maxWidth: '56ch' }}>
            {meta.totals.faculties} faculties, {meta.totals.departments} departments and{' '}
            {meta.totals.programs} programs — filtered by faculty, level or search. Every
            program admits on merit.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }} data-chapter="Program finder">
        <div className="shell asymmetric">
          {/* Sticky filter rail */}
          <aside className="col-3">
            <div className="sticky-aside">
              <div className="card-e" style={{ padding: 20 }}>
                <div className="field" style={{ marginBottom: 22 }}>
                  <input
                    className="field__input"
                    id="program-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder=" "
                  />
                  <label className="field__label" htmlFor="program-search">
                    Search programs
                  </label>
                  <LuSearch
                    aria-hidden="true"
                    style={{ position: 'absolute', right: 16, top: 20, color: 'var(--text-muted)' }}
                  />
                </div>

                <div className="filter__group">
                  <p className="filter__legend">Faculty</p>
                  <div className="filter__list">
                    <button
                      type="button"
                      className={`filter__btn ${facultyId === 'all' ? 'is-active' : ''}`}
                      onClick={() => setFacultyId('all')}
                    >
                      All faculties
                      <span className="filter__count">{counts.all}</span>
                    </button>
                    {faculties.map((faculty) => (
                      <button
                        key={faculty.id}
                        type="button"
                        className={`filter__btn ${facultyId === faculty.id ? 'is-active' : ''}`}
                        onClick={() => setFacultyId(faculty.id)}
                      >
                        {faculty.short}
                        <span className="filter__count">{counts[faculty.id]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter__group">
                  <p className="filter__legend">Level</p>
                  <div className="filter__list" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {['all', 'Undergraduate', 'Postgraduate'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`filter__btn ${level === option ? 'is-active' : ''}`}
                        style={{ width: 'auto' }}
                        onClick={() => setLevel(option)}
                      >
                        {option === 'all' ? 'All levels' : option}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 26 }}>
                  <GoldButton
                    to="/admissions"
                    block
                    icon={<LuArrowUpRight aria-hidden="true" />}
                  >
                    Apply for Fall 2026
                  </GoldButton>
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="col-9">
            <div
              className="section-head"
              style={{ marginBottom: 26, alignItems: 'center' }}
            >
              <div>
                <p className="mono" style={{ margin: 0 }}>
                  {visible.length} of {records.length} programs
                </p>
                <h2 style={{ marginTop: 12, fontSize: 'clamp(1.4rem, 2.2vw, 2rem)' }}>
                  {activeFaculty ? activeFaculty.name : 'Every faculty, every level'}
                </h2>
              </div>

              {(facultyId !== 'all' || level !== 'all' || query) && (
                <button
                  type="button"
                  className="filter__btn"
                  style={{ width: 'auto' }}
                  onClick={() => {
                    setFacultyId('all');
                    setLevel('all');
                    setQuery('');
                  }}
                >
                  <LuX aria-hidden="true" size={14} /> Clear filters
                </button>
              )}
            </div>

            {activeFaculty ? (
              <p className="mono" style={{ marginBottom: 26, color: 'var(--text-muted)' }}>
                {activeFaculty.blurb}
              </p>
            ) : null}

            <motion.div layout className="academics-grid">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((record) => (
                  <motion.article
                    key={`${record.facultyId}-${record.department}-${record.program}`}
                    layout
                    className="program lift"
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="program__meta">
                      <TagPill variant="gold">{record.level}</TagPill>
                      <TagPill>FAC {record.facultyIndex}</TagPill>
                    </div>
                    <h3 className="program__title">{record.program}</h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      {record.department}
                    </p>
                    <div className="program__foot">
                      <span>{record.faculty.replace('Faculty of ', '')}</span>
                      <LuArrowUpRight aria-hidden="true" size={15} style={{ color: 'var(--gold-600)' }} />
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {visible.length === 0 ? (
              <p className="lede" style={{ marginTop: 40 }}>
                No program matches that combination. Try clearing the level filter, or search
                for a department name such as “Physics”.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
