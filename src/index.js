import readlineSync from 'readline-sync';

function getAnswer() {
  return readlineSync.question('Your answer: ');
}

function getName() {
  return readlineSync.question('May I have your name? ');
}

function runBrainGame(task, steps) {
  console.log('Welcome to the Brain Games!');

  const name = getName();

  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < step.length; i += 1) {
    const { question, correctAnswer } = step[i];

    console.log(question);

    const myAnswer = getAnswer();

    if (myAnswer !== String(correctAnswer)) {
      console.log(
        `'${myAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
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

export { getName, getRandomIntInclusive, runBrainGame };
