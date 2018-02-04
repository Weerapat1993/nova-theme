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

export const createFeedRequest = () => ({ type: CREATE_FEED.REQUEST })
export const createFeedSuccess = (payload) => ({ type: CREATE_FEED.SUCCESS, payload })
export const createFeedFailure = (error) => ({ type: CREATE_FEED.FAILURE, error })
export const createFeed = (data) => (dispatch, getState) => {
  dispatch(createFeedRequest())
  return axios({
    method: 'POST',
    url: API_ENDPOINT_CREATE_FEED,
    headers: {
      'Content-Type': 'application/json',
    },
    data
  })
    .then(res => dispatch(createFeedSuccess(res.data.data)))
    .catch(error => dispatch(createFeedFailure(error)))
}