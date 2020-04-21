import React, { Component } from "react";
import styles from "./layout.module.css";
import NavigationMenu from "./../../components/Navigation/NavigationMenu/NavigationMenu";
import HeaderImage from "../../components/HeaderImage/HeaderImage";

class Layout extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <NavigationMenu />
        <HeaderImage />
        <main>
          <div className={styles.inner}>{this.props.children}</div>
        </main>
      </div>
    );
  }
}

export default Layout;
