import React from "react";
import styles from "./button.module.css";
import { NavLink } from "react-router-dom";

const button = (props) => {
  return (
    <div className={styles.button}>
      <NavLink to={props.pathName} exact>
        {props.children}
      </NavLink>
    </div>
  );
};

export default button;
