import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import { GamesTicketsLayout } from '../components/games_tickets_layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();

  onData(null, {FlowRouter});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GamesTicketsLayout);
