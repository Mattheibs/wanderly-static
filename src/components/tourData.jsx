import scottishMain from "../assets/images/tourImages/scottish-main.png";
import scottishIncluded from "../assets/images/tourImages/scottish-included.png";
import scottishGrid1 from "../assets/images/tourImages/scottish-grid-1.png";
import scottishGrid2 from "../assets/images/tourImages/scottish-grid-2.png";
import scottishGrid3 from "../assets/images/tourImages/scottish-grid-3.png";
import scottishGrid4 from "../assets/images/tourImages/scottish-grid-4.png";
import scottishGrid5 from "../assets/images/tourImages/scottish-grid-5.png";

import lakeDistrictMain from "../assets/images/tourImages/lake-district-main.png";
import lakeDistrictIncluded from "../assets/images/tourImages/lake-district-included.png";
import lakeDistrictGrid1 from "../assets/images/tourImages/lake-district-grid-1.png";
import lakeDistrictGrid2 from "../assets/images/tourImages/lake-district-grid-2.png";
import lakeDistrictGrid3 from "../assets/images/tourImages/lake-district-grid-3.png";
import lakeDistrictGrid4 from "../assets/images/tourImages/lake-district-grid-4.png";
import lakeDistrictGrid5 from "../assets/images/tourImages/lake-district-grid-5.png";

import cornwallCoastMain from "../assets/images/tourImages/cornwall-coast-main.png";
import cornwallCoastIncluded from "../assets/images/tourImages/cornwall-coast-included.png";
import cornwallCoastGrid1 from "../assets/images/tourImages/cornwall-coast-grid-1.png";
import cornwallCoastGrid2 from "../assets/images/tourImages/cornwall-coast-grid-2.png";
import cornwallCoastGrid3 from "../assets/images/tourImages/cornwall-coast-grid-3.png";
import cornwallCoastGrid4 from "../assets/images/tourImages/cornwall-coast-grid-4.png";
import cornwallCoastGrid5 from "../assets/images/tourImages/cornwall-coast-grid-5.png";

import yorkshireDalesMain from "../assets/images/tourImages/yorkshire-dales-main.png";
import yorkshireDalesIncluded from "../assets/images/tourImages/yorkshire-dales-included.png";
import yorkshireDalesGrid1 from "../assets/images/tourImages/yorkshire-dales-grid-1.png";
import yorkshireDalesGrid2 from "../assets/images/tourImages/yorkshire-dales-grid-2.png";
import yorkshireDalesGrid3 from "../assets/images/tourImages/yorkshire-dales-grid-3.png";
import yorkshireDalesGrid4 from "../assets/images/tourImages/yorkshire-dales-grid-4.png";
import yorkshireDalesGrid5 from "../assets/images/tourImages/yorkshire-dales-grid-5.png";

import ellaGuide from "../assets/images/guideImages/ella-guide.webp";
import danGuide from "../assets/images/guideImages/dan-guide.webp";
import leahGuide from "../assets/images/guideImages/leah-guide.webp";
import euanGuide from "../assets/images/guideImages/euan-guide.webp";
import mayaGuide from "../assets/images/guideImages/maya-guide.webp";
import raviGuide from "../assets/images/guideImages/ravi-guide.webp";

import guideTick from "../assets/images/iconImages/guide-tick-icon.svg";
import bedIcon from "../assets/images/iconImages/bed-icon.svg";
import fork from "../assets/images/iconImages/fork-icon.svg";
import transfer from "../assets/images/iconImages/transfer-icon.svg";
import car from "../assets/images/iconImages/car-icon.svg";

