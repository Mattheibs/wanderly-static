import "./values.css";
import connectionIcon from "../../assets/images/values-connection.svg";
import peopleIcon from "../../assets/images/values-people.svg";
import leaveIcon from "../../assets/images/values-leave.svg";
import alwaysIcon from "../../assets/images/values-always.svg";
import ValuesGridItem from "./valuesGridItem";

function Values() {
  return (
    <div className="values">
      <div className="padding-global">
        <div className="container-large padding-section-medium">
          <h2 className="is-dark-heading">Our Values</h2>
          <h3 className=" heading-style-h4 padding-large padding-bottom is-dark-text">
            We build Wanderly around four simple principles:
          </h3>
          <div className="values-grid">
            <ValuesGridItem
              heading={"Connection"}
              img={connectionIcon}
              text={"We skip the rush and focus on meaningful moments."}
            />
            <ValuesGridItem
              heading={"People First"}
              img={peopleIcon}
              text={"Our guides, guests, and partners are everything."}
            />
            <ValuesGridItem
              heading={"Leave it Better"}
              img={leaveIcon}
              text={
                "We aim for low-impact travel that supports local communities."
              }
            />
            <ValuesGridItem
              heading={"Always be Curious"}
              img={alwaysIcon}
              text={"Whether it’s a trail or a conversation, we go deeper."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
