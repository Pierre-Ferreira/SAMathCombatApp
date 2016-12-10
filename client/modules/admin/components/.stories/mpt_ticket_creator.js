import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MptTicketCreator from '../mpt_ticket_creator.jsx';

storiesOf('admin.MptTicketCreator', module)
  .add('default view', () => {
    return (
      <MptTicketCreator />
    );
  })
