import {
    AD_DATA,
    PROFILE,
    CATEGORY,
    FILTER,
    CHECK_FIL,
    IS_FILTER
  } from "./Action";

const initialState = {
    adData:null,
    profile:null,
    category:null,
    filter:null,
    checkFil:null,
    isFilter:false
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case AD_DATA:
      return {...state, adData: action.payload};
    case PROFILE:
      return {...state , profile: action.payload};
    case CATEGORY:
      return {...state , category: action.payload};
    case FILTER:
      return {...state , filter: action.payload};
    case CHECK_FIL:
      return {...state , checkFil: action.payload};
    case IS_FILTER:
      return {...state , isFilter: action.payload};
    default:
      return state;
  }
};
export default Reducer;
