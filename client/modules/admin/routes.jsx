import React from 'react';
import {mount} from 'react-mounter';

import { MainLayout } from '../core/components/main_layout.jsx';
import MPTTicketCreator from './containers/mpt_ticket_creator.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  let adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin'
  });

  adminRoutes.route('/mptticketcreator', {
    name: 'adminMPTTicketCreator',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MPTTicketCreator />)
      });
    }
  });
}
