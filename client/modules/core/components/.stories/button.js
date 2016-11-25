import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Button from '../button.jsx';

storiesOf('core.Button', module)
  .add('default view', () => {
    return (
      <Button />
    );
  })
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button COMP</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
