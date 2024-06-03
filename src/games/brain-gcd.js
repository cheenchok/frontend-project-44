import { getRandomIntInclusive, runBrainGame } from '../index.js';

function greatCommonDivider(x, y) {
  if (y === 0) {
    return x;
  }
  return greatCommonDivider(y, x % y);
}
export default function runBrainGcdGame() {
  const firstRandomNumber = getRandomIntInclusive(1, 100);
  const secondRandomNumber = getRandomIntInclusive(1, 100);
  const computerAnswer = greatCommonDivider(
    firstRandomNumber,
    secondRandomNumber,
  );

  runBrainGame(
    'Find the greatest common divisor of given numbers.',
    `Question: ${firstRandomNumber} ${secondRandomNumber}`,
    computerAnswer,
  );
}
