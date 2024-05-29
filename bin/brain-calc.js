#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  getAnswer,
  getRandomIntInclusive,
  getRandomSymbol,
} from '../src/index.js';

function calcNumbers(a, b, c) {
  if (b === '+') {
    return a + c;
  }
  if (b === '-') {
    return a - c;
  }
  return a * c;
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
  const randomSymbol = getRandomSymbol();

  console.log(
    `Question: ${firstRandomNumber} ${randomSymbol} ${secondRandomNumber}`,
  );

  const myAnswer = getAnswer();
  const computerAnswer = calcNumbers(
    firstRandomNumber,
    randomSymbol,
    secondRandomNumber,
  );

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
