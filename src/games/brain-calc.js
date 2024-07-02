import { runBrainGame, getRandomIntInclusive } from '../index.js';

function calcNumbers(a, b, c) {
  if (b === '+') {
    return a + c;
  }
  if (b === '-') {
    return a - c;
  }
  return a * c;
}

function getRandomSymbol() {
  const randomNumber = getRandomIntInclusive(1, 3);
  if (randomNumber === 1) {
    return '+';
  }
  if (randomNumber === 2) {
    return '-';
  }
  return '*';
}

export default function runBrainCalcGame() {
  const steps = [];

  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = getRandomIntInclusive(1, 100);
    const secondRandomNumber = getRandomIntInclusive(1, 100);
    const randomSymbol = getRandomSymbol();

    const step = {
      question: `Question: ${firstRandomNumber} ${randomSymbol} ${secondRandomNumber}`,
      correctAnswer: calcNumbers(
        firstRandomNumber,
        randomSymbol,
        secondRandomNumber,
      ),
    };
    steps.push(step);
  }

  runBrainGame('What is the result of the expression?', steps);
}
