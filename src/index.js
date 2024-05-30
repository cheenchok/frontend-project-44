import readlineSync from 'readline-sync';

function getName() {
  return readlineSync.question('May I have your name? ');
}

function getAnswer() {
  return readlineSync.question('Your answer: ');
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

export {
  getName, getAnswer, getRandomIntInclusive, getRandomSymbol,
};
