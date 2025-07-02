const express = require('express');
const router = express.Router();
const API = require('../utils/clashApi');
const evolutionData = require('./evolutionData');

// GET /cards
router.get('/', async (req, res) => {
    const { limit, after, before } = req.query; //Parametros no obligatorios

    try {
        const response = await API.get(`/cards`, {
            params: { limit, after, before }
        });

        const enhancedCards = response.data.items.map(card => {
            const hasEvolution = card.maxEvolutionLevel !== undefined && card.maxEvolutionLevel > 0;
            
            if (hasEvolution) {
                const evolutionCycle = evolutionData.getEvolutionCycle(card.id);
                if (evolutionCycle) {
                    return {
                        ...card,
                        evolutionCycle: evolutionCycle
                    };
                }
            }
            return card;
        });

        res.json({
            ...response.data,
            items: enhancedCards
        });
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Error fetching cards'
        });
    }
});

module.exports = router;