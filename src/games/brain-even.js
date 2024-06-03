import { getRandomIntInclusive, runBrainGame } from '../index.js';

const evenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default function runBrainEvenGame() {
  const randomNumber1 = getRandomIntInclusive(1, 100);
  const randomNumber2 = getRandomIntInclusive(1, 100);
  const randomNumber3 = getRandomIntInclusive(1, 100);
  const computerAnswer1 = evenNumber(randomNumber1);
  const computerAnswer2 = evenNumber(randomNumber2);
  const computerAnswer3 = evenNumber(randomNumber3);
  const question1 = `Question: ${randomNumber1}`;
  const question2 = `Question: ${randomNumber2}`;
  const question3 = `Question: ${randomNumber3}`;

  runBrainGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    [question1, question2, question3],
    [computerAnswer1, computerAnswer2, computerAnswer3],
  );
}
