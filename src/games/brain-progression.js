import { runBrainGame } from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

function makeData() {
  const firstProgressionNumber = getRandomIntInclusive(1, 10);
  const offset = getRandomIntInclusive(1, 10);
  const randomElementIndex = getRandomIntInclusive(0, 9);

  let question = '';
  let correctAnswer = null;

  for (let j = 0; j < 10; j += 1) {
    const progressionNumber = firstProgressionNumber + offset * j;

    if (j === randomElementIndex) {
      question = `${question}..`;
      correctAnswer = progressionNumber;
    } else {
      question = `${question}${progressionNumber}`;
    }

    question = `${question} `;
  }

  const data = { question, correctAnswer };

  return data;
}

export default function runBrainProgGame() {
  runBrainGame('What number is missing in the progression?', makeData);
}
