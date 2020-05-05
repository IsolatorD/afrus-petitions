import * as types from './types'

let defaultState = {
  user: null
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default auth