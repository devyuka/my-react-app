import React from "react";
import styles from "./searchinput.module.css";

const SearchInput = (props) => {
  return (
    <div className={styles.box}>
      <input
        type="text"
        onChange={props.inputChangeHandler}
        value={props.term}
        className={styles.searchInput}
      />
      <button
        className={styles.searchButton}
        onClick={() => props.imageSearchHandler(props.term)}
      ></button>
    </div>
  );
};

export default SearchInput;
