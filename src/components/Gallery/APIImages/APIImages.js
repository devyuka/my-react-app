import React from "react";
import styles from "./apiimages.module.css";

const APIImages = (props) => {
  return (
    <ul className={styles.apiImages}>
      {props.imgData.map((img, index) => (
        <li
          key={index}
          onClick={() => {
            props.imageDetailHandler({
              singleImgURL: img.imgURL.href,
              singleDescription: img.description,
              singleDateCreated: img.dateCreated,
            });
          }}
        >
          <img src={img.imgURL.href} alt={img.description} />
        </li>
      ))}
    </ul>
  );
};

export default APIImages;
