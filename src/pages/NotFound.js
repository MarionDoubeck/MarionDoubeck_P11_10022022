import React from 'react';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="notFound">
      <Header />
      <div className="notFound-content">
        <p id="code">404</p>
        <p id="message">Oups! La page que vous demandez n'existe pas.</p>
        <p id="return"><Link to="/" >Retourner sur la page d'accueil</Link></p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;