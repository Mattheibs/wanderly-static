import "./included.css";
import included from "../../assets/images/included.webp";
import hand from "../../assets/images/iconImages/hand-icon.svg";
import car from "../../assets/images/iconImages/car-icon.svg";
import fork from "../../assets/images/iconImages/fork-icon.svg";
import cal from "../../assets/images/iconImages/cal-icon.svg";
import people from "../../assets/images/iconImages/people-icon.svg";

function Included() {
  return (
    <div className="included-bg">
      <div className="padding-global">
        <div className="included container-large padding-section-small">
          <div>
            <h2 className="is-dark-heading padding-bottom padding-small">
              What’s Included?
            </h2>
            <p className="is-dark-text padding-bottom padding-small">
              Every Wanderly tour includes:
            </p>
            <div className="included-includes">
              <img src={hand} alt="" />
              <p className="is-dark-text">An experienced local guide</p>
            </div>
            <div className="included-includes">
              <img src={car} alt="" />
              <p className="is-dark-text">
                All accommodation and transportation during the trip
              </p>
            </div>
            <div className="included-includes">
              <img src={fork} alt="" />
              <p className="is-dark-text">Most meals (details vary per tour)</p>
            </div>
            <div className="included-includes">
              <img src={cal} alt="" />
              <p className="is-dark-text">
                Custom itinerary and daily planning
              </p>
            </div>
            <div className="included-includes" style={{ marginBottom: "0" }}>
              <img src={people} alt="" />
              <p className="is-dark-text">
                A small, friendly group (numbers depend on the tour)
              </p>
            </div>
            <p className="is-dark-text padding-top padding-small">
              You’ll just need to bring your personal gear and travel to the
              meeting point.
            </p>
          </div>
          <img className="included-main-img" src={included} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Included;
