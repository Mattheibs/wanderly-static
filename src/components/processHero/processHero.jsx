import { Link } from "react-router-dom";
import ProcessOrder from "./processOrder";
import browseIcon from "../../assets/images/iconImages/browse-icon.svg";
import chooseIcon from "../../assets/images/iconImages/choose-icon.svg";
import bookIcon from "../../assets/images/iconImages/book-icon.svg";
import planIcon from "../../assets/images/iconImages/plan-icon.svg";
import "./processHero.css";

function ProcessHero() {
  const processItems = [
    {
      image: browseIcon,
      heading: "Browse Our Tours",
      text: "Start by exploring our current trips across the UK — from scenic coastlines to misty highlands. Each tour page includes key info: what’s included, who it’s for, difficulty level, and itinerary highlights.",
      tip: "Tip: Use filters to search by region, trip type, or dates.",
    },
    {
      image: chooseIcon,
      heading: "Choose Your Dates & Group Size",
      text: "Once you’ve found a tour you love, select your travel dates and how many people will be joining — whether it’s just you or a few friends.",
      tip: "Note: Group sizes are capped (usually 10 or fewer), so spots fill up quickly!",
    },
    {
      image: bookIcon,
      heading: "Book Securely Online",
      text: "Use our secure online checkout to confirm your place. You can pay in full or opt for a deposit (available on select tours). We accept all major cards, Apple Pay, and Google Pay.",
      receive: [
        "A confirmation email",
        "A link to your trip info and packing list",
      ],
      tip: "Tip: Use filters to search by region, trip type, or dates.",
    },
    {
      image: planIcon,
      heading: "Plan, Pack, and Get Excited",
      text: "Before your departure, we’ll send you everything you need — from accommodation details to meeting points and gear recommendations. Our team is always just an email away if you have questions.",
    },
  ];
  return (
    <div className="padding-global">
      <div className="process-hero container-large padding-section-small">
        <div className="process-hero-full">
          <h1 className="is-dark-heading padding-small padding-bottom">
            Ready to Wander? Here’s How It Works.
          </h1>
          <p className="padding-small padding-bottom is-dark-text">
            Booking your next adventure with Wanderly is designed to be simple,
            transparent, and flexible. Whether you’re planning ahead or joining
            last minute, we’ve made it easy to find the right trip and get
            everything sorted.
          </p>
          <Link className="button is-accent-color " to="/#scroll-tours">
            Explore All Tours
          </Link>
        </div>
        <div className="booking-process-items">
          {processItems.map((item, index) => (
            <ProcessOrder key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProcessHero;
