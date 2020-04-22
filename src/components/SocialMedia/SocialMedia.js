import React from "react";
import styles from "./socialmedia.module.css";

import smIcon01 from "../../assets/images/icon_fb.png";
import smIcon02 from "../../assets/images/icon_tw.png";

const socialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <ul>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={smIcon01} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            <img src={smIcon02} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default socialMedia;
