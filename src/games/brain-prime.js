import runBrainGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    const result = number % i;

    if (result === 0) {
      return false;
    }
  }
  return true;
};

function makeData() {
  const expectedBrainNumber = getRandomIntInclusive(1, 100);

  const question = `${expectedBrainNumber}`;
  const correctAnswer = isPrimeNumber(expectedBrainNumber) ? 'yes' : 'no';
  const data = { question, correctAnswer };

  return data;
}

export default function runBrainPrimeGame() {
  runBrainGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    makeData,
  );
}
