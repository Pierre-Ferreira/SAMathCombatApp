import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MptTicketCreatorForm from '../containers/mpt_ticket_creator_form.js';
import MptTicketCreatorList from '../containers/mpt_ticket_creator_list.js';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '70%',
    height: 'auto',
    overflowY: 'auto',
  }
};

class MptTicketCreatorLayout extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={'auto'}
          padding={1}
          style={styles.gridList}
        >
          <GridTile>
            <MptTicketCreatorForm />
          </GridTile>
          <GridTile>
            <MptTicketCreatorList />
          </GridTile>
        </GridList>
      </div>
    );
  }
}

export default MptTicketCreatorLayout;
