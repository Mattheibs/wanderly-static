import HowWorks from "../components/howWorks/howWorks";
import ReadyToWander from "../components/readyToWander/readyToWander";
import Reviews from "../components/reviews/reviews";
import Tours from "../components/tours/tours";
import Wander from "../components/wander/wander";
import homeBG from "../assets/images/hero-bg.webp";

function Home() {
  return (
    <div>
      <img
        loading="eager"
        fetchPriority="high"
        src={homeBG}
        className="home-bg"
      ></img>
      <div className="padding-global">
        <div className="home max-width-medium ">
          <h1>Uncover the Untamed Beauty of the UK</h1>
          <h2 className="padding-small padding-top heading-style-h4">
            Small-group guided adventures through Britain’s most breathtaking
            landscapes.
          </h2>
        </div>
      </div>
      <Tours />
      <Wander />
      <HowWorks />
      <Reviews />
      <ReadyToWander />
    </div>
  );
}

export default Home;
