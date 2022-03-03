import { fetchGet, fetchPost } from "./fetch-options";

export function setRandomElementPosition(element) {
    let screenWith = window.innerWidth,
        screenHeight = window.innerHeight;

    // start load
    fetchPost('/api/getRandomPosition', JSON.stringify({ screenWith: screenWith, screenHeight: screenHeight }))
        .then((res) => {
            //stop load
            let [x, y] = res;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        })
}


export function setElementRandomBackgroundColor(element) {
    // start load
    fetchGet('/api/getRandomColor')
        .then((res) => {
            //stop load
            element.style.backgroundColor = res[0];
        })
}  