import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

/**
 * The About section introduces the portfolio owner and provides context for the
 * work showcased. It uses a card with a soft glow to stand out from the dark
 * background, following guidelines to avoid pure black for improved legibility【826091645669512†L93-L102】.
 */
const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="container about-content">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2>About Me</h2>
          <p>
            I’m a creative technologist exploring the intersection of art,
            technology and storytelling. My work blends retro computer
            aesthetics with futuristic visions – imagine a command line prompt
            meeting a rave poster from a far‑flung world. I believe in the
            power of symbolism and modular design to convey complex narratives
            simply. This portfolio is a curated journey through my projects,
            experiments and collaborations.
          </p>
          <p>
            When I’m not coding or illustrating, you’ll find me tinkering with
            music synthesis, reading about speculative futures, or brewing
            espresso. Scroll down to discover more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;