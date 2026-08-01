import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'education', name: 'Education' },
    { id: 'certifications', name: 'Certificates' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar scrolled style
      setIsScrolled(window.scrollY > 20);

      // 2. Scroll progress indicator
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // 3. Highlight active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // offset

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
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
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Scroll Progress Bar */}
      <div 
        // className="scroll-progress-bar" 
        // style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="container nav-container">
        <div className="logo-text" onClick={() => handleLinkClick('home')}>
          {/* <Terminal size={24} style={{ color: '#00f2fe' }} /> */}
          <span>Janhavi Patil</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              <a 
                href={`#${item.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger toggle for mobile */}
        <button className="hamburger-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <ul className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id} className="mobile-nav-item">
            <a 
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
