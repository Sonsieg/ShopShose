import {combineReducers} from 'redux';
import StackReducer from './stack';
import AuthReducer from './auth';
const reducers = {
  stack: StackReducer,
  auth: AuthReducer,
};

const combinedReducer = combineReducers(reducers);

export default combinedReducer;
