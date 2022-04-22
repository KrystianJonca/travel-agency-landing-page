import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import './CallToAction.scss';

const CallToAction = () => {
  return (
    <div className="tld__cta">
      <button>Find out more</button>
      <div className="tld__cta-video">
        <AiFillPlayCircle size={50} color="#df6951" />
        <p>Play demo</p>
      </div>
    </div>
  );
};

export default CallToAction;
