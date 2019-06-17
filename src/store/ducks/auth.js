import firebase from 'firebase' 
import { Record } from 'immutable' 
import { appName } from '../../config'

const ReducerRecord = Record({
  user: null,
  error: null,
  loading: false
})

export const moduleName = 'auth'
export const SING_UP_REQUEST = `${appName}/${moduleName}/SING_UP_REQUEST`
export const SING_UP_SUCCESS = `${appName}/${moduleName}/SING_UP_SUCCESS`
export const SING_UP_ERROR = `${appName}/${moduleName}/SING_UP_ERROR`

const authReducer = (state = new ReducerRecord(), action) => {
  const {type} = action 
  switch(type) {
    
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