import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
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
    this.props.actions.StartGame();
    this.timerStart();
  }

  componentWillUnmount() {

// This method is called immediately before the component is removed
// from the page and destroyed. We can clear the interval here:

    clearInterval(this.timer);
    this.props.actions.ResetGameInfo();
  }

  restartTimer() {
    // Reset values in REDUX.
    this.props.actions.ResetGameInfo();
    this.props.actions.StartGame();
    // Create new questions.
    this.props.LocalState.set('resetGameTrigger', new Date()); // Use Date() to sent new value for autorun.
    clearInterval(this.timer);
    this.setState({elapsed: 0, start: new Date()});
    this.timerStart();
  }

  timerStart() {
    this.timer = setInterval(() => {
      let gameTime = this.props.time;
      let elapsedTime = (Math.round(this.state.elapsed / 100) / 10).toFixed(1);
      if (elapsedTime < gameTime) {
        if (this.props.state.gameInfo.gameRunning) {
          this.tick();
        } else {
          // clearInterval(this.timer);
        }
      } else {
        clearInterval(this.timer);
        this.props.actions.GameTimerFinished();
      }
    }, 5);
  }

  tick() {

// This function is called every 50 ms. It updates the
// elapsed counter. Calling setState causes the component to be re-rendered
    this.setState({elapsed: new Date() - this.state.start});
  }
  render() {
    let elapsed = Math.round(this.state.elapsed / 100);

// This will give a number with one digit after the decimal dot (xx.x):
    let seconds = (elapsed / 10).toFixed(1);
    // let seconds = (elapsed/10)

// Length of time allowed.
    let gameTime = this.props.time;
// Although we return an entire <p> element, react will smartly update
// only the changed parts, which contain the seconds variable.
    return (
      <div>
        <div>
          <CircularProgress
            mode="determinate"
            value={Number(seconds)}
            max={Number(gameTime)}
            size={60}
            thickness={5}
          />
          <CircularProgress
            mode="determinate"
            value={Number(seconds)}
            max={Number(gameTime)}
            size={60}
            thickness={5}
            color={"Red"}
          />
          <CircularProgress
            mode="determinate"
            value={Number(seconds)}
            max={Number(gameTime)}
            size={60}
            thickness={5}
          />
          <h2>
            <b>
              {!(this.props.state.gameInfo.gameRunning) ? `${seconds}/` : ''}
              {this.props.time}s
            </b>
          </h2>
            {!(this.props.state.gameInfo.gameRunning) ?
              <RaisedButton secondary={true}
                            label="Speel weer?"
                            onClick={this.restartTimer.bind(this)} /> : ''}
        </div>
      </div>
    );
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
