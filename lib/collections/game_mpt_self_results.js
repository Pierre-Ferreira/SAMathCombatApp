import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const GameMPTSelfResults = new Mongo.Collection('game_mpt_self_results');

// const GameTickets = Class.create({
//   name: 'GameTickets',
//   collection: GameTickets,
//   fields: {
//
//   }
// });

export default GameMPTSelfResults;
