import { showLoader, hideLoader } from './loader';

export function fetchGet(url) {
    showLoader();

    return fetch(url)
        .then((res) => {
            hideLoader();
            return res.json()
        });
}

export function fetchPut(url, body) {
    showLoader();

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
        .then(() => {
            hideLoader();
        })
        .catch((err) => {
            hideLoader();
            throw err;
        });
}

export function fetchPost(url, body) {
    showLoader();

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
        .then((res) => {
            hideLoader();
            return res.json()
        });
}
