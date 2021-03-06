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

/**
 * Test Reducer Class Method
 * ```js
 * const state = new TestReducer(initalState)
 * ```
 */
export class TestReducer {
  /**
   * set InitalState in Reducer
   * ```js
   * const state = new TestReducer(initalState)
   * ```
   * @param {object} initalState 
   */
  constructor(initalState) {
    this.oldState = initalState
    this.state = initalState
  }

  /**
   * Set New State in Reducer
   * @param {string} key 
   * @param {object} data
   * @return {object}
   */
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

  /**
   * Get state after change data
   * @return {object}
   */
  getState() {
    return this.state
  }

  /**
   * Get state before change data
   * @return {object}
   */
  getOldState() {
    return this.oldState
  }
}

/**
 * Normalize Data Array to Object Key
 * @param {string} primaryKey 
 * @param {array} data 
 */
export const normalizeData = (primaryKey, data) => {
  const newData = {}
  data.forEach((item) => {
    newData[item[primaryKey]] = item
  })
  return newData
}

/**
 * Normalize Array Key By ID
 * @param {string} primaryKey 
 * @param {array} data 
 */
export const normalizeKeyById = (primaryKey, data) => {
  const byID = []
  data.forEach((item) => {
    byID.push(item[primaryKey])
  })
  return byID
}

/**
 * 
 * @param {{}} data 
 */
export const where = (data, field, condition, expect) => {
  const filter = (key) => {
    switch(condition) {
      case '>':
        return data[key][field] > expect
      case '>=':
        return data[key][field] >= expect
      case '<':
        return data[key][field] < expect
      case '<=':
        return data[key][field] <= expect
      case '!=':
      case '!==':
        return data[key][field] !== expect
      case '=':
      case '==':
      case '===':
      default:
        return data[key][field] === expect
    }
  }
  return Object.keys(data)
    .filter(filter)
    .reduce((res, key) => Object.assign(res, { [key]: data[key] }), {} )
}