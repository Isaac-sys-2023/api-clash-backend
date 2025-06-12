const express = require('express');
const router = express.Router();
const API = require('../utils/clashApi');

// GET /players/:playerTag
router.get('/:playerTag', async (req, res) => {
    const { playerTag } = req.params; //Parametro obligatorio

    try {
        const response = await API.get(`/players/%23${playerTag}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching player'
        });
    }
});

// GET /players/:playerTag/upcomingchests
router.get('/:playerTag/upcomingchests', async (req, res) => {
    const { playerTag } = req.params; //Parametro obligatorio

    try {
        const response = await API.get(`/players/%23${playerTag}/upcomingchests`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || "Error fetching player's upcoming chests"
        });
    }
});

// GET /players/:playerTag/battlelog
router.get('/:playerTag/battlelog', async (req, res) => {
    const { playerTag } = req.params; //Parametro obligatorio

    try {
        const response = await API.get(`/players/%23${playerTag}/battlelog`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || "Error fetching recents battles"
        });
    }
});