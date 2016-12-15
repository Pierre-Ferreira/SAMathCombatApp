import {GameTickets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('get_mpt_tickets', function () {
    return GameTickets.find({});
  });
}
