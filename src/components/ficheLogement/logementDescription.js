import React from 'react';
import openClose from '../../functions/openClose'

const logementDescription = (props) => {
  const{logement}=props;

  return (
    <div className="description">
      <div className="descriptionTop">
        <div>Description</div>
        <i className="fa-solid fa-angle-down closed" onClick={(e) => openClose(e, 'descriptionContent')}></i>
      </div>
      <div className="descriptionContent hidden">
        {logement.description}
      </div>
    </div>
  );
};

export default logementDescription;