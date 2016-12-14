import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MptTicketCreatorForm from '../mpt_ticket_creator_form.jsx';

storiesOf('admin.MptTicketCreator', module)
  .add('default view', () => {
    return (
      <MptTicketCreatorForm />
    );
  })
