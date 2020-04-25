import React from "react";
import styles from "./backdrop.module.css";

const backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.modalCloseHandler}></div>
  );
};

export default backdrop;
