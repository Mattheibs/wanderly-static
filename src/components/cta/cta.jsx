import "./letsWander.css";
import { Link } from "react-router-dom";

function Cta({ content }) {
  return (
    <div className="lets-wander-container">
      <div className="padding-global">
        <div className={`${content.class}`}>
          <div className="container-small lets-wander">
            <h2 className="is-dark-heading padding-small padding-bottom">
              {content.heading}
            </h2>
            <p className="text-size-medium max-width-large is-dark-text padding-small padding-bottom">
              {content.textOne}
            </p>
            {content.textTwo && (
              <p className="text-size-medium is-dark-text margin-small margin-bottom">
                {content.textTwo}
              </p>
            )}
            <div>
              <Link to="our-tours" className="button is-accent-color">
                {content.buttonOne}
                <img src={content.buttonImgOne} alt="" />
              </Link>
              {content.buttonTwo && (
                <Link
                  to="our-guides"
                  className=" button is-secondary-accent-color"
                >
                  {content.buttonTwo}
                  {content.buttonImgTwo && (
                    <img src={content.buttonImgTwo} alt="" />
                  )}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
