// import { Meteor } from 'meteor/meteor';

export default {
  CreateMPTTicket({Meteor, LocalState, FlowRouter}, ticketObj) {
    Meteor.call('create_mpt_ticket',ticketObj, (err, result) => {})
  }
};

// export const CreateMPTTicket = ticketObj => {
//   return dispatch => {
//     Meteor.call('create_mpt_ticket', ticketObj, (error) => {
//       if (!error) {
//         return;
//       }
//
//       dispatch({
//         type: 'ADD_ERROR',
//         error,
//       });
//     });
//   };
// };
