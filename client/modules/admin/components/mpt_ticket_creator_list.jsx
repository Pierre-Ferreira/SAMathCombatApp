import React from 'react';
import { SubscriptionComponent } from 'meteor-ditto';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';


/**
 * Import all actions as an object.
 */
import * as Actions from '../actions';

class MptTicketCreatorListImpl extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.subscribe('get_mpt_tickets');
  }
  _loadToForm(ticketId) {
    console.log('LOAD TO STATE:',ticketId);
    let {LoadMPTTicketToForm} = this.props;
    LoadMPTTicketToForm(ticketId);
  }
  render() {
    let mptGameTickets = this.props.state.mongo.collections.game_tickets;
    let mptGameTicketsReady = this.props.subscriptionReady('get_mpt_tickets');
    return (
      <div>
        <h1>Multiplication Ticket List</h1>
        {mptGameTicketsReady ?
          mptGameTickets.map((x,i) => {
            return <div key={i} onClick={this._loadToForm.bind(this, x._id)}>
                    {x.ticketObj.gameMPTTable} {x.ticketObj.gameDifficulty}
                   </div>;
          }) :
          <div> LOADING...</div>}
      </div>
    );
  }
}

// export default MptTicketCreatorListImpl;
/**
 * This function maps the state to a
 * prop called `state`.
 *
 * In larger apps it is often good
 * to be more selective and only
 * map the part of the state tree
 * that is necessary.
 */
const mapStateToProps = (state) => ({
  state: state
});

/**
 * This function maps actions to props
 * and binds them so they can be called
 * directly.
 *
 * In this case all actions are mapped
 * to the `actions` prop.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

/**
 * Finally the Redux store is connected
 * to the component with the `connect()`
 * function.
 */
export const MptTicketCreatorList = connect(
                                    mapStateToProps,
                                    mapDispatchToProps
                                  )(SubscriptionComponent(MptTicketCreatorListImpl));
