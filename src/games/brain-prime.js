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
  const steps = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomIntInclusive(1, 100);

    const step = {
      question: `Question: ${randomNumber}`,
      correctAnswer: primeNumber(randomNumber),
    };
    steps.push(step);
  }

  runBrainGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    steps,
  );
}
