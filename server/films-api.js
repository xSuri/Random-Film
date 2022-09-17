const seq = require('sequelize');

const sequelize = new seq.Sequelize('database', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './films.sqlite'
})
const init = require('./models/films-model.js');
const Film = init(sequelize, seq.DataTypes);

const {randomFilm} = require('./utils/random-film');

function getRandomFilm(req, res) {
  getNumberFilms().then(numberOfFilms => randomFilm(numberOfFilms)).then(randomFilmId => findFilmById(randomFilmId).then(film => res.send({title: `${film.title}`})));
}

function getNumberFilms(){
  return Film.findAll({raw: true}).then(film => film.length);
}

function findFilmById([randomFilmId]){
  return Film.findOne({
    where: {
      id: randomFilmId,
    },
  }).then(film => film);
}

function getAllFilms(req, res){
  Film.findAll({raw: true}).then(film => res.send(film));
}

function postFilm(req, res) {
  let newFilm = req.body;

  Film.findOne({
    where: {
      title: `${newFilm.title}`,
    },
  })
    .then((res) => {
      if (res === null) {
        Film.create({
          title: `${newFilm.title}`,
        });
      }
    });

  res.status(201).send("Insert Record!");;
}

function deleteFilm(req, res) {
  let oldFilm = req.body;

  Film.destroy({
    where: {
      id: `${oldFilm.id}`,
    },
  });

  res.status(200).send("Film has been deleted!");;
}

sequelize.sync()
  .catch((err) => {
    throw err;
  });

module.exports.getRandomFilm = getRandomFilm;
module.exports.getAllFilms = getAllFilms;
module.exports.postFilm = postFilm;
module.exports.deleteFilm = deleteFilm;
