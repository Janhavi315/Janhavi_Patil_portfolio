import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot position immediately
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    // Smooth trailing effect for the outer ring using linear interpolation
    const updateRingPosition = () => {
      const ease = 0.15; // Delay speed
      
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      
      requestAnimationFrame(updateRingPosition);
    };

    const addHoverClass = () => {
      document.body.classList.add('cursor-hover');
    };

    const removeHoverClass = () => {
      document.body.classList.remove('cursor-hover');
    };

    const setupHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, input, textarea, select, .clickable, .social-icon-btn, .skill-card, .project-card, .cert-card, .skill-tab-btn');
      
      targets.forEach((target) => {
        target.addEventListener('mouseenter', addHoverClass);
        target.addEventListener('mouseleave', removeHoverClass);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationFrameId = requestAnimationFrame(updateRingPosition);
    
    // Set up hover states
    setupHoverListeners();

    // Re-setup listeners on scroll and clicks (dynamic content changes)
    window.addEventListener('scroll', setupHoverListeners);
    document.addEventListener('click', setupHoverListeners);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', setupHoverListeners);
      document.removeEventListener('click', setupHoverListeners);
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
};

export default CustomCursor;
