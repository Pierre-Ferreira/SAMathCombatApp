import { MPT_ANSWER_CHANGE  } from '../actions/actionTypes'

export function answer1(state = {answer2: null}, action) {
console.log("INSIDE reducers.js",action)
  switch (action.type) {
    case MPT_ANSWER_CHANGE:
      return Object.assign({}, state, { answer2: action.answer })
    default:
      return state
  }
}
