import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import GlowingBlobs from './components/GlowingBlobs';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading/pre-load of assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader-spinner" />
        <div className="loader-text">Initializing Portfolio...</div>
      </div>
    );
  }

  return (
    <>
      {/* Custom cursor tracker (hidden on mobile automatically in CSS) */}
      <CustomCursor />
      
      {/* Background Interactive Particles */}
      <ParticleBackground />

      {/* Background Neon Blobs for Glowing Ambience */}
      <GlowingBlobs />

      {/* Main Single Page Layout */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
