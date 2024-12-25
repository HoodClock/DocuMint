const userModel = require('../models/User.model');
const questModel = require('../models/quest.model');
const questGenerate = require('../utils/questGenerator');

exports.generateWeeklyQuests = async (req, res) => {
    try {
        // Fetch all users
        const users = await userModel.find();

        // Generate the random quest
        const newQuestData = questGenerate();

        // Create the new Quest
        const newQuest = await questModel.create({
            title: newQuestData.title,
            description: newQuestData.description,
            points: newQuestData.points,
            type: newQuestData.type,
            status: 'pending',
            assignedAt: new Date(),
            deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days deadline
        });

        // assign each user a quests
        for (const user of users) {
            user.quests.push(newQuest._id);
            await user.save();
        }

        res.status(200).json({ message: 'Weekly quests generated and assigned successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.fetchAllWeeklyQuests = async (req, res) => {
    try {

        // fetch all quests 
        const quests = await questModel.find();

        // send to frontend
        res.status(200).json(quests);

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error fetching quests', error });
    }
}