import "./letsWander.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";
import guide from "../../assets/images/guide-icon.svg";

function LetsWander() {
  return (
    <div className="lets-wander-container">
      <div className="padding-global">
        <div className="container-small lets-wander">
          <h2 className="is-dark-heading padding-small padding-bottom">
            Let’s Wander
          </h2>
          <p className="text-size-medium max-width-large is-dark-text padding-small padding-bottom">
            Wherever you’re starting from, and however experienced you are,
            there’s a place for you at Wanderly. You don’t need the best boots
            or the fanciest gear — just an open mind and a sense of adventure.
          </p>
          <p className="text-size-medium is-dark-text margin-small margin-bottom">
            We’d love to show you around.
          </p>
          <div>
            <Link to="our-tours" className="button is-accent-color">
              Explore Our Tours
              <img src={arrow} alt="" />
            </Link>
            <Link to="our-guides" className=" button is-secondary-accent-color">
              Meet Our Guides
              <img src={guide} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsWander;
