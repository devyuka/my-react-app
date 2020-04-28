import * as actionTypes from "../actions/actionTypes";
const initialState = {
  chartData: {},
  chartsRefs: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARTS:
      return {
        ...state,
        chartData: action.chartData,
        loading: false,
      };

    case actionTypes.FETCH_CHARTS_FAILED:
      console.log(action.error);
      return {
        ...state,
        loading: false,
      };

    case actionTypes.SET_CHARTS_REFS:
      return {
        ...state,
        chartsRefs: { ...state.chartsRefs, [action.id]: action.ref },
      };

    default:
      return state;
  }
};

export default reducer;
