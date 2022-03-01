import { getItem, setItem } from './local-storage-service';

const scoreboard = document.getElementById('scoreboard');

export function initScore() {
  const json = getItem('data') || '[]';
  return JSON.parse(json);
}

export function saveCurrentUserScore(newScore, scores, playerName) {

  let userScore = scores.filter(score => score.name === playerName)[0];
  if (typeof userScore === 'undefined' || userScore === null) {
    scores.push({ name: playerName });
    userScore = scores[scores.length - 1];
  }
  userScore.score = newScore;
  setItem('data', JSON.stringify(scores))
}

export function reloadScoreboard(scores) {
  scoreboard.innerText = '';

  const firstFive = getTopFiveScores(scores)

  firstFive.forEach(element => {
    scoreboard.innerText += `${element.name} : ${element.score} \n`;
  })
}

function getTopFiveScores(scores) {

  const sortedScores = scores.sort((a, b) => b.score - a.score);

  return sortedScores.slice(0, 5);
}