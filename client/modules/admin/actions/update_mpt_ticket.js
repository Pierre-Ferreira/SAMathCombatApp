export default {
  UpdateMPTTicket({Meteor, LocalState, FlowRouter}, ticketObj) {
    Meteor.call('update_mpt_ticket',ticketObj, (err, result) => {
      if (err)
        console.log(err.message);
    });
  }
};
