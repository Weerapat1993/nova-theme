import { 
  FETCH_GITHUB,
  CREATE_GITHUB,
  UPDATE_GITHUB,
  DELETE_GITHUB,
  CLEAR_GITHUB_DATA,
} from './githubActionTypes'
import { Reducer } from '../../utils'

export const initialState = {
  isFetching: false,
  data: [],
  error: null
}

/**
 * Github Reducer
 * @param {initialState} state 
 * @param {Action} action 
 * @return {initialState}
 */
export const githubReducer = (state = initialState, action) => {
  const reducer = new GithubReducer(state, action)
  switch (action.type) {
    case FETCH_GITHUB.REQUEST:
      return reducer.request()
    case FETCH_GITHUB.SUCCESS:
      return reducer.searchGithubSuccess()
    case FETCH_GITHUB.FAILURE:
      return reducer.failure()
    case CLEAR_GITHUB_DATA:
      return reducer.setState({ data: [] })
    default:
      return state
  }
}

export class GithubReducer extends Reducer {
  searchGithubSuccess() {
    return this.setState({
      isFetching: false,
      data: this.action.data,
      error: null,
    })
  }
}
