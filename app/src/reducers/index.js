import { combineReducers } from 'redux';
import authReducer from './authReducer';
import track from './trackReducer'

export default combineReducers({
  auth: authReducer,
  track: track
});