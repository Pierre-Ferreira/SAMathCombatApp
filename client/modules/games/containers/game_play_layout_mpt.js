import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import { GamePlayLayoutMPT } from '../components/game_play_layout_mpt.jsx';

import {createNewMPTQuestions} from '../helpers/mpt/create_new_mpt_questions.js';


export const composer = (infoObj, onData) => {
// console.log(infoObj)
  let {context,
       ticketId,
       GetMPTTicketInfo,
       CreateGameResultRecord,
       UpdateGameResultRecord} = infoObj;
  const {Meteor, Collections, Store, Tracker, LocalState} = context();
// GAME START UP SEQUENCE.
// Get the ticketObj from DB.
  GetMPTTicketInfo(ticketId.ticketId); // HUH? ticketId.ticketId?!? FlowRouter.
  Tracker.autorun(function () { // Autorun on 'resetGameFlag' & 'newGameTicketObj' changes.
// Check if the ticket has been received from the database (Async).
    let newGameTicketReadyTrigger = LocalState.get('newGameTicketReadyTrigger'); //Gets unique value to trigger autorun.
// Check if the game has been reset.
    let resetGameTrigger = LocalState.get('resetGameTrigger'); //Gets unique value to trigger autorun.
// Get the ticket info from the REDUX store.
    let newGameTicketObj = Store.getState().gameInfo.newGameTicketObj;
// Create a new set of questions.
    let questionsArray = createNewMPTQuestions(newGameTicketObj);
// Reset the apllicable values in REDUX.
    Store.dispatch({type: 'GAME_INFO_RESET'});
// Call the method to create a game result record.
    if (Store.getState().gameInfo.gameResultRecordId === '') {
      CreateGameResultRecord(Meteor.userId(),
                             ticketId.ticketId
                            );
    }
    Tracker.autorun(function () {
      let gameResultRecordIdReadyTrigger = LocalState.get('gameResultRecordIdReadyTrigger'); //Gets unique value to trigger autorun.
      let gameResultRecordId = Store.getState().gameInfo.gameResultRecordId;
      if (questionsArray.length !== 0 && gameResultRecordId !== '') {
        Store.dispatch({type: 'START_GAME'});
        onData(null, {questionsArray});
      }
    });
  });
  Store.subscribe(startGameSequence);
  function startGameSequence() {

  }
  Store.subscribe(checkGameIsRunning)
  function checkGameIsRunning() {
    let gameRunning = Store.getState().gameInfo.gameRunning;
    let gameResultRecordId = Store.getState().gameInfo.gameResultRecordId;
    let gameQuestionsResults = Store.getState().gameInfo.gameQuestionsResults;
console.log("SUBSCIRBE gameRunning!", gameRunning, gameResultRecordId);
// If game has stopped running then write game results to record.
    if (!gameRunning && gameResultRecordId) {
console.log("SUBSCIRBE STOPSED!")
      UpdateGameResultRecord(gameResultRecordId, gameQuestionsResults)
// Write the game result to record.
// Clear the gameResultRecordId from REDUX.
    }
  }
};

export const depsMapper = (context, actions) => {
  // console.log("actions3333:",actions)
  // console.log("context3333:",context)
  return {
    context: () => context,
    GetMPTTicketInfo: actions.getMptTicketInfo.GetMPTTicketInfo,
    CreateGameResultRecord: actions.createGameResultRecord.CreateGameResultRecord,
    UpdateGameResultRecord: actions.updateGameResultRecord.UpdateGameResultRecord
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GamePlayLayoutMPT);
