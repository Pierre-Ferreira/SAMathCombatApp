import React from 'react';
import GamesTicketCard from '../containers/games_ticket_card.js';
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

  render() {
    return (
      <div>
        GamesTicketsLayout
        <GamesTicketCard />
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
                                  )(GamesTicketsLayoutImpl);
