import React from 'react';
import Logo from '../media/logo.svg';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <Link to = '/'><img src={Logo} alt="Kasa" /></Link>
      <Navigation />
    </div>
  );
};

export default Header;