const express = require('express')
const router = express.Router();
const userModel = require('../../models/User.model');
const questModel = require('../../models/quest.model');

router.post('/', async (req, res) => {
    try {
        const users = await userModel.find();

        const weeklyQuests = await questModel.find({ status: 'pending' });

        if (!weeklyQuests.length) {
            return res.status(404).json({ error: "No Weekly quests available" });
        }

        const assignmentPromises = users.map(async (user) => {
            const userAssignedQuests = weeklyQuests.map((quest) => ({
                questId: quest._id,
                status: 'in-progress',
                assignedAt: new Date(),
                isPremium: quest.type === 'premium' && user.isPremiumUser,
            }));

            // Add these quests to the user's quest array
            user.quests.push(...userAssignedQuests);

            // Save the user with updated quests
            await user.save();
        });

        await Promise.all(assignmentPromises);

        res.status(200).json({ message: 'Weekly quests assigned to all users!' });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
})


module.exports = router;