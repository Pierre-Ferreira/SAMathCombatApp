import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import { GamePlayLayoutMPT } from '../components/game_play_layout_mpt.jsx';

export const composer = (infoObj, onData) => {
console.log(infoObj)
  let {context, ticketId, GetMPTTicketInfo, CreateGameResultRecord} = infoObj;
  const {Meteor, Collections, Store, Tracker, LocalState} = context();
  LocalState.set('newGameTicketObj', '')
  GetMPTTicketInfo(ticketId.ticketId); // HUH? ticketId.ticketId?!?
  Tracker.autorun(function () { // Autorun on 'resetGameFlag' & 'newGameTicketObj' changes.
    let questionsArray = [];
// Check if the game has been reset.
    let resetGameTrigger = LocalState.get('resetGameTrigger'); //Gets unique value to trigger autorun.
// Check if the ticket has been received from the database (Async).
    let newGameTicketTrigger = LocalState.get('newGameTicketTrigger'); //Gets unique value to trigger autorun.
// Get the ticket info from the REDUX store.
    let reduxStore = Store.getState();
    let newGameTicketObj = reduxStore.gameInfo.newGameTicketObj;
// Create a new set of questions.
    if (newGameTicketObj) {
      for (let x = 0; x < newGameTicketObj.qTotal; ++x) {
        let num1 = newGameTicketObj.MPT;
        let num2 = Math.floor(Math.random() * 15) + 1;
        let correctAnswer = num1 * num2;
        let questionSetup = {
          qNo: x + 1,
          num1,
          num2,
          operation: 'x',
          correctAnswer
        };
        questionsArray.push(questionSetup);
      }
    }
    if (questionsArray.length !== 0) {
      let ticket = newGameTicketObj;
// Call the method to create a game result record.
      CreateGameResultRecord(Meteor.userId(),
                             ticketId.ticketId,
                             questionsArray
                            );
// console.log('gameResultID:', gameResultID);
      onData(null, {questionsArray, ticket});
    }
  });
};

export const depsMapper = (context, actions) => {
  // console.log("actions3333:",actions)
  // console.log("context3333:",context)
  return {
    context: () => context,
    GetMPTTicketInfo: actions.getMptTicketInfo.GetMPTTicketInfo,
    CreateGameResultRecord: actions.createGameResultRecord.CreateGameResultRecord
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GamePlayLayoutMPT);
