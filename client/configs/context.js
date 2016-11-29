import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
// Redux
import { createStore } from 'redux';

const defaultState = {};

export default function ({ reducer }) {
  return {
    Meteor,
    FlowRouter,
    Collections,
    // LocalState: new ReactiveDict(),
    Store: createStore(reducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    Tracker
  };
}
