import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

/**
 * ContactSection presents a simple contact form. It emphasises accessibility by
 * providing labelled form controls and clear focus indicators. The submit
 * handler uses a mailto link as a placeholder; in a real project, you could
 * integrate a form backend or email service.
 */
const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:you@example.com?subject=New message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Contact
        </motion.h2>
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
          ></textarea>
          <button type="submit" className="interactive submit-button" data-cursor-hover>
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;