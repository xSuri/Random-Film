
function getRandomPosition(screenWith, screenHeight) {
    let x = Math.floor(Math.random() * screenWith),
        y = Math.floor(Math.random() * screenHeight);
    return [x, y];
}

exports.getRandomPosition = getRandomPosition;