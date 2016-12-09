import React from 'react';
import Favicon from 'react-favicon';
import { Provider } from 'react-redux';
import { useDeps } from 'mantra-core';
import { MainSidebarNav } from '../components/main_sidebar_nav.jsx';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from '../../../../node_modules/material-ui/styles/getMuiTheme';

const title = 'SAMathCombat';
DocHead.setTitle(title);

const metaInfo = { name: 'viewport', content: 'width=device-width, initial-scale=1' };
DocHead.addMeta(metaInfo);

const fontInfo = { name: 'link',
href: 'https://fonts.googleapis.com/css?family=Bangers:300,400,500' +
      '|Bonbon|Bungee+Shade|Creepster|Faster+One|Finger+Paint|Frijole|' +
      'Hanalei:300,400,500|Londrina+Shadow|Luckiest+Guy|Monofett|Nosifer|' +
      'Press+Start+2P|Roboto:300,400,500|Shojumaru|Slackey', type: 'text/css' };
DocHead.addLink(fontInfo);

const styles = {
  content: {
    marginLeft: 265
  }
};

class MainLayoutImpl extends React.Component {
  constructor(props) {
    super(props);
    /**
     * Subscribing to the store makes it possible to
     * execute some code every time the state is updated.
     */
    this.props.store.subscribe(() => {
      // console.log('STORE:',this.props.store.getState());
    });
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div>
        <Favicon url={[ '/src/favicon.ico' ]}/>
        <Provider store={this.props.store}>
          <div>
            <MainSidebarNav />
            <div style={styles.content}>{this.props.content()}</div>
          </div>
        </Provider>
      </div>
    );
  }
}

MainLayoutImpl.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

const depsToPropsMapper = (context, actions) => ({
  store: context.Store
});

export const MainLayout = useDeps(depsToPropsMapper)(MainLayoutImpl);
