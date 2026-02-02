import "./wander.css";
import { Link } from "react-router-dom";

function Wander() {
  return (
    <div className="wander">
      <div className="padding-global">
        <div className="padding-section-large container-large">
          <div className="max-width-small">
            <h2 className="padding-small padding-bottom">Why We Wander</h2>
            <h3 className="padding-small padding-bottom heading-style-h4">
              At Wanderly, we believe in slow, meaningful travel. Our guided UK
              adventures are designed for curious souls who want to connect —
              with the land, the people, and the moment.
            </h3>
            <Link to="/our-guides" className="button is-accent-color">
              Meet Our Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wander;
