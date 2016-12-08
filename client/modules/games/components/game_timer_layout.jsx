import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Import all actions as an object.
 */
import * as Actions from '../actions';

class GameTimerLayoutImpl extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    this.state = {elapsed: 0, start: new Date()};
  }
  componentDidMount() {

      // componentDidMount is called by react when the component
      // has been rendered on the page. We can set the interval here:
    this.timer = setInterval(() => {
      let gameTime = this.props.time;
      let elapsedTime = (Math.round(this.state.elapsed / 100) / 10).toFixed(1);
      if (elapsedTime < gameTime) {
        // if (this.props.state.gameInfo.gameRunning)
          this.tick();
      } else {
        clearInterval(this.timer);
        this.props.actions.GameTimerFinished();
      }
    }, 5);
  }

  componentWillUnmount(){

    // This method is called immediately before the component is removed
    // from the page and destroyed. We can clear the interval here:

    clearInterval(this.timer);
  }

  tick(){

      // This function is called every 50 ms. It updates the
      // elapsed counter. Calling setState causes the component to be re-rendered
      this.setState({elapsed: new Date() - this.state.start});
  }
  render() {
    let elapsed = Math.round(this.state.elapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    let seconds = (elapsed / 10).toFixed(1);

    // Although we return an entire <p> element, react will smartly update
    // only the changed parts, which contain the seconds variable.

    return <p><b>{seconds}s / {this.props.time}s</b></p>;
  }
}

// export default GameTimerLayout;

GameTimerLayoutImpl.propTypes = {
  time: React.PropTypes.number.isRequired,
};

// For App to work.
// For getStoryBook to work comment this out.
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
export const GameTimerLayout = connect(
                                   mapStateToProps,
                                   mapDispatchToProps
                                 )(GameTimerLayoutImpl);
