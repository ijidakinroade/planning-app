// TextInput.js
import React from 'react';
import './TextInput.css'; // Import the CSS file


const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {/* Removed the local button, as submission is handled by the parent component */}
    </div>
  );
};

export default TextInput;