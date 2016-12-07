import React from 'react';
import QuestionLayoutMPT from '../containers/question_layout_mpt.js';
import { GameTimerLayout } from './game_timer_layout.jsx';
import { bindActionCreators } from 'redux';
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
// Check if the game is still running.
    let gameRunning = this.props.state.gameInfo.gameRunning;
// Check if any questions are left.
    let gameQuestionNo = this.props.state.gameInfo.gameQuestionNo;
    let qTotal = this.props.ticket.qTotal;
    // let gameRunning = true;
    if (gameQuestionNo > qTotal) {
      --gameQuestionNo;
      // gameRunning = false;
      this.props.actions.GameTimerFinished();
    }
// Get the questions info.

    let questionsArray = this.props.questionsArray;
    let qNo = questionsArray[gameQuestionNo - 1].qNo;
    let num1 = questionsArray[gameQuestionNo - 1].num1;
    let num2 = questionsArray[gameQuestionNo - 1].num2;
    let correctAnswer = questionsArray[gameQuestionNo - 1].correctAnswer;
// Get the game's info.
    let time = this.props.ticket.time;
    let MPT = this.props.ticket.MPT;
    let title = `x${MPT} Maal tafel`;
    let subtitle = `${qTotal} vrae in ${time} sekondes`;
// Determine the game's progress and Metrics.
    let gameInitialMetrics = {
      correct: 0,
      wrong: 0,
      pointsScored: 0,
      pointsLost: 0,
      pointsTotal: 0,
      percentage: 0
    };
    let questionsResults = this.props.state.gameInfo.questionsResults;
    let gameCurrentMetrics = questionsResults.reduce((obj, x) => {
      if (x.result === 'C') {
        ++obj.correct;
        obj.pointsScored += this.props.ticket.pointsPerCorrect;
      } else {
        ++obj.wrong;
        obj.pointsLost += this.props.ticket.pointsPerWrong;
      }
      obj.pointsTotal = obj.pointsScored + obj.pointsLost;
      obj.percentage = parseInt((obj.correct / qTotal) * 100, 10);
      return obj;
    }, gameInitialMetrics);

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
            <div><GameTimerLayout time={time} /></div>
            <div>Korrek: {gameCurrentMetrics.correct}</div>
            <div>Verkeerd: {gameCurrentMetrics.wrong}</div>
            <div>Punte gekry: {gameCurrentMetrics.pointsScored}pts</div>
            <div>Punte verloor: {gameCurrentMetrics.pointsLost}pts</div>
            <div>Punte totaal: {gameCurrentMetrics.pointsTotal}pts</div>
            <div>Persentasie: {gameCurrentMetrics.percentage}%</div>
            {gameRunning ?
            <QuestionLayoutMPT qNo={qNo}
                               qTotal={qTotal}
                               num1={num1}
                               num2={num2}
                               correctAnswer={correctAnswer}
            /> : <h1>GAME OVER</h1> }
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
