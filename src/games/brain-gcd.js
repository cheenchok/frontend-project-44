import { getRandomIntInclusive, runBrainGame } from '../index.js';

function greatCommonDivider(x, y) {
  if (y === 0) {
    return x;
  }
  return greatCommonDivider(y, x % y);
}

export default function runBrainGcdGame() {
  const steps = [];

  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = getRandomIntInclusive(1, 100);
    const secondRandomNumber = getRandomIntInclusive(1, 100);

    const step = {
      question: `Question: ${firstRandomNumber} ${secondRandomNumber}`,
      correctAnswer: greatCommonDivider(firstRandomNumber, secondRandomNumber),
    };
    steps.push(step);
  }

  runBrainGame('Find the greatest common divisor of given numbers.', steps);
}
