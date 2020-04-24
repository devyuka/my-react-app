import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { NavLink } from "react-router-dom";
import styles from "./article.module.css";
import stylesArticleBox from "../../components/Learn/ArticleBoxes/ArticleBox/articlebox.module.css";

class Article extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.onSingleArticle(
      parseInt(this.props.location.search.replace("?", ""))
    );
  }

  prevNextHandler = (id) => {
    this.props.onSingleArticle(id);
  };

  render() {
    let category = null;
    let classNameLabel = [stylesArticleBox.categoryLabel];

    let article = null;
    if (this.props.singleArticle !== null) {
      switch (this.props.singleArticle.articleCategory) {
        case 1:
          category = "CAT01";
          classNameLabel = [
            stylesArticleBox.categoryLabel,
            stylesArticleBox.categoryLabel01,
          ];
          break;
        case 2:
          category = "CAT02";
          classNameLabel = [
            stylesArticleBox.categoryLabel,
            stylesArticleBox.categoryLabel02,
          ];
          break;
        case 3:
          category = "CAT03";
          classNameLabel = [
            stylesArticleBox.categoryLabel,
            stylesArticleBox.categoryLabel03,
          ];
          break;
        default:
          break;
      }

      let pagination = (
        <ul>
          {this.props.articleId > 1 ? (
            <li>
              <NavLink
                to={{
                  pathname: "/article",
                  search: `?${this.props.articleId - 1}`,
                  state: {
                    id: this.props.articleId,
                  },
                }}
                onClick={() => {
                  this.prevNextHandler(this.props.articleId - 1);
                }}
              >
                PREV
              </NavLink>
            </li>
          ) : null}
          {this.props.articleId < 8 ? (
            <li>
              <NavLink
                to={{
                  pathname: "/article",
                  search: `?${this.props.articleId + 1}`,
                  state: {
                    id: this.props.articleId,
                  },
                }}
                onClick={() => {
                  this.prevNextHandler(this.props.articleId + 1);
                }}
              >
                NEXT
              </NavLink>
            </li>
          ) : null}
        </ul>
      );

      article = (
        <React.Fragment>
          <ul>
            <li>
              <h3 className={styles.title}>
                {this.props.singleArticle.articleTitle}
              </h3>
            </li>
            <div className={styles.articleImg}>
              <img
                src={require(`../../assets/images/${this.props.singleArticle.articleImg}`)}
              />
            </div>
            <li className={styles.body}>
              {this.props.singleArticle.articleBody}
            </li>
            <li className={classNameLabel.join(" ")}>{category}</li>
          </ul>
          {pagination}
        </React.Fragment>
      );
    }

    return <div className={styles.article}>{article}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    singleArticle: state.learn.singleArticle,
    articleId: state.learn.articleId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSingleArticle: (id) => {
      dispatch(actions.initSingleArticle(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
