'use strict';
const JSONRemap = require('jsonremap');
module.exports = {
    parsearKeys : function(data){

        return JSONRemap(data, this._getModelPlaneta());
 
    },
    _getModelPlaneta: function(){
        return {
            "nombre": "name",
            "periodo_rotacion": "rotation_period",
            "periodo_orbital":"orbital_period",
            "diametro":"diameter",
            "clima":"climate",
            "gravedad":"gravity",
            "terreno":"terrain",
            "superficie_agua":"surface_water",
            "poblacion":"population",
           
            "residentes": {
                "getter": "residents",
                "defaultValue": [],
                "unwind": false,
            },
            "peliculas":{
                "getter": "films",
                "defaultValue": [],
                "unwind": false,
            },
            "vehiculos":{
                "getter": "vehicles",
                "defaultValue": [],
                "unwind": false,
            },
            "naves_estelares":{
                "getter": "starships",
                "defaultValue": [],
                "unwind": false,
            },
            "fecha_creado":"created",
            "fecha_actualizado":"edited",
            "detalle":"url"
        }
        
    }



}