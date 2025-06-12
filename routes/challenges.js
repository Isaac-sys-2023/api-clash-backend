const express = require('express');
const router = express.Router();
const API = require('../utils/clashApi');

// GET /challenges
router.get('/', async (res) => {
    try {
        const response = await API.get(`/challenges`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching challenges'
        });
    }
});