import React from "react";
import styles from "./imagedetailmodal.module.css";
import closeIcon from "../../../assets/images/icon_close.png";
import Backdrop from "./../../UI/Backdrop/Backdrop";

const imageDetailModal = (props) => {
  return (
    <div className={styles.imageDetailModal}>
      <div className={styles.detail}>
        <img
          className={styles.close}
          src={closeIcon}
          onClick={props.modalCloseHandler}
        />
        <div className={styles.container}>
          <span className={styles.date}>
            {props.singleImgData.singleDateCreated}
          </span>
          <div className={styles.detailImg}>
            <img src={props.singleImgData.singleImgURL} />
          </div>
          <p className={styles.desc}>{props.singleImgData.singleDescription}</p>
        </div>
      </div>
      <Backdrop modalCloseHandler={props.modalCloseHandler} />
    </div>
  );
};

export default imageDetailModal;
