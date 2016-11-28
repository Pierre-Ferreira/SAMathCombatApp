import React from 'react';
import TextField from 'material-ui/TextField';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme'


class QuestionLayoutMpt extends React.Component {
  constructor(props) {
    super(props);
  }

  static childContextTypes =
  {
      muiTheme: React.PropTypes.object
  }

  getChildContext()
  {
      return {
          muiTheme: getMuiTheme()
      }
  }
  _answerSubmit(e) {
    e.preventDefault();
    let { answerRef } = this.refs;
    console.log('this.refs:',this.refs)
    console.log('ReactDOM.findDOMNode(answerRef):', ReactDOM.findDOMNode(answerRef))
    let answer = ReactDOM.findDOMNode(answerRef).value;
    console.log(answer);
    // let inputAnswer = e.target.value;

  }
  render() {
    let num1 = this.props.num1;
    let num2 = this.props.num2;
    return (
      <div>
        <form onSubmit={this._answerSubmit.bind(this)}>
          <h1>{num1} x {num2} = <TextField ref="answerRef" id="answerRefid"/></h1>
        </form>
      </div>
    );
  }
}

export default QuestionLayoutMpt;
