import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
import profileImg from '../assets/janhavi-photo(current).jpg';
import resumePdf from '../assets/Janhavi_Patil_Resume.pdf';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Final Year Computer Engineering Student',
    'Aspiring Full Stack Developer',
    'React Developer',
    'Cloud Computing Enthusiast'
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 2000;

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    // Handle switching states
    if (!isDeleting && typedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const handleScrollTo = (id) => {
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

  // Entrance animations config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="home" className="hero-sec">
      {/* Decorative Floating Shapes */}
      <div className="floating-bg-element shape-1" />
      <div className="floating-bg-element shape-2" />
      <div className="floating-bg-element shape-3" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-content"
          >
            <motion.div variants={itemVariants} className="hero-greeting">
              <Sparkles size={16} style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} />
              Hello, I'm
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="hero-title">
              Janhavi Patil
            </motion.h1>

            <motion.div variants={itemVariants} className="hero-subtitle">
              {roles[roleIndex] === roles[0] ? (
                <span>Final Year Computer Engineering Student</span>
              ) : (
                <span>Aspiring Software Engineer</span>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="hero-typing">
              <span>I am an </span>
              <strong style={{ color: '#00f2fe' }}>{typedText}</strong>
              <span className="cursor-blink">|</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="cta-group">
              <a 
                href={resumePdf} 
                download="Janhavi_Patil_Resume.pdf" 
                className="btn-primary"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button 
                onClick={() => handleScrollTo('projects')} 
                className="btn-secondary"
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="btn-secondary"
                style={{ border: '1px solid rgba(168, 85, 247, 0.4)' }}
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="social-links">
              <a 
                href="https://linkedin.com/in/janhavi-patil-116578252" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href="https://github.com/janhavi315" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn"
                title="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="mailto:janhavipatil305@gmail.com" 
                className="social-icon-btn"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="hero-image-wrapper"
          >
            <div className="hero-image-container">
              <img 
                src={profileImg} 
                alt="Janhavi Patil" 
                className="hero-image" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
export { GithubIcon, LinkedinIcon };
