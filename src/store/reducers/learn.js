import * as actionTypes from "../actions/actionTypes";

const initialState = {
  articles: [],
  firstThreeArticles: [],
  selectedArticleId: null,
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

    case actionTypes.SELECT_ARTICLE:
      return {
        ...state,
        selectedArticleId: action.id,
      };
    default:
      return state;
  }
};

export default reducer;
