import {createApp} from 'mantra-core';
import injectTapEventPlugin from 'react-tap-event-plugin'
import initContext from './configs/context';

injectTapEventPlugin()

// modules
import coreModule from './modules/core';
import gamesModule from './modules/games';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(gamesModule);
app.init();
