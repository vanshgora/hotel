import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false); // Close the mobile menu after clicking on a link
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src=""
            width="112"
            height="28"
            alt="Hotel.com"
          />
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${
            isMobileMenuOpen ? 'is-active' : ''
          }`}
          aria-label="menu"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          onClick={handleMobileMenuToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <a
            className="navbar-item"
            onClick={() => handleNavClick('home')}
            href="#home"
          >
            Home
          </a>
          <a
            className="navbar-item"
            onClick={() => handleNavClick('hotels')}
            href="#hotels"
          >
            Hotels
          </a>
          <a
            className="navbar-item"
            onClick={() => handleNavClick('destinations')}
            href="#destinations"
          >
            Destinations
          </a>
          <a
            className="navbar-item"
            onClick={() => handleNavClick('deals')}
            href="#deals"
          >
            Deals
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="/">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light" href="/">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
