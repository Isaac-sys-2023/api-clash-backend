const express = require('express');
const router = express.Router();
const API = require('../utils/clashApi');

// GET /clans/:clanTag/warlog
router.get('/:clanTag/warlog', async (req, res) => {
    const { clanTag } = req.params; //Parametro obligatorio
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/clans/%23${clanTag}/warlog`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching warlog'
        });
    }
});

// GET /clans
router.get('/', async (req, res) => {
    const { name, locationId, minMembers, maxMembers, minScore, limit, after, before } = req.query;

    try {
        const response = await API.get('/clans', {
            params: { name, locationId, minMembers, maxMembers, minScore, limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching clans'
        });
    }
});

module.exports = router;