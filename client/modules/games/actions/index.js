import { MPT_ANSWER_SUBMIT } from './actionTypes'

export function MPTAnswerChange(_questionResults) {
// console.log("INSIDE index.js",_questionResults)
  return { type: MPT_ANSWER_SUBMIT, _questionResults };
}
