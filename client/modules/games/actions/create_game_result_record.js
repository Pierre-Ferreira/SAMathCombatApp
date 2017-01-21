export default {
  CreateGameResultRecord({Meteor, LocalState, FlowRouter, Store},
                         userID,
                         ticketID) {
    Meteor.call('create_game_result_record',userID, ticketID, (err, result) => {
      if (err) {
        console.error('create_game_result_record:', err.message);
      } else {
        let recordId = result;
        Store.dispatch({
          type: 'GAME_RESULT_RECORD_ID',
          recordId,
        });
      }
    });
  }
};
