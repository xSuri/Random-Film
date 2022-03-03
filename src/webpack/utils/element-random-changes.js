import { fetchGet, fetchPost } from "./fetch-options";

export function setRandomElementPosition(element) {
    let screenWith = window.innerWidth,
        screenHeight = window.innerHeight;

    fetchPost('/api/getRandomPosition', JSON.stringify({ screenWith: screenWith, screenHeight: screenHeight }))
        .then((res) => {
            let [x, y] = res;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        });
}


export function setElementRandomBackgroundColor(element) {
    fetchGet('/api/getRandomColor')
        .then((res) => {
            element.style.backgroundColor = res[0];
        });
}  