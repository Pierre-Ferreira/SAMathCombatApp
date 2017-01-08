import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import { GamePlayLayoutMPT } from '../components/game_play_layout_mpt.jsx';

export const composer = (infoObj, onData) => {
console.log(infoObj)
  let {context, ticketId, GetMPTTicketInfo} = infoObj;
  const {Meteor, Collections, Store} = context();
  GetMPTTicketInfo(ticketId.ticketId); // HUH? ticketId.ticketId?!?
  let questionsArray = [];
  for (let x = 0; x < Store.newGameTicketObj.qTotal; ++x) {
    let num1 = Store.newGameTicketObj.MPT;
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

  onData(null, {questionsArray, ticketId});
};

export const depsMapper = (context, actions) => {
  console.log("actions3333:",actions)
  return {
  context: () => context,
  GetMPTTicketInfo: actions.default.GetMPTTicketInfo // HUH? Why .default.?
}};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GamePlayLayoutMPT);
