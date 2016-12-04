import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import QuestionLayoutMPTImpl from '../question_layout_mpt.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

storiesOf('games.QuestionLayoutMpt', module)
  .addDecorator(story => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      {story()}
    </MuiThemeProvider>
  ))
  .add('with props', () => {
    return (
      <QuestionLayoutMPTImpl num1={3} num2={6} ans={18}/>
    );
  })
