import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import { GamePlayLayoutMPT } from '../components/game_play_layout_mpt.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, Store} = context();
  let questionsArray = [];

  for (let x = 0; x < 10; ++x) {
    let num1 = 8;
    let num2 = Math.floor(Math.random() * 15) + 1 ;
    let correctAnswer = num1*num2;
    let questionSetup = {
      qNo: x+1,
      num1,
      num2,
      correctAnswer
    };
    questionsArray.push(questionSetup);
  }
  onData(null, {questionsArray});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GamePlayLayoutMPT);
