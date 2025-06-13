const express = require('express');
const router = express.Router();
const API = require('../utils/clashApi');

// GET /leaderboards
router.get('/', async (req, res) => {
    try {
        const response = await API.get(`/leaderboards`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching leaderboards'
        });
    }
});

// GET /leaderboard/:leaderboardId
router.get('/', async (req, res) => {
    const { leaderboardId } = req.params; //Parametros obligatorios
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/leaderboard/${leaderboardId}`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching leaderboard'
        });
    }
});

module.exports = router;