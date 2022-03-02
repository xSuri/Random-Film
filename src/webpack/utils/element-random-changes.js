import { getRandomColor } from './random-color';

export function setRandomElementPosition(element) {
    let screenWith = window.innerWidth,
        screenHeight = window.innerHeight,
        x = Math.floor(Math.random() * screenWith),
        y = Math.floor(Math.random() * screenHeight);

    element.style.left = x + 'px';
    element.style.top = y + 'px';
}


export function setElementRandomBackgroundColor(element) {
    element.style.backgroundColor = getRandomColor();
}  