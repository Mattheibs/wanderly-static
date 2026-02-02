import Adventure from "../components/adventure/adventure";
import Cta from "../components/cta/cta";
import Rooted from "../components/rooted/rooted";
import Values from "../components/values/values";
import WhereWanderlyBegan from "../components/whereWanderlyBegan/whereWanderlyBegan";
import arrow from "../assets/images/arrow.svg";
import guide from "../assets/images/iconImages/guide-icon.svg";
import ourStoryBg from "../assets/images/our-story-bg.webp";

function OurStory() {
  return (
    <div>
      <img
        loading="eager"
        fetchPriority="high"
        src={ourStoryBg}
        className="our-story-bg"
      ></img>
      <div className="padding-global">
        <div className="our-story max-width-medium">
          <h1>Travel that slows you down — and wakes you up.</h1>
        </div>
      </div>
      <WhereWanderlyBegan />
      <Rooted />
      <Values />
      <Adventure />
      <Cta
        content={{
          heading: "Let’s Wander",
          textOne:
            "Wherever you’re starting from, and however experienced you are, there’s a place for you at Wanderly. You don’t need the best boots or the fanciest gear — just an open mind and a sense of adventure.",
          textTwo: "We’d love to show you around.",
          buttonOne: "Explore Our Tours",
          buttonTwo: "Meet Our Guides",
          buttonImgOne: arrow,
          buttonImgTwo: guide,
          buttonOneLink: "/#scroll-tours",
          buttonTwoLink: "/our-guides",
          class: "padding-section-medium",
        }}
      />
    </div>
  );
}

export default OurStory;
