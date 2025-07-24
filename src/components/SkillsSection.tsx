import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';

interface Skill {
  name: string;
  level: number; // 0 to 100
}

const skills: Skill[] = [
  { name: 'React & TypeScript', level: 90 },
  { name: 'CSS & Motion Design', level: 85 },
  { name: '3D & WebGL', level: 70 },
  { name: 'Illustration', level: 80 },
  { name: 'Accessibility', level: 75 },
];

/**
 * SkillsSection displays a list of skills with animated progress bars. The bars
 * animate when they enter the viewport to provide a sense of accomplishment.
 */
const SkillsSection: React.FC = () => {
  return (
    <section id="skills-section" className="skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Skills
        </motion.h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <motion.div
                className="skill-bar-wrapper"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                <div className="skill-bar"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;