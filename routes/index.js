const express = require('express');
const router = express.Router();

router.use('/clans', require('./clans'));
router.use('/players', require('./players'));

module.exports = router