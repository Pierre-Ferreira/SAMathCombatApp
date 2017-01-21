import React from 'react';
import QuestionLayoutMPT from '../containers/question_layout_mpt.js';
import GameAnswersReviewType1 from '../containers/game_answers_review_type_1.js';
import GameTimerLayout from '../containers/game_timer_layout.js';
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

  componentWillMount() {
    this.calculateCurrentMetrics();
    let currentQuestionNo = this.props.state.gameInfo.gameQuestionNo;
    this.setState({currentQuestionNo: currentQuestionNo})
  }

  componentDidUpdate(prevProps, prevState) {

console.log('prevState:',prevState)
console.log('currState:',this.state)
    // this.calculateCurrentMetrics();
    // let currentQuestionNo = this.props.state.gameInfo.gameQuestionNo;
    // this.setState({currentQuestionNo: currentQuestionNo})
  }

  calculateCurrentMetrics() {

    // Determine the game's progress and Metrics.
    let gameInitialMetrics = {
      totalAnswered: 0,
      correct: 0,
      wrong: 0,
      pointsScored: 0,
      pointsLost: 0,
      pointsTotal: 0,
      percentage: 0
    };

    let ticketObj = this.props.state.gameInfo.newGameTicketObj;
    let qTotal = Number(ticketObj.qTotal);
    let questionsResults = this.props.state.gameInfo.questionsResults;
    let gameCurrentMetrics = questionsResults.reduce((obj, x) => {
      if (x.result === 'C') {
        ++obj.correct;
        obj.pointsScored += Number(ticketObj.pointsPerCorrect);
      } else {
        ++obj.wrong;
        obj.pointsLost += Number(ticketObj.pointsPerWrong);
      }
      ++obj.totalAnswered;
      obj.pointsTotal = obj.pointsScored + obj.pointsLost;
      obj.percentage = parseInt((obj.correct / qTotal) * 100, 10);
      return obj;
    }, gameInitialMetrics);
    this.props.actions.UpdateGameResult(gameCurrentMetrics);
  }

  render() {
// Check if the new game result id has been set.
    let gameResultRecordId = this.props.state.gameInfo.gameResultRecordId;

// Check if the game is still running.
    let gameRunning = this.props.state.gameInfo.gameRunning;
    if (!gameRunning) {console.log("GAME STOPPED (!gameRunning)")}

// Get the questions info.
    let gameQuestionNo = this.props.state.gameInfo.gameQuestionNo;
    let questionsArray = this.props.questionsArray;
    let qNo = Number(questionsArray[gameQuestionNo - 1].qNo);
    let num1 = Number(questionsArray[gameQuestionNo - 1].num1);
    let num2 = Number(questionsArray[gameQuestionNo - 1].num2);
    let operation = 'x';
    let correctAnswer = questionsArray[gameQuestionNo - 1].correctAnswer;

// Get the game's ticket info.
    let ticketObj = this.props.state.gameInfo.newGameTicketObj;
    let time = Number(ticketObj.time);
    let MPT = Number(ticketObj.MPT);
    let qTotal = Number(ticketObj.qTotal);
    let title = `x${MPT} Maal tafel`;
    let subtitle = `${qTotal} vrae in ${time} sekondes`;

// Get game metrics.
    let gameCurrentMetrics = this.props.state.gameInfo.gameCurrentMetrics;

    return (
      <div>
        {gameResultRecordId ?
        <Card expanded={true}>
         <CardHeader
           title= {title}
           subtitle= {subtitle}
           actAsExpander={true}
           showExpandableButton={false}
         />
         <CardText expandable={true}>
            <h2><GameTimerLayout time={time} /></h2>
            <h3>Geantwoord: {gameCurrentMetrics.totalAnswered}/{qTotal}</h3>
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
                                 operation={operation}
                                 correctAnswer={correctAnswer}
                                 calculateCurrentMetrics = {this.calculateCurrentMetrics.bind(this)}
              /> :
              <div>
                <h1>GAME OVER</h1>
                <GameAnswersReviewType1 />
              </div>
            }
         </CardText>
         {/* <CardActions expandable={true}>
             <FlatButton label="Action1" />
             <FlatButton label="Action2" />
         </CardActions> */}
        </Card> :
        <div>Loading... (waiting for 'gameResultRecordId')(game_play_layout_mpt)</div>}
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
