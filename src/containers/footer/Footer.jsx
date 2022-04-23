import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import Logo from '../../assets/Logo.png';
import GooglePlay from '../../assets/icons/GooglePlay.png';
import AppStore from '../../assets/icons/AppStore.png';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="tld__footer section__padding">
      <div className="tld__footer-content">
        <div className="tld__footer-content_logo">
          <img src={Logo} alt="Jadoo Logo" />
          <p>Book your trip in minute, get full control for much longer.</p>
        </div>
        <div className="tld__footer-content_links">
          <div>
            <h4>Company</h4>
            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">Mobile</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="/">Help/FAQ</a>
            <a href="/">Press</a>
            <a href="/">Affilates</a>
          </div>
          <div>
            <h4>More</h4>
            <a href="/">Airline fees</a>
            <a href="/">Airline</a>
            <a href="/">Low fare tips</a>
          </div>
        </div>
        <div className="tld__footer-content_socials">
          <div className="tld__footer-content_socials-links">
            <a href="/">
              <FaFacebook size={36} />
            </a>
            <a href="/">
              <FaInstagramSquare size={36} />
            </a>
            <a href="/">
              <FaTwitter size={36} />
            </a>
          </div>
          <p>Discover our app</p>
          <div>
            <img src={GooglePlay} alt="Google Play" />
            <img src={AppStore} alt="Apple App Store" />
          </div>
        </div>
      </div>
      <p className="tld__footer-copyright">All rights reserved@jadoo.co</p>
    </footer>
  );
};

export default Footer;
