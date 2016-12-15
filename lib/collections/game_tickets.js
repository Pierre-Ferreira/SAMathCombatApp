import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const GameTickets = new Mongo.Collection('game_tickets');

// const GameTickets = Class.create({
//   name: 'GameTickets',
//   collection: GameTickets,
//   fields: {
//
//   }
// });

export default GameTickets;
