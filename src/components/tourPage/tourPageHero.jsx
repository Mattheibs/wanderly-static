import starIcon from "../../assets/images/iconImages/star-icon.svg";
import calendarIcon from "../../assets/images/iconImages/calendar-icon.svg";
import diceIcon from "../../assets/images/iconImages/dice-icon.svg";
import peopleIcon from "../../assets/images/iconImages/people-icon.svg";
import calIcon from "../../assets/images/iconImages/cal-icon.svg";
import locationIcon from "../../assets/images/iconImages/location-icon.svg";
import arrow from "../../assets/images/arrow.svg";
import { Link } from "react-router-dom";

function TourPageHero({ tour }) {
  return (
    <div className="tour-page-hero-bg">
      <div className="faq-bg"></div>
      <div className="tour-page-hero container-large padding-section-small padding-bottom">
        <img className="tour-page-hero-main-img" src={tour.mainImg} alt="" />
        <div className="tour-page-hero-text">
          <h1 className="padding-small padding-bottom is-dark-heading">
            {tour.tourName}
          </h1>
          <p className="is-dark-text padding-small padding-bottom">
            {tour.about}
          </p>
          <div className="tour-page-hero-pill">
            <div className="tour-page-hero-pill-item tour-page-hero-pill-item-left">
              <p className="text-size-small is-dark-text">Total</p>
              <h3 className="is-dark-heading">{tour.price}</h3>
            </div>
            <div className="pill-line"></div>
            <div className="tour-page-hero-pill-item ">
              <p className="text-size-small is-dark-text">Dates</p>
              <p className="is-dark-text">Select Dates</p>
            </div>
            <div className="pill-line"></div>
            <div className="tour-page-hero-pill-item tour-page-hero-pill-item-center">
              <p className="text-size-small is-dark-text">Who</p>
              <p className="is-dark-text">1 guest</p>
            </div>
          </div>
          <div className="tour-page-hero-grid">
            <div className="tour-page-hero-grid-item">
              <img src={starIcon} alt="" />
              <p className="is-dark-text">
                <span className="is-dark-heading">{tour.reviewScore} </span>(
                {tour.amountOfReviews} reviews)
              </p>
            </div>
            <div className="tour-page-hero-grid-item">
              <img src={calendarIcon} alt="" />
              <p className="is-dark-text">Duration: {tour.duration}</p>
            </div>
            <div className="tour-page-hero-grid-item">
              <img src={diceIcon} alt="" />
              <p className="is-dark-text">Difficulty: {tour.difficulty}</p>
            </div>
            <div className="tour-page-hero-grid-item">
              <img src={peopleIcon} alt="" />
              <p className="is-dark-text">Group Size: {tour.groupSize}</p>
            </div>
            <div className="tour-page-hero-grid-item">
              <img src={calIcon} alt="" />
              <p className="is-dark-text">Availability: {tour.availability}</p>
            </div>
            <div className="tour-page-hero-grid-item">
              <img src={locationIcon} alt="" />
              <p className="is-dark-text">Meeting Point: {tour.meetingPoint}</p>
            </div>
          </div>
          <Link
            className="button is-accent-color"
            to={`/tour/booking/${tour.tourSlug}`}
          >
            Proceed to Booking <img src={arrow} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourPageHero;
