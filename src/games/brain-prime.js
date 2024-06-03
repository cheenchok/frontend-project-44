import { getRandomIntInclusive, runBrainGame } from '../index.js';

const primeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    const result = number % i;

    if (result === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default function runBrainPrimeGame() {
  const randomNumber = getRandomIntInclusive(1, 100);
  const computerAnswer = primeNumber(randomNumber);

  runBrainGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    `Question: ${randomNumber}`,
    computerAnswer,
  );
}
