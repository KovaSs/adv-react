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
export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST`
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`
export const SIGN_UP_ERROR = `${prefix}/SIGN_UP_ERROR`
export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${prefix}/SIGN_IN_ERROR`

const authReducer = (state = new ReducerRecord(), action) => {
  const {type, payload, error} = action 
  switch(type) {
    
    case SIGN_IN_SUCCESS:
      return state
        .set('user', payload.user)

    case SIGN_UP_REQUEST:
      return state
        .set('loading', true)
    case SIGN_UP_SUCCESS:
      return state
        .set('loading', false)
        .set('user', payload.user)
        .set('error', null)
      case SIGN_UP_ERROR:
          return state
            .set('loading', false)
            .set('error', error)

    default:
      return state
  }
}

export const signIn = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: { user: {[email]: password} }
    })
  }
}

export const signUp = (email, password) => {
  return dispatch => {
    dispatch({
      type: SIGN_UP_REQUEST
    })

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( user => dispatch({
        type: SIGN_UP_SUCCESS,
        payload: {user}
      }))
      .catch(error => dispatch({
        type: SIGN_UP_ERROR,
        error
      }))
  }
}

firebase.auth().onAuthStateChanged(user => {
  const store = require('../index').default
  store.dispatch({
      type: SIGN_IN_SUCCESS,
      payload: {user}
  })
})

export default authReducer