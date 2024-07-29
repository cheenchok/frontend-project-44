import readlineSync from 'readline-sync';

export default function runBrainGame(task, makeData) {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = makeData();

    console.log(`Question: ${question}`);

    const myAnswer = readlineSync.question('Your answer: ');

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
