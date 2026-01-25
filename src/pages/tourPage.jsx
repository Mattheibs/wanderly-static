import { useParams } from "react-router-dom";
import tourData from "../components/tourData";
import TourPageHero from "../components/tourPage/tourPageHero";
import "../components/tourPage/tourPage.css";
import TourPageGuides from "../components/tourPage/tourPageGuides";
import TourPageIncluded from "../components/tourPage/tourPageIncluded";
import TourPageGridImages from "../components/tourPage/tourPageGridImages";
import TourPageItinerary from "../components/tourPage/tourPageItenerary";

function TourPage() {
  const { tourSlug } = useParams();

  const tour = tourData.find((t) => t.tourSlug === tourSlug);

  if (!tour) {
    return <h2>Tour not found</h2>;
  }

  return (
    <>
      <TourPageHero tour={tour} />
      <TourPageGuides tour={tour} />
      <TourPageIncluded tour={tour} />
      <TourPageGridImages tour={tour} />
      <TourPageItinerary tour={tour} />
    </>
  );
}

export default TourPage;
