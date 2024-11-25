import startGames from '../src/index.js';

const playGameCalc = {
  instructions: 'What is the result of the expression?',
  generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let question;
    let correctAnswer;
    switch (operation) {
      case '+':
        question = `${num1} + ${num2}`;
        correctAnswer = (num1 + num2).toString();
        break;
      case '-':
        question = `${num1} - ${num2}`;
        correctAnswer = (num1 - num2).toString();
        break;
      case '*':
        question = `${num1} * ${num2}`;
        correctAnswer = (num1 * num2).toString();
        break;
      default:
        break;
    }
    return { question, correctAnswer };
  },
};

startGames(playGameCalc);

export default playGameCalc;
