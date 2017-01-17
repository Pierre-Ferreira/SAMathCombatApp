import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/**
 * Import all actions as an object.
 */
import * as Actions from '../actions';

class GameAnswersReviewType1Impl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const gameQuestionsResults = this.props.state.gameInfo.questionsResults;
    return (
      <div>
        {gameQuestionsResults.map((x,i) => {
          const feedbackStr = (x.result === 'W') ? `Verkeerd (${x.userAnswer})` : 'Reg!';
          const answerStr = `${x.qNo}) ${x.num1} ${x.operation} ${x.num2} =
                             ${x.correctAnswer} ${feedbackStr}`;
          return <div key={i}>{answerStr}</div>;
        })}
      </div>
    );
  }
}

// export default GameAnswersReviewType1;

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
});

/**
 * Finally the Redux store is connected
 * to the component with the `connect()`
 * function.
 */
export const GameAnswersReviewType1 = connect(
                                    mapStateToProps,
                                    mapDispatchToProps
                                  )(GameAnswersReviewType1Impl);