const tourData = [
  {
    tourName: "Scottish Highlands",
    tourSlug: "scottish-highlands",
    about:
      "This is the Highlands as few see them slow-paced, immersive, and deeply rooted in story. You’ll hike through windswept glens, sleep in quiet village inns, and share campfire moments under vast, starlit skies.",
    price: "£1,150",
    reviewScore: "4.93",
    amountOfReviews: "200",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate",
    groupSize: "Max 10",
    availability: "May–September",
    meetingPoint: "Inverness",
    included: [
      {
        img: guideTick,
        text: "Certified guide",
      },
      {
        img: bedIcon,
        text: "Guesthouse stays",
      },
      {
        img: fork,
        text: "Breakfasts + trail lunches",
      },
      {
        img: transfer,
        text: "Cars from Inverness",
      },
      {
        img: car,
        text: "Entry fees & local transport",
      },
    ],
    itinerary: [
      {
        day: 1,
        what: "Meet in Inverness, settle in",
      },
      {
        day: 2,
        what: "Glenfinnan walk + loch swim",
      },
      {
        day: 3,
        what: "High ridge hike, local dinner",
      },
      {
        day: 4,
        what: "Heritage tour, village walk",
      },
      {
        day: 5,
        what: "Sunrise stroll, return to Inverness",
      },
    ],
    guides: [
      {
        guideName: "Ella Jamieson",
        guideType: "Lead Guide",
        specialities: [
          "First Aid Trained",
          "Wild plant ID",
          "Mountain Leader certified",
        ],
        guideImg: ellaGuide,
      },
      {
        guideName: "Ravi Singh",
        guideType: "Assistant Guide",
        specialities: ["Local ecology", "Birdwatching", "Seaside town tips"],
        guideImg: raviGuide,
      },
    ],
    mainImg: scottishMain,
    includedImg: scottishIncluded,
    gridImages: [
      { img: scottishGrid1, text: "Hike part of the West Highland Way" },
      { img: scottishGrid2, text: "Spot red deer and golden eagles" },
      { img: scottishGrid3, text: "Visit Eilean Donan Castle" },
      { img: scottishGrid4, text: "Wild swim in a remote loch" },
      { img: scottishGrid5, text: "Learn Highland folklore by firelight" },
    ],
  },
  {
    tourName: "Lake District",
    tourSlug: "lake-district",
    about:
      "This is the Highlands as few see them slow-paced, immersive, and deeply rooted in story. You’ll hike through windswept glens, sleep in quiet village inns, and share campfire moments under vast, starlit skies.",
    price: "£1,450",
    reviewScore: "3.93",
    amountOfReviews: "250",
    duration: "5 Days / 4 Nights",
    difficulty: "Easy",
    groupSize: "Max 15",
    availability: "June–December",
    meetingPoint: "Windermere",
    included: [
      {
        img: guideTick,
        text: "Certified local guide",
      },
      {
        img: bedIcon,
        text: "Boutique countryside stays",
      },
      {
        img: fork,
        text: "Daily breakfasts + picnic lunches",
      },
      {
        img: transfer,
        text: "Minibus transfers between trailheads",
      },
      {
        img: car,
        text: "Boat cruise on Lake Windermere",
      },
    ],
    itinerary: [
      { day: 1, what: "Meet in Windermere, lakeside orientation walk" },
      { day: 2, what: "Grasmere trails + Wordsworth village visit" },
      { day: 3, what: "Ridgeline hike with views over Ullswater" },
      { day: 4, what: "Boat cruise on Windermere, market town explore" },
      { day: 5, what: "Sunrise lakeside stroll, departures from Windermere" },
    ],
    guides: [
      {
        guideName: "Dan Thomas",
        guideType: "Lead Guide",
        specialities: [
          "Trail navigation",
          "Group facilitation",
          "Lake lore & history",
        ],
        guideImg: danGuide,
      },
      {
        guideName: "Leah Moyo",
        guideType: "Assistant Guide",
        specialities: [
          "Coastal safety & tide planning",
          "Marine wildlife spotting",
          "Cold water dips!",
        ],
        guideImg: leahGuide,
      },
    ],
    mainImg: lakeDistrictMain,
    includedImg: lakeDistrictIncluded,
    gridImages: [
      { img: lakeDistrictGrid1, text: "Hike part of the West Highland Way" },
      { img: lakeDistrictGrid2, text: "Spot red deer and golden eagles" },
      { img: lakeDistrictGrid3, text: "Visit Eilean Donan Castle" },
      { img: lakeDistrictGrid4, text: "Wild swim in a remote loch" },
      { img: lakeDistrictGrid5, text: "Learn Highland folklore by firelight" },
    ],
  },
  {
    tourName: "Cornwall Coast",
    tourSlug: "cornwall-coast",
    about:
      "This is the Highlands as few see them slow-paced, immersive, and deeply rooted in story. You’ll hike through windswept glens, sleep in quiet village inns, and share campfire moments under vast, starlit skies.",
    price: "£1,150",
    reviewScore: "4.93",
    amountOfReviews: "200",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate",
    groupSize: "Max 10",
    availability: "May–September",
    meetingPoint: "St Ives",
    included: [
      {
        img: guideTick,
        text: "Coastal hiking guide",
      },
      {
        img: bedIcon,
        text: "Seaside guesthouse stays",
      },
      {
        img: fork,
        text: "Breakfasts + beachside lunches",
      },
      {
        img: transfer,
        text: "Clifftop transport support",
      },
      {
        img: car,
        text: "Sea swim & tide pool exploratione",
      },
    ],
    itinerary: [
      { day: 1, what: "Meet in St Ives, coastal town wander" },
      { day: 2, what: "Clifftop hike along the South West Coast Path" },
      { day: 3, what: "Hidden cove swim + seaside picnic" },
      { day: 4, what: "Fishing village visits, sunset beach walk" },
      { day: 5, what: "Early shoreline stroll, departures from St Ives" },
    ],
    guides: [
      {
        guideName: "Euan Maclean",
        guideType: "Lead Guide",
        specialities: [
          "Heritage & folklore",
          "Slow travel routes",
          "Long-distance footpaths",
        ],
        guideImg: euanGuide,
      },
      {
        guideName: "Maya Patel",
        guideType: "Assistant Guide",
        specialities: [
          "Mindful walking",
          "Welsh language basics",
          "Sketch journaling",
        ],
        guideImg: mayaGuide,
      },
    ],
    mainImg: cornwallCoastMain,
    includedImg: cornwallCoastIncluded,
    gridImages: [
      { img: cornwallCoastGrid1, text: "Hike part of the West Highland Way" },
      { img: cornwallCoastGrid2, text: "Spot red deer and golden eagles" },
      { img: cornwallCoastGrid3, text: "Visit Eilean Donan Castle" },
      { img: cornwallCoastGrid4, text: "Wild swim in a remote loch" },
      { img: cornwallCoastGrid5, text: "Learn Highland folklore by firelight" },
    ],
  },
  {
    tourName: "Yorkshire Dales",
    tourSlug: "yorkshire-dales",
    about:
      "This is the Highlands as few see them slow-paced, immersive, and deeply rooted in story. You’ll hike through windswept glens, sleep in quiet village inns, and share campfire moments under vast, starlit skies.",
    price: "£1,150",
    reviewScore: "4.93",
    amountOfReviews: "200",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate",
    groupSize: "Max 10",
    availability: "May–September",
    meetingPoint: "Skipton",
    included: [
      {
        img: guideTick,
        text: "Certified countryside guide",
      },
      {
        img: bedIcon,
        text: "Traditional inn accommodations",
      },
      {
        img: fork,
        text: "Hearty breakfasts + trail lunches",
      },
      {
        img: transfer,
        text: "Transport between valleys & villages",
      },
      {
        img: car,
        text: "Waterfall walks & heritage sites",
      },
    ],
    itinerary: [
      { day: 1, what: "Meet in Skipton, canal-side introduction walk" },
      { day: 2, what: "Malham Cove hike + limestone scenery" },
      { day: 3, what: "Rolling dale trails with picnic stop" },
      { day: 4, what: "Waterfall walks, historic village exploration" },
      { day: 5, what: "Morning countryside stroll, departures from Skipton" },
    ],
    guides: [
      {
        guideName: "Euan Maclean",
        guideType: "Lead Guide",
        specialities: [
          "Heritage & folklore",
          "Slow travel routes",
          "Long-distance footpaths",
        ],
        guideImg: euanGuide,
      },
      {
        guideName: "Ravi Singh",
        guideType: "Assistant Guide",
        specialities: ["Local ecology", "Birdwatching", "Seaside town tips"],
        guideImg: raviGuide,
      },
    ],
    mainImg: yorkshireDalesMain,
    includedImg: yorkshireDalesIncluded,
    gridImages: [
      { img: yorkshireDalesGrid1, text: "Hike part of the West Highland Way" },
      { img: yorkshireDalesGrid2, text: "Spot red deer and golden eagles" },
      { img: yorkshireDalesGrid3, text: "Visit Eilean Donan Castle" },
      { img: yorkshireDalesGrid4, text: "Wild swim in a remote loch" },
      {
        img: yorkshireDalesGrid5,
        text: "Learn Highland folklore by firelight",
      },
    ],
  },
];

export default tourData;
