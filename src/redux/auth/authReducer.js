import { AUTH } from './authActionTypes'

export const initalState = {
  users: null,
  token: null,
  isFetching: false,
  error: false
}

export const authReducer = (state = initalState, action) => {
  switch(action.type) {
    case AUTH.REQUEST:
      return reducerAuthRequest(state, action)
    case AUTH.SUCCESS:
      return reducerAuthSuccess(state, action)
    case AUTH.FAILURE:
      return reducerAuthFailure(state, action)
    default: 
      return state
  }
}

export const reducerAuthRequest = (state, action) => ({
  ...state,
  isFetching: true,
  error: false,
})

export const reducerAuthSuccess = (state, action) => ({
  users: action.payload,
  token: action.token,
  isFetching: false,
  error: false,
})

export const reducerAuthFailure = (state, action) => ({
  ...state,
  isFetching: true,
  error: action.error,
})