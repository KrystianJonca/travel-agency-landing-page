import React from 'react';
import offersData from './data';
import { Service } from '../../components/';
import './Offer.scss';

const Offer = () => {
  return (
    <>
      <section className="tld__offer" id="offer">
        <div className="tld__offer-container">
          <p className="tld__offer-container_toptext">Category</p>
          <h1>We Offer Best Services </h1>
          <div className="tld__offer-container_offers">
            <div>
              {offersData.slice(0, 2).map((offer) => (
                <Service {...offer} />
              ))}
            </div>
            <div>
              {offersData.slice(2, 4).map((offer) => (
                <Service {...offer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
