import React from 'react';
import TextField from 'material-ui/TextField';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Import all actions as an object.
 */
import * as Actions from '../actions';


class QuestionLayoutPAMImpl extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    this.state = {userAnswer: '',
                  prevOperation: '',
                  prevNum1: '',
                  prevNum2: '',
                  prevAnswer: '',
    };
    // this.setState({userAnswer:
  }
  _answerSubmit(e) {
    e.preventDefault();
    let userAnswer = Number(this.state.userAnswer);
    let correctAnswer = Number(this.props.correctAnswer);
    let result = (userAnswer === correctAnswer) ? 'C' : 'W';
    // Set feedback string values.
    let prevAnswer = userAnswer;
    let prevNum1 = this.props.num1;
    let prevNum2 = this.props.num2;
    let prevOperation = this.props.operation;
    let resultFeedback = `${prevNum1} ${prevOperation} ${prevNum2} = ${prevAnswer}`;
    if (result === 'C') {
      resultFeedback += ' REG:)';
      this.setState({resultFeedback: resultFeedback});
    } else {
      resultFeedback += ' VERKEERD!';
      this.setState({resultFeedback: resultFeedback});
    }

    let questionResult = {
      qNo: this.props.qNo,
      num1: this.props.num1,
      num2: this.props.num2,
      operation: this.props.operation,
      userAnswer,
      correctAnswer,
      result
    };
    this.props.actions.MPTAnswerSubmit(questionResult);
    // let prevQuestionCnt = this.props.qNo;
    // Check if any questions are left.
    let gameQuestionNo = this.props.state.gameInfo.gameQuestionNo;
    let qTotal = this.props.qTotal;
    if (gameQuestionNo < qTotal) {
      let prevQuestionCnt = gameQuestionNo;
      this.props.actions.UpdateQuestionCounter(prevQuestionCnt + 1);
    } else {
      this.props.actions.GameAllQuestionsCompleted();
    }
    this._cleanInput();
  }
  _answerOnChange(e) {

// Check if the user input is digits only.
    if (/^\d*$/.test(e.target.value)) {
      this.setState({userAnswer: e.target.value}); // Use NON-REDUX state for local display state.
    } else {
      this.setState({userAnswer: this.state.userAnswer});
    }
  }

  _cleanInput() {
    this.setState({
      userAnswer: ''
    });
  }

  _GameAllQuestionsCompleted() {

  }
  render() {

    let props = this.props;
    let resultFeedback = this.state.resultFeedback;
    return (
      <div>
        <form onSubmit={this._answerSubmit.bind(this)} autoComplete="off">
          <div>
            <h1>
              {props.num1} {props.operation} {props.num2} =
              <TextField id="answerRefid"
                         value={this.state.userAnswer || ''} // OR is important to keep input controlled.
                         onChange={this._answerOnChange.bind(this)}
                         autoComplete="off"
              />
            </h1>
            <h3> {resultFeedback} </h3>
          </div>
        </form>
      </div>
    );
  }
}

// For getStoryBook to work uncomment.
// export default QuestionLayoutPAMImpl;

QuestionLayoutPAMImpl.propTypes = {
  num1: React.PropTypes.number.isRequired,
  num2: React.PropTypes.number.isRequired,
  correctAnswer: React.PropTypes.number.isRequired,
  qNo: React.PropTypes.number.isRequired
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
export const QuestionLayoutPAM = connect(
                                   mapStateToProps,
                                   mapDispatchToProps
                                 )(QuestionLayoutPAMImpl);
