import React from "react";
import styles from "./daynightswitchbutton.module.css";

const dayNightSwitchButton = (props) => {
  let className = [styles.dayNightSwitchButton];
  if (props.dayNightSwitch) {
    className = [styles.dayNightSwitchButton, styles.daySelected];
  }
  return (
    <div className={className.join(" ")}>
      <button className={styles.switch} onClick={props.dayNightSwitchHandler}>
        Day
      </button>
      <button className={styles.switch} onClick={props.dayNightSwitchHandler}>
        Night
      </button>
    </div>
  );
};

export default dayNightSwitchButton;
