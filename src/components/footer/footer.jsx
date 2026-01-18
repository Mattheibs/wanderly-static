import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/images/footer-logo.svg";
import footerWander from "../../assets/images/footer-wander.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import pinterest from "../../assets/images/pinterest.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="padding-global">
        <div className="container-large padding-section-small footer">
          <img src={logo} alt="" />
          <div className="footer-links">
            <div className="footer-links-list">
              <p className="is-dark-heading">Company</p>
              <Link to="/our-story">Our Story</Link>
              <Link to="/guides">Meet the Guides</Link>
            </div>
            <div className="footer-links-list">
              <p className="is-dark-heading">TOURS</p>
              <Link to="/tours/scottish-highlands">Scottish Highlands</Link>
              <Link to="/tours/cornwall-coast">Cornwall Coast</Link>
              <Link to="/tours/lake-district">Lake District</Link>
              <Link to="/tours/yorkshire-dales">Yorkshire Dales</Link>
            </div>
            <div className="footer-links-list">
              <p className="is-dark-heading">HELP</p>
              <Link to="/faqs">FAQs</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <img className="footer-wander" src={footerWander} alt="" />
      <div className="footer-cc">
        <p>© Wanderly Tours 2025. All rights reserved.</p>
        <div>
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
          <a href="">
            <img src={pinterest} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
