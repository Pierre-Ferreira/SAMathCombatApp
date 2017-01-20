import {GameMPTResults} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'create_game_result_record'(userID, ticketID, questionsArray) {
      let gameMPTResultsRecord = {
        userID: userID,
        ticketID: ticketID,
        questionsArray: questionsArray
      };
      return GameMPTResults.insert(gameMPTResultsRecord);
    }
  });
}
