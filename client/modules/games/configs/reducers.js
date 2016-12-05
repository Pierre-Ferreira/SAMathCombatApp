import { MPT_ANSWER_SUBMIT } from '../actions/actionTypes';

export function gameInfo(state = {questionsResults: [], gameQuestionNo: 1}, action) {
// console.log("INSIDE reducers.js",action);
  switch (action.type) {
    // case MPT_ANSWER_SUBMIT:
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
