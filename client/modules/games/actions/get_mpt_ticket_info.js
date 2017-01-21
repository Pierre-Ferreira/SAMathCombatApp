export default {
  GetMPTTicketInfo({Meteor, LocalState, FlowRouter, Store}, ticketID) {
    Meteor.call('get_mpt_ticket_info', ticketID, (err, result) => {
      if (err) {
        console.error('get_mpt_ticket_info:', err.message);
      } else {
        let newGameTicketObj = Object.assign({}, result.ticketObj);
        newGameTicketObj.ticketId = result._id;
        LocalState.set('newGameTicketReadyTrigger', new Date());
        Store.dispatch({
          type: 'NEW_GAME_TICKET_INFO',
          newGameTicketObj
        });
      }
    });
  }
};
