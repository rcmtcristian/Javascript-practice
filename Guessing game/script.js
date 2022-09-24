'use strict';

const teleprompter = document.querySelector('.number');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
/**
 * It returns a number that's either the value of the input field or 20
 * @returns The value of the input field.
 */
const maxMargin = _ => {
  const basedMargin = document.querySelector('.margin').value;
  let margin = Number(basedMargin);
  let returnedMargin = margin || 20;
  return returnedMargin;
};
let btn = document.querySelector('.check');
/* Generating a random number between 0 and the value of the input field. */
let number = Math.floor(Math.random() * maxMargin());
let scoreBoard = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let guess = Number(document.querySelector('.guess').value);
let score = 20;
let basedScore = 0;
highScore.textContent = basedScore;
scoreBoard.textContent = score;
// console.log(maxMargin());

const displayMessage = messages => {
  message.textContent = messages;
};

const colors = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const scoreBoardWidth = sWidth => {
  document.querySelector('.number').style.width = sWidth;
};

btn.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  maxMargin();
  console.log(guess, typeof guess);
  console.log(maxMargin());

  if (!guess) {
    displayMessage('Doesnt count');
  } else if (guess === number) {
    teleprompter.textContent = number;
    colors('#15803d');
    scoreBoardWidth('5em');
    displayMessage('You Got The Right Number!!!');
    /* Checking if the current score is greater than the previous score. If it is, it sets the previous
   score to the current score. */
    if (score > basedScore) {
      basedScore = score;
      highScore.textContent = basedScore;
    }
  } else if (guess !== number) {
    if (score > 0) {
      score--;
      scoreBoard.textContent = score;
      displayMessage(guess < number ? 'Its Too Low!!' : 'Its Too High!');
      teleprompter.textContent = '?';
      colors('#222222');
    } else {
      displayMessage('you have lost');
      colors('#a83946');
      teleprompter.textContent = '❌';
    }
  }

  again.addEventListener('click', () => {
    displayMessage('Start guessing..');
    colors('#222222');
    teleprompter.textContent = '?';
    score = 20;
    scoreBoard.textContent = score;
    number = Math.floor(Math.random() * maxMargin());
    document.querySelector('.guess').value = '';
    scoreBoardWidth('15rem');
  });
});
