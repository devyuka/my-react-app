import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios/axios-universe";

export const setCharts = (data) => {
  return {
    type: actionTypes.SET_CHARTS,
    chartData: data,
  };
};

export const fetchChartsFailed = (error) => {
  return {
    type: actionTypes.FETCH_CHARTS_FAILED,
    error: error,
  };
};

export const initCharts = () => {
  return (dispatch) => {
    axios
      .get("/polls.json")
      .then((response) => {
        let responseData = {};
        for (let key in response.data) {
          responseData = response.data[key];
        }
        let data = {};
        for (let i = 0; i < responseData.length; i++) {
          data[i] = responseData[i];
        }
        dispatch(setCharts(data));
      })
      .catch((error) => {
        dispatch(fetchChartsFailed(error));
      });
  };
};

export const vote = (data) => {
  return (dispatch) => {
    axios
      .post("/polls.json", data)
      .then((response) => {
        dispatch(initCharts());
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchChartsFailed(error));
      });
  };
};

export const setChartsRefs = (id, ref) => {
  return {
    type: actionTypes.SET_CHARTS_REFS,
    id: id,
    ref: ref,
  };
};
