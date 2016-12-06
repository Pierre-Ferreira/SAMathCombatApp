import React from 'react';

class GameTimerLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {elapsed: 0, start: new Date()};
    console.log('this.state:',this)
  }
  componentDidMount(){

      // componentDidMount is called by react when the component
      // has been rendered on the page. We can set the interval here:
      this.timer = setInterval(() => {
                      let gameTime = this.props.time;
                      let elapsedTime = (Math.round(this.state.elapsed / 100) / 10).toFixed(1);
                      if (elapsedTime < gameTime)
                        this.tick();
                      }
                    , 5);
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

export default GameTimerLayout;
