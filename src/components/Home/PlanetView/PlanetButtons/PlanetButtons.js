import React from "react";
import styles from "./planetbuttons.module.css";
import PlanetButton from "./PlanetButton/PlanetButton";

const planetButtons = (props) => {
  return (
    <ul className={styles.planetButtons}>
      {props.planetProperties.map((planetProperty) => {
        return (
          <PlanetButton
            key={planetProperty.id}
            id={planetProperty.id}
            imgName={planetProperty.imgName}
            planetName={planetProperty.planetName}
            selectedPlanetId={props.selectedPlanetId}
            planetSelectHandler={props.planetSelectHandler}
          />
        );
      })}
    </ul>
  );
};

export default planetButtons;
