import { useParams } from "react-router-dom";
import tourData from "../components/tourData";

function PaymentPage() {
  const { tourSlug } = useParams();

  const tour = tourData.find((t) => t.tourSlug === tourSlug);

  if (!tour) {
    return <h2>Tour not found</h2>;
  }
  return (
    <div className="padding-global">
      <div className="booking-payment container-large">
        <div className="booking-payment-info">
          <p className="text-size-medium is-dark-text padding-small padding-bottom">
            {tour.tourName}
            <span className="is-dark-heading is-bold-text">
              Confirm and pay
            </span>
          </p>
          <h3 className="is-dark-heading padding-small padding-bottom">
            Your trip
          </h3>
          <p className="is-dark-heading is-bold-text">Dates</p>
          <p className="is-dark-text padding-small padding-bottom">
            dates-dates
          </p>
          <p className="is-dark-heading is-bold-text">Guests</p>
          <p className="is-dark-text padding-small padding-bottom">1 guest</p>
          <div className="payment-line"></div>
          <h3 className="is-dark-heading padding-small padding-bottom">
            Choose how to pay
          </h3>
          <label className="payment-btn text-size-medium booking-payment-radio">
            <input
              type="radio"
              name="paymentOptions"
              value="full"
              defaultChecked
            />
            <span className="is-dark-heading is-bold-text">
              Pay {tour.price} now
            </span>
          </label>
          <label className="payment-btn text-size-medium booking-payment-radio">
            <input type="radio" name="paymentOptions" value="partial" />
            <span className="is-dark-heading padding-small padding-bottom is-bold-text">
              Pay part now, part later
            </span>
          </label>
          <div className="payment-line"></div>
          <h3 className="is-dark-heading padding-small padding-bottom">
            Pay with
          </h3>
          <form action="">
            <input type="text" placeholder="Debit Card" />
            <div className="payment-form-flex">
              <div className="label-container">
                <label htmlFor="Name on card">Name on card</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="label-container">
                <label htmlFor="Name on card">Expiry</label>
                <input type="text" placeholder="06/2025" />
              </div>
            </div>
            <div className="payment-form-flex">
              <div className="label-container">
                <label htmlFor="Name on card">Card number</label>
                <input type="text" placeholder="1234 1234 1324 1324" />
              </div>
              <div className="label-container">
                <label htmlFor="Name on card">CVV</label>
                <input type="text" placeholder="***" />
              </div>
            </div>
          </form>
          <div className="payment-line"></div>
          <h3 className="is-dark-heading padding-small padding-bottom">
            Cancellation policy
          </h3>
          <button className="button is-accent-color">Confirm and Pay</button>
        </div>
        <div className="booking-payment-tour">
          <div className="booking-payment-tour-header">
            <img src={tour.mainImg} alt="" />
            <div>
              <h3 className="is-dark-heading">{tour.tourName}</h3>
              <div>
                <p className="is-dark-text">Duration: {tour.duration}</p>
              </div>
              <div>
                <p className="is-dark-heading">
                  {tour.reviewScore}{" "}
                  <span className="is-dark-text">
                    ({tour.amountOfReviews} reviews)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="payment-line"></div>
          <div className="booking-payment-tour-footer">
            <p className="is-dark-text">Your Total</p>
            <h2 className="is-dark-heading">{tour.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
