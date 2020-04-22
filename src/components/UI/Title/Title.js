import React from "react";
import styles from "./title.module.css";

const title = (props) => {
  return <h2 className={styles.title}>{props.children}</h2>;
};

export default title;
