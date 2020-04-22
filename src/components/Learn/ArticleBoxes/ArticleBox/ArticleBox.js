import React from "react";
import styles from "./articlebox.module.css";

const articleBox = (props) => {
  let category = null;
  let classNameLabel = [styles.categoryLabel];
  switch (props.category) {
    case 1:
      category = "CAT01";
      classNameLabel = [styles.categoryLabel, styles.categoryLabel01];
      break;
    case 2:
      category = "CAT02";
      classNameLabel = [styles.categoryLabel, styles.categoryLabel02];
      break;
    case 3:
      category = "CAT03";
      classNameLabel = [styles.categoryLabel, styles.categoryLabel03];
      break;
    default:
      break;
  }

  let classNameBox = [styles.articleBox];
  if (props.isHome) {
    classNameBox = [styles.articleBox, styles.isHome];
  }

  return (
    <li className={classNameBox.join(" ")}>
      <div className={styles.articleImg}>
        <img src={require(`../../../../assets/images/${props.imgName}`)} />
      </div>
      <h3 className={styles.articleTitle}>{props.title}</h3>
      <p className={styles.articleBody}>{props.body}</p>
      <div className={classNameLabel.join(" ")}>{category}</div>
    </li>
  );
};

export default articleBox;
