import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import GamePlayLayoutMpt from '../game_play_layout_mpt.jsx';

storiesOf('games.GamePlayLayoutMpt', module)
  .add('default view', () => {
    return (
      <GamePlayLayoutMpt />
    );
  })
