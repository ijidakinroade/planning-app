// DailyPlan.js
import React from 'react';
import './DailyPlan.css'; // Ensure you have this CSS file


const DailyPlan = ({ plan }) => {
  return (
    <div className="container">
      <h1>Your Daily Plan</h1>
      <div className="plan-content">
        {plan}
      </div>
    </div>
  );
};

export default DailyPlan;