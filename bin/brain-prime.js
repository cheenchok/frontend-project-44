#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getAnswer, getRandomIntInclusive } from '../src/index.js';

function getName() {
  return readlineSync.question('May I have your name? ');
}

const primeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    const result = number % i;

    if (result === 0) {
      return 'no';
    }
  }
  return 'yes';
};

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswers = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomIntInclusive(1, 100);

  console.log(`Question: ${randomNumber}`);

  const myAnswer = getAnswer();
  const computerAnswer = primeNumber(randomNumber);

  if (myAnswer === computerAnswer) {
    correctAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(
      `'${myAnswer}' is wrong answer ;(. Correct answer was '${computerAnswer}'`,
    );
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}
