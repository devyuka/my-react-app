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
        <Title>About</Title>
        <p className={styles.outline}>
          This is a website that provides educational and fun content about the
          universe. <br />
          The owner of the site is nothing but a fan of astronomy and space
          exploration like you.
          <br />
          <br />
          The vastness of space often helps me forget small problems in my
          everyday lives and makes me feel how small I am in this huge universe.
          Needless to say, astonishingly beautiful photos and images of space
          (even fake ones!) keep fascinating me all the time too.
          <br />
          <br />
          Hope you enjoy browsing through the site and find the content helpful.
        </p>

        <p className={styles.message}>Please feel free to send a message.</p>
        <Button pathName="/contact">Contact</Button>
      </Fade>
    </section>
  );
};

export default About;
