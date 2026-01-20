import pinkTick from "../../assets/images/pink-tick.svg";

function Guide({ guide }) {
  return (
    <div className="guide">
      <div className="guide-tour">
        <img src={guide.img} alt={guide.guideName} />
        <p>{guide.tour}</p>
      </div>
      <h3 className="is-dark-heading">{guide.guideName}</h3>
      <div className="guide-certs">
        {guide.certifications.map((cert) => {
          return (
            <div>
              <img src={pinkTick} alt="" />
              <p className="is-dark-text">{cert}</p>
            </div>
          );
        })}
      </div>
      <p className="is-dark-text guide-about">{guide.about}</p>
    </div>
  );
}

export default Guide;
