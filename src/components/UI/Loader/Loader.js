import React from "react";
import styles from "./loader.module.css";

const loader = () => {
  return (
    <div className={styles.ldsRipple}>
      <div></div>
      <div></div>
    </div>
  );
};

export default loader;
