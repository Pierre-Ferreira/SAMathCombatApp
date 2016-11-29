import {createApp} from 'mantra-core';
import { combineReducers } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import initContext from './configs/context';

injectTapEventPlugin();

// modules
import coreModule from './modules/core';
import gamesModule from './modules/games';

// reducers
const coreReducers = coreModule.reducers;
const gamesReducers = gamesModule.reducers;

// Combine Reducers
const reducer = combineReducers({
  ...coreReducers,
  ...gamesReducers
});

// init context
const context = initContext({ reducer });

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(gamesModule);
app.init();
