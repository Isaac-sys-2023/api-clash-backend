const express = require('express');
const router = express.Router();

router.use('/clans', require('./clans'));

module.exports = router