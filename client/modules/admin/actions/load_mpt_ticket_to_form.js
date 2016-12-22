export default {
  LoadMPTTicketToForm({Meteor, LocalState, FlowRouter}, ticketID) {
    Meteor.call('get_mpt_ticket_info',ticketID, (err, result) => {
      if (err) {
        console.log('err:', err.message)
      } else {
        console.log('RESULT:', result)
        // NOW SET result.ticketObj in STORE form.MptTicketCreatorForm
      }
    })
  }
};
