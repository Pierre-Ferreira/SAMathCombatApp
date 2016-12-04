import { MPT_ANSWER_CHANGE } from './actionTypes'

export function MPTAnswerChange(answer) {
console.log("INSIDE index.js",answer)
  return { type: MPT_ANSWER_CHANGE, answer };
}
