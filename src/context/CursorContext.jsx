import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';

const CursorContext = createContext({
  variant: 'default',
  enabled: false,
  setVariant: () => {},
  position: { x: 0, y: 0 },
});

/**
 * CursorProvider — gold cursor follower state.
 *
 * The follower only activates for fine pointers with hover support and when the
 * user has not asked for reduced motion. Touch devices and reduced-motion users
 * keep their native cursor (nothing is hijacked).
 */
export function CursorProvider({ children }) {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariantState] = useState('default');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) {
      setEnabled(false);
      return undefined;
    }

    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    let frame = 0;
    const onMove = (event) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          setPosition(positionRef.current);
        });
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.body.classList.remove('has-custom-cursor');
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const setVariant = useCallback((next) => setVariantState(next), []);

  const value = useMemo(
    () => ({ enabled, variant, setVariant, position }),
    [enabled, variant, setVariant, position]
  );

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export default CursorContext;
