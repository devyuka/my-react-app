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
            <div className={styles.txtBox}>
              <span className={styles.txt}>EXPLORE</span>
            </div>
            <div className={styles.txtBox}>
              <span className={styles.txt}>THE UNIVERSE</span>
            </div>
          </h1>
          <p className={styles.subTitle}>
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
            <div className={styles.txtBox}>
              <span className={styles.txt}>WHO WE ARE</span>
            </div>
            <div className={styles.txtBox}>
              <span className={styles.txt}>&amp; WHAT WE DO</span>
            </div>
          </h1>
          <p className={styles.subTitle}>
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
            <div className={styles.txtBox}>
              <span className={styles.txt}>DIVE INTO</span>
            </div>
            <div className={styles.txtBox}>
              <span className={styles.txt}>THE MYSTERY OF UNIVERSE</span>
            </div>
          </h1>
          <p className={styles.subTitle}>
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
            <div className={styles.txtBox}>
              <span className={styles.txt}>SEE THE WORLD</span>
            </div>
            <div className={styles.txtBox}>
              <span className={styles.txt}>FROM SPACE</span>
            </div>
          </h1>
          <p className={styles.subTitle}>
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
