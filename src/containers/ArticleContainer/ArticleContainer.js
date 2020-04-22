import React, { Component } from "react";
import ArticleBoxes from "../../components/Learn/ArticleBoxes/ArticleBoxes";

class ArticleContainer extends Component {
  //temp data
  articles = [
    {
      articleId: 0,
      articleImg: "article_img_01.jpg",
      articleTitle: "Title01",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: "Cat01",
    },
    {
      articleId: 1,
      articleImg: "article_img_02.jpg",
      articleTitle: "Title02",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: "Cat02",
    },
    {
      articleId: 2,
      articleImg: "article_img_03.jpg",
      articleTitle: "Title03",
      articleBody:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.",
      articleCategory: "Cat03",
    },
  ];

  state = {
    articles: [],
  };

  componentDidMount() {
    this.setState({ articles: this.articles });
  }

  render() {
    return (
      <div>
        <ArticleBoxes articles={this.state.articles} />
      </div>
    );
  }
}

export default ArticleContainer;
