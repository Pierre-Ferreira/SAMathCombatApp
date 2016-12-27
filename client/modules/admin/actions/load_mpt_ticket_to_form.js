import {
    initialize  // The action creator from REDUX-FORM.
} from 'redux-form';
export default {
  LoadMPTTicketToForm({Meteor, LocalState, FlowRouter, Store}, ticketID) {
    Meteor.call('get_mpt_ticket_info', ticketID, (err, result) => {
      if (err) {
        console.log('err:', err.message);
      } else {
        console.log('RESULT:', result.ticketObj);
        Store.dispatch(initialize('MptTicketCreatorForm', result.ticketObj));
      }
    });
  }
};
