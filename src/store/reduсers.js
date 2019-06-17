import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth/reduсers';
import history from './../history'

export default combineReducers({
  auth : authReducer,
  router: connectRouter(history),
  form: formReducer
}) 



