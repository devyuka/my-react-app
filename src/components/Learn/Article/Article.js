import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { NavLink } from "react-router-dom";
import styles from "./article.module.css";
import stylesArticleBox from "../ArticleBoxes/ArticleBox/articlebox.module.css";

class Article extends Component {
  state = {
    pageId: "",
    pagenationClicked: false,
  };

  componentDidMount() {
    console.log("componentDidMount called");
    this.init();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate is called");
    console.log(prevState);
    console.log(
      "this.state.pageId:" +
        this.state.pageId +
        " prevState.pageId" +
        prevState.pageId
    );
    if (this.state.pageId !== prevState.pageId) {
      console.log("page id changed");
    }
    this.init();
  }

  init() {
    window.scrollTo(0, 0);
    window.addEventListener("popstate", this.popstateHandler);

    let id = null;

    if (!this.state.pagenationClicked) {
      // form Home or Learn page
      //id = this.props.location.state.id;
      id = parseInt(this.props.location.search.replace("?", ""));
    } else {
      // page refreshed
      id = this.props.articleId;
    }

    // if a pagination button is clicked, onSingleArticle() is called within prev()/next()
    if (!this.state.pagenationClicked) this.props.onSingleArticle(id);

    this.props.history.listen((location, action) => {
      this.setState({ pageId: parseInt(location.search.replace("?", "")) });
    });
  }

  popstateHandler = () => {
    console.log("popstateHandler is called");
    console.log(this.state.pageId);
    this.props.onSingleArticle(this.state.pageId);
    // this.props.history.listen((location, action) => {
    //   console.log("is called" + location);
    //   this.setState({ pageId: parseInt(location.search.replace("?", "")) });
    // });
  };

  prevNextHandler = (id) => {
    this.setState({ pagenationClicked: true });
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
                src={require(`../../../assets/images/${this.props.singleArticle.articleImg}`)}
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
