import React, { Component } from "react";
import styles from "./layoutmodule.css";
import NavigationMenu from "./../../components/Navigation/NavigationMenu/NavigationMenu";
import HeaderImage from "../../components/HeaderImage/HeaderImage";

class Layout extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <NavigationMenu />
        <HeaderImage />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
