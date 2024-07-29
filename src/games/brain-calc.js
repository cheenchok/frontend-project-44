import runBrainGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

function calcNumbers(a, b, c) {
  if (b === '+') {
    return a + c;
  }
  if (b === '-') {
    return a - c;
  }
  return a * c;
}

function getRandomOperator() {
  const randomNumber = getRandomIntInclusive(1, 3);
  if (randomNumber === 1) {
    return '+';
  }
  if (randomNumber === 2) {
    return '-';
  }
  return '*';
}

function makeData() {
  const firstRandomNumber = getRandomIntInclusive(1, 100);
  const secondRandomNumber = getRandomIntInclusive(1, 100);
  const randomOperator = getRandomOperator();

  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const correctAnswer = calcNumbers(
    firstRandomNumber,
    randomOperator,
    secondRandomNumber,
  );
  const data = { question, correctAnswer };

  return data;
}

export default function runBrainCalcGame() {
  runBrainGame('What is the result of the expression?', makeData);
}
