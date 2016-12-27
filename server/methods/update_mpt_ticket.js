import {GameTickets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'update_mpt_ticket'(ticketObj) {
      check(ticketObj, Object);
      let ticketId = ticketObj.ticketId
      delete ticketObj['ticketId']
      return GameTickets.upsert(ticketId, {ticketObj});
    }
  });
}
