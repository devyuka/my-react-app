import React from "react";
import styles from "./button.module.css";
import { NavLink } from "react-router-dom";

const button = (props) => {
  let className = [styles.button];
  if (props.type === "returnHome") {
    className = [styles.button, styles.returnHome];
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
