import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const GameMPTResults = new Mongo.Collection('game_mpt_results');

// const GameTickets = Class.create({
//   name: 'GameTickets',
//   collection: GameTickets,
//   fields: {
//
//   }
// });

export default GameMPTResults;
