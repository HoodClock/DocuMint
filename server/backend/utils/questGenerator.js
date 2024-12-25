const fs = require('fs');
const path = require('path');

function generateQuest() {
    const quests = JSON.parse(fs.readFileSync(path.join(__dirname, 'quest.json'), 'utf-8'));
    const randomQuest = quests[Math.floor(Math.random() * quests.length)];

    return {
        title: randomQuest.title.replace('X', Math.floor(Math.random() * 10 + 1)),
        description: randomQuest.description,
        points: randomQuest.points,
        type: randomQuest.type
    };
}

module.exports = generateQuest;
