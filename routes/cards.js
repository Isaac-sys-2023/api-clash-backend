const express = require('express');
const router = express.Router();
const API = require('../utils/clashApi');

// GET /cards
router.get('/', async (req, res) => {
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/clans`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching cards'
        });
    }
});

module.exports = router;