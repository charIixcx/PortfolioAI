import React from 'react';
import { motion } from 'framer-motion';
import './FloatingShapes.css';

/**
 * FloatingShapes renders decorative geometric shapes that drift
 * slowly across the background. Each shape is positioned absolutely
 * and uses Framer Motion to animate its vertical position up and down.
 * These "UFOs" break the grid and add a layer of playfulness, inspired
 * by 2025 design trends that incorporate unexpected floating objects【933092526362029†L123-L127】.
 */
const shapes = [
  { size: 120, top: '20%', left: '10%', delay: 0 },
  { size: 80, top: '75%', left: '25%', delay: 0.5 },
  { size: 100, top: '40%', left: '70%', delay: 1.2 },
  { size: 60, top: '60%', left: '85%', delay: 0.8 },
  { size: 90, top: '15%', left: '80%', delay: 1.5 },
];

const FloatingShapes: React.FC = () => {
  return (
    <div className="floating-shapes">
      {shapes.map((shape, idx) => (
        <motion.div
          key={idx}
          className="floating-shape"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
          }}
          animate={{ y: [ -20, 20, -20 ] }}
          transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity, delay: shape.delay }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;