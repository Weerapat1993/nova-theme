import _ from 'lodash'

/**
 * Match Key Object
 * ```js
 * const newState = matchKeyObject(state, 'key:123456', data)
 * ```
 * @param {object} state 
 * @param {string} key 
 * @param {object} data 
 * @return {object}
 */
export const matchKeyObject = (state, key, data) => ({
  ...state,
  [key]: {
    ...state[key],
    ...data,
  },
})

/**
 * Has Object
 * ```js
 * const error = hasObject(error, 'response.data.errors')
 * ```
 * @param {object} data 
 * @param {string} field 
 * @return {boolean}
 */
export const hasObject = (data, field) => _.has(data, field)

export class TestReducer {
  constructor(initalState) {
    this.oldState = initalState
    this.state = initalState
  }

  setData(key, data) {
    this.oldState = this.state
    this.state = {
      ...this.state,
      [key]: {
        ...this.state[key],
        ...data,
      }
    }
    return this.getState()
  }

  getState() {
    return this.state
  }

  getOldState() {
    return this.oldState
  }
}
