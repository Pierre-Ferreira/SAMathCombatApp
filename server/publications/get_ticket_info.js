import {GameTickets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('get_ticket_info', function (ticketId) {
    return GameTickets.find(ticketId);
  });
}
