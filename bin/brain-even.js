#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getAnswer, getRandomIntInclusive } from '../src/index.js';

function getName() {
  return readlineSync.question('May I have your name? ');
}

const evenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
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
  const computerAnswer = evenNumber(randomNumber);

  if (myAnswer === `${computerAnswer}`) {
    correctAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(`"${myAnswer}" is wrong answer ;(. Correct answer was "${computerAnswer}".
  Let's try again, ${name}!`);
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}
