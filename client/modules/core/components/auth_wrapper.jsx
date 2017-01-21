import React from 'react';

const AuthWrapper = (infoObj) => {
  let {loggedIn, loggingIn, children, context, isNotAuthenticated} = infoObj
  const {Meteor, FlowRouter, LocalState} = context()
  if (loggedIn) {
    LocalState.set('SHOW_USER_SETTINGS_MODAL',isNotAuthenticated)
    return (
      <div>{children}</div>
    );
  }

  if (loggingIn) {
    return (
      <div>Loading...(auth_wrapper)</div>
    );
  }

  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default AuthWrapper;
