import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';

import {authComposer} from 'meteor-auth';
import Component from '../components/auth_wrapper';

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, LocalState} = context();
  if (Meteor.userId()) {
    let isNotAuthenticated = true
    if (Meteor.subscribe('get_contact_profile').ready()) {
      let userProfile = Meteor.users.findOne(Meteor.userId()).profile
  // Check if the users has filled in all the required fields in his my_settings.
  // If not the user settings modal needs to be launched.
      if (userProfile &&
        userProfile.fullname !== '' &&
        userProfile.surname !== '' &&
        userProfile.nickname !== '' &&
        // userProfile.address !== '' &&
        // userProfile.suburb !== '' &&
        userProfile.city !== '' &&
        userProfile.contactNo !== ''
      )
      isNotAuthenticated = false
    }
    onData(null, {context, isNotAuthenticated});
  } else {
    let isNotAuthenticated = false
    onData(null, {context, isNotAuthenticated});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
