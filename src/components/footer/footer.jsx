import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/images/footer-logo.webp";
import footerWander from "../../assets/images/footer-wander.svg";
import twitter from "../../assets/images/iconImages/twitter.svg";
import facebook from "../../assets/images/iconImages/facebook.svg";
import instagram from "../../assets/images/iconImages/instagram.svg";
import pinterest from "../../assets/images/iconImages/pinterest.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="padding-global">
        <div className="container-large padding-section-small footer">
          <img loading="lazy" src={logo} alt="" />
          <div className="footer-links">
            <div className="footer-links-list">
              <p className="is-dark-heading">Company</p>
              <Link to="/our-story">Our Story</Link>
              <Link to="/our-guides">Meet the Guides</Link>
            </div>
            <div className="footer-links-list">
              <p className="is-dark-heading">TOURS</p>
              <Link to="/tour/scottish-highlands">Scottish Highlands</Link>
              <Link to="/tour/cornwall-coast">Cornwall Coast</Link>
              <Link to="/tour/lake-district">Lake District</Link>
              <Link to="/tour/yorkshire-dales">Yorkshire Dales</Link>
            </div>
            <div className="footer-links-list">
              <p className="is-dark-heading">HELP</p>
              <Link to="/travel-faq">FAQs</Link>
              <Link to="/booking-process">How It Works</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <img loading="lazy" className="footer-wander" src={footerWander} alt="" />
      <div className="footer-cc">
        <p>© Wanderly Tours 2025. All rights reserved.</p>
        <div>
          <a href="" aria-label="Go to facebook page">
            <img loading="lazy" src={facebook} alt="" />
          </a>
          <a href="" aria-label="Go to twitter page">
            <img loading="lazy" src={twitter} alt="" />
          </a>
          <a href="" aria-label="Go to instagram page">
            <img loading="lazy" src={instagram} alt="" />
          </a>
          <a href="" aria-label="Go to pinterest page">
            <img loading="lazy" src={pinterest} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
