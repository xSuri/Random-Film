const scoreboard = document.getElementById('scoreboard');

function initScore() {
  const json = localStorage.getItem('data') || '[]';
  scores = JSON.parse(json);
}

function saveCurrentUserScore(newScore) {
  let userScore = scores.filter(score => score.name === playerName)[0];
  if (typeof userScore === 'undefined' || userScore === null) {
    scores.push({ name: playerName });
    userScore = scores[scores.length - 1];
  }
  userScore.score = newScore;
  localStorage.setItem('data', JSON.stringify(scores))
}

function getTopFiveScores() {
  scoreboard.innerText = '';

  const sortedScores = scores.sort((a, b) => {
    return b.score - a.score;
  });

  const firstFive = sortedScores.slice(0, 5);

  firstFive.forEach(element => {
    scoreboard.innerText += `${element.name} : ${element.score} \n`;
  })
}