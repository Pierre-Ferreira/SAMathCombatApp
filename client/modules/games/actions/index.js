import { MPT_ANSWER_SUBMIT, GAME_TIMER_FINISHED, GAME_ALL_QUESTIONS_COMPLETED } from './actionTypes'

export function MPTAnswerSubmit(_questionResults) {
  return { type: MPT_ANSWER_SUBMIT, _questionResults };
}
export function GameTimerFinished(nothing) {
  return { type: GAME_TIMER_FINISHED, nothing };
}
export function GameAllQuestionsCompleted(nothing) {
  return { type: GAME_ALL_QUESTIONS_COMPLETED, nothing };
}
