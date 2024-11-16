import readlineSync from 'readline-sync';

const startGames = (gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameLogic.instructions);
  const rounds = 3;
  let score = 0;

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = gameLogic.generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let\`s try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGames;
