import './style.css';
import { openDialogWindow, closeDialogWindow } from './utils/dialog';
import { startNewGame, stopCurrentGame } from './utils/start-game';
import { setRandomElementPosition, setElementRandomBackgroundColor } from './utils/element-random-changes';
import { updateScore } from "./utils/score-api";
import { changeScoresToNewScore } from "./utils/score";

const circle = document.getElementById('circle'),
  points = document.getElementById('points'),
  dialogConfirmButton = document.getElementById('dialogConfirmButton');

let currentLevel = 0,
  currentPoints = 0,
  playerName = 'N/A';


changeScoresToNewScore();

document.getElementById('start').addEventListener('click', () => {
  openDialogWindow();
});

document.getElementById('stop').addEventListener('click', () => {
  updateScore(currentPoints, playerName);
  changeScoresToNewScore();

  stopCurrentGame();
});

dialogConfirmButton.addEventListener('click', () => {
  const inputPlayerName = document.getElementById('name').value;
  playerName = inputPlayerName;

  closeDialogWindow();

  const [newCurrentLevel, newCurrentPoints] = startNewGame(currentLevel, currentPoints);
  currentLevel = newCurrentLevel;
  currentPoints = newCurrentPoints;
});

circle.addEventListener('click', () => {
  currentPoints += 1;
  points.innerText = currentPoints;

  setElementRandomBackgroundColor(circle);
  setRandomElementPosition(circle);
});

