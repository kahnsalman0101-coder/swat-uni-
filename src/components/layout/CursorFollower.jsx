import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import useCursor from '../../hooks/useCursor';

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label, .lift, .bento__card';

/**
 * CursorFollower — gold ring + dot that trail the pointer and scale 3× over
 * interactive elements. Only mounted for fine pointers without reduced motion.
 */
export default function CursorFollower() {
  const { enabled, variant, setVariant, position } = useCursor();

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const ringX = useSpring(rawX, { stiffness: 320, damping: 28, mass: 0.42 });
  const ringY = useSpring(rawY, { stiffness: 320, damping: 28, mass: 0.42 });
  const dotX = useSpring(rawX, { stiffness: 900, damping: 40, mass: 0.2 });
  const dotY = useSpring(rawY, { stiffness: 900, damping: 40, mass: 0.2 });

  useEffect(() => {
    rawX.set(position.x);
    rawY.set(position.y);
  }, [position, rawX, rawY]);

  // Delegate hover detection so every interactive element grows the cursor.
  useEffect(() => {
    if (!enabled) return undefined;

    const onOver = (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest(INTERACTIVE)) setVariant('hover');
    };
    const onOut = (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest(INTERACTIVE)) setVariant('default');
    };

    document.addEventListener('pointerover', onOver, true);
    document.addEventListener('pointerout', onOut, true);
    return () => {
      document.removeEventListener('pointerover', onOver, true);
      document.removeEventListener('pointerout', onOut, true);
    };
  }, [enabled, setVariant]);

  if (!enabled) return null;

  const scale = variant === 'hover' ? 3 : variant === 'text' ? 1.6 : 1;

  return (
    <>
      <motion.div className="cursor-ring" aria-hidden="true" style={{ x: ringX, y: ringY, scale }} />
      <motion.div className="cursor-dot" aria-hidden="true" style={{ x: dotX, y: dotY }} />
    </>
  );
}
