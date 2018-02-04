import { FETCH_FEED, CREATE_FEED } from './feedActionTypes'
import { Feed } from '../../redux/model'
import { Reducer, randomString } from '../../utils'

export const initalState = {
  isFetching: true,
  error: false,
  keys: {},
  byID: [],
}

/**
 * 
 * @param {initalState} state 
 * @param {{ type: string, payload: any, error: Error }} action
 * @return {initalState}
 */
export const feedReducer = (state = initalState, action) => {
  const reducer = new FeedReducer(state, action)
  switch(action.type) {
    case FETCH_FEED.REQUEST:
      return reducer.request()
    case FETCH_FEED.SUCCESS:
      return reducer.fetchFeedSuccess()
    case FETCH_FEED.FAILURE:
      return reducer.failure()
    case CREATE_FEED.REQUEST:
      return reducer.request()
    case CREATE_FEED.SUCCESS:
      return reducer.createFeedSuccess()
    case CREATE_FEED.FAILURE:
      return reducer.failure()
    default:
      return state
  }
}

export class FeedReducer extends Reducer {
  fetchFeedSuccess() {
    return this.setState({
      keys: Feed(this.action.payload).get(),
      byID: Feed(this.action.payload).getByID().reverse(),
      isFetching: false,
      error: false
    })
  }
  
  createFeedSuccess() {
    const key = randomString(50)
    const { keys, byID } = this.state
    const { title, description } = this.action.payload
    const data = [
      {
        id: key,
        title,
        description,
      }
    ]
    return this.setState({
      byID: [
        key,
        ...byID,
      ],
      keys: Feed(keys).insert(data)
    })
  }
}