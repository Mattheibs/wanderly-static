import { Link } from "react-router-dom";
import navArrowWhite from "../../assets/images/nav-arrow.svg";
import "./tours.css";

function ToursPanel(tour) {
  return (
    <Link to={tour.link} className="tours-panel">
      <h3>{tour.info}</h3>
      <img className="nav-white-arrow-tour-panel" src={navArrowWhite} alt="" />
      <img className="tour-panel-bg" src={tour.img} alt="" />
    </Link>
  );
}

export default ToursPanel;
