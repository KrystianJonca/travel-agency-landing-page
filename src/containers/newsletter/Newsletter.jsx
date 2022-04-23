import React from 'react';
import newsletter from '../../assets/icons/newsletter.png';
import './Newsletter.scss';

const Newsletter = () => {
  return (
    <section className="tld__newsletter section__padding" id="newsletter">
      <div className="tld__newsletter-wrapper">
        <div className="tld__newsletter-content">
          <img src={newsletter} alt="Newsletter icon" />
          <h3>
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h3>
          <div className="tld__newsletter-content_input">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
