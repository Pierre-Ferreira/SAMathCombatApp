export default {
  CreateGameResultRecord({Meteor, LocalState, FlowRouter, Store},
                         userID, ticketID,
                         questionsArray) {
    Meteor.call('create_game_result_record',userID, ticketID, questionsArray, (err, result) => {
      if (err) {
        console.error('create_game_result_record:', err.message);
      } else {
        let recordId = result;
        setTimeout(function() {
          Store.dispatch({
            type: 'GAME_RESULT_RECORD_ID',
            recordId,
          });
        }, 5000)
      }
    });
  }
};
