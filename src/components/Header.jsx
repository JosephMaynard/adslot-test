import React from 'react';
import HeaderLogo from '../svg/header-logo.svg';
import CloseButton from '../svg/close-button.svg';
import './Header.css';

const Header = () => (
  <div className="Header">
    <div className="innerContainer">
      <img src={HeaderLogo} className="header-logo" alt="Adslotmedia" />
      <img
        src={CloseButton}
        className="close-button"
        alt="Close"
        onClick={() => alert('close')}
      />
    </div>
  </div>
);

export default Header;
