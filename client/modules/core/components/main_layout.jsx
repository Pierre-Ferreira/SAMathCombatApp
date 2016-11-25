import React from 'react';
import Favicon from 'react-favicon';


// const DocHead = this.DocHead;
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

const Layout = ({content = () => null }) => (
  <div>
    <Favicon url={[ '/src/favicon.ico' ]}/>
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
