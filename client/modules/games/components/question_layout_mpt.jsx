import React from 'react';
import TextField from 'material-ui/TextField';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
/**
 * Import all actions as an object.
 */
import * as Actions from '../actions';


class QuestionLayoutMPTImpl extends React.Component {
  constructor(props) {
    super(props);
  }
  _answerSubmit(e) {
    e.preventDefault();
    let { answerRef } = this.refs;
    // console.log('this.refs:',this.refs);
    // console.log('ReactDOM.findDOMNode(answerRef):', ReactDOM.findDOMNode(answerRef));
    // console.log('ReactDOM.findDOMNode(answerRef).value:', ReactDOM.findDOMNode(answerRef).value);
    // let answer = ReactDOM.findDOMNode(answerRef).value;
    // console.log(answer);
    // let inputAnswer = e.target.value;

  }
  _answerOnChange(e) {
    console.log("CHANGE:", e.target.value);
    console.log("Actions:", Actions);
    this.props.actions.MPTAnswerChange({
      answer3: e.target.value
    });
  }
  render() {
    let num1 = this.props.num1;
    let num2 = this.props.num2;
    let answerCopy = this.props.state.answer1
                    &&this.props.state.answer1.answer2
                    &&this.props.state.answer1.answer2.answer3
                    ||''
    return (
      <div>
        <form onSubmit={this._answerSubmit.bind(this)}>
          <h1>{num1} x {num2} = <TextField id="answerRefid" onChange={this._answerOnChange.bind(this)}/></h1>
        </form>
        <TextField id="answerCopyid" value={answerCopy}/>
      </div>
    );
  }
}

// For getStoryBook to work uncomment.
// export default QuestionLayoutMPTImpl;

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
})

/**
 * Finally the Redux store is connected
 * to the component with the `connect()`
 * function.
 */
 export const QuestionLayoutMPT = connect(
                                   mapStateToProps,
                                   mapDispatchToProps
                                 )(QuestionLayoutMPTImpl);
