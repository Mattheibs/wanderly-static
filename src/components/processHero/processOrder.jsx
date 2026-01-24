import lightbulbIcon from "../../assets/images/iconImages/lightbuld-icon.svg";
function ProcessOrder({ item }) {
  return (
    <div className="process-item">
      <div className="process-item-heading padding-small padding-bottom">
        <img src={item.image} alt="" />
        <h2 className="is-dark-heading">{item.heading}</h2>
      </div>
      <p className="is-dark-text padding-small padding-bottom">{item.text}</p>
      {item.receive < 0 && (
        <div className="process-item-receive">
          <p className="is-dark-heading">You'll Receive</p>
          <ul>
            {item.receive.map((item) => (
              <li className="is-dark-text">{item}</li>
            ))}
          </ul>
        </div>
      )}
      {item.tip && (
        <div className="process-item-tip">
          <img src={lightbulbIcon} alt="" />
          <p className="is-dark-text">{item.tip}</p>
        </div>
      )}
    </div>
  );
}

export default ProcessOrder;
