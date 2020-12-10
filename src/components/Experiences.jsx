import React from "react";
import PropTypes from "prop-types";
import styles from "../css/experiences.module.css";

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.conteneur}>
          <h3
            className={
              this.state.isToggleOn
                ? styles["experiencesTitleClicked"]
                : styles["experiencesTitleNotClicked"]
            }
            onClick={this.handleClick}
          >
            {this.props.nom} {this.state.isToggleOn ? "[-]" : "[+]"}
          </h3>
          <div>
            {this.state.isToggleOn ? (
              <div className={styles.card}>
                <h4>
                  {this.props.lieu} {this.props.année}
                </h4>
                <p>
                  {this.props.description.split("\n").map((item, key) => {
                    return (
                      <div key={key}>
                        {item}
                        <br />
                      </div>
                    );
                  })}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

Experiences.propTypes = {
  nom: PropTypes.string.isRequired,
  année: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,

  description: PropTypes.string.isRequired,
};

export default Experiences;
