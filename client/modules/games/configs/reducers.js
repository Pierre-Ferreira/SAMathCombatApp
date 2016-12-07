import { MPT_ANSWER_SUBMIT, GAME_TIMER_FINISHED, GAME_ALL_QUESTIONS_COMPLETED } from '../actions/actionTypes';

export function gameInfo(state = {questionsResults: [], gameQuestionNo: 1, gameRunning: true}, action) {
  switch (action.type) {
    case GAME_TIMER_FINISHED:
      return Object.assign({}, state, { gameRunning: false });
    case GAME_ALL_QUESTIONS_COMPLETED:
      return Object.assign({}, state, { gameRunning: false });
    case MPT_ANSWER_SUBMIT:
      let questionsResults = state.questionsResults;
      let gameQuestionNo = state.gameQuestionNo;
      questionsResults.push(action._questionResults);
      return Object.assign({}, state,
                          { questionsResults: questionsResults,
                            gameQuestionNo: ++gameQuestionNo
                          });
    default:
      return state;
  }
}
