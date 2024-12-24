const express = require('express')
const router = express.Router();
const userModel = require('../../models/User.model');
const questModel = require('../../models/quest.model');
const auth_middleware = require('../../middleware/auth.middleware');

router.get('/', auth_middleware, async (req, res) => {
    try {
        const userId = req.user._id;

        const user = await userModel.findById(userId).populate({
            path: 'quests.questId',
            model: 'Quest'
        })

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Extract and return only the user's quests
        const userQuests = user.quests.map((assignedQuest) => ({
            title: assignedQuest.questId.title,
            description: assignedQuest.questId.description,
            points: assignedQuest.questId.points,
            type: assignedQuest.questId.type,
            status: assignedQuest.status,
            assignedAt: assignedQuest.assignedAt,
            completedAt: assignedQuest.completedAt || null,
        }));

        res.status(200).json({ quests: userQuests });

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user quests' });
    }
})

module.exports = router;