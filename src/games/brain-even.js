import readlineSync from 'readline-sync';
import { getAnswer, getRandomIntInclusive } from '../index.js';
import { greeting } from '../new-index.js';

function getName() {
  return readlineSync.question('May I have your name? ');
}

const evenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default function runBrainEvenGame() {
  greeting();

  const name = getName();

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomIntInclusive(1, 100);

    console.log(`Question: ${randomNumber}`);
    const myAnswer = getAnswer();
    const computerAnswer = evenNumber(randomNumber);

    if (myAnswer !== `${computerAnswer}`) {
      console.log(
        `'${myAnswer}' is wrong answer ;(. Correct answer was '${computerAnswer}'`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
