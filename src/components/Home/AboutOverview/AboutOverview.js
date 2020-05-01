import React from "react";
import styles from "./aboutoverview.module.css";
import Title from "./../../UI/Title/Title";

import aboutImg from "../../../assets/images/about_bg_img.png";
import Button from "./../../UI/Button/Button";

const aboutOverview = () => {
  return (
    <section>
      <Title>About</Title>
      <p className={styles.outline}>
        This is a website that provides educational and fun content about the
        universe.
        <br />
        Hope you enjoy browsing through the site and find the content helpful.
      </p>
      <div className={styles.aboutImg}>
        <img src={aboutImg} alt="" />
      </div>
      <Button pathName="/about">MORE</Button>
    </section>
  );
};

export default aboutOverview;
