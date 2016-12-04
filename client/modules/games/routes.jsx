import React from 'react';
import {mount} from 'react-mounter';

import { MainLayout } from '../core/components/main_layout.jsx'
import GamePlayLayoutMPT from './containers/game_play_layout_mpt.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/q', {
    name: 'q',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<GamePlayLayoutMPT />)
      });
    }
  });
}
