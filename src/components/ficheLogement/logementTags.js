import React from 'react';

const logementTags = (props) => {
  const{logement}=props;
  return (
    <div className="logementTags">
      {logement.tags.map((tag, index) => <div className="tag" key={index}>{tag}</div>)}
    </div>
  );
};

export default logementTags;