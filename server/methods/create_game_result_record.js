import {GameMPTSelfResults} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'create_game_result_record'(userID, ticketID) {
      check(userID, String);
      check(ticketID, String);
      let gameMPTResultsRecord = {
        createdDate: new Date(),
        userID,
        ticketID
      };
      return GameMPTSelfResults.insert(gameMPTResultsRecord);
    }
  });
}
