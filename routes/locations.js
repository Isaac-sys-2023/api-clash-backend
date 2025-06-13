const express = require('express');
const router = express.Router();
const API = require('../utils/clashApi');

// GET /locations/:locationId/rankings/clans
router.get('/:locationId/rankings/clans', async (req, res) => {
    const { locationId } = req.params; //Parametro obligatorio
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/locations/${locationId}/rankings/clans`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching clan rankings for a specific location'
        });
    }
});

// GET /locations/:locationId/rankings/players
router.get('/:locationId/rankings/players', async (req, res) => {
    const { locationId } = req.params; //Parametro obligatorio
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/locations/${locationId}/rankings/players`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching players rankings for a specific location'
        });
    }
});

// GET /locations/:locationId/rankings/clanwars
router.get('/:locationId/rankings/clanwars', async (req, res) => {
    const { locationId } = req.params; //Parametro obligatorio
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/locations/${locationId}/rankings/clanwars`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching clanwars rankings for a specific location'
        });
    }
});

// GET /locations/global/pathoflegend/:seasonId/rankings/players
router.get('/global/pathoflegend/:seasonId/rankings/players', async (req, res) => {
    const { seasonId } = req.params; //Parametro obligatorio
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/locations/global/pathoflegend/${seasonId}/rankings/players`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching path of legends ranking for a specific season'
        });
    }
});

// GET /locations/global/seasons/:seasonId
router.get('/global/seasons/:seasonId', async (req, res) => {
    const { seasonId } = req.params; //Parametro obligatorio

    try {
        const response = await API.get(`/locations/global/seasons/${seasonId}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching global ranking for a specific season'
        });
    }
});

// GET /locations/global/seasons/:seasonId/rankings/players
router.get('/global/seasons/:seasonId/rankings/players', async (req, res) => {
    const { seasonId } = req.params; //Parametro obligatorio
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/locations/global/seasons/${seasonId}/rankings/players`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching a specific season'
        });
    }
});

// GET /locations/global/seasons
router.get('/global/seasons', async (req, res) => {
    try {
        const response = await API.get(`/locations/global/seasons`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching a lists top player league seasons.'
        });
    }
});

// GET /locations
router.get('/', async (req, res) => {
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/locations`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching a list of locations'
        });
    }
});

// GET /locations/global/seasonsV2
router.get('/global/seasonsV2', async (req, res) => {
    try {
        const response = await API.get(`/locations/global/seasonsV2`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching a lists league seasons with unique season IDs and season end times.'
        });
    }
});

// GET /locations/:locationId
router.get('/:locationId', async (req, res) => {
    const { locationId } = req.params; //Parametro obligatorio

    try {
        const response = await API.get(`/locations/${locationId}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching a get information about specific location'
        });
    }
});

// GET /locations/:locationId/pathoflegends/players
router.get('/:locationId/pathoflegend/players', async (req, res) => {
    const { locationId } = req.params; //Parametro obligatorio
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/locations/${locationId}/pathoflegend/players`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching a get player rankings in Path of Legend for a specific location'
        });
    }
});

// GET /locations/global/rankings/tournaments/:tournamentsTag
router.get('/global/rankings/tournaments/:tournamentsTag', async (req, res) => {
    const { tournamentsTag } = req.params; //Parametro obligatorio
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/locations/global/rankings/tournaments/${tournamentsTag}`, {
            params: { limit, after, before }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching a Tag of the tournament to retrieve'
        });
    }
});

module.exports = router;