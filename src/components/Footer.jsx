import React from 'react';
import FooterLogo from '../svg/footer-logo.svg';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <div className="innerContainerFooter">
      <img src={FooterLogo} className="footer-logo" alt="Adslotmedia" />
      <hr />
      <p>&copy;2012 <a href="#">Adslot</a> | <a href="#">Adslot Create</a> | <a href="#">Adslot Publisher</a> | <a href="#">Terms</a> | <a href="#">Privacy Policy</a> | <a href="#">Payment Policy</a>
    </p>
    </div>
  </div>
);

export default Footer;
