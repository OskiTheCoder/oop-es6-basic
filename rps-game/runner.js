import { Game } from './game.js';

//instantiate game object
const game = new Game();

//get buttons
const btns = document.querySelectorAll('.btn');
//get win totals
const humanWinTotalEle = document.querySelector('.human-wins-tally');
const cpuWinTotalEle = document.querySelector('.cpu-wins-tally');

const updateWinTotalState = (winner) => {
  if (winner.toUpperCase() === 'CPU') {
    cpuWinTotalEle.innerText = `CPU wins: ${game.cpuWins}`;
  } else {
    humanWinTotalEle.innerText = `Human wins: ${game.humanWins}`;
  }
};

const updateState = (results) => {
  const { winner, message } = results;
  updateWinTotalState(winner);
};

const playRound = (humanMove) => {
  return updateState(game.playRound(humanMove));
};

//handle click events
const handleClick = (e) => {
  const humanMoveClassName = e.target.className;
  // goal of below is to take something like btn btn--rock -> ROCK
  const humanMove = humanMoveClassName.substring(9).toUpperCase();
  return playRound(humanMove);
};

//add click event listeners
for (const btn of btns) {
  btn.addEventListener('click', handleClick);
}
