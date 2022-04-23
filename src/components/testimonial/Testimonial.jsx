import React from 'react';
import './Testimonial.scss';

const Testimonial = ({ image, quote, name, location }) => {
  return (
    <div className="tld__testimonial">
      <img src={image} alt="Person" className="tld__testimonial-image" />
      <div className="tld__testimonial-content">
        <p className="tld__testimonial-content_quote">{quote}</p>
        <h4>{name}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Testimonial;
