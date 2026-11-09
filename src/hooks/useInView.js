import { useEffect, useRef, useState } from 'react';

/**
 * useInView — IntersectionObserver primitive.
 *
 * @param {object}  options
 * @param {number}  options.threshold
 * @param {string}  options.rootMargin
 * @param {boolean} options.once  keep the "in view" state once triggered
 * @returns {[React.RefObject, boolean]}
 */
export default function useInView({
  threshold = 0.2,
  rootMargin = '0px 0px -8% 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // No observer (older browsers / SSR): reveal immediately rather than hiding content.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
