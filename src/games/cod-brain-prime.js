import startGames from "../index.js";
import { getRandomNumber } from "../utils/random.js";

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const playGamePrime = {
  instructions: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestion() {
    const number = getRandomNumber(1, 100);
    const question = number;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};

startGames(playGamePrime);

export default playGamePrime;
