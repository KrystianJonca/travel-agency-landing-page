import React from 'react';
import './Heading.scss';

const Heading = ({ heading, toptext, alignLeft }) => {
  return (
    <div className={`tld__heading ${alignLeft && 'alignleft'}`}>
      <p className="tld__heading-toptext">{toptext}</p>
      <h1>{heading}</h1>
    </div>
  );
};

export default Heading;
