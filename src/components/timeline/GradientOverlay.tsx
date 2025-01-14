import React from 'react';

export const GradientOverlay = () => {
  return (
    <div 
      className="absolute inset-0 z-20"
      style={{
        background: 'linear-gradient(90deg, rgba(26, 31, 44, 0.01) 0%, rgba(26, 31, 44, 0.05) 50%, rgba(26, 31, 44, 0.15) 100%)'
      }}
    />
  );
};