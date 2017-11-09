import { FETCH_FEED } from './feedActionTypes'
import { normalizeKeyById, normalizeData } from '../../utils'
import { Feed } from '../../redux/model'

export const initalState = {
  isFetching: true,
  error: false,
  keys: {}
}

export const feedReducer = (state = initalState, action) => {
  switch(action.type) {
    case FETCH_FEED.REQUEST:
      return reducerFetchFeedRequest(state, action)
    case FETCH_FEED.SUCCESS:
      return reducerFetchFeedSuccess(state, action)
    case FETCH_FEED.FAILURE:
      return reducerFetchFeedFailure(state, action)
    default:
      return state
  }
}

export const reducerFetchFeedRequest = (state, action) => ({
  ...state,
  isFetching: true,
  error: false,
})

export const reducerFetchFeedSuccess = (state, action) => ({
  keys: Feed(action.payload).get(),
  byID: Feed(action.payload).getByID(),
  isFetching: false,
  error: false
})

export const reducerFetchFeedFailure = (state, action) => ({
  ...state,
  isFetching: false,
  error: action.error.message
})