import { combineReducers } from 'redux';
import authReducer from './auth/reduсers';


export default combineReducers({
  auth : authReducer,
}) 



