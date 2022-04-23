import React from 'react';
import './Brand.scss';

const Brand = ({ brandLogo, brandName, brandLink }) => {
  return (
    <div className="tld__brand">
      <a href={brandLink}>
        <img src={brandLogo} alt={brandName} />
      </a>
    </div>
  );
};

export default Brand;
