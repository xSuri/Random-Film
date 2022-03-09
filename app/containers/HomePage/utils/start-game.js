import React from 'react';
import { useState, useEffect } from 'react';

const POSTION_INTERVAL_MILLS = [
  15000, 13000, 12000, 10000, 9000, 7500, 6500, 4500, 4000, 3000,
],
  BACKGROUND_COLOR_INTERVAL_MILLS = 5000,
  LEVEL_TIME_MILLS = 15000;

let currentLevel = 0,
  currentPoints = 0,
  continueGame = true;

// export function startNewGame({ currentLevel = 0, currentPoints = 0, setRandomPosition = () => { }, setRandomBackgroundColor = () => { } }) {
//   currentLevel = 0;
//   currentPoints = 0;
//   continueGame = true;

//   startLevelUpInterval(currentLevel, setRandomPosition, setRandomBackgroundColor);
//   return [currentLevel, currentPoints];
// }

export function stopCurrentGame() {
  continueGame = false;
}

export function startLevelUpInterval({ setRandomPosition = () => { }, setRandomBackgroundColor = () => { }, saveLevel = () => { } }) {
  if (continueGame === false || currentLevel === 10) {
    return;
  }
  let backgroundColorElementInterval = setInterval(() => {
    setRandomBackgroundColor()
  }, BACKGROUND_COLOR_INTERVAL_MILLS);

  let randomElementPositionInterval = setInterval(() => {
    setRandomPosition()
  }, POSTION_INTERVAL_MILLS[currentLevel]);

  setTimeout(() => {
    clearInterval(backgroundColorElementInterval);
    clearInterval(randomElementPositionInterval);

    currentLevel += 1;
    saveLevel(currentLevel);

    startLevelUpInterval(currentLevel);
  }, LEVEL_TIME_MILLS);
}
