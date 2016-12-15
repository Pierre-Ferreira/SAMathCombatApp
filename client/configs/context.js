import Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import ReduxThunk from 'redux-thunk'

// Collections to link to Redux store.
import { connect as connectCollection } from 'meteor-ditto';
import GameTickets from '../../lib/collections/game_tickets.js';

const defaultState = {};

export default function ({ reducer }) {
  // let Store = createStore(reducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  const Store = createStore(reducer, compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : fn => fn
  ));


  connectCollection(GameTickets, Store);
  return {
    Meteor,
    FlowRouter,
    Collections,
    // LocalState: new ReactiveDict(),
    Store,
    Tracker
  };
}
