import {GameMPTSelfResults} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'update_game_result_record'(gameResultRecordId, gameResults) {
      check(gameResultRecordId, String);
      check(gameResults, Object);
      let gameMPTResultsRecord = GameMPTSelfResults.findOne(gameResultRecordId);
      let updateValues = {
        gameFinished: new Date()
      };
      gameMPTResultsRecord = Object.assign({},gameMPTResultsRecord, gameResults, updateValues);
      return GameMPTSelfResults.update(gameResultRecordId, gameMPTResultsRecord);
    }
  });
}
