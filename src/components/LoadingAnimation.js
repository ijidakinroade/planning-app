// LoadingAnimation.js
import React from 'react';
import './LoadingAnimation.css'; // Style your loading animation
import Gif from './sakura.gif';



const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <img src={Gif} alt="Loading..." />
      <p>Planning your day...</p>
    </div>
  );
};

export default LoadingAnimation;