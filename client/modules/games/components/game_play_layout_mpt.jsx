import React from 'react';
import QuestionLayoutMPT from '../containers/question_layout_mpt.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

/**
 * Import all actions as an object.
 */
import * as Actions from '../actions';

class GamePlayLayoutMPTImpl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let questionsArray = [
    {
    qNo: 1,
    num1: 10,
    num2: 8,
    correctAnswer: 80
    },
    {
    qNo: 2,
    num1: 5,
    num2: 3,
    correctAnswer: 15
    },
    {
    qNo: 3,
    num1: 7,
    num2: 9,
    correctAnswer: 63
    }]

    let _gameQuestionNo = this.props.state.gameInfo.gameQuestionNo;

  console.log('gameQuestionNo:',_gameQuestionNo)
    let _qNo = questionsArray[_gameQuestionNo - 1].qNo;
    let _num1 = questionsArray[_gameQuestionNo - 1].num1;
    let _num2 = questionsArray[_gameQuestionNo - 1].num2;
    let _correctAnswer = questionsArray[_gameQuestionNo - 1].correctAnswer;
    return (
      <div>
        <QuestionLayoutMPT qNo={_qNo} num1={_num1} num2={_num2} correctAnswer={_correctAnswer} />
      </div>
    );
  }
}

// export default GamePlayLayoutMPT;

/**
 * This function maps the state to a
 * prop called `state`.
 *
 * In larger apps it is often good
 * to be more selective and only
 * map the part of the state tree
 * that is necessary.
 */
const mapStateToProps = (state) => ({
    state: state
});

/**
 * This function maps actions to props
 * and binds them so they can be called
 * directly.
 *
 * In this case all actions are mapped
 * to the `actions` prop.
 */
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
})

/**
 * Finally the Redux store is connected
 * to the component with the `connect()`
 * function.
 */
export const GamePlayLayoutMPT = connect(
                                    mapStateToProps,
                                    mapDispatchToProps
                                  )(GamePlayLayoutMPTImpl);
