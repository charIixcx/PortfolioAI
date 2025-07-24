import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

/**
 * The hero section introduces visitors to the portfolio. It features a bold
 * typographic headline and sub‑headline over a dynamic radial gradient
 * background. Subtle animations draw the eye without distracting from
 * accessibility. The call‑to‑action invites users to explore more.
 */
const HeroSection: React.FC = () => {
  return (
    <section id="home-section" className="hero-section">
      <div className="container hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Post‑Anthropocene Portfolio
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        >
          Blending ancient terminals and rave flyers from a future dimension.
        </motion.p>
        <motion.div
          className="scroll-indicator interactive"
          data-cursor-hover
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8, ease: 'easeInOut' }}
        >
          <span>Scroll</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;