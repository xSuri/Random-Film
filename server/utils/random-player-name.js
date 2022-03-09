const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

function getRandomPlayerName() {
    return [uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })];
}

exports.getRandomPlayerName = getRandomPlayerName;