import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./dateinput.module.css";

const dateInput = (props) => {
  return (
    <div className={styles.dateInput}>
      <div className={styles.box}>
        <span className={styles.txt}>Select Date</span>
        <span className={styles.picker}>
          <DatePicker selected={props.date} onChange={props.onChangeDate} />
        </span>
      </div>
    </div>
  );
};

export default dateInput;
