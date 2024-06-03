import {
  runBrainGame,
  getRandomIntInclusive,
  getRandomSymbol,
} from '../index.js';

function calcNumbers(a, b, c) {
  if (b === '+') {
    return a + c;
  }
  if (b === '-') {
    return a - c;
  }
  return a * c;
}

export default function runBrainCalcGame() {
  const firstRandomNumber = getRandomIntInclusive(1, 100);
  const secondRandomNumber = getRandomIntInclusive(1, 100);
  const randomSymbol = getRandomSymbol();
  const computerAnswer = calcNumbers(
    firstRandomNumber,
    randomSymbol,
    secondRandomNumber,
  );

  runBrainGame(
    'What is the result of the expression?',
    `Question: ${firstRandomNumber} ${randomSymbol} ${secondRandomNumber}`,
    computerAnswer,
  );
}
