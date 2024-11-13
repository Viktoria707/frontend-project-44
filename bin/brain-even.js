

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const checkRandomEvenOrOdd = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readline.question(`Your answer: `);
    const isEven = randomNumber % 2 === 0;
    if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
        console.log(`Correct`);
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${!userAnswer}. Let\`s try again, ${userName}!`);
    };
};

checkRandomEvenOrOdd();
