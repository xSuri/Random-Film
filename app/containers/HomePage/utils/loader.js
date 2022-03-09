const loaderElement = document.getElementById('loading')

export function showLoader() {
    loaderElement.classList.add('is-active');
}

export function hideLoader() {
    loaderElement.classList.remove('is-active');
}