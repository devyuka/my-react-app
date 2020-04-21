import React from "react";
import styles from "./headertitle.module.css";

const headerTitle = (props) => {
  let keyTitle = null;
  switch (props.pathName) {
    case "/":
      keyTitle = (
        <React.Fragment>
          <h1 className={styles.mainTitle}>
            EXPLORE
            <br />
            THE UNIVERSE
          </h1>
          <p className={styles.subTitl}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            <br />
            Aenean commodo ligula eget dolor. Aenean massa. <br />
            Fefwoe commodo ligula eget dolor
          </p>
        </React.Fragment>
      );
      break;
    case "/about":
      keyTitle = (
        <React.Fragment>
          <h1 className={styles.mainTitle}>
            WHO WE ARE
            <br />
            &amp; WHAT WE DO
          </h1>
          <p className={styles.subTitl}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            <br />
            Aenean commodo ligula eget dolor. Aenean massa. <br />
            Fefwoe commodo ligula eget dolor
          </p>
        </React.Fragment>
      );
      break;
    case "/learn":
      keyTitle = (
        <React.Fragment>
          <h1 className={styles.mainTitle}>
            DIVE INTO
            <br />
            THE MYSTERY OF UNIVERSE
          </h1>
          <p className={styles.subTitl}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            <br />
            Aenean commodo ligula eget dolor. Aenean massa. <br />
            Fefwoe commodo ligula eget dolor
          </p>
        </React.Fragment>
      );
      break;
    case "/gallery":
      keyTitle = (
        <React.Fragment>
          <h1 className={styles.mainTitle}>
            SEE THE OUTER WORLD
            <br />
            FROM SPACE
          </h1>
          <p className={styles.subTitl}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            <br />
            Aenean commodo ligula eget dolor. Aenean massa. <br />
            Fefwoe commodo ligula eget dolor
          </p>
        </React.Fragment>
      );
      break;
    default:
      keyTitle = null;
  }
  return <div className={styles.headerTitle}>{keyTitle}</div>;
};

export default headerTitle;
