import React from "react";
import styles from "./headerimage.module.css";
import keyVideo from "../../assets/audio/key_bg.mp4";
import keyImgHome from "../../assets/images/key_img_01.jpg";
import keyImgAbout from "../../assets/images/key_img_02.jpg";
import keyImgLearn from "../../assets/images/key_img_03.jpg";
import keyImgGallery from "../../assets/images/key_img_04.jpg";

import HeaderTitle from "./HeaderTitle/HeaderTitle";

const headerImage = (props) => {
  let keyImg = null;
  switch (props.pathName) {
    case "/":
      keyImg = (
        <React.Fragment>
          <video loop autoPlay muted className={styles.video}>
            <source src={keyVideo} type="video/mp4" />
          </video>
          <div>
            <img src={keyImgHome} />
          </div>
        </React.Fragment>
      );
      break;
    case "/about":
      keyImg = (
        <div>
          <img src={keyImgAbout} />
        </div>
      );
      break;
    case "/learn":
      keyImg = (
        <div>
          <img src={keyImgLearn} />
        </div>
      );
      break;
    case "/gallery":
      keyImg = (
        <div>
          <img src={keyImgGallery} />
        </div>
      );
      break;
    default:
      keyImg = (
        <React.Fragment>
          <video loop autoPlay muted className={styles.video}>
            <source src={keyVideo} type="video/mp4" />
          </video>
          <div>
            <img src={keyImgHome} />
          </div>
        </React.Fragment>
      );
  }

  return (
    <div className={styles.headerImage}>
      <div className={styles.headerImageInner}>
        {keyImg}
        <HeaderTitle pathName={props.pathName} />
      </div>
    </div>
  );
};

export default headerImage;
