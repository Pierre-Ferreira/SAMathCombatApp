import { configure } from '@kadira/storybook';

function loadStories() {
  // require('../.stories');
  require('../client/modules/core/components/.stories/index.js');
}

configure(loadStories, module);
