import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import scottishNav from "../../assets/images/scottish-highlands-nav.png";
import lakeNav from "../../assets/images/lake-distric-nav.png";
import yorkshireNav from "../../assets/images/yorkshire-dales-nav.png";
import cornwallNav from "../../assets/images/cornwall-coast-nav.png";
import navArrowWhite from "../../assets/images/iconImages/nav-arrow.svg";
import navArrowDown from "../../assets/images/iconImages/nav-arrow-down.svg";
import navArrowUp from "../../assets/images/iconImages/nav-arrow-up.svg";
import hamburger from "../../assets/images/iconImages/hamburger.svg";
import close from "../../assets/images/iconImages/close.svg";
import MobileNavbar from "./mobileNav";

function Navbar() {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const tours = [
    {
      tourName: "Scottish Highlands",
      link: "/tour/scottish-highlands",
      info: "Epic peaks & hidden gems",
      img: scottishNav,
    },
    {
      tourName: "Yorkshire Dales",
      link: "/tour/yorkshire-dales",
      info: "Hills & village charm",
      img: yorkshireNav,
    },
    {
      tourName: "Lake District",
      link: "/tour/lake-district",
      info: "Classic trails & wild swims",
      img: lakeNav,
    },
    {
      tourName: "Cornwall Coast",
      link: "/tour/cornwall-coast",
      info: "Clifftop walks & sea air",
      img: cornwallNav,
    },
  ];

  const openMobileMenu = () => {
    setMobileMenuShown(!mobileMenuShown);
  };

  return (
    <div className="padding-global">
      <div className="navbar-container">
        <img src={logo} />
        {!mobileMenuShown ? (
          <img
            src={hamburger}
            className="navbar-hamburger"
            onClick={openMobileMenu}
          />
        ) : (
          <img
            src={close}
            className="navbar-hamburger"
            onClick={openMobileMenu}
          />
        )}

        <div className="navbar_links mobile-hidden">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("tours")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="nav-link-container">
              <p
                className={
                  activeMenu === "tours"
                    ? "is-dark-text nav-link bold-nav"
                    : "is-dark-text nav-link"
                }
              >
                Tours
              </p>
              <img
                src={activeMenu === "tours" ? navArrowUp : navArrowDown}
                alt=""
              />
            </div>
            {activeMenu === "tours" && (
              <div className="navbar-popup-container">
                <div className="navbar-popup">
                  <div className="tour-grid">
                    {tours.map((tour) => (
                      <div key={tour.tourName}>
                        <Link to={tour.link} className="tour-grid-item">
                          <div className="tour-grid-item-img">
                            <img src={tour.img} alt="" />
                            <img
                              className="nav-white-arrow"
                              src={navArrowWhite}
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="nav-tour-name">{tour.tourName}</p>
                            <p className="text-size-small">{tour.info}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("about")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="nav-link-container">
              <p
                className={
                  activeMenu === "about"
                    ? "is-dark-text nav-link bold-nav"
                    : "is-dark-text nav-link"
                }
              >
                About
              </p>
              <img
                src={activeMenu === "about" ? navArrowUp : navArrowDown}
                alt=""
              />
            </div>
            {activeMenu === "about" && (
              <div className="navbar-popup-container">
                <div className="navbar-popup">
                  <Link to="/our-story" className="is-dark-text">
                    Our Story
                  </Link>
                  <Link to="/our-guides" className="is-dark-text">
                    Meet Our Guides
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("how")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="nav-link-container">
              <p
                className={
                  activeMenu === "how"
                    ? "is-dark-text nav-link bold-nav"
                    : "is-dark-text nav-link"
                }
              >
                How It Works
              </p>
              <img
                src={activeMenu === "how" ? navArrowUp : navArrowDown}
                alt=""
              />
            </div>
            {activeMenu === "how" && (
              <div className="navbar-popup-container">
                <div className="navbar-popup">
                  <Link to="/booking-process" className="is-dark-text">
                    Booking Process
                  </Link>
                  <Link to="/travel-faq" className="is-dark-text">
                    Travel FAQ
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <Link to="/contact-us" className="button is-clear mobile-hidden">
          Contact Us
        </Link>
      </div>
      {mobileMenuShown && <MobileNavbar />}
    </div>
  );
}

export default Navbar;
