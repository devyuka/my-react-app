import React from "react";
import styles from "./pictureoftheday.module.css";

const pictureOfTheDay = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <img src={props.photo.url} alt={props.photo.title} />
      </div>
      <div className={styles.desc}>
        <h3 className={styles.title}>{props.photo.title}</h3>
        <p className={styles.txt}>{props.photo.explanation}</p>
      </div>
    </div>
  );
};

export default pictureOfTheDay;
