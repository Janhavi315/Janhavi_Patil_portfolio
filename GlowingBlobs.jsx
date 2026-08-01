import React from 'react';

const GlowingBlobs = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <div className="glow-blob cyan-blob" />
      <div className="glow-blob purple-blob" />
      <div className="glow-blob pink-blob" />
    </div>
  );
};

export default GlowingBlobs;
