import {createApp} from 'mantra-core';
import {combineReducers} from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { reducer as reduxFormReducer } from 'redux-form';
import { mongo } from 'meteor-ditto';
import initContext from './configs/context';

injectTapEventPlugin();

// modules
import coreModule from './modules/core';
import gamesModule from './modules/games';
import adminModule from './modules/admin';
// console.log('coreModule:',coreModule)
// console.log('gamesModule:',gamesModule)
// reducers
const coreReducers = coreModule.reducers;
const gamesReducers = gamesModule.reducers;
const adminReducers = adminModule.reducers;
// console.log('coreReducers:',coreReducers);
// console.log('gamesReducers:',gamesReducers);
// Combine Reducers
const reducer = combineReducers({
  ...coreReducers,
  ...gamesReducers,
  ...adminReducers,
  form: reduxFormReducer,
  mongo
});
// console.log('reducer:',reducer)
// init context
const context = initContext({ reducer });

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(gamesModule);
app.loadModule(adminModule);
app.init();
