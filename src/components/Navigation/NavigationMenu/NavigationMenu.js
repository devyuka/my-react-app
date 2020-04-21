import React from "react";
import Logo from "./../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const navigationMenu = (props) => {
  return (
    <header>
      <Logo />
      <NavigationItems />
    </header>
  );
};

export default navigationMenu;
