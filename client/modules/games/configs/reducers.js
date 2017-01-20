import { MPT_ANSWER_SUBMIT,
         GAME_TIMER_FINISHED,
         GAME_ALL_QUESTIONS_COMPLETED,
         UPDATE_QUESTION_COUNTER,
         NEW_GAME_TICKET_INFO,
         GAME_INFO_RESET,
         START_GAME,
         GAME_RESULT_RECORD_ID } from '../actions/actionTypes';

export function gameInfo(state = {questionsResults: [],
                                  gameQuestionNo: 1,
                                  gameRunning: true}, action) {
  switch (action.type) {
    case GAME_RESULT_RECORD_ID:
      let gameResultRecordId = action.recordId;
      return Object.assign({}, state, {gameResultRecordId});
    case START_GAME:
      let gameRunning = true;
      return Object.assign({}, state, {gameRunning});
    case GAME_TIMER_FINISHED:
      return Object.assign({}, state, { gameRunning: false });
    case GAME_ALL_QUESTIONS_COMPLETED:
      return Object.assign({}, state, { gameRunning: false });
    case MPT_ANSWER_SUBMIT:
      let questionsResults = state.questionsResults;
      questionsResults.push(action._questionResults);
      return Object.assign({}, state, { questionsResults: questionsResults});
    case UPDATE_QUESTION_COUNTER:
      let gameQuestionNo = action.newQuestionCnt;
      return Object.assign({}, state, {gameQuestionNo: gameQuestionNo});
    case NEW_GAME_TICKET_INFO:
      let newGameTicketObj = action.newGameTicketObj;
      return Object.assign({}, state, {newGameTicketObj: newGameTicketObj});
    case GAME_INFO_RESET:
      questionsResults = [];
      gameQuestionNo = 1;
      gameRunning = false;
      return Object.assign({}, state, {questionsResults: questionsResults,
                                       gameQuestionNo: gameQuestionNo,
                                       gameRunning: gameRunning
                                      });
    default:
      return state;
  }
}
