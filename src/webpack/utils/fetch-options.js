export function fetchGet(url) {
    return fetch(url)
        .then(response => response.json());
}

export function fetchPut(url, body) {
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
}