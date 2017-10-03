import { FETCH_FEED } from '../feedActionTypes'
import { 
  feedReducer,
  // reducerFetchFeedRequest,
  // reducerFetchFeedSuccess,
} from '../feedReducer'
import { TestReducer } from '../../../utils'

const initalState = {}

const state = new TestReducer(initalState)
const stateHasKeyObject = {
  key_request: {
    isFetching: true,
    error: false
  },
  key_success: {
    data: [{ feed_id: 'key_success' }],
    isFetching: false,
    error: false
  }
}

describe('feedReducer', () => {
  it('feedReducer initalState', () => {
    const recieved = feedReducer(undefined, { type: 'ETC' })
    const expected = {}
    expect(recieved).toEqual(expected)
  })
  it('feedReducer ETC', () => {
    const recieved = feedReducer(initalState, { type: 'ETC' })
    const expected = {}
    expect(recieved).toEqual(expected)
  })
  it('feedReducer reducerFetchFeedRequest is have not data', () => {
    const action = {
      type: FETCH_FEED.REQUEST,
      key: 'key_request',
    }
    state.setData('key_request', stateHasKeyObject.key_request)
    const recieved = feedReducer(state.getOldState(), action)
    const expected = state.getState()
    // const recieved = feedReducer(initalState, action)
    // const expected = reducerFetchFeedRequest(initalState, action)
    expect(recieved).toEqual(expected)
  })

  it('feedReducer reducerFetchFeedRequest is have key data', () => {
    const action = {
      type: FETCH_FEED.REQUEST,
      key: 'key_request',
    }
    state.setData('key_request', stateHasKeyObject.key_request)
    const recieved = feedReducer(state.getOldState(), action)
    const expected = state.getState()
    // const recieved = feedReducer(initalState, action)
    // const expected = reducerFetchFeedRequest(initalState, action)
    expect(recieved).toEqual(expected)
  })

  it('feedReducer reducerFetchFeedSuccess is have not data', () => {
    const action = {
      type: FETCH_FEED.SUCCESS,
      key: 'key_success',
    }
    state.setData('key_success', stateHasKeyObject.key_success)
    const recieved = feedReducer(state.getOldState(), action)
    const expected = state.getState()
    // const recieved = feedReducer(initalState, action)
    // const expected = reducerFetchFeedSuccess(initalState, action)
    expect(recieved).toEqual(expected)
  })

  it('feedReducer reducerFetchFeedSuccess is have key data', () => {
    const action = {
      type: FETCH_FEED.SUCCESS,
      key: 'key_success',
    }
    state.setData('key_success', stateHasKeyObject.key_success)
    const recieved = feedReducer(state.getOldState(), action)
    const expected = state.getState()
    // const recieved = feedReducer(initalState, action)
    // const expected = reducerFetchFeedSuccess(initalState, action)
    console.log(state.getState())
    expect(recieved).toEqual(expected)
  })
})