import React, {useState} from 'react';

const Carousel = (props) => {
  const{logement, picNb}=props;
  const [pictureNumber, setPicture] = useState(picNb);
  const nbOfPic = logement.pictures.length;
  if(nbOfPic===1)return(<img src={logement.pictures[0]} alt="" />)
  const prevPic=(pictureNumber === 0 ? nbOfPic-1 : pictureNumber-1);
  const nextPic=(pictureNumber === nbOfPic-1 ? 0 : pictureNumber+1);
  return (
    <div className="carousel">
      <i className="fa-solid fa-angle-left" onClick={() => setPicture(prevPic)}></i>
      <img src={logement.pictures[pictureNumber]} alt="" />
      <p>{pictureNumber+1}/{nbOfPic}</p>
      <i className="fa-solid fa-angle-right" onClick={() => setPicture(nextPic) }></i>
    </div>
  );
};

export default Carousel;