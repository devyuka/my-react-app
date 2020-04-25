import * as actionTypes from "../actions/actionTypes";
import { format } from "date-fns";

export const setTodayPhoto = (photo) => {
  return {
    type: actionTypes.SET_TODAY_PHOTO,
    photo: photo,
  };
};

export const fetchTodayPhotoFailed = (error) => {
  return {
    type: actionTypes.FETCH_TODAY_PHOTO_FAILED,
    error: error,
  };
};

export const initTodayPhoto = () => {
  return (dispatch) => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=vYWPofHMfjh9EKz9zNLLiVRoGvYLe6iScZVUy1ud"
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(setTodayPhoto(json));
      })
      .catch((error) => {
        dispatch(fetchTodayPhotoFailed(error));
      });
  };
};

export const fetchPhotoFailed = (error) => {
  return {
    type: actionTypes.FETCH_PHOTO_FAILED,
    error: error,
  };
};

export const setPhoto = (date, photo) => {
  return {
    type: actionTypes.SET_PHOTO,
    date: date,
    photo: photo,
  };
};

export const loading = () => {
  return {
    type: actionTypes.LOADING,
  };
};

export const changeDate = (dateFromInput) => {
  const formattedDate = format(new Date(dateFromInput), "yyyy-MM-dd");
  return (dispatch) => {
    dispatch(loading());

    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=vYWPofHMfjh9EKz9zNLLiVRoGvYLe6iScZVUy1ud&date=" +
        formattedDate
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(setPhoto(dateFromInput, json));
      })
      .catch((error) => {
        dispatch(fetchPhotoFailed(error));
      });
  };
};

export const setImageAndVideo = (data) => {
  return {
    type: actionTypes.SET_IMAGE_AND_VIDEO,
    data: data,
  };
};

export const fetchImageAndVideo = (data) => {
  const items = data.collection.items;
  const results = [];
  var fetches = [];

  return (dispatch) => {
    for (let i = 0; i < items.length; i++) {
      const nasa_id = items[i].data[0]["nasa_id"];
      const date_created = items[i].data[0]["date_created"];
      const description = items[i].data[0]["description"];
      const asset_url = "https://images-api.nasa.gov/asset/" + nasa_id;
      fetches.push(
        fetch(asset_url)
          .then((response) => response.json())
          .then((json) => {
            results.push({
              imageData: json,
              dateCreated: date_created,
              description: description,
            });
          })
          .catch((error) => dispatch(fetchImageAndVideoFailed(error)))
      );
    }

    Promise.all(fetches).then(function () {
      dispatch(setImageAndVideo(results));
    });
  };
};

export const fetchImageAndVideoFailed = (error) => {
  return {
    type: actionTypes.FETCH_IMAGE_AND_VIDEO_FAILED,
    error: error,
  };
};

export const initImageAndVideo = (term) => {
  return (dispatch) => {
    dispatch(loading());

    fetch(`https://images-api.nasa.gov/search?q=${term}&media_type=image`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchImageAndVideo(json)))
      .catch((error) => dispatch(fetchImageAndVideoFailed(error)));
  };
};

export const showImageDetail = (data) => {
  return {
    type: actionTypes.SHOW_IMAGE_DETAIL,
    data: data,
  };
};
