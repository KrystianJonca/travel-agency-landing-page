import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/Logo.png';
import './Navbar.scss';

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#services">Services</a>
      </p>
      <p>
        <a href="#destinations">Destinations</a>
      </p>
      <p>
        <a href="#booking">Booking</a>
      </p>
      <p>
        <a href="#testimonials">Testimonials</a>
      </p>
      <button className="tld__navbar-signin">Sign in</button>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState();

  return (
    <nav className="tld__navbar">
      <div className="tld__navbar-links">
        <div className="tld__navbar-links_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="tld__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="tld__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="tld__navbar-menu_container scale-up-center">
            <div className="tld__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
