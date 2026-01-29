import { Link } from "react-router-dom";
import "./howWorks.css";
import HowWorksPanel from "./howWorksPanel";
import toursIcon from "../../assets/images/iconImages/tours-icon.svg";
import fitIcon from "../../assets/images/iconImages/fit-icon.svg";
import onlineIcon from "../../assets/images/iconImages/online-icon.svg";
import wanderIcon from "../../assets/images/iconImages/wander-icon.svg";

function HowWorks() {
  const panels = [
    {
      heading: "1. Browse Our Tours",
      text: "Discover adventures across the UK — from the wild Scottish Highlands to the sunny Cornish coast.",
      img: toursIcon,
    },
    {
      heading: "2. Pick Your Perfect Fit",
      text: "Choose the experience that matches your pace, interests, and travel dates.",
      img: fitIcon,
    },
    {
      heading: "3. Book Securely Online",
      text: "Reserve your spot with easy online booking and secure payment. No hidden fees.",
      img: onlineIcon,
    },
    {
      heading: "4. Get Ready to Wander",
      text: "We'll send you everything you need — from what to pack to where to meet your guide.",
      img: wanderIcon,
    },
  ];
  return (
    <div className="padding-global">
      <div className="container-large padding-section-small">
        <div className="how-works-top padding-large padding-bottom">
          <h2 className="is-dark-heading">How It Works</h2>
          <Link
            className="button is-accent-color mobile-hidden"
            to="/#scroll-tours"
          >
            Explore All Tours
          </Link>
        </div>
        <div className="how-works-panel-grid">
          {panels.map((panel) => (
            <HowWorksPanel key={panel.heading} {...panel} />
          ))}
        </div>
        <Link
          className="button margin-small margin-top is-accent-color mobile-show"
          to="/#scroll-tours"
        >
          Explore All Tours
        </Link>
      </div>
    </div>
  );
}

export default HowWorks;
