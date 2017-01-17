import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import {GameAnswersReviewType1} from '../components/game_answers_review_type_1.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GameAnswersReviewType1);
