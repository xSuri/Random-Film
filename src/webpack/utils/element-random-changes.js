import { get } from "./fetch-options";

export function setRandomElementPosition(element) {
    let screenWith = window.innerWidth,
        screenHeight = window.innerHeight;

    get(`/api/getRandomPosition/${screenWith}/${screenHeight}`)
        .then((res) => {
            let [x, y] = res;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        });
}


export function setElementRandomBackgroundColor(element) {
    get('/api/getRandomColor')
        .then((res) => {
            element.style.backgroundColor = res[0];
        });
}  