import {GameTickets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'update_mpt_ticket'(ticketObj) {
      check(ticketObj, Object);
      // Get the ticketId and remove it from the ticket object.
      let ticketId = ticketObj.ticketId;
      delete ticketObj['ticketId'];
      // Get the MPT value.
      ticketObj.MPT = ticketObj.gameMPTTable.split('_')[1];
      return GameTickets.upsert(ticketId, {ticketObj});
    }
  });
}
