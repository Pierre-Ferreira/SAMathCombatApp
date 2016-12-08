import { MPT_ANSWER_SUBMIT,
         GAME_TIMER_FINISHED,
         GAME_ALL_QUESTIONS_COMPLETED,
         UPDATE_QUESTION_COUNTER } from '../actions/actionTypes';

export function gameInfo(state = {questionsResults: [],
                                  gameQuestionNo: 1,
                                  gameRunning: true}, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
