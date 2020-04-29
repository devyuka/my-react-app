import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import styles from "./learn.module.css";
import Title from "./../UI/Title/Title";
import ArticleContainer from "../../containers/ArticleContainer/ArticleContainer";

const Learn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="Learn Section">
      <Fade duration={2000}>
        <Title>Learn</Title>
        <p className={styles.outline}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa.
        </p>
        <ArticleContainer />
      </Fade>
    </section>
  );
};

export default Learn;
