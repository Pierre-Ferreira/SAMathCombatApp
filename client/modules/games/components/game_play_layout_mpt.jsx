import React from 'react';
import QuestionLayoutMPT from '../containers/question_layout_mpt.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

/**
 * Import all actions as an object.
 */
import * as Actions from '../actions';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class GamePlayLayoutMPTImpl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
// Get the questions info.
    let gameQuestionNo = this.props.state.gameInfo.gameQuestionNo;
    let questionsArray = this.props.questionsArray;
    let qNo = questionsArray[gameQuestionNo - 1].qNo;
    let num1 = questionsArray[gameQuestionNo - 1].num1;
    let num2 = questionsArray[gameQuestionNo - 1].num2;
    let correctAnswer = questionsArray[gameQuestionNo - 1].correctAnswer;
// Get the game's info.
    let qTotal = this.props.ticket.qTotal;
    let timer = this.props.ticket.timer;
    let MPT = this.props.ticket.MPT;
    let title = `x${MPT} Maal tafel`;
    let subtitle = `${qTotal} vrae in ${timer} sekondes`;
// Determine the game's progress and stats.
    let gameInitialState = {
      correct: 0,
      wrong: 0,
      pointsScored: 0,
      pointsLost: 0,
      percentage: 0
    }
    let questionsResults = this.props.state.gameInfo.questionsResults;
    let gameCurrentState = questionsResults.reduce((obj, x, i) => {
      if (x.result === 'C') {
        ++obj.correct;
        obj.pointsScored += this.props.ticket.pointsPerCorrect;
      } else {
        ++obj.wrong;
        obj.pointsLost += this.props.ticket.pointsPerWrong;
      }
      obj.percentage = obj.correct/(i+1)*100
      return obj
    }, gameInitialState)


    return (
      <div>
        <Card expanded={true}>
         <CardHeader
           title= {title}
           subtitle= {subtitle}
           actAsExpander={true}
           showExpandableButton={false}
         />
         <CardText expandable={true}>
            <div>Korrek:{gameCurrentState.correct}</div>
            <div>Verkeerd:{gameCurrentState.wrong}</div>
            <div>Punte gekry:{gameCurrentState.pointsScored}</div>
            <div>Punte verloor:{gameCurrentState.pointsLost}</div>
            <div>Persentasie:{gameCurrentState.percentage}%</div>

            <QuestionLayoutMPT qNo={qNo}
                               qTotal={qTotal}
                               num1={num1}
                               num2={num2}
                               correctAnswer={correctAnswer}
            />
         </CardText>
         {/* <CardActions expandable={true}>
             <FlatButton label="Action1" />
             <FlatButton label="Action2" />
         </CardActions> */}
        </Card>

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
});

/**
 * Finally the Redux store is connected
 * to the component with the `connect()`
 * function.
 */
export const GamePlayLayoutMPT = connect(
                                    mapStateToProps,
                                    mapDispatchToProps
                                  )(GamePlayLayoutMPTImpl);
