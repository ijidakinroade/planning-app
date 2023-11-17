// File: src/components/DailySchedule.js

import React, { useState } from 'react';
import './DailySchedule.css';

const DailySchedule = ({ onScheduleSubmit }) => {
  const [dailyPlans, setDailyPlans] = useState('');

  const handleInputChange = (e) => {
    setDailyPlans(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onScheduleSubmit(dailyPlans);
  };

  return (
    <div className="daily-schedule">
      <h2>Daily Schedule</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={dailyPlans} 
          onChange={handleInputChange}
          placeholder="Enter your daily plans"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DailySchedule;
