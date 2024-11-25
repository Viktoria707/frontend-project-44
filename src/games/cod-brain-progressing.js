import startGames from "../index.js";
import { getRandomNumber } from "../utils/random.js";

const playGameProgression = {
  instructions: 'What number is missing in the progression?',
  generateQuestion() {
    const start = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 5);
    const missingIndex = getRandomNumber(0, 9);
    const progression = Array.from({ length: 10 }, (_, i) => start + i * step);
    const correctAnswer = progression[missingIndex];
    progression[missingIndex] = '..';
    const question = progression.join(' ');
    return { question, correctAnswer: correctAnswer.toString() };
  },
};

startGames(playGameProgression);

export default playGameProgression;
