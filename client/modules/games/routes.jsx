import React from 'react';
import {mount} from 'react-mounter';

import { MainLayout } from '../core/components/main_layout.jsx'
import GamePlayLayoutMPT from './containers/game_play_layout_mpt.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  let ticket = { // Ticket will be passed as a prop via FlowRouter.
    time: 10,
    qTotal: 5,
    MPT: 8,
    variation: 'plain',
    bonus100Perc: 300,
    bonus90Perc: 150,
    bonus80Perc: 100,
    penalty49Perc: 150,
    pointsPerCorrect: 20,
    pointsPerWrong: -10,
  };

  FlowRouter.route('/q', {
    name: 'q',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<GamePlayLayoutMPT ticket={ticket} />)
      });
    }
  });
}
