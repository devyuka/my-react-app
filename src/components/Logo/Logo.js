import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./logo.module.css";
import LogoImg from "../../assets/images/logo.png";

const logo = () => {
  return (
    <div>
      <NavLink to="/" exact>
        <div className={styles.logo}>
          <img src={LogoImg} alt="My Universe" />
        </div>
      </NavLink>
    </div>
  );
};

export default logo;
