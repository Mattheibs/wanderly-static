import Guide from "./guide";
import "./guides.css";
import ella from "../../assets/images/ella-guide.png";
import dan from "../../assets/images/dan-guide.png";
import leah from "../../assets/images/leah-guide.png";
import euan from "../../assets/images/euan-guide.png";
import maya from "../../assets/images/maya-guide.png";
import ravi from "../../assets/images/ravi-guide.png";

function Gudies() {
  const guides = [
    {
      guideName: "Ella Jamieson",
      certifications: [
        "Mountain Leader certified",
        "First Aid Trained",
        "Wild plant ID",
      ],
      about:
        "Mountain leader and folklore lover from Inverness, Ella brings the Highlands to life with stories, foraging tips, and epic hikes.",
      img: ella,
      tour: "Scottish Highlands",
    },
    {
      guideName: "Dan Thomas",
      certifications: [
        "Trail navigation",
        "Group facilitation",
        "Lake lore & history",
      ],
      about:
        "Laid-back and local, Dan knows the fells inside out — and makes a mean cup of trail tea.",
      img: dan,
      tour: "Lake District",
    },
    {
      guideName: "Leah Moyo",
      certifications: [
        "Coastal safety & tide planning",
        "Marine wildlife spotting",
        "Cold water dips!",
      ],
      about:
        "Former marine biologist who blends coastal legends, wildlife spotting, and spontaneous swims.",
      img: leah,
      tour: "Cornwall Coast",
    },
    {
      guideName: "Euan Maclean",
      certifications: [
        "Heritage & folklore",
        "Slow travel routes",
        "Long-distance footpaths",
      ],
      about:
        "Historian and natural storyteller with a love for quiet trails and post-walk pints.",
      img: euan,
      tour: "Yorkshire & Beyond",
    },
    {
      guideName: "Maya Patel",
      certifications: [
        "Mindful walking",
        "Welsh language basics",
        "Sketch journaling",
      ],
      about:
        "Creative soul who leads mindful walks, teaches trail journaling, and shares local Welsh gems.",
      img: maya,
      tour: "Snowdonia",
    },
    {
      guideName: "Ravi Singh",
      certifications: ["Local ecology", "Birdwatching", "Seaside town tips"],
      about:
        "Nature guide and birdwatcher with deep plant knowledge and a soft spot for chip shops.",
      img: ravi,
      tour: "South Downs & Coast",
    },
  ];
  return (
    <div className="guides padding-global">
      <div className="our-guides-container container-large padding-section-small padding-bottom">
        {guides.map((guide, index) => {
          return <Guide key={index} guide={guide} />;
        })}
      </div>
    </div>
  );
}

export default Gudies;
