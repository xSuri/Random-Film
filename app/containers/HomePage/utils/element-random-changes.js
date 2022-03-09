import { get } from "./fetch-options";

export function getRandomElementPosition() {
    let screenWith = window.innerWidth,
        screenHeight = window.innerHeight;
    return get(`/api/getRandomPosition/${screenWith}/${screenHeight}`);
}


export function getElementRandomBackgroundColor() {
    return get('/api/getRandomColor');
}
