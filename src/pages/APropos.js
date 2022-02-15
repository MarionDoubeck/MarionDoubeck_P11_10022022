import React from 'react';
import Header from '../components/Header';
import Background from '../media/aProposBackground.png';
import openClose from '../functions/openClose';
import Footer from '../components/Footer';

const APropos = () => {
  return (
    <div className="aPropos">
      <Header />
      <div className="aPropos-content">
        <img src={Background} alt="" />
        <div className="fiability">
          <div className="top">
            <div>Fiabilité</div>
            <i className="fa-solid fa-angle-down closed" onClick={(e) => openClose(e, 'fiabilityContent')}></i>
          </div>
          <div className="fiabilityContent hidden">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</div>
        </div>
        <div className="respect">
          <div className="top">
            <div>Respect</div>
            <i className="fa-solid fa-angle-down closed" onClick={(e) => openClose(e, 'respectContent')}></i>
          </div>
          <div className="respectContent hidden">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
        </div>
        <div className="service">
          <div className="top">
            <div>Service</div>
            <i className="fa-solid fa-angle-down closed" onClick={(e) => openClose(e, 'serviceContent')}></i>
          </div>
          <div className="serviceContent hidden">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
        </div>
        <div className="responsability">
          <div className="top">
            <div>Responsabilité</div>
            <i className="fa-solid fa-angle-down closed" onClick={(e) => openClose(e, 'responsabilityContent')}></i>
          </div>
          <div className="responsabilityContent hidden">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default APropos;