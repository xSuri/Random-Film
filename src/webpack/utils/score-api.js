import { fetchGet, fetchPut } from './fetch-options';

export function getScores() {
    return fetchGet('/api/getTopFiveScores');
}


export function updateScore(newScore, playerName) {
    fetchPut('/api/putScore', JSON.stringify({ name: playerName, score: newScore }));
}