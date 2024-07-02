import { runBrainGame, getRandomIntInclusive } from '../index.js';

function getQuestion(firstProgressionNumber, offset, randomElementIndex) {
  let questionString = 'Question:';

  for (let j = 0; j < 10; j += 1) {
    const progressionNumber = firstProgressionNumber + offset * j;

    if (j === randomElementIndex) {
      questionString = `${questionString} ..`;
    } else {
      questionString = `${questionString} ${progressionNumber}`;
    }
  }

  return questionString;
}

function calcFindNumber(firstProgressionNumber, offset, randomElementIndex) {
  return firstProgressionNumber + offset * randomElementIndex;
}

export default function runBrainProgGame() {
  const steps = [];

  for (let i = 0; i < 3; i += 1) {
    const firstProgressionNumber = getRandomIntInclusive(1, 10);
    const offset = getRandomIntInclusive(1, 10);
    const randomElementIndex = getRandomIntInclusive(0, 9);

    const step = {
      question: getQuestion(firstProgressionNumber, offset, randomElementIndex),
      correctAnswer: calcFindNumber(
        firstProgressionNumber,
        offset,
        randomElementIndex,
      ),
    };
    steps.push(step);
  }

  runBrainGame('What number is missing in the progression?', steps);
}
