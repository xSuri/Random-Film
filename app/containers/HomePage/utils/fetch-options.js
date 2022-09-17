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

export function post(url, body) {
    showLoader();

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
        .finally(() => {
            hideLoader();
        });
}

export function del(url, body) {
  showLoader();

  fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      body: body,
  })
      .finally(() => {
          hideLoader();
      });
}
