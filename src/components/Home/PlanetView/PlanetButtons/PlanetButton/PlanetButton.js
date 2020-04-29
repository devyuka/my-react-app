import React from "react";
import styles from "./planetbutton.module.css";

const planetButton = (props) => {
  let className = [styles.planetButton];
  if (props.id === props.selectedPlanetId) {
    className = [styles.planetButton, styles.active];
  }

  return (
    <li
      className={className.join(" ")}
      onClick={() => props.planetSelectHandler(props.id)}
    >
      <div className={styles.planetButtonIcon}>
        <img
          src={require(`../../../../../assets/images/${props.imgName}`)}
          alt={props.planetName}
        />
      </div>
      <span className={styles.planetName}>{props.planetName}</span>
    </li>
  );
};

export default planetButton;
