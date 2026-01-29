import starIcon from "../../assets/images/iconImages/star-icon.svg";
import calendarIcon from "../../assets/images/iconImages/calendar-icon.svg";
import diceIcon from "../../assets/images/iconImages/dice-icon.svg";
import plusIcon from "../../assets/images/iconImages/plus-icon.svg";
import minusIcon from "../../assets/images/iconImages/minus-icon.svg";
import peopleIcon from "../../assets/images/iconImages/people-icon.svg";
import calIcon from "../../assets/images/iconImages/cal-icon.svg";
import locationIcon from "../../assets/images/iconImages/location-icon.svg";
import arrow from "../../assets/images/arrow.svg";
import { Link, useAsyncError } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TourPageHero({ tour }) {
  const [guestCountShowing, setGuestCountShowing] = useState(false);
  const [guestAmount, setGuestAmount] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const guestCountSwitch = () => {
    setGuestCountShowing(!guestCountShowing);
  };
  const addition = () => {
    setGuestAmount(guestAmount + 1);
  };
  const subtraction = () => {
    if (guestAmount > 1) {
      setGuestAmount(guestAmount - 1);
    }
  };
  const guestRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setGuestCountShowing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const calendarSwitch = () => {
    setCalendarOpen(!calendarOpen);
  };
  return (
    <div className="tour-page-hero-bg">
      <div className="padding-global">
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
              <div className="tour-page-hero-pill-item tour-page-date-selection">
                <div onClick={() => setCalendarOpen(true)}>
                  <p className="text-size-small is-dark-text">Dates</p>
                  <p className="is-dark-text">
                    {startDate && endDate
                      ? `${startDate.toLocaleDateString()} → ${endDate.toLocaleDateString()}`
                      : "Select Dates"}
                  </p>
                </div>

                {calendarOpen && (
                  <div className="calendar-container">
                    <DatePicker
                      selectsRange
                      startDate={startDate}
                      endDate={endDate}
                      onChange={(dates) => {
                        const [start, end] = dates;
                        setStartDate(start);
                        setEndDate(end);
                        if (start && end) setCalendarOpen(false);
                      }}
                      inline
                      minDate={new Date()}
                    />
                  </div>
                )}
              </div>

              <div className="pill-line"></div>
              <div
                ref={guestRef}
                className=" tour-page-guest-selection tour-page-hero-pill-item tour-page-hero-pill-item-center"
              >
                <div className="" onClick={guestCountSwitch}>
                  <p className="text-size-small is-dark-text">Who</p>
                  <p className="is-dark-text">{guestAmount} guest</p>
                </div>
                {guestCountShowing && (
                  <div className="guest-count-container">
                    <img src={minusIcon} alt="" onClick={subtraction} />
                    <img src={plusIcon} alt="" onClick={addition} />
                  </div>
                )}
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
                <p className="is-dark-text">
                  Availability: {tour.availability}
                </p>
              </div>
              <div className="tour-page-hero-grid-item">
                <img src={locationIcon} alt="" />
                <p className="is-dark-text">
                  Meeting Point: {tour.meetingPoint}
                </p>
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
    </div>
  );
}

export default TourPageHero;
