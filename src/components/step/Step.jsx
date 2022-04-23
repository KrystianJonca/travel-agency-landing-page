import React from 'react';
import './Step.scss';

const Step = ({ title, text, icon }) => {
  return (
    <div className="tld__step">
      <div className="tld__step-img">
        <img src={icon} alt={title} />
      </div>
      <div className="tld__step-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Step;
