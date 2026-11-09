import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useScrollProgress from '../../hooks/useScrollProgress';

/**
 * SideRail — sticky left rail showing document scroll progress plus the
 * chapter currently in view (sections opt in with `data-chapter="…"`).
 */
export default function SideRail() {
  const { progress } = useScrollProgress();
  const [chapter, setChapter] = useState('University of Swat');
  const [index, setIndex] = useState({ current: 1, total: 1 });

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-chapter]'));
    if (!sections.length) return undefined;
    setIndex({ current: 1, total: sections.length });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const position = sections.indexOf(entry.target) + 1;
          setChapter(entry.target.getAttribute('data-chapter') || '');
          setIndex({ current: position, total: sections.length });
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="siderail" aria-hidden="true">
      <span className="siderail__index">
        {String(index.current).padStart(2, '0')} / {String(index.total).padStart(2, '0')}
      </span>

      <div className="siderail__track">
        <motion.div
          className="siderail__bar"
          style={{ scaleY: progress }}
          transition={{ type: 'spring', stiffness: 180, damping: 30 }}
        />
      </div>

      <span className="siderail__chapter">{chapter}</span>
    </aside>
  );
}
