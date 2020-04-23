import React, { useEffect } from "react";
import styles from "./article.module.css";
import stylesArticleBox from "../ArticleBoxes/ArticleBox/articlebox.module.css";

const Article = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let category = null;
  let classNameLabel = [stylesArticleBox.categoryLabel];

  switch (props.location.state.category) {
    case 1:
      category = "CAT01";
      classNameLabel = [
        stylesArticleBox.categoryLabel,
        stylesArticleBox.categoryLabel01,
      ];
      break;
    case 2:
      category = "CAT02";
      classNameLabel = [
        stylesArticleBox.categoryLabel,
        stylesArticleBox.categoryLabel02,
      ];
      break;
    case 3:
      category = "CAT03";
      classNameLabel = [
        stylesArticleBox.categoryLabel,
        stylesArticleBox.categoryLabel03,
      ];
      break;
    default:
      break;
  }

  return (
    <div className={styles.article}>
      <ul>
        <li>
          <h3 className={styles.title}>{props.location.state.title}</h3>
        </li>
        <div className={styles.articleImg}>
          <img
            src={require(`../../../assets/images/${props.location.state.imgName}`)}
          />
        </div>
        <li className={styles.body}>{props.location.state.body}</li>
        <li className={classNameLabel.join(" ")}>{category}</li>
      </ul>
    </div>
  );
};

export default Article;
