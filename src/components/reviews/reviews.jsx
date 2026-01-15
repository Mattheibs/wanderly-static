import { useState } from "react";
import "./reviews.css";
import review1 from "../../assets/images/reviews1.png";
import review3 from "../../assets/images/reviews2.png";
import review2 from "../../assets/images/reviews3.png";
import reviewStar from "../../assets/images/review-star.svg";
import quotes from "../../assets/images/quotes.svg";

function Reviews() {
  const [selectedReview, setSelectedReview] = useState(0);
  const reviews = [
    {
      review:
        "“I usually travel solo, but Wanderly made it so easy to connect with others. The trip was well-paced, full of local stories, and left me feeling completely recharged.”",
      reviewName: "– Priya M., Manchester",
    },
    {
      review:
        "“Wanderly took all the stress out of planning — I just showed up and had one of the best weeks of my life hiking through the Lake District. Incredible guides, stunning views, and such a great group.”",
      reviewName: "– Emily R., London",
    },
    {
      review:
        "“It felt like a road trip with friends I hadn’t met yet. The Cornwall coast was jaw-droppingly beautiful, and our guide knew the perfect quiet spots.”",
      reviewName: "– James A., Bristol",
    },
  ];
  const images = [review1, review2, review3];
  return (
    <div className="reviews">
      <div className="global-padding">
        <div className="container-large padding-section-small">
          <h2 className="is-dark-heading padding-medium padding-bottom">
            What Our Travelers Are Saying
          </h2>
          <div className="reviews-container">
            <div className="reviews-container-images">
              {images.map((img, index) => (
                <img
                  key={index}
                  className={`reviews-container-image ${
                    index === selectedReview ? "active" : ""
                  }`}
                  src={img}
                  alt=""
                  onClick={() => setSelectedReview(index)}
                />
              ))}
            </div>
            <div className="reviews-container-text">
              <h3 className="reviews-container-text-heading is-dark-heading">
                {reviews[selectedReview].review}
              </h3>
              <div>
                <h4 className="is-dark-text">
                  {reviews[selectedReview].reviewName}
                </h4>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={reviewStar} alt="" />
                  ))}
                </div>
              </div>
              <img className="review-quotes" src={quotes} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
