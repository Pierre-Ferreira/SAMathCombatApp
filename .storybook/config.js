import { configure } from '@kadira/storybook';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
/* http://stackoverflow.com/a/34015469/988941 */
injectTapEventPlugin();

function loadStories() {
  // require('../.stories');
  require('../client/modules/core/components/.stories/index.js');
  require('../client/modules/games/components/.stories/index.js');
}

configure(loadStories, module);
