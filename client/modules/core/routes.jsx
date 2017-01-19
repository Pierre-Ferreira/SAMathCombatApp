import React from 'react';
import {mount} from 'react-mounter';

import { MainLayout } from './components/main_layout.jsx';
import Home from './components/home.jsx';
import GamesTicketsLayout from '../core/containers/games_tickets_layout.js';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
  FlowRouter.route('/tickets/mpt', {
    name: 'tickets_mpt',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<GamesTicketsLayout game={'MPT'}/>)
      });
    }
  });
}
