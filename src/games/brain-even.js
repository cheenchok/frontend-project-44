import { getRandomIntInclusive, runBrainGame } from '../index.js';

const evenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default function runBrainEvenGame() {
  const steps = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomIntInclusive(1, 100);

    const step = {
      question: `Question: ${randomNumber}`,
      correctAnswer: evenNumber(randomNumber),
    };
    steps.push(step);
  }

  runBrainGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    steps,
  );
}
