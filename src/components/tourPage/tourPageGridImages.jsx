function TourPageGridImages({ tour }) {
  return (
    <div className="padding-global">
      <div className="tour-page-grid-images container-large padding-section-small">
        {tour.gridImages.map((image, index) => {
          return (
            <div key={index}>
              <img loading="lazy" src={image.img} alt="" />
              <h3>{image.text}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TourPageGridImages;
