// File: TransitionEffect.js
import React from 'react';
import './TransitionEffect.css';

const TransitionEffect = ({ children, show }) => {
  return (
    <div className={`transition-container ${show ? 'show' : ''}`}>
      {children}
    </div>
  );
};

export default TransitionEffect;
