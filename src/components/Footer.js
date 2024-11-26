import "./footer.css";
import logo from "../media/logo.png";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="logo-column">
          <img
            src={logo}
            alt="team building and consulting stratgey company logo"
          />
          <h2>Strategic Flow</h2>
        </div>

        <div className="details-column">
          <h3>Get Your Teams in Flow</h3>
          <h4>info@strategicflow.org</h4>
          <p>Connect with us on social to see what we're up to</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">copyright {new Date().getFullYear()}</div>
    </footer>
  );
}
