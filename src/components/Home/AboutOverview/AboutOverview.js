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
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
        massa.
      </p>
      <div className={styles.aboutImg}>
        <img src={aboutImg} alt="" />
      </div>
      <Button pathName="/about">MORE</Button>
    </section>
  );
};

export default aboutOverview;
