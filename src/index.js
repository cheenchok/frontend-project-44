import readlineSync from 'readline-sync';

function getAnswer() {
  return readlineSync.question('Your answer: ');
}

function getName() {
  return readlineSync.question('May I have your name? ');
}

function runBrainGame(task, question, computerAnswer) {
  console.log('Welcome to the Brain Games!');

  const name = getName();

  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    console.log(question);

    const myAnswer = getAnswer();

    if (myAnswer !== `${computerAnswer}`) {
      console.log(
        `'${myAnswer}' is wrong answer ;(. Correct answer was '${computerAnswer}'`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
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

export { getName, getRandomIntInclusive, getRandomSymbol, runBrainGame };
