import React from 'react';
import GamesTicketCard from '../containers/games_ticket_card.js';
import { SubscriptionComponent } from 'meteor-ditto';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Import all actions as an object.
 */
import * as Actions from '../actions';

class GamesTicketsLayoutImpl extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
console.log(this.props)
    this.props.subscribe('get_mpt_tickets');
  }
  _loadToGAME(ticketId) {
    console.log('LOAD TO STATE:',ticketId);
    let { FlowRouter } = this.props;
    FlowRouter.go('/mptgameplay/' + ticketId);
  }
  render() {
    let mptGameTickets = this.props.state.mongo.collections.game_tickets;
    let mptGameTicketsReady = this.props.subscriptionReady('get_mpt_tickets');
    return (
      <div>
        <div>
          <h1>Multiplication Ticket List</h1>
          {mptGameTicketsReady ?
            mptGameTickets.map((x,i) => {
              return <div key={i} onClick={this._loadToGAME.bind(this, x._id)}>
                      {x.ticketObj.gameMPTTable}
                      {x.ticketObj.gameDifficulty}
                      {x.ticketObj.time}
                      {x.ticketObj.qTotal}
                     </div>;
            }) :
            <div> LOADING...(games_tickets_layout)</div>}
        </div>
      </div>
    );
  }
}

// export default GamesTicketsLayout;
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
export const GamesTicketsLayout = connect(
                                    mapStateToProps,
                                    mapDispatchToProps
                                  )(SubscriptionComponent(GamesTicketsLayoutImpl));
