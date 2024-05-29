#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getAnswer, getRandomIntInclusive } from '../src/index.js';

function greatCommonDivider(x, y) {
  if (y === 0) {
    return x;
  }
  return greatCommonDivider(y, x % y);
}

function getName() {
  return readlineSync.question('May I have your name? ');
}

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

let correctAnswers = 0;

for (let i = 0; i < 3; i += 1) {
  const firstRandomNumber = getRandomIntInclusive(1, 100);
  const secondRandomNumber = getRandomIntInclusive(1, 100);

  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);

  const myAnswer = getAnswer();
  const computerAnswer = greatCommonDivider(
    firstRandomNumber,
    secondRandomNumber,
  );

  if (myAnswer === `${computerAnswer}`) {
    correctAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(
      `"${myAnswer}" is wrong answer ;(. Correct answer was "${computerAnswer}". Let's try again, ${name}!`,
    );
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}
