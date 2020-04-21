import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigationitem.module.css";

const navigationItem = (props) => {
  return (
    <li className={styles.navigationItem}>
      <NavLink to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
