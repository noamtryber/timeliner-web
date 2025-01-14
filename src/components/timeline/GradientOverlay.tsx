import React from 'react';

export const GradientOverlay = () => {
  return (
    <div 
      className="absolute inset-0 z-10"
      style={{
        background: 'linear-gradient(90deg, rgba(26, 31, 44, 0.02) 0%, rgba(26, 31, 44, 0.15) 50%, rgba(26, 31, 44, 0.25) 100%)'
      }}
    />
  );
};