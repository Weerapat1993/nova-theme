import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { AUTH, AUTH_LOGOUT, AUTH_CLEAR_ERROR } from './authActionTypes'
import { API_ENDPOINT_AUTH_LOGIN, API_ENDPOINT_GET_USER_WITH_TOKEN } from '../../config/endpoint'
// import { setAuthorizationToken } from '../../utils'

export const authRequest = () => ({
  type: AUTH.REQUEST
})

export const authSuccess = (payload) => ({
  type: AUTH.SUCCESS,
  payload
})

export const authFailure = (error) => ({
  type: AUTH.FAILURE,
  error: error.message
})


export const auth = (body) => (dispatch, getState) => {
  dispatch(authRequest())
  return fetch(API_ENDPOINT_AUTH_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(res => {
      const token = res.token
      dispatch(setJWTToken(token))
      return dispatch(authSuccess(res))
    })
    .catch(error => dispatch(authFailure(error)))    
}

export const getUserWithToken = (token) => (dispatch, getState) => {
  dispatch(authRequest())
  return axios.get(`${API_ENDPOINT_GET_USER_WITH_TOKEN}?token=${token}`)
    .then(res => {
      const data = {
        token,
        user: res.data.data
      }
      return dispatch(authSuccess(data))
    })
    .catch(error => dispatch(authFailure(error)))
}

export const authLogout = () => ({
  type: AUTH_LOGOUT
})

export const setJWTToken = (token) => (dispatch, getState) => {
  return AsyncStorage.setItem('jwtToken', token)
    .then(() => null)
    .catch(error => console.error(error))
}

export const getJWTToken = () => (dispatch, getState) => {
  return AsyncStorage.getItem('jwtToken')
    .then(value => {
      if(value) {
        return dispatch(getUserWithToken(value))
      }
    })
    .catch(error => console.error(error))
}

export const removeJWTToken = () => (dispatch, getState) => {
  return AsyncStorage.removeItem('jwtToken')
    .then(() => dispatch(authLogout()))
}

export const authClearError = () => ({
  type: AUTH_CLEAR_ERROR
})
