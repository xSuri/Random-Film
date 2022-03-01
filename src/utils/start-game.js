import {setRandomElementBackgroundColor, setRandomElementPosition} from "./element-random-changes";

const POSTION_INTERVAL_MILLS = [
    15000, 13000, 12000, 10000, 9000, 7500, 6500, 4500, 4000, 3000,
],
    BACKGROUND_COLOR_INTERVAL_MILLS = 5000,
    LEVEL_TIME_MILLS = 15000;

const level = document.getElementById('level'),
    circle = document.getElementById('circle');

let continueGame;

export function startNewGame(currentLevel, currentPoints) {
    currentLevel = 0;
    currentPoints = 0;
    continueGame = true;

    startLevelUpInterval(currentLevel);
    return [currentLevel, currentPoints];
}

export function stopCurrentGame(){
    continueGame = false;
}

function startLevelUpInterval(currentLevel) {
    if (continueGame === false || currentLevel === 10) {
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

        startLevelUpInterval(currentLevel);
    }, LEVEL_TIME_MILLS);
}