import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import authReducer, { moduleName as authModule} from './ducks/auth';
import history from '../history'

export default combineReducers({
  [authModule] : authReducer,
  router: connectRouter(history),
  form: formReducer
})