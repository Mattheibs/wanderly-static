import "./paymentCancellation.css";
import payment from "../../assets/images/payment.webp";
import card from "../../assets/images/iconImages/wallet-icon.svg";
import cancel from "../../assets/images/iconImages/cancel-icon.svg";
import transfer from "../../assets/images/iconImages/transfer-icon.svg";
import details from "../../assets/images/iconImages/details-icon.svg";

function PaymentCancellation() {
  return (
    <div className="padding-global">
      <div className="payment-cancellation container-large padding-section-small">
        <img
          loading="lazy"
          className="payment-cancellation-main-img"
          src={payment}
          alt=""
        />
        <div>
          <h2 className="is-dark-heading padding-bottom padding-small">
            Payment & Cancellations
          </h2>
          <p className="is-dark-text padding-bottom padding-small">
            We offer flexible payment options to help you book with confidence.
          </p>
          <div className="payment-cancellation-includes">
            <img src={card} alt="" />
            <p className="is-dark-text">
              Pay in full or reserve with a deposit
            </p>
          </div>
          <div className="payment-cancellation-includes">
            <img src={cancel} alt="" />
            <p className="is-dark-text">
              Cancel up to 30 days before your tour for a full refund (minus
              processing fees)
            </p>
          </div>
          <div className="payment-cancellation-includes">
            <img src={transfer} alt="" />
            <p className="is-dark-text">
              Option to transfer to another tour or date if needed
            </p>
          </div>
          <div className="payment-cancellation-includes">
            <img src={details} alt="" />
            <p className="is-dark-text">
              Full details in our Terms & Condition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCancellation;
