function TourPageIncluded({ tour }) {
  return (
    <div className="padding-global">
      <div className="tour-page-included container-large padding-section-small">
        <img src={tour.includedImg} alt="" />
        <div className="tour-page-included-text">
          <h2 className="is-dark-heading padding-small padding-bottom">
            What’s Included?
          </h2>
          {tour.included.map((item, index) => {
            return (
              <div
                key={index}
                className="tour-page-included-text-included-container"
              >
                <img src={item.img} alt="" />
                <p className="is-dark-text">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TourPageIncluded;
