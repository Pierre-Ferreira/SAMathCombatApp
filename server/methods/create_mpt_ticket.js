import {GameTickets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'create_mpt_ticket'(ticketObj) {
      check(ticketObj, Object);
console.log('ticketObj:',ticketObj)
      return GameTickets.insert({ticketObj});
    }
  });
}
