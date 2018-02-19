import { combineReducers } from 'redux';
import { appReducer } from '../reducers/';

const reducers = combineReducers({
  app: appReducer,
});

export default reducers;