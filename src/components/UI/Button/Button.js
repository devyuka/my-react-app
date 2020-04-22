import React from "react";
import styles from "./button.module.css";
import { NavLink } from "react-router-dom";

const button = (props) => {
  let className = [styles.button];
  switch (props.type) {
    case "returnHome":
      className = [styles.button, styles.returnHome];
      break;
    case "learnMore":
      className = [styles.button, styles.learnMore];
      break;
    default:
      break;
  }

  return (
    <div className={className.join(" ")}>
      <NavLink to={props.pathName} exact>
        {props.children}
      </NavLink>
    </div>
  );
};

export default button;
