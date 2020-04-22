import React from "react";
import styles from "./categorytab.module.css";

const categoryTab = (props) => {
  let className = [styles.categoryTab];
  if (props.selectedCategoryId === props.categoryId) {
    className = [styles.categoryTab, styles.active];
  }

  return (
    <li
      className={className.join(" ")}
      id={props.categoryId}
      onClick={() => props.selectCategoryHandler(props.categoryId)}
    >
      {props.children}
    </li>
  );
};

export default categoryTab;
