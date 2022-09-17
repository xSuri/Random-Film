const rn = require('random-number');

function randomFilm(maxFilms) {
  return [rn.generator({
    min:  1,
    max:  maxFilms,
    integer: true
  })()];
}

exports.randomFilm = randomFilm;
