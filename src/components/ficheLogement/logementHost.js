import React from 'react';

const logementHost = (props) => {
  const{logement}=props;
  return (
    <div className="logementHost">
      <div className="hostName">{logement.host.name}</div>
      <img src={logement.host.picture} alt="" />
    </div>
  );
};

export default logementHost;