import {GameMPTSelfResults} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'update_game_result_record'(gameResultRecordId, gameQuestionsResults) {
      check(gameResultRecordId, String);
      check(gameQuestionsResults, Array);
      let gameMPTResultsRecord = GameMPTSelfResults.findOne(gameResultRecordId);
      let updateValues = {
        gameFinished: new Date()
      };
      gameMPTResultsRecord = Object.assign(
                              {},
                              gameMPTResultsRecord,
                              gameQuestionsResults,
                              updateValues
                            );
      return GameMPTSelfResults.update(gameResultRecordId, gameMPTResultsRecord);
    }
  });
}
