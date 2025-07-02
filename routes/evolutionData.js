module.exports = {
    // Mapeo de ID de carta a ciclo de evolución. Informacion sacada manualmente desde https://clashroyale-fandom-com.translate.goog/wiki/Card_Evolution?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc
    evolutionCycles: {
        26000000: 2,  // Knight - ciclo 2
        26000001: 2,  // Archers - ciclo 2
        26000016: 1,  // Barbarians - ciclo 1
        26000035: 1,  // Royal Giant - ciclo 1
        26000043: 2,  // Firecracker - ciclo 2
        26000002: 2,  // Skeletons - ciclo 2
        26000005: 2,  // Mortar - ciclo 2
        26000038: 1,  // Royal Recruits - ciclo 1
        26000039: 2,  // Bats - ciclo 2
        26000015: 2,  // Ice Spirit - ciclo 2
        26000011: 2,  // Valkyrie - ciclo 2
        26000012: 2,  // Bomber - ciclo 2
        26000042: 2,  // Wall Breakers - ciclo 2
        26000006: 2,  // Tesla - ciclo 2
        26000033: 2,  // Zap - ciclo 2
        26000028: 2,  // Battle Ram - ciclo 2
        26000014: 1,  // Wizard - ciclo 1
        26000025: 2,  // Goblin Barrel - ciclo 2
        26000041: 1,  // Goblin Giant - ciclo 1
        26000053: 2,  // Goblin Drill - ciclo 2
        26000050: 1,  // Goblin Cage - ciclo 1
        26000007: 1,  // P.E.K.K.A - ciclo 1
        26000032: 1,  // Mega Knight - ciclo 1
        26000054: 1,  // Electro Dragon - ciclo 1
        26000013: 2,  // Musketeer - ciclo 2
        26000017: 2,  // Cannon - ciclo 2
        26000034: 2,  // Giant Snowball - ciclo 2
        26000036: 2,  // Dart Goblin - ciclo 2
        26000026: 2,  // Lumberjack - ciclo 2
        26000037: 2,  // Hunter - ciclo 2
        26000024: 1,  // Executioner - ciclo 1
        26000008: 1,  // Witch - ciclo 1
        26000040: 2   // Inferno Dragon - ciclo 2
    },
    
    // Función para obtener el ciclo de evolución
    getEvolutionCycle: function(cardId) {
        return this.evolutionCycles[cardId] || null;
    }
};