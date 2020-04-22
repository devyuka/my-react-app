import * as actionTypes from "../actions/actionTypes";

const initialState = {
  date: "",
  photo: "",
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODAY_PHOTO:
      return {
        ...state,
        photo: action.photo,
        loading: false,
      };

    case actionTypes.FETCH_TODAY_PHOTO_FAILED:
      console.log(action.error);
      return {
        ...state,
        loading: false,
      };

    case actionTypes.SET_PHOTO:
      return {
        ...state,
        date: action.date,
        photo: action.photo,
        loading: false,
      };

    case actionTypes.FETCH_PHOTO_FAILED:
      console.log(action.error);
      return {
        ...state,
        loading: false,
      };

    case actionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default reducer;
