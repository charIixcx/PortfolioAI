import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

// Sample project data. Replace these entries with your own projects.
// Import images through ES modules so Vite can bundle them correctly.
import circuit1 from '../assets/circuit1.png';
import circuit2 from '../assets/circuit2.png';

const projects = [
  {
    title: 'Neon Circuit Art',
    description:
      'An exploration of generative circuitry art using WebGL. This piece fuses neon colours with star‑field backdrops.',
    image: circuit1,
    link: '#',
  },
  {
    title: 'Quantum Glyphs',
    description:
      'A series of glyphs inspired by quantum mechanics and sacred geometry. Built with SVG and React.',
    image: circuit2,
    link: '#',
  },
  {
    title: 'Synthetic Dreams',
    description:
      'A digital collage blending AI‑generated patterns and glitch aesthetics. Part of my speculative design series.',
    image: circuit1,
    link: '#',
  },
];

/**
 * ProjectsSection lists projects in a responsive grid. Each card uses Framer
 * Motion for interactive hover effects and accessible semantics.
 */
const ProjectsSection: React.FC = () => {
  return (
    <section id="projects-section" className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;