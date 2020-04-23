import React from "react";
import styles from "./articleboxes.module.css";
import ArticleBox from "./ArticleBox/ArticleBox";

const articleBoxes = (props) => {
  return (
    <ul className={styles.articleBoxes}>
      {props.articles
        .filter((article) =>
          props.selectedCategoryId === 0
            ? true
            : article.articleCategory === props.selectedCategoryId
        )
        .map((article) => (
          <ArticleBox
            key={article.articleId}
            id={article.articleId}
            title={article.articleTitle}
            body={article.articleBody}
            category={article.articleCategory}
            imgName={article.articleImg}
            isHome={props.isHome}
            onSelectArticle={props.onSelectArticle}
          />
        ))}
    </ul>
  );
};

export default articleBoxes;
