import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./layout.module.css";
import NavigationMenu from "./../../components/Navigation/NavigationMenu/NavigationMenu";
import HeaderImage from "../../components/HeaderImage/HeaderImage";

class Layout extends Component {
  state = {
    pathName: "/",
  };

  componentDidMount() {
    this.props.history.listen((location, action) => {
      this.setState({ pathName: location.pathname });
      return;
    });

    this.setState({ pathName: this.props.history.location.pathname });
  }

  render() {
    let headerImage =
      this.state.pathName !== "/contact" ? (
        <HeaderImage pathName={this.state.pathName} />
      ) : null;

    return (
      <div className={styles.layout}>
        <NavigationMenu />
        {headerImage}
        <main>
          <div className={styles.inner}>{this.props.children}</div>
        </main>
      </div>
    );
  }
}

export default withRouter(Layout);
