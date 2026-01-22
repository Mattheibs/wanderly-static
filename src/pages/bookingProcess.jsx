import Included from "../components/included/included";
import PaymentCancellation from "../components/paymentCancellation/paymentCancellation";
import ProcessHero from "../components/processHero/processHero";
import arrow from "../assets/images/arrow.svg";
import Cta from "../components/cta/cta";

function BookingProcess() {
  return (
    <div className="process-container">
      <ProcessHero />
      <Included />
      <PaymentCancellation />
      <Cta
        content={{
          heading: "Let’s Make It Official",
          textOne:
            "Found a trip that speaks to you? Booking only takes a few minutes.",
          buttonOne: "Explore Our Tours",
          buttonImgOne: arrow,
          buttonTwo: "Contact Us",
          class: "padding-section-small",
        }}
      />
    </div>
  );
}

export default BookingProcess;
