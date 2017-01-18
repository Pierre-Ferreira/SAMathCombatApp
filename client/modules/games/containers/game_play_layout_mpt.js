import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import { GamePlayLayoutMPT } from '../components/game_play_layout_mpt.jsx';

export const composer = (infoObj, onData) => {
console.log(infoObj)
  let {context, ticketId, GetMPTTicketInfo} = infoObj;
  const {Meteor, Collections, Store, Tracker, LocalState} = context();
  LocalState.set('newGameTicketObj', '')
  GetMPTTicketInfo(ticketId.ticketId); // HUH? ticketId.ticketId?!?
  Tracker.autorun(function () { // Autorun on 'resetGameFlag' & 'newGameTicketObj' changes.
    let questionsArray = [];
// Check if the game has been reset.
    let resetGameTrigger = LocalState.get('resetGameTrigger'); //Gets unique value to trigger autorun.
// Check if the ticket has been received from the database (Async).
    let newGameTicketObj = LocalState.get('newGameTicketObj')
    if (newGameTicketObj) {
      for (let x = 0; x < newGameTicketObj.qTotal; ++x) { //HUH? Should actually come from REDUX Store.newGameTicketObj.qTotal
        let num1 = newGameTicketObj.MPT; //HUH? Should actually come from REDUX Store.newGameTicketObj.MPT
        let num2 = Math.floor(Math.random() * 15) + 1;
        let correctAnswer = num1 * num2;
        let questionSetup = {
          qNo: x + 1,
          num1,
          num2,
          correctAnswer
        };
        questionsArray.push(questionSetup);
      }
    }
console.table(questionsArray)
    if (questionsArray.length !== 0) {
      let ticket = newGameTicketObj;
      onData(null, {questionsArray, ticket});
    }
  });
};

export const depsMapper = (context, actions) => {
  console.log("actions3333:",actions)
  return {
  context: () => context,
  GetMPTTicketInfo: actions.default.GetMPTTicketInfo // HUH? Why .default. ?
}};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GamePlayLayoutMPT);
