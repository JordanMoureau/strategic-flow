import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import MobileNav from "./MobileNav"; // Import MobileNav component
import logo from "../media/logo.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

function Navbar({
  textColor = "#fff",
  buttonBgColor = "#fff",
  buttonTextColor = "#333",
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar" style={{ color: textColor }}>
      <div className="logo">
        <h2 style={{ color: textColor }}>Strategic</h2>
        <img src={logo} alt="Strategic Flow logo" />
        <h2 style={{ color: textColor }}>Flow</h2>
      </div>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
      </button>
      <ul className="nav-links">
        <li>
          <Link to="/" style={{ color: textColor }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/events" style={{ color: textColor }}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/aboutstrategic" style={{ color: textColor }}>
            About Strategic
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: textColor }}>
            Contact Us
          </Link>
        </li>
      </ul>
      <button
        className="cta-button-navbar"
        style={{
          backgroundColor: buttonBgColor,
          color: buttonTextColor,
        }}
        onClick={toggleMobileMenu}
      >
        Get A Free Strategy Session
      </button>

      <MobileNav
        isOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        textColor={textColor}
        buttonBgColor={buttonBgColor}
        buttonTextColor={buttonTextColor}
      />
    </nav>
  );
}

export default Navbar;
