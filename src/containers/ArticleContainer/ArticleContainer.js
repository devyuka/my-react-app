import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import ArticleBoxes from "../../components/Learn/ArticleBoxes/ArticleBoxes";
import CategoryTabs from "../../components/Learn/CategoryTabs/CategoryTabs";

class ArticleContainer extends Component {
  state = {
    isHome: false,
    selectedCategoryId: 0,
  };

  componentDidMount() {
    this.props.onInitArticles();
    this.setState({
      isHome: this.props.isHome,
    });
  }

  selectCategoryHandler = (id) => {
    this.setState({ selectedCategoryId: id });
  };

  render() {
    let articles = (
      <React.Fragment>
        <CategoryTabs
          selectCategoryHandler={this.selectCategoryHandler}
          selectedCategoryId={this.state.selectedCategoryId}
        />
        <ArticleBoxes
          articles={this.props.articles}
          selectedCategoryId={this.state.selectedCategoryId}
          isHome={this.state.isHome}
        />
      </React.Fragment>
    );
    if (this.state.isHome) {
      articles = (
        <ArticleBoxes
          articles={this.props.firstThreeArticles}
          selectedCategoryId={0}
          isHome={this.state.isHome}
        />
      );
    }

    return <div>{articles}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.learn.articles,
    firstThreeArticles: state.learn.firstThreeArticles,
    error: state.learn.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitArticles: () => {
      dispatch(actions.initArticles());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
