import axios from 'axios'
import { API_ENDPOINT_GET_FEED, API_ENDPOINT_CREATE_FEED } from '../../config/endpoint'
import { FETCH_FEED, CREATE_FEED } from './feedActionTypes'

export const fetchFeedRequest = () => ({ type: FETCH_FEED.REQUEST })
export const fetchFeedSuccess = (payload) => ({ type: FETCH_FEED.SUCCESS, payload })
export const fetchFeedFailure = (error) => ({ type: FETCH_FEED.FAILURE, error })
export const fetchFeed = () => (dispatch, getState) => {
  dispatch(fetchFeedRequest())
  return axios({
    method: 'GET',
    url: API_ENDPOINT_GET_FEED,
  })
    .then(res => dispatch(fetchFeedSuccess(res.data.data)))
    .catch(error => dispatch(fetchFeedFailure(error)))
}

export const createFeedRequest = (key) => ({ type: CREATE_FEED.REQUEST, key })
export const createFeedSuccess = (key, payload) => ({ type: CREATE_FEED.SUCCESS, key, payload })
export const createFeedFailure = (key, error) => ({ type: CREATE_FEED.FAILURE, key, error })
export const createFeed = () => (dispatch, getState) => {
  dispatch(createFeedRequest())
  return axios({
    method: 'GET',
    url: API_ENDPOINT_CREATE_FEED,
  })
    .then(res => dispatch(createFeedSuccess(res.data.data)))
    .catch(error => dispatch(createFeedFailure(error)))
}