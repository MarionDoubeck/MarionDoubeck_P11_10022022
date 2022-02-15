import React from 'react';
import openClose from '../../functions/openClose'

const logementEquipments = (props) => {
  const{logement}=props;
  return (
    <div className="equipments">
      <div className="equipmentsTop">
      <div>Équipements</div>
        <i className="fa-solid fa-angle-down closed" onClick={(e) => openClose(e, 'equipmentsContent')}></i>
      </div>
      
      <div className="equipmentsContent hidden">
        <ul>
        {logement.equipments.map((equipment, index) => {
          return(<li key={index}>{equipment}</li>)
          })}
        </ul>
      </div>
    </div>
  );
};

export default logementEquipments;