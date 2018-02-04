export class Reducer {
  /**
   * 
   * @param {*} state 
   * @param {{ type: string, payload: any, error: Error }}} action 
   */
  constructor(state, action) {
    this.state = state
    this.action = action
  }

  setState(newState) {
    return {
      ...this.state,
      ...newState,
    }
  }

  request(bool = true) {
    return {
      ...this.state,
      isFetching: bool,
      error: '',
      isReload: false
    }
  }

  failure() {
    return {
      ...this.state,
      isFetching: false,
      error: this.action.error.message
    }
  }
}

export default Reducer