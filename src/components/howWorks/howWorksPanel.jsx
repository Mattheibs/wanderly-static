function HowWorksPanel(panel) {
  return (
    <div>
      <div className="how-works-panel-grid-item">
        <img loading="lazy" src={panel.img} alt="" />
        <h3 className="is-dark-heading padding-small padding-top">
          {panel.heading}
        </h3>
        <h4 className="is-dark-text padding-small padding-top">{panel.text}</h4>
      </div>
    </div>
  );
}

export default HowWorksPanel;
