import ToursPanel from "./tourPanel";
import scottishPanel from "../../assets/images/scottish-panel.webp";
import yorkshirePanel from "../../assets/images/yorkshire-panel.webp";
import lakePanel from "../../assets/images/lake-panel.webp";
import cornwallPanel from "../../assets/images/cornwall-panel.webp";

function Tours() {
  const tours = [
    {
      link: "/tour/scottish-highlands",
      info: "Hike the Scottish Highlands",
      img: scottishPanel,
    },
    {
      link: "/tour/yorkshire-dales",
      info: "History walks through Yorkshire",
      img: yorkshirePanel,
    },
    {
      link: "/tour/lake-district",
      info: "Wild swim in the Lake District",
      img: lakePanel,
    },
    {
      link: "/tour/cornwall-coast",
      info: "Explore Cornwall’s Coastal Trails",
      img: cornwallPanel,
    },
  ];
  return (
    <div className="padding-global">
      <div
        className="tours-grid container-large padding-section-small"
        id="scroll-tours"
      >
        {tours.map((tour) => (
          <ToursPanel key={tour.link} {...tour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
