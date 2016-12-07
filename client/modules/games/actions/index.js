import { MPT_ANSWER_SUBMIT, GAME_TIMER_FINISHED } from './actionTypes'

export function MPTAnswerSubmit(_questionResults) {
  return { type: MPT_ANSWER_SUBMIT, _questionResults };
}
export function GameTimerFinished(nothing) {
  return { type: GAME_TIMER_FINISHED, nothing };
}
