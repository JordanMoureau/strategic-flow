import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./mobilenav.css";

function MobileNav({
  isOpen,
  toggleMobileMenu,
  textColor,
  buttonBgColor,
  buttonTextColor,
}) {
  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <motion.div
      className="mobile-nav"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <ul className="mobile-nav-links">
        <li>
          <Link to="/" onClick={toggleMobileMenu} style={{ color: textColor }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            onClick={toggleMobileMenu}
            style={{ color: textColor }}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/aboutstrategic"
            onClick={toggleMobileMenu}
            style={{ color: textColor }}
          >
            About Strategic
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            style={{ color: textColor }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <button
        className="cta-button-mobile"
        style={{
          backgroundColor: buttonBgColor,
          color: buttonTextColor,
        }}
        onClick={toggleMobileMenu}
      >
        Get A Free Strategy Session
      </button>
    </motion.div>
  );
}

export default MobileNav;
