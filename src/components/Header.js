// Header.js
import React from 'react';
import Logo from './cottage_sakura_logo.svg';
import './Header.css'; // Make sure to create this CSS file

const Header = () => {
  return (
    <header className="header-container">
      <img src={Logo} alt="CottageSakura Logo" className="header-logo" />
      
    </header>
  );
};

export default Header;
