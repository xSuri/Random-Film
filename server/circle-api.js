const seq = require('sequelize');

const sequelize = new seq.Sequelize('database', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './scores.sqlite'
})
const init = require('./models/scores-model.js');
const Score = init(sequelize, seq.DataTypes);

const randomColor = require('./utils/random-color');
const randomPosition = require('./utils/random-position');
const randomPlayerName = require('./utils/random-player-name');


function getTopFiveScores(req, res) {
  Score.findAll({
    order: [
      ['points', 'DESC'],
    ],
    raw: true,
    limit: 5,
  })
    .then((score) => {
      res.send(score);
    });
}

function getRandomColor(req, res) {
  res.send(randomColor.getRandomColor());
}

function getRandomPlayerName(req, res) {
  res.send(randomPlayerName.getRandomPlayerName());
}

function getRandomPosition(req, res) {
  let screenInfo = req.params;
  res.send(randomPosition.getRandomPosition(screenInfo["width"], screenInfo["height"]));
}

function putScore(req, res) {
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
}

sequelize.sync()
  .catch((err) => {
    throw err;
  });

module.exports.getTopFiveScores = getTopFiveScores;
module.exports.getRandomColor = getRandomColor;
module.exports.getRandomPlayerName = getRandomPlayerName;
module.exports.getRandomPosition = getRandomPosition;
module.exports.putScore = putScore;
