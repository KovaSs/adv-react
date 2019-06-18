import firebase from 'firebase/app' 
import 'firebase/auth' 
import { Record } from 'immutable' 
import { appName } from '../../config'

const ReducerRecord = Record({
  user: null,
  error: null,
  loading: false
})

export const moduleName = 'auth'
export const prefix = `${appName}/${moduleName}`
export const SING_UP_REQUEST = `${prefix}/SING_UP_REQUEST`
export const SING_UP_SUCCESS = `${prefix}/SING_UP_SUCCESS`
export const SING_UP_ERROR = `${prefix}/SING_UP_ERROR`

const authReducer = (state = new ReducerRecord(), action) => {
  const {type, payload, error} = action 
  switch(type) {
    case SING_UP_REQUEST:
      return state
        .set('loading', true)

    case SING_UP_SUCCESS:
      return state
        .set('loading', false)
        .set('user', payload.user)
        .set('error', null)

      case SING_UP_ERROR:
          return state
            .set('loading', false)
            .set('error', error)

    default:
      return state
  }
}

export const singUp = (email, password) => {
  return dispatch => {
    dispatch({
      type: SING_UP_REQUEST
    })

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( user => dispatch({
        type: SING_UP_SUCCESS,
        payload: {user}
      }))
      .catch(error => dispatch({
        type: SING_UP_ERROR,
        error
      }))
  }
}

export default authReducer