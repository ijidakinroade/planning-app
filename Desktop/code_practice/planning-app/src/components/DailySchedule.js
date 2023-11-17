// File: src/components/DailySchedule.js

import React, { useState } from 'react';
import './DailySchedule.css';

const DailySchedule = ({ onScheduleSubmit }) => {
  const [dailyPlans, setDailyPlans] = useState('');

  const handleDailyPlansChange = (event) => {
    setDailyPlans(event.target.value);
  };

  const handleSubmit = () => {
    onScheduleSubmit(dailyPlans);
  };

  return (
    <div className="DailySchedule">
      <textarea
        placeholder="What are your daily plans?"
        value={dailyPlans}
        onChange={handleDailyPlansChange}
      />
      <button onClick={handleSubmit}>Save Daily Plans</button>
    </div>
  );
};

export default DailySchedule;
