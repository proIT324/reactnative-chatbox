import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import CommentReducer from './commentReducer';
import TempReducer from './tempReducer';

export default combineReducers({
  auth: AuthReducer,
  comments: CommentReducer,
  temp: TempReducer,
});
