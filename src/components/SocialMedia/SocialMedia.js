import React from "react";
import styles from "./socialmedia.module.css";

import smIcon01 from "../../assets/images/icon_fb.png";
import smIcon02 from "../../assets/images/icon_tw.png";

const socialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={smIcon01} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={smIcon02} alt=""/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default socialMedia;
