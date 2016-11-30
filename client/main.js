import {createApp} from 'mantra-core';
import {combineReducers} from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import initContext from './configs/context';

injectTapEventPlugin();

// modules
import coreModule from './modules/core';
import gamesModule from './modules/games';
console.log('coreModule:',coreModule)
console.log('gamesModule:',gamesModule)
// reducers
const coreReducers = coreModule.reducers;
const gamesReducers = gamesModule.reducers;
// import * as coreReducers from './modules/core/configs/reducers.js';
// import * as gamesReducers from './modules/games/configs/reducers.js';
console.log('coreReducers:',coreReducers);
console.log('gamesReducers:',gamesReducers);
// Combine Reducers
const reducer = combineReducers({
  ...coreReducers,
  ...gamesReducers
});
console.log('reducer:',reducer)
// init context
const context = initContext({ reducer });

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(gamesModule);
app.init();
