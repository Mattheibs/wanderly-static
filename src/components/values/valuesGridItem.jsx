import "./values.css";

function ValuesGridItem({ heading, img, text }) {
  return (
    <div className="values-grid-item">
      <img src={img} alt="" />
      <h3 className="padding-small padding-top is-dark-heading">{heading}</h3>
      <p className="padding-small padding-top is-dark-text">{text}</p>
    </div>
  );
}

export default ValuesGridItem;
