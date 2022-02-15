import React from 'react';
import Logo from '../media/blackLogo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;