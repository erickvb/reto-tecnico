'use strict';

const personaMap = require('../models/persona');
const planetaMap = require('../models/planeta');
const peliculaMap = require('../models/pelicula');
const especieMap = require('../models/especie');
const vehiculoMap = require('../models/vehiculo');
const naveMap = require('../models/naveEstelar');

module.exports = {
    traducirEntidad: function(entidad, data){

        let rsParse ;

        switch (entidad) {
            case "people":
                rsParse = personaMap.parsearKeys(data);
                break;
            case "planets":
                rsParse = planetaMap.parsearKeys(data);
                break;
            case "films":
                rsParse = peliculaMap.parsearKeys(data);
                break;   
            case "species":
                rsParse = especieMap.parsearKeys(data);
                break;
            case "vehicles":
                rsParse = vehiculoMap.parsearKeys(data);
                 break;
            case "starships":
                 rsParse = naveMap.parsearKeys(data);
                 break;       
            default:
                break;
        }
        return rsParse;
    }

}