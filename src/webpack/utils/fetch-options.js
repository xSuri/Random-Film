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

export function fetchPost(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
        .then(response => response.json());
}
