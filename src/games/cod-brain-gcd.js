import startGames from "../index.js";
import { getRandomNumber } from "../utils/random.js";

export const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const playGameGcd = {
  instructions: 'Find the greatest common divisor of given numbers.',
  generateQuestion() {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();
    return { question, correctAnswer };
  },
};

startGames(playGameGcd);

export default playGameGcd;
