var POSTION_INTERVAL_MILLS = 10000;
var BACKGROUND_COLOR_INTERVAL_MILLS = 20000;

var circle = document.getElementById("circle");

setRandomElementBackgroundColor(circle);
setRandomElementPosition(circle);

setInterval(() => {
  setRandomElementBackgroundColor(circle);
}, BACKGROUND_COLOR_INTERVAL_MILLS);

setInterval(() => {
  setRandomElementPosition(circle);
}, POSTION_INTERVAL_MILLS);

function setRandomElementBackgroundColor(element) {
  var elementColor = getRandomColor();
  element.style.backgroundColor = elementColor;
}

function getRandomColor() {
  var r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);

  var circleColor = "rgb(" + r + "," + g + "," + b + ")";
  return circleColor;
}

function setRandomElementPosition(element) {
  var screenWith = window.innerWidth,
    screenHeight = window.innerHeight,
    x = Math.floor(Math.random() * screenWith),
    y = Math.floor(Math.random() * screenHeight);

  element.style.left = x + "px";
  element.style.top = y + "px";
}

