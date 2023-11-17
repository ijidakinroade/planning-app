// File: MusicButton.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// The rest of your MusicButton component code would follow.

const MusicButton = () => {
    return (
      <button className="button-lofi">
        <FontAwesomeIcon icon={faPlay} />
      </button>
    );
  };
  
  export default MusicButton;