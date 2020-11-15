import React from "react";
import PropTypes from "prop-types";
import styles from "../css/formation.module.css";

class Formation extends React.Component {
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
        <h3
          className={
            this.state.isToggleOn
              ? styles["formationTitleClicked"]
              : styles["formationTitleNotClicked"]
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
              <p>{this.props.description}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

Formation.propTypes = {
  nom: PropTypes.string.isRequired,
  année: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,

  description: PropTypes.string.isRequired,
};

export default Formation;
