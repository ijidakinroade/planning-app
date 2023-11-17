// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import TransitionEffect from './components/TransitionEffect';
import LoadingAnimation from './components/LoadingAnimation';
import DailyPlan from './components/DailyPlan';
import backgroundGif from './background.gif'; // Ensure this path is correct
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInput, setUserInput] = useState({
    dailyTasks: ''
  });
  const [reportCardText, setReportCardText] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState('');

  const appStyle = {
    backgroundImage: `url(${backgroundGif})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const handleDailyTasksSubmit = () => {
    setCurrentStep(2); // Move to the next step for report card
  };

  const handleReportCardSubmit = async () => {
    if (!reportCardText) {
      alert('Please paste your report card text.');
      return;
    }

    const payload = {
      dailyTasks: userInput.dailyTasks,
      reportCardText: reportCardText
    };

    try {
      const response = await fetch('http://localhost:5001/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      setGeneratedPlan(data.response);
      setCurrentStep(3); // Move to the loading screen
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (currentStep === 3) {
      const timer = setTimeout(() => {
        setCurrentStep(4); // Transition to the daily plan display step
      }, 15000); // 15-second delay

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="App" style={appStyle} >
      <Header />

      {currentStep === 1 && (
        <TransitionEffect show={currentStep === 1} >

          <div class="container"><h1>What do you need to do today?</h1>
          <TextInput
            placeholder="Enter your daily tasks"
            value={userInput.dailyTasks}
            onChange={(e) => setUserInput({ ...userInput, dailyTasks: e.target.value })}
          />
          <button onClick={handleDailyTasksSubmit}>Submit Daily Tasks</button></div>
          
        </TransitionEffect>
      )}

      {currentStep === 2 && (
        <TransitionEffect show={currentStep === 2}>
          <div class="container">
          <h1>Enter Your Report Card Details</h1>
          <textarea
            value={reportCardText}
            onChange={(e) => setReportCardText(e.target.value)}
            placeholder="Paste your report card text here"
          />
          <button onClick={handleReportCardSubmit}>Submit Report Card</button>

          </div>
          
        </TransitionEffect>
      )}

      {currentStep === 3 && <LoadingAnimation />}

      {currentStep === 4 && <DailyPlan plan={generatedPlan} />}
    </div>
  );
};

export default App;
