import React from 'react';
import {mount} from 'react-mounter';

import { MainLayout } from '../core/components/main_layout.jsx'
import QuestionLayoutMpt from './components/question_layout_mpt.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/q', {
    name: 'q',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<QuestionLayoutMpt />)
      });
    }
  });
}
