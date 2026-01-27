import { Link } from "react-router-dom";
import "./navbar.css";

function MobileNavbar() {
  return (
    <div className="padding-global">
      <div className="navbar-container-mobile">
        <Link to="/">Home</Link>
        <Link to="/our-story" className="is-dark-text">
          Our Story
        </Link>
        <Link to="/our-story" className="is-dark-text">
          Our Story
        </Link>
        <Link to="/our-guides" className="is-dark-text">
          Meet Our Guides
        </Link>
        <Link to="/booking-process" className="is-dark-text">
          Booking Process
        </Link>
        <Link to="/travel-faq" className="is-dark-text">
          Travel FAQ
        </Link>
        <Link to="/contact-us" className="button is-clear">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default MobileNavbar;
