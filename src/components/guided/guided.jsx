import "./guided.css";
import { Link } from "react-router-dom";

function Guided() {
  return (
    <div className="guided-bg">
      <div className="padding-global">
        <div className="guided container-large">
          <h2 className="padding-small padding-bottom">
            Guided by People Who Know the Land
          </h2>
          <p className="padding-small padding-bottom">
            We believe that who you travel with shapes how you experience a
            place. That’s why our guides live locally, know the land intimately,
            and lead with warmth, curiosity, and care. They’ll show you the
            well-known wonders — and the hidden gems you’d never find alone.
          </p>
          <Link className="button is-accent-color" to="/#scroll-tours">
            Explore All Tours
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Guided;
