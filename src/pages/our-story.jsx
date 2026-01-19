import Adventure from "../components/adventure/adventure";
import LetsWander from "../components/letsWander/letsWander";
import Rooted from "../components/rooted/rooted";
import Values from "../components/values/values";
import WhereWanderlyBegan from "../components/whereWanderlyBegan/whereWanderlyBegan";

function OurStory() {
  return (
    <div>
      <div className="our-story-bg"></div>
      <div className="our-story max-width-medium">
        <h1>Travel that slows you down — and wakes you up.</h1>
      </div>
      <WhereWanderlyBegan />
      <Rooted />
      <Values />
      <Adventure />
      <LetsWander />
    </div>
  );
}

export default OurStory;
