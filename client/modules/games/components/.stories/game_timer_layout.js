import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import GameTimerLayout from '../game_timer_layout.jsx';

storiesOf('games.GameTimerLayout', module)
  .add('default view', () => {
    return (
      <GameTimerLayout />
    );
  })
