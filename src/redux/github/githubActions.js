import axios from 'axios'
import { 
  FETCH_GITHUB,
  CREATE_GITHUB,
  UPDATE_GITHUB,
  DELETE_GITHUB,
  CLEAR_GITHUB_DATA
} from './githubActionTypes'
import { API_ENDPOINT_SEARCH_GITHUB } from '../../config/endpoint'

export const fetchGithubRequest = () => ({ type: FETCH_GITHUB.REQUEST }) 
export const fetchGithubSuccess = (data) => ({ type: FETCH_GITHUB.SUCCESS, data }) 
export const fetchGithubFailure = (error) => ({ type: FETCH_GITHUB.FAILURE, error }) 
export const fetchGithub = (keyword) => (dispatch, getState) => {
  dispatch(fetchGithubRequest())
  return axios({
    method: 'GET',
    responseType: 'json',
    url: API_ENDPOINT_SEARCH_GITHUB(keyword),
    headers: {
      'X-Activity': 'Search Github Data',
      // Authorization: configToken.getToken(getState())
    },
  })
    .then(res => dispatch(fetchGithubSuccess(res.data.items)))
    .catch(error => dispatch(fetchGithubFailure(error)))
}

export const clearData = () => ({ type: CLEAR_GITHUB_DATA })
