import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import GamesTicketsLayout from '../games_tickets_layout.jsx';

storiesOf('core.GamesTicketsLayout', module)
  .add('default view', () => {
    return (
      <GamesTicketsLayout />
    );
  })
