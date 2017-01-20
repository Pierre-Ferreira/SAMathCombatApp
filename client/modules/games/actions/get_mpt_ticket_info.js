export default {
  GetMPTTicketInfo({Meteor, LocalState, FlowRouter, Store}, ticketID) {
    Meteor.call('get_mpt_ticket_info', ticketID, (err, result) => {
      if (err) {
        console.log('err:', err.message);
      } else {
        let newGameTicketObj = Object.assign({}, result.ticketObj);
        newGameTicketObj.ticketId = result._id;
        LocalState.set('newGameTicketTrigger', new Date());
        Store.dispatch({
          type: 'NEW_GAME_TICKET_INFO',
          newGameTicketObj
        });
      }
    });
  }
};
