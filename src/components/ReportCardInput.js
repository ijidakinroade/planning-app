// File: src/components/ReportCardInput.js

import React, { useState } from 'react';
import './ReportCardInput.css';

const ReportCardInput = ({ onReportCardSubmit }) => {
  const [reportCardData, setReportCardData] = useState('');

  const handleInputChange = (e) => {
    setReportCardData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onReportCardSubmit(reportCardData);
  };

  return (
    <div className="report-card-input">
      <h2>Report Card Input</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={reportCardData} 
          onChange={handleInputChange}
          placeholder="Enter report card data"
        />
        
        
        <button>Submit</button>
        
        

      </form>
    </div>
  );
};

export default ReportCardInput;
