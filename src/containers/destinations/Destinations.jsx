import React from 'react';
import { Heading, Destination } from '../../components';
import destinationsData from './data';
import './Destinations.scss';

const Destinations = () => {
  return (
    <section className="tld__destinations section__padding" id="destinations">
      <div className="tld__destinations-content">
        <Heading toptext="Top Selling" heading="Top Destinations" />
        <div className="tld__destinatinons-content_destinations">
          {destinationsData.map((dest) => (
            <Destination key={dest.place} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
