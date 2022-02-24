var POSTION_INTERVAL_MILLS = [
    15000, 13000, 12000, 10000, 9000, 7500, 6500, 4500, 4000, 3000,
  ],
  BACKGROUND_COLOR_INTERVAL_MILLS = 5000,
  LEVEL_TIME_MILLS = 15000;

var circle = document.getElementById("circle"),
  points = document.getElementById("points"),
  level = document.getElementById("level");

var currentLevel = 0,
  currentPoints = 0;

document.getElementById("start").addEventListener("click", () => {
  startNewGame();
});

document.getElementById("stop").addEventListener("click", () => {
  currentLevel = 10;
});

circle.addEventListener("click", () => {
  currentPoints += 1;
  points.innerText = currentPoints;

  setRandomElementBackgroundColor(circle);
  setRandomElementPosition(circle);
});

function startNewGame() {
  currentLevel = 0;
  currentPoints = 0;

  startLevelUpInterval();
}

function startLevelUpInterval() {
  if (currentLevel != 10) {
    var backgroundColorElementInterval = setInterval(() => {
      setRandomElementBackgroundColor(circle);
    }, BACKGROUND_COLOR_INTERVAL_MILLS);

    var randomElementPositionInterval = setInterval(() => {
      setRandomElementPosition(circle);
    }, POSTION_INTERVAL_MILLS[currentLevel]);

    setTimeout(() => {
      clearInterval(backgroundColorElementInterval);
      clearInterval(randomElementPositionInterval);

      currentLevel += 1;
      level.innerText = currentLevel + 1;

      startLevelUpInterval();
    }, LEVEL_TIME_MILLS);
  }
}

function setRandomElementBackgroundColor(element) {
  var elementColor = getRandomColor();
  element.style.backgroundColor = elementColor;
}

function getRandomColor() {
  var r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);

  return "rgb(" + r + "," + g + "," + b + ")";
}

function setRandomElementPosition(element) {
  var screenWith = window.innerWidth,
    screenHeight = window.innerHeight,
    x = Math.floor(Math.random() * screenWith),
    y = Math.floor(Math.random() * screenHeight);

  element.style.left = x + "px";
  element.style.top = y + "px";
}
