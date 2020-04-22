import React from "react";
import styles from "./footer.module.css";
import Logo from "./../Logo/Logo";

const footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <p className={styles.copyright}>
        &copy; 2020 My Universe - All rights reserved.
      </p>
    </footer>
  );
};

export default footer;
