import React from 'react';
import {mount} from 'react-mounter';

import { MainLayout } from '../core/components/main_layout.jsx';
import GamePlayLayoutMPT from './containers/game_play_layout_mpt.js';
import GamePlayLayoutPAM from './containers/game_play_layout_pam.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/mptgameplay/:ticketId', {
    name: 'mpt_game_play',
    action(ticketId) {
      mount(MainLayoutCtx, {
        content: () => (<GamePlayLayoutMPT ticketId={ticketId} />)
      });
    }
  });
  FlowRouter.route('/pamgameplay/:ticketId', {
    name: 'pam_game_play',
    action(ticketId) {
      mount(MainLayoutCtx, {
        content: () => (<GamePlayLayoutPAM ticketId={ticketId} />)
      });
    }
  });
}
