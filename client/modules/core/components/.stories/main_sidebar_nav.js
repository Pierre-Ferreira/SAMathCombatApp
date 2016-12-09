import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MainSidebarNav from '../main_sidebar_nav.jsx';

storiesOf('core.MainSidebarNav', module)
  .add('default view', () => {
    return (
      <MainSidebarNav />
    );
  })
