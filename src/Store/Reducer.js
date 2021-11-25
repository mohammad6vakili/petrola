import {
    AD_DATA,
    PROFILE,
    CATEGORY
} from "./Action";

const initialState = {
    adData:null,
    profile:null,
    category:null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case AD_DATA:
      return {...state, adData: action.payload};
    case PROFILE:
      return {...state , profile: action.payload};
    case CATEGORY:
      return {...state , category: action.payload};
    default:
      return state;
  }
};
export default Reducer;
