import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import { GamePlayLayoutMPT } from '../components/game_play_layout_mpt.jsx';

export const composer = (infoObj, onData) => {
console.log(infoObj)
  let {context, ticketId, GetMPTTicketInfo} = infoObj;
  const {Meteor, Collections, Store, Tracker, LocalState} = context();
  LocalState.set('newGameTicketObj', '')
  GetMPTTicketInfo(ticketId.ticketId); // HUH? ticketId.ticketId?!?
  let questionsArray = [];
  Tracker.autorun(function () {
console.log("LocalState.get('newGameTicketObj'):",LocalState.get('newGameTicketObj'))
    let newGameTicketObj = LocalState.get('newGameTicketObj')
    if (newGameTicketObj) {
      for (let x = 0; x < newGameTicketObj.qTotal; ++x) { //HUH? Should actually come from Store.newGameTicketObj.qTotal
        let num1 = newGameTicketObj.MPT; //HUH? Should actually come from Store.newGameTicketObj.MPT
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

    if (questionsArray.length !== 0) {
      let ticket = newGameTicketObj;
      console.log("FINISHE1234 questionsArray:", questionsArray, ticket)
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
