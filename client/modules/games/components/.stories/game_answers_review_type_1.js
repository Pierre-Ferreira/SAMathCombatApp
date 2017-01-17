import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import GameAnswersReviewType1 from '../game_answers_review_type_1.jsx';

storiesOf('games.GameAnswersReviewType1', module)
  .add('default view', () => {
    return (
      <GameAnswersReviewType1 />
    );
  })
