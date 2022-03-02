import './style.css';
import { openDialogWindow, closeDialogWindow } from './utils/dialog';
import { startNewGame, stopCurrentGame } from './utils/start-game';
import { setRandomElementPosition, setElementRandomBackgroundColor } from './utils/element-random-changes';
import { getScores, updateScore } from "./utils/server-api-options";
import { reloadScoreboard } from "./utils/score";

const circle = document.getElementById('circle'),
  points = document.getElementById('points'),
  dialogConfirmButton = document.getElementById('dialogConfirmButton');

let currentLevel = 0,
  currentPoints = 0,
  playerName = 'N/A',
  scores;



getScores().then(data => {
  scores = data;
  reloadScoreboard(scores);
});

document.getElementById('start').addEventListener('click', openDialogWindow);

document.getElementById('stop').addEventListener('click', () => {
  updateScore(currentPoints, playerName);

  getScores().then(data => {
    scores = data;
    reloadScoreboard(scores);
  });
  

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

