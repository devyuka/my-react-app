import React from "react";
import styles from "./articlebox.module.css";

const articleBox = (props) => {
  let category = null;
  let className = [styles.categoryLabel];
  switch (props.category) {
    case 1:
      category = "CAT01";
      className = [styles.categoryLabel, styles.categoryLabel01];
      break;
    case 2:
      category = "CAT02";
      className = [styles.categoryLabel, styles.categoryLabel02];
      break;
    case 3:
      category = "CAT03";
      className = [styles.categoryLabel, styles.categoryLabel03];
      break;
    default:
      break;
  }

  return (
    <li className={styles.articleBox}>
      <div className={styles.articleImg}>
        <img src={require(`../../../../assets/images/${props.imgName}`)} />
      </div>
      <h3 className={styles.articleTitle}>{props.title}</h3>
      <p className={styles.articleBody}>{props.body}</p>
      <div className={className.join(" ")}>{category}</div>
    </li>
  );
};

export default articleBox;
