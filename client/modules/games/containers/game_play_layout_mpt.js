import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import { GamePlayLayoutMPT } from '../components/game_play_layout_mpt.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, Store} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GamePlayLayoutMPT);
