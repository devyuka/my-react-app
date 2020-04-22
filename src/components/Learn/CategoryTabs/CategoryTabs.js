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
        CAT01
      </CategoryTab>
      <CategoryTab
        categoryId={2}
        selectCategoryHandler={props.selectCategoryHandler}
        selectedCategoryId={props.selectedCategoryId}
      >
        CAT02
      </CategoryTab>
      <CategoryTab
        categoryId={3}
        selectCategoryHandler={props.selectCategoryHandler}
        selectedCategoryId={props.selectedCategoryId}
      >
        CAT03
      </CategoryTab>
    </ul>
  );
};

export default categoryTabs;
