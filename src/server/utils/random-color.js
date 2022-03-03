var randomColor = require('randomcolor');

function getRandomColor() {
    return [randomColor({ format: 'rgb' })];
}

exports.getRandomColor = getRandomColor;