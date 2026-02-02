import Guided from "../components/guided/guided";
import Guides from "../components/guides/guides";

function OurGuides() {
  return (
    <div>
      <div className="our-guides-bg"></div>
      <div className="padding-global">
        <div className="our-guides max-width-medium">
          <h1 className="is-dark-heading">Meet Our Guides</h1>
          <h2 className="heading-style-h4 is-dark-text padding-small padding-top">
            At Wanderly, our guides aren’t just experts — they’re locals,
            storytellers, naturalists, and adventurers.
          </h2>
        </div>
      </div>
      <Guides />
      <Guided />
    </div>
  );
}

export default OurGuides;
