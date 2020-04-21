import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul>
      <NavigationItem link="/about" exact>
        about
      </NavigationItem>
      <NavigationItem link="/learn" exact>
        learn
      </NavigationItem>
      <NavigationItem link="/gallery" exact>
        gallery
      </NavigationItem>
      <NavigationItem link="/contact" exact>
        contact
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
