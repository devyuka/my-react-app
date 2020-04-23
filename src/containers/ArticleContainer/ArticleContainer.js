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
          onSelectArticle={this.props.onSelectArticle}
          isHome={this.state.isHome}
        />
      </React.Fragment>
    );
    if (this.state.isHome) {
      articles = (
        <ArticleBoxes
          articles={this.props.firstThreeArticles}
          selectedCategoryId={0}
          onSelectArticle={this.props.onSelectArticle}
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
    selectedArticleId: state.learn.selectedArticleId,
    error: state.learn.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitArticles: () => {
      dispatch(actions.initArticles());
    },
    onSelectArticle: (id) => {
      dispatch(actions.selectArticle(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
