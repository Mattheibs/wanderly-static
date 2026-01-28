import { Link } from "react-router-dom";
import "./navbar.css";

function MobileNavbar({ closeMenu }) {
  return (
    <div className="padding-global">
      <div className="navbar-container-mobile">
        <Link onClick={closeMenu} to="/">
          Home
        </Link>
        <Link onClick={closeMenu} to="/our-story" className="is-dark-text">
          Our Story
        </Link>
        <Link onClick={closeMenu} to="/our-guides" className="is-dark-text">
          Meet Our Guides
        </Link>
        <Link
          onClick={closeMenu}
          to="/booking-process"
          className="is-dark-text"
        >
          Booking Process
        </Link>
        <Link onClick={closeMenu} to="/travel-faq" className="is-dark-text">
          Travel FAQ
        </Link>
        <Link onClick={closeMenu} to="/contact-us" className="button is-clear">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default MobileNavbar;
