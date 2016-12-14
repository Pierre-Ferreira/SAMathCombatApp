import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const GameTickets = new Mongo.Collection('game_tickets');

const GameTicket = Class.create({
  name: 'GameTicket',
  collection: GameTickets,
  fields: {

  }
});

export default GameTicket;
