import {GameTickets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'get_mpt_ticket_info'(ticketID) {
      check(ticketID, String);
      return GameTickets.findOne(ticketID);
    }
  });
}
