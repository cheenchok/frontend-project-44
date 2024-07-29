import runBrainGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

function greatCommonDivider(x, y) {
  if (y === 0) {
    return x;
  }
  return greatCommonDivider(y, x % y);
}

function makeData() {
  const firstRandomNumber = getRandomIntInclusive(1, 100);
  const secondRandomNumber = getRandomIntInclusive(1, 100);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = greatCommonDivider(
    firstRandomNumber,
    secondRandomNumber,
  );
  const data = { question, correctAnswer };

  return data;
}

export default function runBrainGcdGame() {
  runBrainGame('Find the greatest common divisor of given numbers.', makeData);
}
