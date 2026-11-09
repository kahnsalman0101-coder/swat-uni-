import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LuArrowUpRight, LuMenu, LuMoon, LuSun, LuX } from 'react-icons/lu';
import useScrollProgress from '../../hooks/useScrollProgress';
import useCursor from '../../hooks/useCursor';
import ThemeContext from '../../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Research', to: '/research' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Contact', to: '/contact' },
];

const overlayVariants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.22, ease: [0.65, 0, 0.35, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function MountainGlyph() {
  return (
    <svg className="nav__glyph" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <path
        d="M2 33 L11 12 L17.5 22 L23 6 L30 25 L34.5 19 L38 33 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="6" r="1.8" fill="#D4A24C" />
    </svg>
  );
}

/**
 * Navbar — frosted-glass pill that morphs past the scroll threshold, with a
 * circular gold Apply CTA and a full-screen staggered mobile overlay.
 */
export default function Navbar() {
  const { scrolled } = useScrollProgress(80);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { enabled, setVariant } = useCursor();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const closeRef = useRef(null);

  // Close the overlay on navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock the document and trap Escape while the overlay is open
  useEffect(() => {
    if (!open) {
      document.body.classList.remove('is-locked');
      return undefined;
    }
    document.body.classList.add('is-locked');
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('is-locked');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const currentIndex = useMemo(
    () => NAV_LINKS.findIndex((link) => link.to === location.pathname),
    [location.pathname]
  );

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__pill">
          <Link
            to="/"
            className="nav__logo"
            aria-label="University of Swat — home"
            onPointerEnter={enabled ? () => setVariant('hover') : undefined}
            onPointerLeave={enabled ? () => setVariant('default') : undefined}
          >
            <MountainGlyph />
            <span>
              University of Swat
              <span className="nav__logo-sub">Charbagh · Khyber Pakhtunkhwa</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__right">
            <button
              type="button"
              className="nav__theme"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <LuSun aria-hidden="true" /> : <LuMoon aria-hidden="true" />}
            </button>

            <Link to="/admissions" className="nav__cta">
              <span>Apply</span>
              <LuArrowUpRight aria-hidden="true" />
            </Link>

            <button
              type="button"
              className="nav__burger"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
            >
              <LuMenu aria-hidden="true" size={19} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            className="nav-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="nav-overlay__top">
              <span className="mono-invert">
                Menu — {String(Math.max(currentIndex, 0) + 1).padStart(2, '0')}/0
                {NAV_LINKS.length}
              </span>
              <button
                ref={closeRef}
                type="button"
                className="nav-overlay__close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <LuX aria-hidden="true" size={20} />
              </button>
            </div>

            <nav className="nav-overlay__list" aria-label="Mobile">
              {NAV_LINKS.map((link, index) => (
                <motion.div key={link.to} variants={itemVariants}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className="nav-overlay__link"
                    onClick={() => setOpen(false)}
                  >
                    <small>{String(index + 1).padStart(2, '0')}</small>
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="nav-overlay__foot">
              <span className="mono-invert">University of Swat · Charbagh</span>
              <a className="mono-invert link-draw link-draw--gold" href="mailto:registrar@uswat.edu.pk">
                registrar@uswat.edu.pk
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
