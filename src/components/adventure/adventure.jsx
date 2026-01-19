import "./adventure.css";
import adventure from "../../assets/images/adventure.png";

function Adventure() {
  return (
    <div className="adventure-container">
      <div className="padding-global">
        <div className="container-large adventure">
          <div>
            <h2 className="is-dark-heading padding-small padding-bottom">
              A Different Kind of Adventure
            </h2>
            <p className="padding-small padding-bottom is-dark-text">
              We don’t do giant buses or rigid itineraries. We keep groups small
              (usually 8–10 guests), stay in cozy local accommodations, and
              leave room in every trip for serendipity. Whether it’s a swim in a
              hidden lake or a stop at a roadside pub, we believe the best
              memories are often unplanned.
            </p>
            <p className="is-dark-text">
              We know the UK is full of surprises — and we’re here to help you
              find them.
            </p>
          </div>
          <img src={adventure} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Adventure;
