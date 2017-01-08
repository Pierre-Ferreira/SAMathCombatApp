import get_mpt_ticket_info from './get_mpt_ticket_info';
import { MPT_ANSWER_SUBMIT,
         GAME_TIMER_FINISHED,
         GAME_ALL_QUESTIONS_COMPLETED,
         UPDATE_QUESTION_COUNTER,
         NEW_GAME_TICKET_INFO } from './actionTypes';

export default get_mpt_ticket_info;
export function MPTAnswerSubmit(_questionResults) {
  return { type: MPT_ANSWER_SUBMIT, _questionResults };
}
export function UpdateQuestionCounter(newQuestionCnt) {
  return { type: UPDATE_QUESTION_COUNTER, newQuestionCnt };
}
export function GameTimerFinished(nothing) {
  return { type: GAME_TIMER_FINISHED, nothing };
}
export function GameAllQuestionsCompleted(nothing) {
  return { type: GAME_ALL_QUESTIONS_COMPLETED, nothing };
}
export function NewGameTicketInfo(newGameTicketObj) {
  return { type: NEW_GAME_TICKET_INFO, newGameTicketObj };
}
