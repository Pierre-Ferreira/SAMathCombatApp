import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AuthWrapper from '../auth_wrapper.jsx';

storiesOf('core.AuthWrapper', module)
  .add('default view', () => {
    return (
      <AuthWrapper />
    );
  })
