import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styles from "./article.module.css";
import stylesArticleBox from "../../components/Learn/ArticleBoxes/ArticleBox/articlebox.module.css";

const NUM_OF_ARTICLES = 9;

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
          category = "Planets";
          classNameLabel = [
            stylesArticleBox.categoryLabel,
            stylesArticleBox.categoryLabel01,
          ];
          break;
        case 2:
          category = "Solar System";
          classNameLabel = [
            stylesArticleBox.categoryLabel,
            stylesArticleBox.categoryLabel02,
          ];
          break;
        case 3:
          category = "Galaxy";
          classNameLabel = [
            stylesArticleBox.categoryLabel,
            stylesArticleBox.categoryLabel03,
          ];
          break;
        default:
          break;
      }

      let pagination = (
        <ul className={styles.pagination}>
          {this.props.articleId > 1 ? (
            <li className={styles.prev}>
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
          ) : (
            <li className={styles.disabled}>PREV</li>
          )}
          <li className={styles.seeAllButton}>
            <NavLink to="./learn">SEE ALL POSTS</NavLink>
          </li>
          {this.props.articleId < NUM_OF_ARTICLES ? (
            <li className={styles.next}>
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
          ) : (
            <li className={styles.disabled}>NEXT</li>
          )}
        </ul>
      );

      article = (
        <React.Fragment>
          <Fade duration={700}>
            <ul>
              <li>
                <h3 className={styles.title}>
                  {this.props.singleArticle.articleTitle}
                </h3>
              </li>
              <div className={styles.articleImg}>
                <img
                  src={require(`../../assets/images/${this.props.singleArticle.articleImg}`)}
                  alt=""
                />
              </div>
              <li className={styles.body}>
                {this.props.singleArticle.articleBody}
              </li>
              <li className={classNameLabel.join(" ")}>{category}</li>
            </ul>
            {pagination}
          </Fade>
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
