export default {
  UpdateGameResultRecord({Meteor, LocalState, FlowRouter, Store},
                         gameResultRecordId,
                         gameResults) {
    Meteor.call('update_game_result_record', gameResultRecordId, gameResults, (err, result) => {
      if (err) {
        console.error('update_game_result_record:', err.message);
      } else {
        let recordId = '';
        Store.dispatch({
          type: 'GAME_RESULT_RECORD_ID',
          recordId
        });
      }
    });
  }
};
