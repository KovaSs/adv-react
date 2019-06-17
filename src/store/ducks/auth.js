import firebase from 'firebase'
import { appName } from '../../config'

export const moduleName = 'auth'
export const SING_UP_REQUEST = `${appName}/${moduleName}/SING_UP_REQUEST`
export const SING_UP_SUCCESS = `${appName}/${moduleName}/SING_UP_SUCCESS`
export const SING_UP_ERROR = `${appName}/${moduleName}/SING_UP_ERROR`

const defaultState = {
  page: null,
}

const authReducer = (state = defaultState, action) => {
  const {type} = action 
  switch (type) {

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