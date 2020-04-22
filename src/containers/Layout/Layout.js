import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./layout.module.css";
import NavigationMenu from "./../../components/Navigation/NavigationMenu/NavigationMenu";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Footer from "./../../components/Footer/Footer";

class Layout extends Component {
  state = {
    pathName: "/",
    isPageYpositionTop: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    this.props.history.listen((location, action) => {
      this.setState({ pathName: location.pathname });
      return;
    });

    this.setState({ pathName: this.props.history.location.pathname });
  }

  handleScroll = () => {
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollTop > 50) {
      this.setState({
        isPageYpositionTop: false,
      });
    } else {
      this.setState({
        isPageYpositionTop: true,
      });
    }
  };

  render() {
    let headerImage =
      this.state.pathName !== "/contact" ? (
        <HeaderImage pathName={this.state.pathName} />
      ) : null;

    return (
      <div className={styles.layout}>
        <NavigationMenu isPageYpositionTop={this.state.isPageYpositionTop} />
        {headerImage}
        <main>
          <div className={styles.inner}>{this.props.children}</div>
        </main>
        <Footer />
        <SocialMedia />
      </div>
    );
  }
}

export default withRouter(Layout);
