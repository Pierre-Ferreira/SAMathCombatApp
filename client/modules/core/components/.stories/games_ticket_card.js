import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import GamesTicketCard from '../games_ticket_card.jsx';

storiesOf('core.GamesTicketCard', module)
  .add('default view', () => {
    return (
      <GamesTicketCard />
    );
  })
