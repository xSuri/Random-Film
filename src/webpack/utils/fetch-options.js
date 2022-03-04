import { showLoader, hideLoader } from './loader';

export function get(url) {
    showLoader();

    return fetch(url)
        .then((res) => {
            return res.json()
        })
        .finally(() => {
            hideLoader();
        });
}

export function put(url, body) {
    showLoader();

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
        .finally(() => {
            hideLoader();
        });
}