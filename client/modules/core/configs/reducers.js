import { MENU_TOGGLE } from '../actions/actionTypes'

export function user(state = { user: null }, action) {
  switch (action.type) {
    case MENU_TOGGLE:
      return Object.assign({}, state, { user: action.user })
    default:
      return state
  }
}
