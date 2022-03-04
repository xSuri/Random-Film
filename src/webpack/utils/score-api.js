import { get, put } from './fetch-options';

export function getScores() {
    return get('/api/getTopFiveScores');
}


export function updateScore(newScore, playerName) {
    put('/api/putScore', JSON.stringify({ name: playerName, score: newScore }));
}