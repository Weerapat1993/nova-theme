
const IP = 'localhost:8000'
export const API_VERSION = '/api/v1'
export const API_ENDPOINT = (path) => `http://${IP}${API_VERSION}${path}`

// Authentiaction
export const API_ENDPOINT_AUTH_LOGIN = API_ENDPOINT('/auth/login')
export const API_ENDPOINT_GET_USER_WITH_TOKEN = API_ENDPOINT('/user')

// Users
export const API_ENDPOINT_GET_USERS = API_ENDPOINT('/users')
export const API_ENDPOINT_UPDATE_USERS = API_ENDPOINT('/users/update')

// Role
export const API_ENDPOINT_GET_ROLES = API_ENDPOINT('/roles')

// Feeds
export const API_ENDPOINT_GET_FEED = API_ENDPOINT('/feeds')
export const API_ENDPOINT_CREATE_FEED = API_ENDPOINT('/feeds/store')

