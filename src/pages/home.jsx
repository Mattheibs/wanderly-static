import Footer from "../components/footer/footer";
import HowWorks from "../components/howWorks/howWorks";
import ReadyToWander from "../components/readyToWander/readyToWander";
import Reviews from "../components/reviews/reviews";
import Tours from "../components/tours/tours";
import Wander from "../components/wander/wander";

function Home() {
  return (
    <div>
      <div className="home-bg"></div>
      <div className="home max-width-medium">
        <h1>Uncover the Untamed Beauty of the UK</h1>
        <h4 className="padding-small padding-top">
          Small-group guided adventures through Britain’s most breathtaking
          landscapes.
        </h4>
      </div>
      <Tours />
      <Wander />
      <HowWorks />
      <Reviews />
      <ReadyToWander />
      <Footer />
    </div>
  );
}

export default Home;
