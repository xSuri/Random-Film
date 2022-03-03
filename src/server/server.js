const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const randomColor = require('./utils/random-color');
const randomPosition = require('./utils/random-position');
const randomPlayerName = require('./utils/random-player-name');

const PORT = 3000;

let scores = [];


app.get('/api/getTopFiveScores', (req, res) => {
    res.send(getTopFiveScores())
})

app.get('/api/getRandomColor', (req, res) => {
    res.send(randomColor.getRandomColor())
})

app.get('/api/getRandomPlayerName', (req, res) => {
    res.send(randomPlayerName.getRandomPlayerName())
})


app.post('/api/getRandomPosition', (req, res) => {
    let screenInfo = req.body;
    res.send(randomPosition.getRandomPosition(screenInfo.screenWith, screenInfo.screenHeight));
})


app.put('/api/putScore', (req, res) => {
    let newUserScore = req.body;

    let userExists = isUserScoreExists(newUserScore.name);

    if (userExists === false) {
        scores.push(newUserScore);
    }
    else if (userExists === true) {
        let userScore = searchUserScore(newUserScore.name);
        userScore.score = newUserScore.score;
    }


    res.status(200);
    res.send("Insert Record!");
})


app.listen(PORT, () => {
    console.log(`Server listen in port: ${PORT}`);
});


function isUserScoreExists(playerName) {
    let userScore = searchUserScore(playerName);
    if (typeof userScore === 'undefined' || userScore === null) {
        return false;
    }
    else {
        return true;
    }
}

function searchUserScore(playerName) {
    return scores.filter(score => score.name === playerName)[0];
}

function getTopFiveScores() {
    const sortedScores = scores.sort((a, b) => b.score - a.score);
    return sortedScores.slice(0, 5);
}
