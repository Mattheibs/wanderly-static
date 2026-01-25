import guideTick from "../../assets/images/iconImages/guide-tick-icon.svg";

function TourPageGuides({ tour }) {
  return (
    <div className="tour-page-guides-bg">
      <div className="tour-page-guides container-large padding-section-small">
        <h2 className="padding-large padding-bottom">Meet Your Guides</h2>
        <div className="tour-page-guides-grid">
          {tour.guides.map((guide, index) => {
            return (
              <div key={index} className="tour-page-guides-grid-item">
                <img src={guide.guideImg} alt="" />
                <div className="tour-page-guides-grid-item-text">
                  <h3 className="is-dark-heading">{guide.guideName}</h3>
                  <p className="tour-page-guides-grid-item-pill">
                    {guide.guideType}
                  </p>
                  <p className="is-dark-heading">Specialties:</p>
                  <div className="tour-page-guides-flex">
                    {guide.specialities.map((spec, index) => {
                      return (
                        <div key={index}>
                          <img src={guideTick} alt="" />
                          <p className="is-dark-text">{spec}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TourPageGuides;
