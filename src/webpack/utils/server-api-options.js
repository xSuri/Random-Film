export function getScores() {
    return fetch('/api/getTopFiveScores')
        .then(response => response.json());
}


export function updateScore(newScore, playerName) {
    fetch('/api/putScore', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: playerName, score: newScore}),
    })
}

