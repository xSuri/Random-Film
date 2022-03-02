import { getScores } from "./score-api";

const scoreboard = document.getElementById('scoreboard');

export function getNewScoreFromApi() {
  return getScores().then(data => {
    reloadScoreboard(data);
  });
}

function reloadScoreboard(scores) {
  scoreboard.innerText = '';

  scores.forEach(element => {
    scoreboard.innerText += `${element.name} : ${element.score} \n`;
  })
}