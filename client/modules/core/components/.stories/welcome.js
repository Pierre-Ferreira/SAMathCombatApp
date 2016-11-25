import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Welcome from '../welcome.jsx';

storiesOf('core.Welcome', module)
  .add('default view', () => {
    return (
      <Welcome />
    );
  })
