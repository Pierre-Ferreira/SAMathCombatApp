import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import { MptTicketCreatorList } from '../components/mpt_ticket_creator_list.jsx';

export const composer = (infoObj, onData) => {
  let {context, props} = infoObj;
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  LoadMPTTicketToForm: actions.load_mpt_ticket_to_form.LoadMPTTicketToForm
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MptTicketCreatorList);
