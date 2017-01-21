import getMptTicketInfo from './get_mpt_ticket_info';
import createGameResultRecord from './create_game_result_record';
import updateGameResultRecord from './update_game_result_record';

import { MPT_ANSWER_SUBMIT,
         GAME_TIMER_FINISHED,
         GAME_ALL_QUESTIONS_COMPLETED,
         UPDATE_QUESTION_COUNTER,
         NEW_GAME_TICKET_INFO,
         GAME_INFO_RESET,
         START_GAME,
         GAME_RESULT_RECORD_ID,
         UPDATE_GAME_RESULT } from './actionTypes';

export {getMptTicketInfo,
        createGameResultRecord,
        updateGameResultRecord};

export function UpdateGameResult(gameCurrentMetrics) {
  return { type: UPDATE_GAME_RESULT, gameCurrentMetrics};
}
export function GameResultRecordId(recordId) {
  return { type: GAME_RESULT_RECORD_ID, recordId};
}
export function StartGame(nothing) {
  return { type: START_GAME, nothing};
}
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
export function ResetGameInfo(nothing) {
  return { type: GAME_INFO_RESET, nothing};
}
