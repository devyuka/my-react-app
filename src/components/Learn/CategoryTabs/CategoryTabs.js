import React from "react";
import styles from "./categorytabs.module.css";
import CategoryTab from "./CategoryTab/CategoryTab";

const categoryTabs = (props) => {
  return (
    <ul className={styles.categoryTabs}>
      <CategoryTab
        categoryId={0}
        selectCategoryHandler={props.selectCategoryHandler}
        selectedCategoryId={props.selectedCategoryId}
      >
        ALL
      </CategoryTab>
      <CategoryTab
        categoryId={1}
        selectCategoryHandler={props.selectCategoryHandler}
        selectedCategoryId={props.selectedCategoryId}
      >
        Planets
      </CategoryTab>
      <CategoryTab
        categoryId={2}
        selectCategoryHandler={props.selectCategoryHandler}
        selectedCategoryId={props.selectedCategoryId}
      >
        Solar System
      </CategoryTab>
      <CategoryTab
        categoryId={3}
        selectCategoryHandler={props.selectCategoryHandler}
        selectedCategoryId={props.selectedCategoryId}
      >
        Galaxy
      </CategoryTab>
    </ul>
  );
};

export default categoryTabs;
