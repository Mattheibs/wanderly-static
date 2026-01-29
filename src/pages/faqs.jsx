import Cta from "../components/cta/cta";
import FaqItem from "../components/faq/faqItem";
import mailIcon from "../assets/images/iconImages/mail-icon.svg";

function Faqs() {
  return (
    <div>
      <div className="faq-bg"></div>
      <div class="padding-global">
        <div className="faq max-width-medium">
          <h1 className="padding-small padding-bottom is-dark-heading">
            Frequently Asked Questions
          </h1>
          <h4 className="is-dark-text">
            Got a question? We’ve got you covered.
          </h4>
        </div>
      </div>
      <FaqItem />
      <Cta
        content={{
          heading: "Still Have Questions?",
          textOne:
            "If you can’t find what you’re looking for, just drop us a line. We’re always happy to help.",
          buttonOne: "Contact Us",
          buttonOneLink: "/contact-us",
          buttonImgOne: mailIcon,
          class: "padding-section-small",
        }}
      />
    </div>
  );
}

export default Faqs;
