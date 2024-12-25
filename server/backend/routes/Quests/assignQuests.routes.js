const express = require('express')
const router = express.Router();
const questController = require('../../controllers/quest.controller');

router.post('/generate-weekely-quests', questController.generateWeeklyQuests);


module.exports = router;