const axios = require('axios');

const triggerWeeklyQuests = async () => {
    try {

        const response = await axios.post('http://localhost:3000/api/quests/assign/generate-weekely-quests');
        console.log("Weekly Quests Triggered", response.data);

    } catch (error) {
        console.log("Error Occured While Triggering Weekly Quests", error.message);
    }
}

module.exports = triggerWeeklyQuests;