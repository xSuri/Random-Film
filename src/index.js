import './style.css';
import { initScore, reloadScoreboard, saveCurrentUserScore } from './utils/score';
import {openDialogWindow, closeDialogWindow } from './utils/dialog'
import {startNewGame, stopCurrentGame} from './utils/start-game'
import { setRandomElementPosition, setRandomElementBackgroundColor } from './utils/element-random-changes';

const circle = document.getElementById('circle'),
    points = document.getElementById('points'),
    dialogConfirmButton = document.getElementById('dialogConfirmButton');

let currentLevel = 0,
    currentPoints = 0,
    playerName = 'N/A',
    scores;



scores = initScore(scores);
reloadScoreboard(scores);

document.getElementById('start').addEventListener('click', openDialogWindow);

document.getElementById('stop').addEventListener('click', () => {
  saveCurrentUserScore(currentPoints, scores, playerName);
  reloadScoreboard(scores);
  stopCurrentGame();
});

dialogConfirmButton.addEventListener('click', () => {
  playerName = document.getElementById('name').value;

  closeDialogWindow();
  
  [currentLevel, currentPoints] = startNewGame(currentLevel, currentPoints);
});

circle.addEventListener('click', () => {
  currentPoints += 1;
  points.innerText = currentPoints;

  setRandomElementBackgroundColor(circle);
  setRandomElementPosition(circle);
});

