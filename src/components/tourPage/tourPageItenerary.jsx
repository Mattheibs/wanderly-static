import day1 from "../../assets/images/iconImages/luggage-icon.svg";
import day2 from "../../assets/images/iconImages/swimming-icon.svg";
import day3 from "../../assets/images/iconImages/hiking-icon.svg";
import day4 from "../../assets/images/iconImages/building-icon.svg";
import day5 from "../../assets/images/iconImages/heart-icon.svg";

function TourPageItinerary({ tour }) {
  const dayIcons = [day1, day2, day3, day4, day5];
  return (
    <div className="itinerary-bg">
      <div className="padding-global">
        <div className="tour-page-itinerary container-large padding-section-small">
          <h2 className="is-dark-heading">Itinerary Preview</h2>
          <div className="tour-page-itinerary-items">
            {tour.itinerary.map((item, index) => {
              return (
                <div key={index} className="tour-page-itinerary-items-item">
                  <div>
                    <img src={dayIcons[index]} alt={`Day ${index + 1}`} />
                    <h3 className="is-dark-heading">Day {index + 1}</h3>
                  </div>
                  <p className="is-dark-text padding-large padding-top">
                    {item.what}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourPageItinerary;
