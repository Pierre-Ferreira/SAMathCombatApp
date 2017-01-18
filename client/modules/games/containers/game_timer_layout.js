import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import { GameTimerLayout } from '../components/game_timer_layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  onData(null, {LocalState});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GameTimerLayout);
