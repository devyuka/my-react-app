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
