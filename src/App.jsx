import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';

import UtilityRail from './components/layout/UtilityRail';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SideRail from './components/layout/SideRail';
import CursorFollower from './components/layout/CursorFollower';
import GrainOverlay from './components/ui/GrainOverlay';

import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Research from './pages/Research';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/** 300ms fade-drift used by every route transition. */
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const lenisRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // ---- Lenis smooth scroll (skipped entirely for reduced-motion users) ----
  useEffect(() => {
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.05,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };
    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduceMotion]);

  // ---- Scroll restoration + hash targets on navigation ----
  useEffect(() => {
    const scrollToTarget = () => {
      const lenis = lenisRef.current;
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          if (lenis) lenis.scrollTo(target, { offset: -130, duration: 0.9 });
          else target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
      }
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
      return true;
    };

    // Let the incoming page mount before measuring hash targets.
    const timer = window.setTimeout(scrollToTarget, 180);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  // ---- Retire the boot loader once React has painted ----
  useEffect(() => {
    const loader = document.getElementById('boot-loader');
    if (!loader) return undefined;
    loader.style.transition = 'opacity 420ms ease';
    loader.style.opacity = '0';
    const timer = window.setTimeout(() => loader.remove(), 460);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <GrainOverlay />
      <UtilityRail />
      <Navbar />
      <SideRail />
      <CursorFollower />

      <main id="main">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/academics"
              element={
                <PageTransition>
                  <Academics />
                </PageTransition>
              }
            />
            <Route
              path="/admissions"
              element={
                <PageTransition>
                  <Admissions />
                </PageTransition>
              }
            />
            <Route
              path="/research"
              element={
                <PageTransition>
                  <Research />
                </PageTransition>
              }
            />
            <Route
              path="/campus-life"
              element={
                <PageTransition>
                  <CampusLife />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
