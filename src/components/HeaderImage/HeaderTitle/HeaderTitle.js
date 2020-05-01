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
            There is so much in the universe that is astonishing and intriguing.
            <br />
            Are you fascinated with the stunning beauty of galaxy or mysteries
            of planets?
            <br />
            You've come to the right place!
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
              <span className={styles.txt}>ABOUT</span>
            </div>
            <div className={styles.txtBox}>
              <span className={styles.txt}>MY UNIVERSE</span>
            </div>
          </h1>
          <p className={styles.subTitle}>
            This website offers fascinating content that is all about the
            universe.
            <br />
            Yes we are just as fascinated with space as you are.
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
              <span className={styles.txt}>MYSTERIES OF</span>
            </div>
            <div className={styles.txtBox}>
              <span className={styles.txt}>THE UNIVERSE</span>
            </div>
          </h1>
          <p className={styles.subTitle}>
            The universe is full of mysteries and wonders.
            <br />
            Why don't you take a deep dive into <br />
            our strange yet exciting astronomical world.
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
            Take a look at stunning photos provided by NASA.
            <br />
            You would feel how small we are in this universe.
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
