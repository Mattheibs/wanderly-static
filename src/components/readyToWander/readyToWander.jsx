import "./readyToWander.css";
import mailIcon from "../../assets/images/iconImages/mail-icon.svg";

function ReadyToWander() {
  return (
    <div className="ready-to-wander-container">
      <div className="padding-global">
        <div className="container-large padding-section-small">
          <div className="ready-to-wander">
            <h2 className="is-dark-heading padding-small padding-bottom">
              Ready to Wander Somewhere New?
            </h2>
            <p className="is-dark-text text-size-medium padding-small padding-bottom">
              Be the first to hear about new tours, limited spots, and travel
              tips from the trail.
            </p>
            <form>
              <div className="label-container">
                <label className="text-size-small" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  id="firstName"
                  required
                />
              </div>
              <div className="label-container">
                <label className="text-size-small" htmlFor="email">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  id="email"
                />
              </div>
              <button
                className="margin-small margin-top button is-accent-color"
                type="submit"
              >
                Subscribe
                <img loading="lazy" src={mailIcon} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToWander;
