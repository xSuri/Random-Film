const scoreboard = document.getElementById('scoreboard');


export function reloadScoreboard(scores) {
  scoreboard.innerText = '';

  scores.forEach(element => {
    scoreboard.innerText += `${element.name} : ${element.score} \n`;
  })
}

