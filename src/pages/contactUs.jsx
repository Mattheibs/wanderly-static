import mailIcon from "../assets/images/iconImages/mail-icon.svg";

function ContactUs() {
  return (
    <div>
      <div className="contact-us-bg"></div>
      <div className="padding-global">
        <div className="container-large contact-us padding-section-small ">
          <div className="contact-us-text">
            <h1 className="padding-small padding-bottom is-dark-heading">
              We’d love to hear from you
            </h1>
            <p className="is-dark-text padding-small padding-bottom">
              Have a question about a tour? Need help with a booking? Or just
              want to say hello? We’re always happy to chat — just send us a
              message using the form and one of our team will get back to you as
              soon as possible.
            </p>
            <h3 className="is-dark-heading">Prefer email?</h3>
            <span>
              Reach us directly at{" "}
              <a mailto="mattheibs@gmail.com">mattheibs@gmail.com</a>
            </span>
          </div>
          <form action="">
            <h2 className="padding-small padding-bottom is-dark-heading">
              Contact Us
            </h2>
            <p className="text-size-medium padding-small padding-bottom is-dark-text">
              We usually respond within 24 hours on weekdays
            </p>
            <div className="input-flex">
              <div className="label-container">
                <label className="text-size-small" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  id="firstName"
                />
              </div>
              <div className="label-container">
                <label className="text-size-small" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  id="lastName"
                />
              </div>
            </div>
            <div className="label-container">
              <label className="text-size-small" htmlFor="email">
                Email Address
              </label>
              <input type="email" placeholder="you@example.com" id="email" />
            </div>
            <div className="label-container">
              <label className="text-size-small" htmlFor="number">
                Phone Number (Optional)
              </label>
              <input type="text" placeholder="000-000-0000" id="number" />
            </div>
            <div className="label-container">
              <label className="text-size-small" htmlFor="message">
                Message
              </label>
              <textarea
                type="text"
                placeholder="How can we help?"
                id="message"
              />
            </div>
            <button
              className="margin-small margin-top button is-accent-color"
              type="submit"
            >
              Subscribe
              <img src={mailIcon} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
