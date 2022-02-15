import React from 'react';
import PinkStar from '../../media/pinkStar.svg';
import GreyStar from '../../media/greyStar.svg';

const logementStars = (props) => {
  const {logement} = props;
  let stars = Array(5).fill(GreyStar);
  for (let i=0; i < logement.rating; i++){
    stars[i]=PinkStar
  }
  
  return (
    <div className="logementStars">
      {stars.map((star, index) => (
        <div key={index}><img src={star} alt="" /></div>
      ))}
    </div>
  );
};

export default logementStars;