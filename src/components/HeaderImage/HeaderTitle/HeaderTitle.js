import React from "react";
import styles from "./headertitle.module.css";

const headerTitle = (props) => {
  let keyTitle = null;
  let className = [styles.mainTitle];
  switch (props.pathName) {
    case "/":
      className = [styles.mainTitle, styles.home];
      keyTitle = (
        <React.Fragment>
          <h1 className={className.join(" ")}>
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
      className = [styles.mainTitle, styles.about];
      keyTitle = (
        <React.Fragment>
          <h1 className={className.join(" ")}>
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
      className = [styles.mainTitle, styles.learn];
      keyTitle = (
        <React.Fragment>
          <h1 className={className.join(" ")}>
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
      className = [styles.mainTitle, styles.gallery];
      keyTitle = (
        <React.Fragment>
          <h1 className={className.join(" ")}>
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
