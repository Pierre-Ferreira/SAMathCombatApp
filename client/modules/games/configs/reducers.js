import { MPT_ANSWER_SUBMIT,
         GAME_TIMER_FINISHED,
         GAME_ALL_QUESTIONS_COMPLETED,
         UPDATE_QUESTION_COUNTER,
         NEW_GAME_TICKET_INFO,
         GAME_INFO_RESET,
         START_GAME,
         GAME_RESULT_RECORD_ID,
         UPDATE_GAME_RESULT } from '../actions/actionTypes';

export function gameInfo(state = {gameQuestionsResults: [],
                                  gameQuestionNo: 1,
                                  gameRunning: false,
                                  gameResultRecordId: '',
                                  gameCurrentMetrics: {
                                    totalAnswered: 0,
                                    correct: 0,
                                    wrong: 0,
                                    pointsScored: 0,
                                    pointsLost: 0,
                                    pointsTotal: 0,
                                    percentage: 0
                                  }
                                }, action) {
  switch (action.type) {
    case UPDATE_GAME_RESULT:
      let gameCurrentMetrics = action.gameCurrentMetrics;
      return Object.assign({}, state, {gameCurrentMetrics});
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
      let gameQuestionsResults = state.gameQuestionsResults;
      gameQuestionsResults.push(action._questionResults);
      return Object.assign({}, state, { gameQuestionsResults: gameQuestionsResults});
    case UPDATE_QUESTION_COUNTER:
      let gameQuestionNo = action.newQuestionCnt;
      return Object.assign({}, state, {gameQuestionNo: gameQuestionNo});
    case NEW_GAME_TICKET_INFO:
      let newGameTicketObj = action.newGameTicketObj;
      return Object.assign({}, state, {newGameTicketObj: newGameTicketObj});
    case GAME_INFO_RESET:
      gameQuestionsResults = [];
      gameQuestionNo = 1;
      gameRunning = false;
      gameResultRecordId = '';
      gameCurrentMetrics = {
        totalAnswered: 0,
        correct: 0,
        wrong: 0,
        pointsScored: 0,
        pointsLost: 0,
        pointsTotal: 0,
        percentage: 0
      };
      return Object.assign({}, state, {gameQuestionsResults: gameQuestionsResults,
                                       gameQuestionNo: gameQuestionNo,
                                       gameRunning: gameRunning,
                                       gameResultRecordId: gameResultRecordId,
                                       gameCurrentMetrics: gameCurrentMetrics
                                      });
    default:
      return state;
  }
}
