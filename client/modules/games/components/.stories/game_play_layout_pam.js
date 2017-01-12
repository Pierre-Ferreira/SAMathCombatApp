import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import GamePlayLayoutPam from '../game_play_layout_pam.jsx';

storiesOf('games.GamePlayLayoutPam', module)
  .add('default view', () => {
    return (
      <GamePlayLayoutPam />
    );
  })
