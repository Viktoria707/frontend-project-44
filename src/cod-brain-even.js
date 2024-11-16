const playGameEven = {
  instructions: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestion() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const question = randomNumber;
    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};

export default playGameEven;
