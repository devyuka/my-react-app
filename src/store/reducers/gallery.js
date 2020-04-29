import * as actionTypes from "../actions/actionTypes";

const initialState = {
  date: "",
  photo: "",
  imgData: [],
  singleImgData: [],
  loading: true,
  error: false,
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
        error: true,
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
        error: true,
      };

    case actionTypes.SET_IMAGE_AND_VIDEO:
      const imageData = [];
      const data = action.data;
      const imageReg = /[.](gif|jpg|jpeg|tiff|png)$/i;

      for (let index in data) {
        if (imageReg.test(data[index].imageData.collection.items[2].href)) {
          const item = {
            imgURL: data[index].imageData.collection.items[2],
            dateCreated: data[index].dateCreated,
            description: data[index].description,
          };
          imageData.push(item);
        }
      }

      return {
        ...state,
        imgData: imageData,
        loading: false,
      };

    case actionTypes.FETCH_IMAGE_AND_VIDEO_FAILED:
      console.log(action.error);
      return {
        ...state,
        loading: false,
        error: true,
      };

    case actionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.SHOW_IMAGE_DETAIL:
      return {
        ...state,
        singleImgData: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
