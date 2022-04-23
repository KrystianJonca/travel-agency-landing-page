import React from 'react';
import offersData from './data';
import { Service, Heading } from '../../components/';
import './Offer.scss';

const Offer = () => {
  return (
    <>
      <section className="tld__offer section_padding" id="offer">
        <div className="tld__offer-container">
          <Heading toptext="Category" heading="We Offer Best Services" />
          <div className="tld__offer-container_offers">
            <div>
              {offersData.slice(0, 2).map((offer) => (
                <Service key={offer.title} {...offer} />
              ))}
            </div>
            <div>
              {offersData.slice(2, 4).map((offer) => (
                <Service key={offer.title} {...offer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
