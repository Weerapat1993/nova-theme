import { FETCH_FEED } from '../feedActionTypes'
import {
  initalState,
  feedReducer,
  FeedReducer,
} from '../feedReducer'

describe('feedReducer', () => {
  it('feedReducer initalState', () => {
    const recieved = feedReducer(undefined, { type: 'ETC' })
    const expected = initalState
    expect(recieved).toEqual(expected)
  })
  it('feedReducer ETC', () => {
    const recieved = feedReducer(initalState, { type: 'ETC' })
    const expected = initalState
    expect(recieved).toEqual(expected)
  })
  it('feedReducer reducerFetchFeedRequest', () => {
    const action = { type: FETCH_FEED.REQUEST }
    const reducer = new FeedReducer(initalState, action)
    const recieved = feedReducer(initalState, action)
    const expected = reducer.request()
    expect(recieved).toEqual(expected)
  })
  it('feedReducer reducerFetchFeedSuccess', () => {
    
    const arrayData = [
      {
        id: 'feed_id_1',
        title: 'Title',
        money: 50
      },
      {
        id: 'feed_id_2',
        title: 'Title 2',
        money: 30
      },
      {
        id: 'feed_id_3',
        title: 'Title 3',
        money: 100
      },
    ]
    const action = {
      type: FETCH_FEED.SUCCESS,
      payload: arrayData
    }

    const reducer = new FeedReducer(initalState, action)
    const recieved = feedReducer(initalState, action)
    const expected = reducer.fetchFeedSuccess()
    expect(recieved).toEqual(expected)
  })
})