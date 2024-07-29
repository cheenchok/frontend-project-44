import runBrainGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const isEvenNumber = (number) => number % 2 === 0;

function makeData() {
  const expectedEvenNumber = getRandomIntInclusive(1, 100);

  const question = `${expectedEvenNumber}`;
  const correctAnswer = isEvenNumber(expectedEvenNumber) ? 'yes' : 'no';
  const data = { question, correctAnswer };

  return data;
}

export default function runBrainEvenGame() {
  runBrainGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    makeData,
  );
}
