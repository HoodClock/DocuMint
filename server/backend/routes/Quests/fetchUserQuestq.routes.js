const express = require('express')
const router = express.Router();
const auth_middleware = require('../../middleware/auth.middleware');
const questController = require('../../controllers/quest.controller');

router.get('/quests', auth_middleware, questController.fetchAllWeeklyQuests);

module.exports = router;