import React from "react";
import styles from "./learnoverview.module.css";
import cx from "classnames";

import Button from "./../../UI/Button/Button";
import ArticleContainer from "../../../containers/ArticleContainer/ArticleContainer";
import Title from "./../../UI/Title/Title";

const learnOverview = () => {
  return (
    <section className={styles.learnOverview}>
      <span className={cx(styles.stripe, styles.stripe1)}></span>
      <span className={cx(styles.stripe, styles.stripe2)}></span>
      <span className={cx(styles.stripe, styles.stripe3)}></span>
      <span className={cx(styles.stripe, styles.stripe4)}></span>
      <span className={cx(styles.stripe, styles.stripe5)}></span>

      <Title>Learn</Title>
      <p className={styles.outline}>
        How much do you know about space?
        <br /> Do you know how the universe works or what makes life on earth
        possible?
        <br /> Take a deep dive into all the interesting facts about our
        universe.
      </p>
      <ArticleContainer isHome={true} />
      <Button pathName="/learn" type="learnMore">
        MORE
      </Button>
    </section>
  );
};

export default learnOverview;
