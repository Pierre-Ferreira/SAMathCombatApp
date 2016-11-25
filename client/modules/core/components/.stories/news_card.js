import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import {NewsCard} from '../news_card.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import testImg from './testImg.jpg'
var testImgURL = require("file-loader!./static/testImg.jpg");

storiesOf('core.NewsCard', module)
  // .addDecorator(muiTheme())
  .addDecorator(story => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      {story()}
    </MuiThemeProvider>
  ))
  .add('default view', () => {
    return (
        <NewsCard title="TITLE" text="TEXT" subtitle="SUBTITLE" image={testImgURL}/>
    );
  })
