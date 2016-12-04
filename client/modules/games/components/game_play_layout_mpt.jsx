import React from 'react';
import QuestionLayoutMPT from '../containers/question_layout_mpt.js';

class GamePlayLayoutMPT extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let a = ''
    return (
      <div>
        GamePlayLayoutMPT
        <QuestionLayoutMPT num1={8} num2={2} num3={a} />
      </div>
    );
  }
}

export default GamePlayLayoutMPT;
