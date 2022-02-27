reloadScoreboard();
function reloadScoreboard() {
  let scoreboard = document.getElementById("scoreboard"),
    usersScores = JSON.parse(localStorage.getItem('data'));
  const tableOfUsersScores = [];

  scoreboard.innerText = '';

  for (let i = 0; i < usersScores.length; i++) {
    tableOfUsersScores.push(JSON.parse(usersScores[i]));
  }

  const sortedTableOfUsersScores = tableOfUsersScores.sort((a, b) => {
    return b.score - a.score;
  });

  for (let i = 0; i <= 4; i++) {
    if (sortedTableOfUsersScores[i] === undefined) {
      break;
    }
    scoreboard.innerText += `${sortedTableOfUsersScores[i].name} : ${sortedTableOfUsersScores[i].score} \n`;
  }
}
