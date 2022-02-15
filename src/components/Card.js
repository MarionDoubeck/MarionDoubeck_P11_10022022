import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const{logement}=props;
  return (
    <Link className="card" to = {`/logement/${logement.id}`}>
      <img src={logement.cover} alt="location" />
      <div className="cardTitle">{logement.title}</div>
    </Link>
  );
};

export default Card;