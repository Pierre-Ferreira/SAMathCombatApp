export default {
  GetMPTTicketInfo({Meteor, LocalState, FlowRouter, Store}, ticketID) {
    Meteor.call('get_mpt_ticket_info', ticketID, (err, result) => {
      if (err) {
        console.log('err:', err.message);
      } else {
        let returnObj = Object.assign({}, result.ticketObj);
        returnObj.ticketId = result._id;
console.log('returnObj:::::',returnObj)
        LocalState.set("newGameTicketObj", returnObj)
        // return returnObj;
        // Store.dispatch('NewGameTicketInfo', returnObj);
      }
    });
  }
};
