import readlineSync from 'readline-sync';

export default () => console.log('Welcome to the Brain Games!');

export const greetUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
console.log(greetUser());
export const explanation = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const checkRandomEvenOrOdd = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;
  if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${!userAnswer}. Let\`s try again, ${userName}!`);
  }
};
