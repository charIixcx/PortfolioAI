import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './Navbar.css';

/**
 * Primary navigation bar. It floats at the top of the viewport and provides quick
 * access to each section of the page. The colours are inspired by neon
 * gradients and classic terminal interfaces. The nav collapses into a mobile
 * hamburger on smaller screens.
 */
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar-wrapper">
        <a href="#" className="logo" aria-label="Home" data-cursor-hover>
          {/* Using a simple wordmark – this could be replaced with your own logo */}
          <span>Portfolio</span>
        </a>
        <button
          className="hamburger interactive"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          data-cursor-hover
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Site Navigation">
          <ul>
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <li key={section}>
                <Link
                  activeClass="active"
                  to={`${section}-section`}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  onClick={() => setOpen(false)}
                  data-cursor-hover
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;