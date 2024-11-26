import startGames from '../index.js';
import { getRandomNumber } from '../utils/random.js';

const playGameCalc = () => {
  const instructions = 'What is the result of the expression?';
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
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
  return { question, correctAnswer, instructions };
};

startGames(playGameCalc);

export default playGameCalc;
