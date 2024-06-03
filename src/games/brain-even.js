import { getRandomIntInclusive, runBrainGame } from '../index.js';

const evenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default function runBrainEvenGame() {
  const randomNumber = getRandomIntInclusive(1, 100);
  const computerAnswer = evenNumber(randomNumber);

  runBrainGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    `Question: ${randomNumber}`,
    computerAnswer,
  );
}
