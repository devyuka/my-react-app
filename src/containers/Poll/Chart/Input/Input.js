import React from "react";
import styles from "./input.module.css";

const input = (props) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="radio"
        id={props.label}
        name={props.chartID}
        value={props.label}
        checked={props.selected === props.label}
        onChange={() => {}}
        onClick={(e) => {
          const selectedChoice = e.target.value;
          props.selectHandler(props.chartID, selectedChoice);
        }}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
};

export default input;
