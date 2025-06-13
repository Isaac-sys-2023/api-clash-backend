const express = require('express');
const router = express.Router();
const API = require('../utils/clashApi');

// GET /globaltournaments
router.get('/', async (req, res) => {
    try {
        const response = await API.get(`/globaltournaments`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching global tournaments'
        });
    }
});

module.exports = router;