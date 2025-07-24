import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor renders a circular cursor that follows the user's pointer.
 * The motion is smoothed using Framer Motion spring values. The cursor
 * enlarges when hovering over interactive elements (those with
 * `data-cursor-hover` attribute) to provide feedback. On mobile
 * devices the custom cursor is hidden to avoid interfering with touch
 * interactions.
 */
const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 40 });
  const [hovering, setHovering] = React.useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 15);
      cursorY.set(e.clientY - 15);
    };
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.closest('[data-cursor-hover]')) {
        setHovering(true);
      }
    };
    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.closest('[data-cursor-hover]')) {
        setHovering(false);
      }
    };
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  // Hide custom cursor on small screens (touch devices)
  const isSmallScreen = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
  if (isSmallScreen) {
    return null;
  }

  return (
    <motion.div
      className={`custom-cursor${hovering ? ' hovering' : ''}`}
      style={{ x: springX, y: springY }}
    />
  );
};

export default CustomCursor;