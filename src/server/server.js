const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

let scores = [];


app.get('/api/getTopFiveScores', (req, res) => {
    res.send(getTopFiveScores())
})

app.put('/api/putScore', (req, res) => {
    let newUserScore = req.body;

    isUserScoreExists(newUserScore.score, newUserScore.name);

    res.status(200);
    res.send("Insert Record!");
})


app.listen(PORT, () => {
    console.log(`Server listen in port: ${PORT}`);
});


function isUserScoreExists(newScore, playerName) {
    let userScore = scores.filter(score => score.name === playerName)[0];
    if (typeof userScore === 'undefined' || userScore === null) {
        scores.push({ name: playerName });
        userScore = scores[scores.length - 1];
    }
    userScore.score = newScore;
}


function getTopFiveScores() {
    const sortedScores = scores.sort((a, b) => b.score - a.score);
    return sortedScores.slice(0, 5);
}