import ToursPanel from "./tourPanel";
import scottishPanel from "../../assets/images/scottish-panel.png";
import yorkshirePanel from "../../assets/images/yorkshire-panel.png";
import lakePanel from "../../assets/images/lake-panel.png";
import cornwallPanel from "../../assets/images/cornwall-panel.png";

function Tours() {
  const tours = [
    {
      link: "/scottish-highlands",
      info: "Hike the Scottish Highlands",
      img: scottishPanel,
    },
    {
      link: "/yorkshire-dales",
      info: "History walks through Yorkshire",
      img: yorkshirePanel,
    },
    {
      link: "/lake-district",
      info: "Wild swim in the Lake District",
      img: lakePanel,
    },
    {
      link: "/cornwall-coast",
      info: "Explore Cornwall’s Coastal Trails",
      img: cornwallPanel,
    },
  ];
  return (
    <div className="padding-global ">
      <div className="tours-grid container-large padding-section-small">
        {tours.map((tour) => (
          <ToursPanel key={tour.link} {...tour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
