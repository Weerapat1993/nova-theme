import { FETCH_FEED } from './feedActionTypes'
import { matchKeyObject } from '../../utils'

export const initalState = {}

export const feedReducer = (state = initalState, action) => {
  switch(action.type) {
    case FETCH_FEED.REQUEST:
      return reducerFetchFeedRequest(state, action)
    case FETCH_FEED.SUCCESS:
      return reducerFetchFeedSuccess(state, action)
    // case FETCH_FEED.FAILURE:
    //   return reducerFetchFeedRequest(state, action)
    default:
      return state
  }
}

export const reducerFetchFeedRequest = (state, action) => (
  matchKeyObject(state, action.key, {
    isFetching: true,
    error: false
  })
)

export const reducerFetchFeedSuccess = (state, action) => (
  matchKeyObject(state, action.key, {
    data: [{ feed_id: action.key }],
    isFetching: false,
    error: false
  })
)