import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED
  } from "./constant";
  
  const initState = {
    error: null,
    homePageData: null,
  };
  
  export default (state = initState, action) => {
    switch (action.type) {
      // Get All Post Api
      case GET_DATA:
        state = { ...state };
        break;
      case GET_DATA_SUCCESS:
        state = {
          ...state,
          homePageData: action.payload,
        };
        break;
      case GET_DATA_FAILED:
        state = { ...state, error: action.payload };
        break;
      default:
        break;
    }
    return state;
  };
  