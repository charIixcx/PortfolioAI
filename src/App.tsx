import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';
import FloatingShapes from './components/FloatingShapes';

/**
 * The root component orchestrates the long scrolling layout.  
 * Each section occupies at least one viewport height, and the navigation 
 * highlights active sections. We avoid heavy external dependencies so the 
 * project remains easy to understand and extend.
 */
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Global custom cursor follows the mouse pointer. */}
      <CustomCursor />
      {/* Floating decorative shapes that drift in the background */}
      <FloatingShapes />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default App;