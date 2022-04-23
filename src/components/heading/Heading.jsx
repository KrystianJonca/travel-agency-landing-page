import React from 'react';
import './Heading.scss';

const Heading = ({ heading, toptext }) => {
  return (
    <div className="tld__heading">
      <p className="tld__heaading-toptext">Category</p>
      <h1>We Offer Best Services </h1>
    </div>
  );
};

export default Heading;
