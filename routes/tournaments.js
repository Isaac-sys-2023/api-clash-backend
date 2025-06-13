const express = require('express');
const router = express.Router();
const API = require('../utils/clashApi');

// GET /tournaments
router.get('/', async (req, res) => {
    const { name, limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/tournaments`, {
            params: { name, limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching tournaments'
        });
    }
});

// GET /tournaments/:tournamentsTag
router.get('/:tournamentsTag', async (req, res) => {
    const { tournamentTag } = req.params; //Parametros no obligatorios

    try {
        const response = await API.get(`/tournaments/%23${tournamentTag}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching tournament'
        });
    }
});

module.exports = router;