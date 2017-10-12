import { FETCH_MOON_DATA, MOON_DATA_RETRIEVED } from "../actions/moon";

const initialState = {
  fetchingData: false,
  currentMoonData: { cycle: "" },
  receivedAt: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOON_DATA:
      return {
        ...state,
        fetchingData: true,
        moonData: action.moonData
      };

    case MOON_DATA_RETRIEVED:
      return {
        ...state,
        fetchingData: false,
        currentMoonData: action.moonData,
        receivedAt: Date.now()
      };
    default:
      return state;
  }
};
