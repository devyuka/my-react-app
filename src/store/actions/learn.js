import * as actionTypes from "../actions/actionTypes";

export const setArticles = (articles) => {
  return {
    type: actionTypes.SET_ARTICLES,
    articles: articles,
  };
};

export const fetchArticlesFailed = (error) => {
  return {
    type: actionTypes.FETCH_ARTICLES_FAILED,
    error: error,
  };
};

//temp data
const articles = [
  {
    articleId: 1,
    articleImg: "article_img_02.jpg",
    articleTitle: "Title01",
    articleBody:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa 1.",
    articleCategory: 2,
  },
  {
    articleId: 2,
    articleImg: "article_img_03.jpg",
    articleTitle: "Title02",
    articleBody:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa 2.",
    articleCategory: 3,
  },
  {
    articleId: 3,
    articleImg: "article_img_03.jpg",
    articleTitle: "Title03",
    articleBody:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massaLorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa 3.",
    articleCategory: 1,
  },
  {
    articleId: 4,
    articleImg: "article_img_01.jpg",
    articleTitle: "Title04",
    articleBody:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa 4.",
    articleCategory: 2,
  },
  {
    articleId: 5,
    articleImg: "article_img_03.jpg",
    articleTitle: "Title05",
    articleBody:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa 5.",
    articleCategory: 3,
  },
  {
    articleId: 6,
    articleImg: "article_img_01.jpg",
    articleTitle: "Title06",
    articleBody:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa 6.",
    articleCategory: 3,
  },
  {
    articleId: 7,
    articleImg: "article_img_01.jpg",
    articleTitle: "Title07",
    articleBody:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa 7.",
    articleCategory: 1,
  },
  {
    articleId: 8,
    articleImg: "article_img_02.jpg",
    articleTitle: "Title08",
    articleBody:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa 8.",
    articleCategory: 2,
  },
  {
    articleId: 9,
    articleImg: "article_img_03.jpg",
    articleTitle: "Title09",
    articleBody:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa 9.",
    articleCategory: 1,
  },
];

export const initArticles = () => {
  return (dispatch) => {
    //     fetch()
    //     //fetch json data
    //       .then((response) => response.json())
    //       .then((json) => {
    //         dispatch(setArticles(json));
    //       })
    //       .catch((error) => {
    //         dispatch(fetchArticlesFailed(error));
    //       });
    //   };

    if (true) {
      dispatch(setArticles(articles));
    } else {
      dispatch(fetchArticlesFailed());
    }
  };
};

// export const selectArticle = (id) => {
//   return {
//     type: actionTypes.SELECT_ARTICLE,
//     id: id,
//   };
// };

export const setSingleArticle = (id, article) => {
  return {
    type: actionTypes.SET_SINGLE_ARTICLE,
    singleArticle: article,
    id: id,
  };
};

export const fetchSingleArticleFailed = (error) => {
  return {
    type: actionTypes.FETCH_SINGLE_ARTICLE_FAILED,
    error: error,
  };
};

export const initSingleArticle = (id) => {
  return (dispatch) => {
    if (true) {
      dispatch(setSingleArticle(id, articles[id - 1]));
    } else {
      dispatch(fetchSingleArticleFailed());
    }
  };
};
