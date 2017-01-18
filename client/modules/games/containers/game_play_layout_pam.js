import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import {GamePlayLayoutPAM} from '../components/game_play_layout_pam.jsx';

export const composer = (infoObj, onData) => {
  let {context, ticketId, GetMPTTicketInfo} = infoObj;
  const {Meteor, Collections, Store, Tracker, LocalState} = context();
  Tracker.autorun(function () { // Autorun on 'resetGameFlag' & 'newGameTicketObj' changes.
    let questionsArray = [];
    // Check if the game has been reset.
    let resetGameTrigger = LocalState.get('resetGameTrigger'); //Gets unique value to trigger autorun.
    let newGameTicketObj = { // THIS MUST COME FROM THE DATABASE
      gamePAMName: 'PAM_LESS_THAN_15',
      gameDifficulty: 'hard',
      gameVariation: 'plain',
      time: '10',
      qTotal: '5',
      pointsPerCorrect: '50',
      pointsPerWrong: '-30',
      bonus100Perc: '500',
      bonus90Perc: '300',
      bonus80Perc: '150',
      penalty49Perc: '-300',
      upperLimit: '10'
    }
    if (newGameTicketObj) {
      for (let x = 0; x < newGameTicketObj.qTotal; ++x) { // HUH? Should actually come from REDUX Store.newGameTicketObj.qTotal
        let num1 = Math.floor(Math.random() * newGameTicketObj.upperLimit) + 1;
        let num2 = Math.floor(Math.random() * newGameTicketObj.upperLimit) + 1;
        let operation = (Math.floor(Math.random() * 100) % 2 === 0) ? '+' : '-';
        let correctAnswer = ''
        if (operation === '-') {
            // Make sure that the answer is not negative. YET!
            if (num1 < num2) {
              let tempNum = num1;
              num1 = num2;
              num2 = tempNum;
              correctAnswer = num1 - num2;
            } else {
              correctAnswer = num1 - num2;
            }
        } else {
          correctAnswer = num1 + num2
        }
        let questionSetup = {
          qNo: x + 1,
          num1,
          num2,
          operation,
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

export const depsMapper = (context, actions) => ({
  context: () => context,
  GetMPTTicketInfo: actions.default.GetMPTTicketInfo // HUH? Why .default. ?
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GamePlayLayoutPAM);
