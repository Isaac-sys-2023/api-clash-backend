const express = require('express');
const router = express.Router();

router.use('/clans', require('./clans'));
router.use('/players', require('./players'));
router.use('/cards', require('./cards'));
router.use('/tournaments', require('./tournaments'));
router.use('/locations', require('./locations'));
router.use('/challenges', require('./challenges'));
router.use('/leaderboards', require('./leaderboards'));
router.use('/globaltournaments', require('./globaltournaments'));

module.exports = router