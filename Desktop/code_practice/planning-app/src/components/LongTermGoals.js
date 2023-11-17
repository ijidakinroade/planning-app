import React, { useState } from 'react';
import './LongTermGoals.css';

const LongTermGoals = () => {
  const [longTermGoals, setLongTermGoals] = useState('');

  const handleLongTermGoalsChange = (event) => {
    setLongTermGoals(event.target.value);
  };

  return (
    <div className="LongTermGoals">
      <textarea
        placeholder="How are your long-term goals progressing?"
        value={longTermGoals}
        onChange={handleLongTermGoalsChange}
      />
    </div>
  );
};

export default LongTermGoals;