import { combineReducers } from 'redux';
import userReducer from './userReducer';
import newStoryReducer from './newStoryReducer';

const rootReducer = combineReducers({
  userData: userReducer,
  newStoryData: newStoryReducer
});

export default rootReducer;
