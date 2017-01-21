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
  // LocalState.set('newGameTicketObj', '')
  GetMPTTicketInfo(ticketId.ticketId); // HUH? ticketId.ticketId?!? FlowRouter.
  Tracker.autorun(function () { // Autorun on 'resetGameFlag' & 'newGameTicketObj' changes.
// Check if the ticket has been received from the database (Async).
    let newGameTicketReadyTrigger = LocalState.get('newGameTicketReadyTrigger'); //Gets unique value to trigger autorun.
    // Check if the game has been reset.
    let resetGameTrigger = LocalState.get('resetGameTrigger'); //Gets unique value to trigger autorun.
// Get the ticket info from the REDUX store.
    let reduxStore = Store.getState();
    let newGameTicketObj = reduxStore.gameInfo.newGameTicketObj;
// If the ticket
// Create a new set of questions.
    let questionsArray = createNewMPTQuestions(newGameTicketObj)
    if (questionsArray.length !== 0) {
// Call the method to create a game result record.
      CreateGameResultRecord(Meteor.userId(),
                             ticketId.ticketId
                            );
      onData(null, {questionsArray});

    }
  });

  Store.subscribe(checkGameIsRunning)
  function checkGameIsRunning() {
    let reduxStore = Store.getState();
    let gameRunning = reduxStore.gameInfo.gameRunning;
    let gameResultRecordId = reduxStore.gameInfo.gameResultRecordId;
    let gameResult = reduxStore.gameInfo.gameResults;
console.log("SUBSCIRBE gameRunning!", gameRunning, gameResultRecordId);
// If game has stopped running then write game results to record.
    if (!gameRunning && gameResultRecordId) {
console.log("SUBSCIRBE STOPSED!")
      UpdateGameResultRecord(gameResultRecordId, gameResult)
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
