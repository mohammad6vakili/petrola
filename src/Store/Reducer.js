import {
    AD_DATA,
    PROFILE,
    CATEGORY,
    FILTER,
    CHECK_FIL,
    IS_FILTER,
    COMPANY_INFO,
    SELECT_FOR_CHAT,
    MY_AD,
    EDIT_ID
  } from "./Action";

const initialState = {
    adData:null,
    profile:null,
    category:null,
    filter:null,
    checkFil:null,
    isFilter:false,
    companyInfo:null,
    selectForChat:null,
    myAd:false,
    editId:null
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
    case COMPANY_INFO:
      return {...state , companyInfo: action.payload};
    case SELECT_FOR_CHAT:
      return {...state , selectForChat: action.payload};
    case MY_AD:
      return {...state , myAd: action.payload};
    case EDIT_ID:
      return {...state , editId: action.payload};
    default:
      return state;
  }
};
export default Reducer;
