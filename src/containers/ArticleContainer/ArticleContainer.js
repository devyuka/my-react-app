import React, { Component } from "react";
import ArticleBoxes from "../../components/Learn/ArticleBoxes/ArticleBoxes";
import CategoryTabs from "../../components/Learn/CategoryTabs/CategoryTabs";

class ArticleContainer extends Component {
  //temp data
  articles = [
    {
      articleId: 0,
      articleImg: "article_img_01.jpg",
      articleTitle: "Title01",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: 1,
    },
    {
      articleId: 1,
      articleImg: "article_img_02.jpg",
      articleTitle: "Title02",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: 2,
    },
    {
      articleId: 2,
      articleImg: "article_img_03.jpg",
      articleTitle: "Title03",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: 3,
    },
    {
      articleId: 3,
      articleImg: "article_img_01.jpg",
      articleTitle: "Title03",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: 1,
    },
    {
      articleId: 4,
      articleImg: "article_img_02.jpg",
      articleTitle: "Title04",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: 2,
    },
    {
      articleId: 5,
      articleImg: "article_img_03.jpg",
      articleTitle: "Title05",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: 3,
    },
    {
      articleId: 6,
      articleImg: "article_img_03.jpg",
      articleTitle: "Title06",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: 3,
    },
    {
      articleId: 7,
      articleImg: "article_img_01.jpg",
      articleTitle: "Title07",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: 1,
    },
    {
      articleId: 8,
      articleImg: "article_img_02.jpg",
      articleTitle: "Title08",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: 2,
    },
  ];

  state = {
    articles: [],
    isHome: false,
    firstThreeArticles: [],
  };

  componentDidMount() {
    this.setState({
      articles: this.articles,
      isHome: this.props.isHome,
      firstThreeArticles: [
        this.articles[0],
        this.articles[1],
        this.articles[2],
      ],
      selectedCategoryId: 0,
      selectedArticleId: null,
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
          articles={this.state.articles}
          selectedCategoryId={this.state.selectedCategoryId}
          isHome={this.state.isHome}
        />
      </React.Fragment>
    );
    if (this.state.isHome) {
      articles = (
        <ArticleBoxes
          articles={this.state.firstThreeArticles}
          selectedCategoryId={0}
          isHome={this.state.isHome}
        />
      );
    }

    return <div>{articles}</div>;
  }
}

export default ArticleContainer;
