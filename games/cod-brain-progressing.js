import startGames from '../src/index.js';

const playGameProgression = {
  instructions: 'What number is missing in the progression?',
  generateQuestion() {
    const start = Math.floor(Math.random() * 10);
    const step = Math.floor(Math.random() * 5) + 1;
    const missingIndex = Math.floor(Math.random() * 10);
    const progression = Array.from({ length: 10 }, (_, i) => start + i * step);
    const correctAnswer = progression[missingIndex];
    progression[missingIndex] = '..';
    const question = progression.join(' ');
    return { question, correctAnswer: correctAnswer.toString() };
  },
};

startGames(playGameProgression);

export default playGameProgression;
