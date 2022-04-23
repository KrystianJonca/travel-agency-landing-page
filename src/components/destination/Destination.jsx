import React from 'react';
import { RiNavigationFill } from 'react-icons/ri';
import './Destination.scss';

const Destination = ({ image, place, price, time }) => {
  return (
    <div className="tld__destination">
      <img src={image} alt={place} />
      <div className="tld__destination-info">
        <div>
          <span>{place}</span>
          <span>{price}</span>
        </div>
        <p>
          <RiNavigationFill />
          <span>{time} Days Trip</span>
        </p>
      </div>
    </div>
  );
};

export default Destination;
