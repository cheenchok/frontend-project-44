#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getAnswer, getRandomIntInclusive } from '../src/index.js';

function getName() {
  return readlineSync.question('May I have your name? ');
}

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

let correctAnswers = 0;

for (let i = 0; i < 3; i += 1) {
  const firstProgressionNumber = getRandomIntInclusive(1, 10);
  const offset = getRandomIntInclusive(1, 10);
  const randomElementIndex = getRandomIntInclusive(0, 9);
  let findNumber;
  let questionString = 'Question:';

  for (let j = 0; j < 10; j += 1) {
    const progressionNumber = firstProgressionNumber + offset * j;

    if (j === randomElementIndex) {
      questionString = `${questionString} ..`;
      findNumber = progressionNumber;
    } else {
      questionString = `${questionString} ${progressionNumber}`;
    }
  }

  console.log(questionString);

  const myAnswer = getAnswer();
  const computerAnswer = findNumber;

  if (myAnswer === `${computerAnswer}`) {
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
