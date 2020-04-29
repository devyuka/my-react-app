import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import styles from "./about.module.css";
import Title from "./../UI/Title/Title";
import Button from "./../UI/Button/Button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Fade duration={2000}>
        <Title>About us</Title>
        <p className={styles.outline}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa.
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa.
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa.
        </p>

        <p className={styles.message}>Please feel free to send us a message.</p>
        <Button pathName="/contact">Contact</Button>
      </Fade>
    </section>
  );
};

export default About;
