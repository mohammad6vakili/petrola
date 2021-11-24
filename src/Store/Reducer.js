import {
    SIDE,
    AD_DATA,
    PROFILE
} from "./Action";

const initialState = {
    side:null,
    adData:null,
    profile:null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDE:
      return { ...state, side: action.payload };
    case AD_DATA:
      return {...state, adData: action.payload};
    case PROFILE:
      return {...state , profile: action.payload};
    default:
      return state;
  }
};
export default Reducer;
