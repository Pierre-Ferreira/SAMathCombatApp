export function createNewMPTQuestions(newGameTicketObj) {
  console.log('INSIDE createNewMPTQuestions');
  let questionsArray = [];
  if (newGameTicketObj) {
    for (let x = 0; x < newGameTicketObj.qTotal; ++x) {
      let num1 = newGameTicketObj.MPT;
      let num2 = Math.floor(Math.random() * 15) + 1;
      let correctAnswer = num1 * num2;
      let questionSetup = {
        qNo: x + 1,
        num1,
        num2,
        operation: 'x',
        correctAnswer
      };
      questionsArray.push(questionSetup);
    }
  }
  return questionsArray;
}
