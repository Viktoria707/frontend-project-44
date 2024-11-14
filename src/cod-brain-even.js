import readlineSync from 'readline-sync';

const playGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let wins = 0;

  while (wins < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      wins += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let\`s try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default playGameEven;
