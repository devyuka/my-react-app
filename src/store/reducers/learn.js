import * as actionTypes from "../actions/actionTypes";

const initialState = {
  articles: [],
  singleArticle: null,
  firstThreeArticles: [],
  articleId: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
        firstThreeArticles: [
          action.articles[0],
          action.articles[1],
          action.articles[2],
        ],
      };

    case actionTypes.FETCH_ARTICLES_FAILED:
      return {
        ...state,
        error: true,
      };

    case actionTypes.SET_SINGLE_ARTICLE:
      return {
        ...state,
        singleArticle: action.singleArticle,
        articleId: action.id,
      };

    case actionTypes.FETCH_SINGLE_ARTICLE_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
