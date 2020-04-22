import React from "react";
import styles from "./success.module.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Button from "./../../../components/UI/Button/Button";

const success = (props) => {
  let message = null;
  message = (
    <div className={styles.success}>
      <CheckCircleOutlineIcon color="primary" style={{ fontSize: 100 }} />
      <h2 className={styles.title}>Thank you for your message!</h2>
      <p className={styles.text}>Your submission has been received.</p>
    </div>
  );

  if (props.postFail) {
    message = (
      <div className={styles.success}>
        <ErrorOutlineIcon color="primary" style={{ fontSize: 100 }} />
        <h2 className={styles.title}>Sorry, something went wrong...</h2>
        <p className={styles.text}>Please try again.</p>
      </div>
    );
  }

  return (
    <div className={styles.Success}>
      {message}
      <Button pathName="/" type="returnHome">
        RETURN TO HOME
      </Button>
    </div>
  );
};

export default success;
