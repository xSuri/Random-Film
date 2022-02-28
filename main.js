const POSTION_INTERVAL_MILLS = [
  15000, 13000, 12000, 10000, 9000, 7500, 6500, 4500, 4000, 3000,
],
  BACKGROUND_COLOR_INTERVAL_MILLS = 5000,
  LEVEL_TIME_MILLS = 15000;

const circle = document.getElementById("circle"),
  points = document.getElementById("points"),
  level = document.getElementById("level"),
  dialogWindow = document.getElementById("dialogWindow"),
  dialogConfirmButton = document.getElementById("dialogConfirmButton");

let currentLevel = 0,
  currentPoints = 0,
  playerName = 'N/A',
  scores;


initScore();
getTopFiveScores();

document.getElementById("start").addEventListener('click', openDialogWindow);

document.getElementById("stop").addEventListener('click', () => {
  saveCurrentUserScore(currentPoints);
  getTopFiveScores();
  currentLevel = 10;
});

dialogConfirmButton.addEventListener('click', () => {
  playerName = document.getElementById("name").value;
  dialogWindow.close();
  startNewGame();
});

circle.addEventListener('click', () => {
  currentPoints += 1;
  points.innerText = currentPoints;

  setRandomElementBackgroundColor(circle);
  setRandomElementPosition(circle);
});



function openDialogWindow() {
  dialogWindow.showModal();
}

function startNewGame() {
  currentLevel = 0;
  currentPoints = 0;

  startLevelUpInterval();
}

function startLevelUpInterval() {
  if (currentLevel === 10) {
    return;
  }
  let backgroundColorElementInterval = setInterval(() => {
    setRandomElementBackgroundColor(circle);
  }, BACKGROUND_COLOR_INTERVAL_MILLS);

  let randomElementPositionInterval = setInterval(() => {
    setRandomElementPosition(circle);
  }, POSTION_INTERVAL_MILLS[currentLevel]);

  setTimeout(() => {
    clearInterval(backgroundColorElementInterval);
    clearInterval(randomElementPositionInterval);

    currentLevel += 1;
    level.innerText = currentLevel;

    startLevelUpInterval();
  }, LEVEL_TIME_MILLS);
}

function setRandomElementBackgroundColor(element) {
  element.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);

  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function setRandomElementPosition(element) {
  let screenWith = window.innerWidth,
    screenHeight = window.innerHeight,
    x = Math.floor(Math.random() * screenWith),
    y = Math.floor(Math.random() * screenHeight);

  element.style.left = x + 'px';
  element.style.top = y + 'px';
}


