import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MptTicketCreatorLayout from '../mpt_ticket_creator_layout.jsx';

storiesOf('admin.MptTicketCreatorLayout', module)
  .add('default view', () => {
    return (
      <MptTicketCreatorLayout />
    );
  })
