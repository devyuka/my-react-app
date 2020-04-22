import React from "react";
import styles from "./navigationmenu.module.css";
import Logo from "./../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const navigationMenu = (props) => {
  let className = [styles.navigationMenu];
  if (!props.isPageYpositionTop) {
    className = [styles.navigationMenu, styles.top];
  }
  return (
    <header className={className.join(" ")}>
      <Logo />
      <NavigationItems />
    </header>
  );
};

export default navigationMenu;
