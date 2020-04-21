import React from "react";
import styles from "./navigationmenu.module.css";
import Logo from "./../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const navigationMenu = (props) => {
  return (
    <header className={styles.navigationMenu}>
      <Logo />
      <NavigationItems />
    </header>
  );
};

export default navigationMenu;
