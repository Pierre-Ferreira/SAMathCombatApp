import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MptTicketCreatorList from '../mpt_ticket_creator_list.jsx';

storiesOf('admin.MptTicketCreatorList', module)
  .add('default view', () => {
    return (
      <MptTicketCreatorList />
    );
  })
