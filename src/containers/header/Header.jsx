import React from 'react';
import { CallToAction } from '../../components';
import Image from '../../assets/HeaderImage.png';
import './Header.scss';

const Header = () => {
  return (
    <section className="tld__header section_padding" id="home">
      <div className="tld__header-content">
        <p className="tld__header-content_toptext">
          Best Destinations around the world
        </p>
        <h1>
          Travel, <span className="tld__header-content_decore">enjoy</span> and
          live a new and full life
        </h1>
        <p className="tld__header-content_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          at quia? Eius voluptatem eligendi veritatis odio est molestiae vitae
          nostrum libero perferendis.
        </p>
        <CallToAction />
      </div>
      <div className="tld__header-image">
        <img src={Image} alt="Girl sitting on a travel suitcase" />
      </div>
    </section>
  );
};

export default Header;
