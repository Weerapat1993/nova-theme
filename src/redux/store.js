import { createStore, applyMiddleware, compose } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './rootReducer'

const middlewares = [ thunk ]
if(process.env.NODE_ENV !== 'production' && process.env.NODE_ENV === 'development') middlewares.push(createLogger)

const storeEnhancer = [
	applyMiddleware(...middlewares)
]

const finalCreateStore = compose(...storeEnhancer)(createStore)

// configureMockStore with unit test
export const mockStore = configureMockStore(middlewares)

const configureStore = (initialState) => {
  return finalCreateStore(rootReducer, initialState)
}

// configureStore
export default configureStore

