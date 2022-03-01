var randomColor = require('randomcolor');

export function getRandomColor() {
    return randomColor({ format: 'rgb' });
}
