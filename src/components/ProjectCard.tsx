import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

/**
 * ProjectCard displays a single project with an image, a title and a
 * description. Hovering over the card triggers a slight elevation and scale
 * animation using Framer Motion to create a microinteraction【93710445536284†L155-L176】.  
 */
const ProjectCard: React.FC<Project> = ({ title, description, image, link }) => {
  return (
    <motion.article
      className="project-card interactive"
      data-cursor-hover
      whileHover={{ scale: 1.03, translateY: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;