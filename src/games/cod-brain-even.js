import startGames from "../index.js";
import { getRandomNumber } from "../utils/random.js";

const playGameEven = {
  instructions: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestion() {
    const randomNumber = getRandomNumber(1, 100);
    const question = randomNumber;
    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};

startGames(playGameEven);

export default playGameEven;
