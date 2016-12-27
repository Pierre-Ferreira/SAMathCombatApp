import {
    initialize  // The action creator from REDUX-FORM.
} from 'redux-form';
export default {
  LoadMPTTicketToForm({Meteor, LocalState, FlowRouter, Store}, ticketID) {
    Meteor.call('get_mpt_ticket_info', ticketID, (err, result) => {
      if (err) {
        console.log('err:', err.message);
      } else {
        let returnObj = Object.assign({}, result.ticketObj);
        returnObj.ticketId = result._id;
        Store.dispatch(initialize('MptTicketCreatorForm', returnObj));
      }
    });
  }
};
