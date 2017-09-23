import { AUTH } from './authActionTypes'

export const authRequest = () => ({
  type: AUTH.REQUEST
})

export const authSuccess = (payload) => ({
  type: AUTH.SUCCESS,
  payload,
})

export const authFailure = (error) => ({
  type: AUTH.FAILURE,
  error: error.message,
})

export const auth = (body) => (dispatch, getState) => {
  const url = 'http://localhost:8000/api/login'
  dispatch(authRequest())
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: body.email,
      password: body.password,
    })
  })
    .then(res => res.json())
    .then(res => dispatch(authSuccess(res.data)))
    .catch(error => dispatch(authFailure(error)))
}