import { get, post, del } from './fetch-options';

export function getAllFilms() {
  return get('/api/getAllFilms');
}

export function getRandomFilm() {
    return get('/api/getRandomFilm');
}

export function postNewFilmTitle(newTitle) {
    post('/api/postFilm', JSON.stringify({ title: newTitle}));
}

export function deleteTitle(titleId) {
  del('/api/deleteFilm', JSON.stringify({ id: titleId}));
}
