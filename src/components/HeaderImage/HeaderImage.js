import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./headerimage.module.css";
import keyVideo01 from "../../assets/audio/key_bg.mp4";
import keyVideo02 from "../../assets/audio/key_bg.webm";
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
          <div className={styles.keyImg}>
            <img src={keyImgHome} alt="" />
          </div>
        </React.Fragment>
      );
      break;
    case "/about":
      keyImg = (
        <div className={styles.keyImg}>
          <img src={keyImgAbout} alt="" />
        </div>
      );
      break;
    case "/learn":
      keyImg = (
        <div className={styles.keyImg}>
          <img src={keyImgLearn} alt="" />
        </div>
      );
      break;
    case "/gallery":
      keyImg = (
        <div className={styles.keyImg}>
          <img src={keyImgGallery} alt="" />
        </div>
      );
      break;
    default:
      keyImg = null;
  }

  return (
    <div className={styles.headerImage}>
      <TransitionGroup>
        <CSSTransition key={props.pathName} timeout={800} classNames="fade">
          <div className={styles.headerImageInner}>
            <video loop autoPlay muted className={styles.video}>
              <source src={keyVideo01} type="video/mp4" />
              <source src={keyVideo02} type="video/webm" />
            </video>
            {keyImg}
            <HeaderTitle pathName={props.pathName} />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default headerImage;
