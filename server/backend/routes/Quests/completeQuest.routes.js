const express = require('express')
const router = express.Router();
const userModel = require('../../models/User.model');
const questModel = require('../../models/quest.model');
const auth_middleware = require('../../middleware/auth.middleware');


router.post('/:questId/complete', auth_middleware, async (req, res) => {
    try {

        const userId = req.user._id;
        const questId = req.params.questId;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find the specific quest in the user's quest array
        const userQuest = user.quests.find(
            (q) => q.questId.toString() === questId && q.status === 'in-progress'
        );


        if (!userQuest) {
            return res.status(400).json({ error: 'Quest not found or already completed/missed' });
        }

        // Mark the quest as completed and update timestamps
        userQuest.status = 'completed';
        userQuest.completedAt = new Date();

        // Fetch the quest details to add points
        const quest = await questModel.findById(questId);

        if (!quest) {
            return res.status(404).json({ error: 'Quest does not exist' });
        }

        // Update user's points and experience
        user.experiencePoints += quest.points;

        // Check for level-up condition (e.g., every 100 XP increases level)
        const levelUpThreshold = 100;
        while (user.experiencePoints >= levelUpThreshold) {
            user.experiencePoints -= levelUpThreshold;
            user.level += 1;
        }

        // Save the updated user
        await user.save();

        res.status(200).json({
            message: 'Quest completed successfully!',
            newLevel: user.level,
            remainingXP: user.experiencePoints,
        });


    } catch (error) {
        res.status(500).json({ error: 'Failed to complete quest' });
    }
})


module.exports = router;