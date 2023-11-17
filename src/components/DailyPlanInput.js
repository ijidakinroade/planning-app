import React, { useState } from 'react';

const DailyPlanInput = () => {
  const [planInput, setPlanInput] = useState('');
  const [reportCard, setReportCard] = useState('');

  const handlePlanChange = (event) => {
    setPlanInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('/api/generate-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers like authorization here
        },
        body: JSON.stringify({ plan: planInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Assuming the server responds with the report card data
      setReportCard(data.reportCard);
    } catch (error) {
      console.error("Failed to submit daily plan", error);
      // Handle errors, such as displaying an alert or setting an error message in state
    }
  };

  return (
    <div>
      <h2>Daily Plan</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={planInput} 
          onChange={handlePlanChange}
          placeholder="What's your plan for today?"
        />
        <button type="submit">Generate Report Card</button>
      </form>
      {reportCard && <div>{reportCard}</div>}
    </div>
  );
};

export default DailyPlanInput;
