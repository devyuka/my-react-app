import React from "react";
import styles from "./articleboxes.module.css";
import ArticleBox from "./ArticleBox/ArticleBox";

const articleBoxes = (props) => {
  return (
    <ul className={styles.articleBoxes}>
      {props.articles.map((article) => (
        <ArticleBox
          key={article.articleId}
          title={article.articleTitle}
          body={article.articleBody}
          category={article.articleCategory}
          imgName={article.articleImg}
        />
      ))}
    </ul>
  );
};

export default articleBoxes;
