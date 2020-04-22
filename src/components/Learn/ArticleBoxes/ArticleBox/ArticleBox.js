import React from "react";
import styles from "./articlebox.module.css";

const articleBox = (props) => {
  return (
    <li className={styles.articleBox}>
      <div className={styles.articleImg}>
        <img src={require(`../../../../assets/images/${props.imgName}`)} />
      </div>
      <h3 className={styles.articleTitle}>{props.title}</h3>
      <p className={styles.articleBody}>{props.body}</p>
      <div className={styles.categoryLabel}>{props.category}</div>
    </li>
  );
};

export default articleBox;
