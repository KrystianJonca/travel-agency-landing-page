import React from 'react';
import decor from '../../assets/icons/Decor.png';
import './Service.scss';

const Service = ({ icon, iconAlt, title, text, addDecor }) => {
  return (
    <>
      <div className="tld__service">
        <div className="tld__service-wrapper">
          <div className="tld__service-content">
            <div className="tld__service-content_imgwrapper">
              <img src={icon} alt={iconAlt} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
        {addDecor && (
          <img src={decor} alt="Red Box" className="tld__service-decor" />
        )}
      </div>
    </>
  );
};

export default Service;
