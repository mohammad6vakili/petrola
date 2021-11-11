import {
    SIDE
} from "./Action";

const initialState = {
    side:null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDE:
      return { ...state, side: action.payload };
    default:
      return state;
  }
};
export default Reducer;
