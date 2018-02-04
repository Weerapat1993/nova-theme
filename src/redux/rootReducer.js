import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { authReducer } from './auth'
import { userReducer } from './user'
import { feedReducer } from './feed'
import { githubReducer } from './github'
 
export default combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  feed: feedReducer,
  github: githubReducer,
})