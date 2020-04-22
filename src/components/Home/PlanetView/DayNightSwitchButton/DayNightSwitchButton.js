import React from "react";
import styles from "./daynightswitchbutton.module.css";

const dayNightSwitchButton = (props) => {
  let className = [styles.dayNightSwitchButton];
  if (props.dayNightSwitch) {
    className = [styles.dayNightSwitchButton, styles.daySelected];
  }
  return (
    <div className={className.join(" ")}>
      <a className={styles.switch} onClick={props.dayNightSwitchHandler}>
        Day
      </a>
      <a className={styles.switch} onClick={props.dayNightSwitchHandler}>
        Night
      </a>
    </div>
  );
};

export default dayNightSwitchButton;
