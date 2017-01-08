import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MptTicketCreatorForm from '../components/mpt_ticket_creator_form.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, Store} = context();

  onData(null, {Store});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  UpdateMPTTicket: actions.update_mpt_ticket.UpdateMPTTicket
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MptTicketCreatorForm);
