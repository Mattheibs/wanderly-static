import { useParams } from "react-router-dom";
import tourData from "../components/tourData";

function TourPage() {
  const { tourSlug } = useParams();

  const tour = tourData.find((t) => t.tourSlug === tourSlug);

  if (!tour) {
    return <h2>Tour not found</h2>;
  }

  return (
    <div>
      <div className="faq-bg"></div>

      <div className="faq max-width-medium">
        <h1 className="padding-small padding-bottom is-dark-heading">
          {tour.tourName}
        </h1>

        <h4 className="is-dark-text">
          Got a question about {tour.tourName}? We’ve got you covered.
        </h4>
      </div>
    </div>
  );
}

export default TourPage;
