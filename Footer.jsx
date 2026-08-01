import React from 'react';
import { Heart } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-sec">
      <div className="container footer-grid">
        {/* Quick Links */}
        <ul className="footer-nav">
          <li className="footer-nav-link">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>Home</a>
          </li>
          <li className="footer-nav-link">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}>About</a>
          </li>
          <li className="footer-nav-link">
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleLinkClick('skills'); }}>Skills</a>
          </li>
          <li className="footer-nav-link">
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleLinkClick('projects'); }}>Projects</a>
          </li>
          <li className="footer-nav-link">
            <a href="#education" onClick={(e) => { e.preventDefault(); handleLinkClick('education'); }}>Education</a>
          </li>
          <li className="footer-nav-link">
            <a href="#certifications" onClick={(e) => { e.preventDefault(); handleLinkClick('certifications'); }}>Certificates</a>
          </li>
          <li className="footer-nav-link">
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}>Contact</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="social-links">
          <a 
            href="https://linkedin.com/in/janhavi-patil-116578252" 
            target="_blank" 
            rel="noreferrer" 
            className="social-icon-btn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a 
            href="https://github.com/janhavi315" 
            target="_blank" 
            rel="noreferrer" 
            className="social-icon-btn"
          >
            <GithubIcon size={18} />
          </a>
          <a 
            href="mailto:janhavipatil305@gmail.com" 
            className="social-icon-btn"
          >
            <MailIcon size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {currentYear} Janhavi Patil. All rights reserved.</p>
          <p style={{ marginTop: '0.4rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            Designed & Developed with <Heart size={12} style={{ color: '#a855f7' }} fill="#a855f7" /> by Janhavi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
