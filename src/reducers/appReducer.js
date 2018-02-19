import * as appTypes from '../types/appTypes';

const INITIAL_STATE = {
    appData:''
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.ACTION_FIRST:
      return {
        ...state,
        appData: action.payload,
      };
    case appTypes.ACTION_SECOND:
      return {
        ...state,
        appData: action.payload,
      };  
    default: return state;
  }
};