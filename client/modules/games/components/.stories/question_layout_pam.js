import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import QuestionLayoutPam from '../question_layout_pam.jsx';

storiesOf('games.QuestionLayoutPam', module)
  .add('default view', () => {
    return (
      <QuestionLayoutPam />
    );
  })
