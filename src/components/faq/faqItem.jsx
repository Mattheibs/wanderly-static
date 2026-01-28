import "./faq.css";
import { useState } from "react";
import accordionOpen from "../../assets/images/accordion-open.svg";
import accordionClosed from "../../assets/images/accordion-closed.svg";

function FaqItem() {
  const faqs = [
    {
      mainHeading: "General",
      generalFaqs: [
        {
          heading: "What is Wanderly Tours?",
          text: "Wanderly is a UK-based travel company offering small-group guided tours across Britain’s most beautiful and lesser-known regions. We focus on meaningful, slow-paced travel led by passionate local guides.",
        },
        {
          heading: "Who are these tours for?",
          text: "People who want to tour across Britain’s most beautiful and lesser-known regions.",
        },
        {
          heading: "How many people are on each tour?",
          text: "Between 4-16 people",
        },
      ],
      class: "heading-gray",
    },
    {
      mainHeading: "Booking & Payment",
      generalFaqs: [
        {
          heading: "How do I book a tour?",
          text: "You can book directly on our website. Just head to the tour page, choose your date, add your group size, and complete payment securely online.",
        },
        {
          heading: "What payment methods do you accept?",
          text: "People who want to tour across Britain’s most beautiful and lesser-known regions.",
        },
        {
          heading: "Can I pay a deposit instead of the full amount?",
          text: "Between 4-16 people",
        },
        {
          heading: "What’s your cancellation policy?",
          text: "Between 4-16 people",
        },
      ],
      class: "heading-orange",
    },
    {
      mainHeading: "Tours & Experience",
      generalFaqs: [
        {
          heading: "What’s included in the tour price?",
          text: "You can book directly on our website. Just head to the tour page, choose your date, add your group size, and complete payment securely online.",
        },
        {
          heading: "What’s not included?",
          text: "People who want to tour across Britain’s most beautiful and lesser-known regions.",
        },
        { heading: "How fit do I need to be?", text: "Between 4-16 people" },
        {
          heading: "What kind of accommodation do you offer?",
          text: "Between 4-16 people",
        },
      ],
      class: "heading-pink",
    },
    {
      mainHeading: "Before You Go",
      generalFaqs: [
        {
          heading: "What should I pack?",
          text: "You can book directly on our website. Just head to the tour page, choose your date, add your group size, and complete payment securely online.",
        },
        {
          heading: "Will I have phone signal or Wi-Fi?",
          text: "People who want to tour across Britain’s most beautiful and lesser-known regions.",
        },
        { heading: "Can I join solo?", text: "Between 4-16 people" },
      ],
      class: "heading-gray",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  function toggleFaq(sectionIndex, faqIndex) {
    const key = `${sectionIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  }

  return (
    <div className="padding-global">
      <div className="max-width-medium">
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p className={`faq-main-heading ${section.class}`}>
              {section.mainHeading}
            </p>

            {section.generalFaqs.map((faq, faqIndex) => {
              const key = `${sectionIndex}-${faqIndex}`;

              return (
                <div
                  key={key}
                  className="faq-item"
                  onClick={() => toggleFaq(sectionIndex, faqIndex)}
                >
                  <div className="faq-heading">
                    <p className="text-side-medium is-dark-heading">
                      {faq.heading}
                    </p>

                    <img
                      src={openIndex === key ? accordionOpen : accordionClosed}
                      alt=""
                    />
                  </div>

                  {openIndex === key && (
                    <div className="faq-text">
                      <p className="is-dark-text">{faq.text}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqItem;
