import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import { QuestionLayoutMPT } from '../components/question_layout_mpt.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, Store} = context();


  /**
   * Subscribing to the store makes it possible to
   * execute some code every time the state is updated.
   */
  Store.subscribe(() => {
    console.log('Store:',Store.getState());
  });
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuestionLayoutMPT);
