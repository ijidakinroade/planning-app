import React, { useState } from 'react';
import './ReportCardInput.css';

const ReportCardInput = ({ onReportCardSubmit }) => {
  const [reportCard, setReportCard] = useState('');

  const handleReportCardChange = (event) => {
    setReportCard(event.target.value);
  };

  const handleSubmit = () => {
    onReportCardSubmit(reportCard);
  };

  return (
    <div className="ReportCardInput">
      <textarea
        placeholder="Paste your report card here"
        value={reportCard}
        onChange={handleReportCardChange}
      />
      <button onClick={handleSubmit}>Process Report Card</button>
    </div>
  );
};

export default ReportCardInput;

// ReportCardInput.css
