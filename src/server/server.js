const express = require('express');
const app = express();

const seq = require('sequelize');
const sequelize = new seq.Sequelize('database', null, null, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './scores.sqlite'
})
const init = require('./models/scores-model.js');
const Score = init(sequelize, seq.DataTypes);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const randomColor = require('./utils/random-color');
const randomPosition = require('./utils/random-position');
const randomPlayerName = require('./utils/random-player-name');

const PORT = 3000;


app.get('/api/getTopFiveScores', (req, res) => {
    Score.findAll({
        order: [
            ['points', 'DESC'],
        ],
        raw: true,
        limit: 5,
    })
        .then((score) => {
            res.send(score);
        })
})

app.get('/api/getRandomColor', (req, res) => {
    res.send(randomColor.getRandomColor())
})

app.get('/api/getRandomPlayerName', (req, res) => {
    res.send(randomPlayerName.getRandomPlayerName())
})

app.get('/api/getRandomPosition/:width/:height', (req, res) => {
    let screenInfo = req.params;
    res.send(randomPosition.getRandomPosition(screenInfo["width"], screenInfo["height"]));
})


app.put('/api/putScore', (req, res) => {
    let newUserScore = req.body;

    Score.findOne({
        where: {
            name: `${newUserScore.name}`,
        },
    })
        .then((res) => {
            if (res === null) {
                Score.create({
                    name: `${newUserScore.name}`,
                    points: newUserScore.score
                });
            }
            else {
                res.set({
                    points: newUserScore.score
                });
                res.save();
            }
        });

    res.status(200);
    res.send("Insert Record!");
})


sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listen in port: ${PORT}`);
        });
    })
    .catch((err) => {
        throw err;
    })